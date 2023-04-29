import React from "react";
import { CheckIcon, CloseIcon, SearchIcon } from "../../assets/svg";
import styles from "./currencyListModal.module.css";

const CurrencySearchModal = React.memo(
  ({ currentToken, handleCurrencySelect, handleClose }) => {
    return (
      <div className={`${styles.neo__currency_list_modal_container}`}>
        <div className={styles.neo__currency_opacity_bg}></div>
        <div className={styles.neo__currency_list_modal_container_content}>
          <div
            className={styles.neo__currency_list_close_icon}
            onClick={handleClose}
          >
            <CloseIcon fill="#DCDCEC" />
          </div>
          <div className={styles.neo__currency_search_container}>
            <SearchIcon />
            <input
              placeholder="Search..."
              className={styles.neo__currency_input}
            />
          </div>
          <div className={styles.neo__currency_list}>
            {cryptoArray.map((eachCrypto) => {
              return (
                <div
                  key={eachCrypto.id}
                  className={styles.neo__currency_list_item}
                  onClick={() => handleCurrencySelect(eachCrypto)}
                >
                  <img
                    src={eachCrypto.icon}
                    width={24}
                    height={24}
                    alt={eachCrypto.name}
                  />
                  <span className={styles.neo__currency_name}>
                    {eachCrypto.name}
                  </span>
                  {currentToken?.name == eachCrypto.name && <CheckIcon />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

export { CurrencySearchModal };

const cryptoArray = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    symbol: "BNB",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    symbol: "DOGE",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
  },
  {
    id: "ripple",
    name: "XRP",
    symbol: "XRP",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
  },
  {
    id: "polkadot",
    name: "Polkadot",
    symbol: "DOT",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",
  },
  {
    id: "uniswap",
    name: "Uniswap",
    symbol: "UNI",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",
  },
  {
    id: "litecoin",
    name: "Litecoin",
    symbol: "LTC",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
  },
  {
    id: "chainlink",
    name: "Chainlink",
    symbol: "LINK",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
  },
  {
    id: "bitcoin-cash",
    name: "Bitcoin Cash",
    symbol: "BCH",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png",
  },
  {
    id: "matic-network",
    name: "Polygon",
    symbol: "MATIC",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
  },
  {
    id: "stellar",
    name: "Stellar",
    symbol: "XLM",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/512.png",
  },
  {
    id: "vechain",
    name: "VeChain",
    symbol: "VET",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3077.png",
  },
  {
    id: "cosmos",
    name: "Cosmos",
    symbol: "ATOM",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png",
  },
];
