const { connectionHandler, messageHandler } = require("../controllers/quiz");

const router = async (ws, req) => {
  connectionHandler(ws, req);

  ws.on("message", (msg) => {
    messageHandler(ws, req, msg);
  });

  ws.on("close", () => {
    console.log("WebSocket was closed");
  });
};

module.exports = router;
