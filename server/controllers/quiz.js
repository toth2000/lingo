const {
  validationConnectKeys,
  validationMessageKeys,
} = require("../Keys/quiz");
const { QUIZ_CONFIG } = require("../config/quiz");
const Question = require("../models/Question");
const { validateKeys } = require("../utils/mongoose");
const { pickQuestion, calculateScore } = require("../utils/quiz");
const { sessionExpired } = require("../utils/session");

const connectionHandler = async (ws, req) => {
  if (!validateKeys(validationConnectKeys, req.query)) {
    ws.send(
      JSON.stringify({
        type: "error",
        message: "Required missing",
        error: "query parameters required",
      })
    );
    ws.close();
    return;
  }

  const { level, lang } = req.query;

  const easy = [];
  const medium = [];
  const hard = [];

  const question = await Question.find({ lang: lang, lvl: level });

  if (question.length === 0) {
    const messageData = JSON.stringify({
      type: "error",
      message: "Question Does not exists for the provided paramters",
      error: "Invalid Paramters",
    });
    ws.send(messageData);
    ws.close();
  }

  question.forEach((item) => {
    const ques = {
      id: item._id,
      ques: item.ques,
      opt: item.opt,
      ans: item.ans,
    };
    switch (item.diff) {
      case 0:
        easy.push(ques);
        break;
      case 1:
        medium.push(ques);
        break;
      case 2:
        hard.push(ques);
        break;
    }
  });

  const currentQuestion = medium.pop();

  sessionData = {
    level: level,
    questionCount: 1,
    currentQuestion: {
      id: currentQuestion.id,
      ans: currentQuestion.ans,
      diff: 1,
    },
    question: {
      easy: easy,
      medium: medium,
      hard: hard,
    },
    score: 0,
  };

  req.session.score = JSON.stringify(sessionData);
  await req.session.save();

  ws.send(
    JSON.stringify({
      id: currentQuestion.id,
      ques: currentQuestion.ques,
      opt: currentQuestion.opt,
      score: sessionData.score,
    })
  );
};

const messageHandler = async (ws, req, message) => {
  //   Retrieving session data
  const session = JSON.parse(req.session.score);

  //   Checking if Quiz time is over
  if (sessionExpired(req.session.cookie)) {
    ws.send(
      JSON.stringify({
        type: "end",
        message: "Time over",
        score: session.score,
      })
    );
    req.session.destroy();
    ws.close();
    return;
  }

  //   Parsing user message
  const data = JSON.parse(message);

  try {
    //   Data Validation
    if (!validateKeys(validationMessageKeys, data)) {
      ws.send(
        JSON.stringify({
          type: "error",
          message: "Required missing",
          error: "query parameters required",
        })
      );
      return;
    }

    //   Check answer and get new score
    const updatedScore = calculateScore(
      session.score,
      session.currentQuestion,
      data
    );

    //  Validation Question ID match fail
    if (updatedScore === null) {
      ws.send(
        JSON.stringify({
          type: "error",
          message: "Incorrect Question Id passed",
          error: "Invalid question id",
        })
      );
      return;
    }

    //   Did user answer correctly
    const isAnswerCorrect = updatedScore > session.score ? true : false;

    //   Checking if total required question is attempted
    if (session.questionCount === QUIZ_CONFIG.total_question) {
      ws.send(
        JSON.stringify({
          type: "end",
          message: "Quiz Complete",
          score: updatedScore,
        })
      );
      ws.close();
      return;
    }

    //   Pick next question
    const currentQuestion = pickQuestion(
      session.question.easy,
      session.question.medium,
      session.question.hard,
      isAnswerCorrect,
      session.currentQuestion.diff
    );

    //   All question answered
    if (currentQuestion === null) {
      ws.send(
        JSON.stringify({
          type: "end",
          message: "All questions attempted",
          score: updatedScore,
        })
      );
      ws.close();
    }

    //   Update session data
    req.session.score = JSON.stringify({
      ...session,
      questionCount: session.questionCount + 1,
      currentQuestion: {
        id: currentQuestion.id,
        diff: currentQuestion.diff,
        ans: currentQuestion.ans,
      },
      score: updatedScore,
    });
    await req.session.save();

    //   Send response
    ws.send(
      JSON.stringify({
        type: "question",
        id: currentQuestion.id,
        ques: currentQuestion.ques,
        opt: currentQuestion.opt,
        score: updatedScore,
      })
    );
  } catch (error) {
    console.error("Error in messageHandler: ", error);
    ws.send(
      JSON.stringify({
        type: "error",
        message: "An error occured, please try again later",
        error: error,
      })
    );
  }
};

const closeHandler = (ws, req) => {};

const errorHandler = (ws, req) => {};
module.exports = {
  connectionHandler,
  messageHandler,
  closeHandler,
  errorHandler,
};
