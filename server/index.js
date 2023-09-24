const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const questionRoute = require("./routes/question");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 9091;
const MONGOOSE_URL = process.env.MONGOOSE_URL;

// All Route Middleware
app.use(cors());
app.use(express.json());

// Route Middleware
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/question", questionRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(MONGOOSE_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  })
  .catch((error) =>
    console.error("Error establishing connection with database: ", error)
  );
