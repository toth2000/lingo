const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const http = require("http");
const WebSocket = require("express-ws");

const sessionSettings = require("./session");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const questionRoute = require("./routes/question");
const languageRoute = require("./routes/language");
const quizRoute = require("./routes/quiz");

const app = express();
const server = http.createServer(app);
WebSocket(app, server);
dotenv.config();

const PORT = process.env.PORT || 9091;
const MONGOOSE_URL = process.env.MONGOOSE_URL;

// All Route Middleware
app.use(cors());
app.use(express.json());
app.set("trust proxy", 1);
app.use(session(sessionSettings));

app.ws("/", quizRoute);

// Route Middleware
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/question", questionRoute);
app.use("/language", languageRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(MONGOOSE_URL)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`The Lingo app server is listening on port ${PORT}`);
    });
  })
  .catch((error) =>
    console.error("Error establishing connection with database: ", error)
  );
