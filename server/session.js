const MongoStore = require("connect-mongo");
const dotenv = require("dotenv");
const { QUIZ_CONFIG } = require("./config/quiz");

dotenv.config();

const MONGOOSE_URL = process.env.MONGOOSE_URL;
const SESSION_SECRET = process.env.SESSION_SECRET;

const sessionStore = MongoStore.create({
  mongoUrl: MONGOOSE_URL,
  autoRemove: "interval",
  collectionName: "sessions",
  autoRemoveInterval: 10, // 10 minutes
  touchAfter: 1, // write Updated session in DB after, in seconds
  ttl: (QUIZ_CONFIG.quiz_time + 1) * 60, // expire in seconds
});

const sessionSettings = {
  name: "quiz",
  secret: SESSION_SECRET,
  cookie: {
    maxAge: QUIZ_CONFIG.quiz_time * 60000, // Set cookie life, in milliseconds
    sameSite: "none",
  },
  store: sessionStore,
  resave: false, // Force save to DB if session not modified when true
  saveUninitialized: false, // Save unintializied session to DB when true
};

module.exports = sessionSettings;
