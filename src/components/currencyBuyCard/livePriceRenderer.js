import { useState } from "react";
import { useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { currencyFormatter } from "../../utils";
import styles from "./currencyBuyCard.module.css";

const LivePriceRenderer = ({
  currentTokenSymbol,
  currentPrice,
  setCurrentPrice,
}) => {
  const [socketUrl, setSocketUrl] = useState(
    `wss://stream.binance.com:9443/ws/${currentTokenSymbol.toLowerCase()}usdt@trade`
  );

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    setSocketUrl(
      `wss://stream.binance.com:9443/ws/${currentTokenSymbol.toLowerCase()}usdt@trade`
    );
  }, [currentTokenSymbol]);

  useEffect(() => {
    if (lastMessage !== null) {
      const { data } = lastMessage;
      setCurrentPrice(parseFloat((JSON.parse(data).p * 80).toFixed(2)));
    }
  }, [lastMessage]);

  return (
    <span className={styles.neofi__currency_card_current_amount}>
      {" "}
      {currencyFormatter(currentPrice)}
    </span>
  );
};

export { LivePriceRenderer };
