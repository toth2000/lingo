const {
  connectionHandler,
  messageHandler,
  closeHandler,
  errorHandler,
} = require("../controllers/quiz");

const router = async (ws, req) => {
  connectionHandler(ws, req);

  ws.on("message", (msg) => {
    messageHandler(ws, req, msg);
  });

  ws.on("close", () => {
    closeHandler(ws, req);
  });

  ws.on("error", () => {
    errorHandler(ws, req);
  });
};

module.exports = router;
