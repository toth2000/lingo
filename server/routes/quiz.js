const {
  connectionHandler,
  messageHandler,
  closeHandler,
} = require("../controllers/quiz");

const router = async (ws, req) => {
  connectionHandler(ws, req);

  ws.on("message", (msg) => {
    messageHandler(ws, req, msg);
  });

  ws.on("close", closeHandler);
};

module.exports = router;
