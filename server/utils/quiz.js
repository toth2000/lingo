const { QUIZ_CONFIG } = require("../config/quiz");
const Statistic = require("../models/Statistic");

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
    switch (currentQuestion.diff) {
      case 0:
        score = score + QUIZ_CONFIG.correct_marks.easy;
        break;
      case 1:
        score = score + QUIZ_CONFIG.correct_marks.medium;
        break;
      case 2:
        score = score + QUIZ_CONFIG.correct_marks.hard;
        break;
    }
  } else {
    score = score - QUIZ_CONFIG.negative_marks;
  }

  return score;
};

const calculateBonusScore = (quizEndTime) => {
  const currentTime = new Date().getTime();
  const endTime = new Date(quizEndTime).getTime();
  const diff = Math.abs(currentTime - endTime);

  const bonus = Math.floor(diff / 60000) * QUIZ_CONFIG.bonus_marks;

  return bonus;
};

const updateUserStatistics = async (userId, lvl, language, totalScore) => {
  try {
    const levelToUpdate = lvl - 1;
    const stats = await Statistic.findById(userId);
    const { level, points } = stats;
    let finalScore = totalScore;
    let overallpointIncrement = totalScore;

    if (level[language] && level[language][levelToUpdate]) {
      const levelData = level[language][levelToUpdate];
      // Level is completed
      if (levelData?.complete && levelData?.complete === true) {
        const prevScore = levelData.score;

        // Update score if current is better
        if (totalScore < prevScore) {
          finalScore = prevScore;
          overallpointIncrement = 0;
        } else {
          // Overall point updated to the difference between current and previous
          overallpointIncrement = Math.abs(totalScore - prevScore);
        }
      }
    }

    const updatedLevel = {
      ...level,
      [language]: {
        ...level[language],
        [levelToUpdate]: { score: finalScore, complete: true },
      },
    };

    await Statistic.findByIdAndUpdate(userId, {
      level: updatedLevel,
      points: points + overallpointIncrement,
    });
  } catch (error) {
    console.error("Error updating User statistics: ", error);
  }
};

module.exports = {
  pickQuestion,
  calculateScore,
  calculateBonusScore,
  updateUserStatistics,
};
