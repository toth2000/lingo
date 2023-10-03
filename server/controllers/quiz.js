const {
  validationConnectKeys,
  validationMessageKeys,
} = require("../keys/quiz");
const { QUIZ_CONFIG } = require("../config/quiz");
const Question = require("../models/Question");
const { jwtCheckExpiry, jwtVerifyAccessToken } = require("../utils/auth");
const { validateKeys } = require("../utils/mongoose");
const {
  pickQuestion,
  calculateScore,
  calculateBonusScore,
  updateUserStatistics,
} = require("../utils/quiz");
const { sessionExpired } = require("../utils/session");
const { shuffle } = require("../utils/array");

const connectionHandler = async (ws, req) => {
  if (!validateKeys(validationConnectKeys, req.query)) {
    ws.send(
      JSON.stringify({
        type: "error",
        message: "Required missing",
        error: "query parameters and access token are required",
      })
    );
    ws.close();
    return;
  }

  const { level, lang, token } = req.query;
  // Checking Access Token Validity
  const decodedToken = jwtVerifyAccessToken(token);
  const tokenExpired = jwtCheckExpiry(decodedToken);
  if (tokenExpired === true) {
    ws.send(
      JSON.stringify({
        type: "error",
        accessTokenExpired: true,
        message: "An error occured, Please Try again",
        error: "Access Token Expired",
      })
    );
    ws.close();
    return;
  }

  const easy = [];
  const medium = [];
  const hard = [];

  const questionList = await Question.find({ lang: lang, lvl: level });

  if (questionList.length === 0) {
    const messageData = JSON.stringify({
      type: "error",
      message: "Question Does not exists for the provided paramters",
      error: "Invalid Paramters",
    });
    ws.send(messageData);
    ws.close();
    return;
  }

  const question = shuffle(questionList);

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

  const currentQuestion = { ...medium.pop(), diff: 1 };

  sessionData = {
    userId: decodedToken.userId,
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
      type: "start",
      id: currentQuestion.id,
      diff: currentQuestion.diff,
      ques: currentQuestion.ques,
      opt: currentQuestion.opt,
      score: sessionData.score,
    })
  );

  const timer = setInterval(() => {
    try {
      const session = JSON.parse(req.session.score);
      ws.send(
        JSON.stringify({
          type: "end",
          message: "Time over",
          score: session.score,
          bonus: 0,
        })
      );
      ws.close();
      updateUserStatistics(session.userId, level, lang, session.score);
    } catch {}
  }, QUIZ_CONFIG.quiz_time * 60000);
  req.timerId = timer;
};

const messageHandler = async (ws, req, message) => {
  try {
    //   Retrieving session data
    const session = JSON.parse(req.session.score);

    const { level, lang } = req.query;

    //   Checking if Quiz time is over
    if (sessionExpired(req.session.cookie)) {
      await updateUserStatistics(session.userId, level, lang, session.score);
      ws.send(
        JSON.stringify({
          type: "end",
          message: "Time over",
          score: session.score,
          bonus: 0,
        })
      );
      await req.session.destroy();
      ws.close();
      return;
    }

    //   Parsing user message
    const data = JSON.parse(message);

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
      const bonus = calculateBonusScore(req.session.cookie.expires);

      await updateUserStatistics(
        session.userId,
        level,
        lang,
        updatedScore + bonus
      );
      ws.send(
        JSON.stringify({
          type: "end",
          message: "Quiz Complete",
          score: updatedScore,
          bonus: bonus,
        })
      );
      await req.session.destroy();
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
      const bonus = calculateBonusScore(req.session.cookie.expires);

      await updateUserStatistics(
        session.userId,
        level,
        lang,
        updatedScore + bonus
      );

      ws.send(
        JSON.stringify({
          type: "end",
          message: "All questions attempted",
          score: updatedScore,
          bonus: bonus,
        })
      );
      await req.session.destroy();
      ws.close();
      return;
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
        type: "ques",
        id: currentQuestion.id,
        diff: currentQuestion.diff,
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

const closeHandler = async (ws, req) => {
  try {
    console.log("WebSocket was closed");
    clearInterval(req.timerId);
    await req.session.destroy();
  } catch (error) {
    console.error("Error in close quiz handler", error);
  }
};

const errorHandler = (ws, req) => {
  console.error("Error in Websocket: ", error);
  ws.send(
    JSON.stringify({
      type: "error",
      message: "An error occured, please try again later",
      error: error,
    })
  );
};
module.exports = {
  connectionHandler,
  messageHandler,
  closeHandler,
  errorHandler,
};
