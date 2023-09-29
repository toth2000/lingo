import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../constant/routes";
import { getLocalStorageItem } from "../utils/localStorage";

export const useWebSocket = (socketUrl, onMessage) => {
  const wsClient = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!socketUrl) return;

    const localData = getLocalStorageItem("auth");

    if (localData === null || !localData.accessToken) {
      alert("An error occured, please try again later.");
      navigate(HOME_ROUTE);
      return;
    }

    try {
      const ws = new WebSocket(`${socketUrl}&token=${localData.accessToken}`);

      ws.onopen = () => {
        console.log("Socket Connected");
        wsClient.current = ws;
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        onMessage(data);
      };

      ws.onerror = (error) => {
        wsClient.current = null;
        alert("An error Occured, please try again later");
        console.error("Websocket Error: ", error);
        navigate(HOME_ROUTE);
      };

      ws.onclose = () => {
        wsClient.current = null;
        console.log("Socket Connection Closed");
      };
    } catch (error) {
      wsClient.current = null;
      alert("An error occured, please try again later.");
      console.error("Error in websocket: ", error);
      navigate(HOME_ROUTE);
    }
    return () => {
      if (wsClient.current !== null) {
        wsClient.current.close();
        wsClient.current = null;
      }
    };
  }, []);

  return wsClient;
};
