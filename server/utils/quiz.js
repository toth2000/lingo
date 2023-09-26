const { QUIZ_CONFIG } = require("../config/quiz");

const pickQuestion = (
  easyList,
  mediumList,
  hardList,
  isPrevCorrect,
  lastQuestionDiff
) => {
  let diff = 0;

  //Last Question Answered correctly
  if (isPrevCorrect === true) {
    // Checking if last question already hard
    diff = lastQuestionDiff === 2 ? 2 : lastQuestionDiff + 1;
  } else {
    // Checking if last question is already easy
    diff = lastQuestionDiff === 0 ? 0 : lastQuestionDiff - 1;
  }

  switch (diff) {
    case 0:
      if (easyList.length > 1) {
        return { ...easyList.pop(), diff: 0 };
      }
    case 1:
      if (mediumList.length > 1) {
        return { ...mediumList.pop(), diff: 1 };
      }

    case 2:
      if (hardList.length > 1) {
        return { ...hardList.pop(), diff: 2 };
      }
  }

  switch (diff) {
    case 1:
      if (mediumList.length > 1) {
        return { ...mediumList.pop(), diff: 1 };
      }
    case 0:
      if (easyList.length > 1) {
        return { ...easyList.pop(), diff: 0 };
      }
  }

  return null;
};

const calculateScore = (currentScore, currentQuestion, response) => {
  if (currentQuestion.id !== response.id) {
    return null;
  }

  let score = currentScore;

  if (currentQuestion.ans === response.ans) {
    score = score + QUIZ_CONFIG.correct_marks;
  } else {
    score = score - QUIZ_CONFIG.negative_marks;
  }

  return score;
};

module.exports = { pickQuestion, calculateScore };
