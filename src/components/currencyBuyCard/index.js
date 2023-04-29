import React, { useCallback, useState } from "react";
import { CurrencyCardBg, SolidDown } from "../../assets/svg";
import styles from "./currencyBuyCard.module.css";
import { Button } from "../button";
import { currencyFormatter } from "../../utils";
import { CurrencySearchModal } from "../currencyListModal";
import { LivePriceRenderer, useLivePrice } from "./livePriceRenderer";

const CurrencyCard = () => {
  const [currentToken, setCurrentToken] = useState(null);
  const [showCurrencyListModal, setShowCurrencyListModal] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [investAmount, setInvestAmount] = useState(0);
  const [estimateCoins, setEstimateCoins] = useState(0);

  const handleDropDownClick = useCallback(() => {
    setShowCurrencyListModal(true);
  }, []);

  const handleCurrencySelect = useCallback((data) => {
    setShowCurrencyListModal(false);
    setCurrentToken(data);
  }, []);

  const handleClose = useCallback(() => {
    setShowCurrencyListModal(false);
  }, []);

  const handleEstimateAmount = (e) => {
    const { value } = e.target;
    setEstimateCoins(value / currentPrice);
  };

  return (
    <div className={styles.neofi__currency_card_container}>
      <div
        style={{ position: "absolute" }}
        className={styles.neofi__currency_card_bg}
      >
        {currentToken && (
          <div className={styles.neofi__currency_card_current_image_container}>
            <img
              src={currentToken.icon}
              width={48}
              height={48}
              alt={currentToken.name}
            />
          </div>
        )}
        <CurrencyCardBg />
      </div>

      <div className={styles.neofi__currency_card_details}>
        <div className={styles.neofi__currency_card_detail_group}>
          <span className={styles.neofi__currency_card_label}>
            Current value
          </span>
          <span className={styles.neofi__currency_card_current_amount}>
            {currentToken ? (
              <LivePriceRenderer
                currentTokenSymbol={currentToken.symbol}
                currentPrice={currentPrice}
                setCurrentPrice={setCurrentPrice}
              />
            ) : (
              currencyFormatter(0)
            )}
          </span>
        </div>
        <div
          className={styles.neofi__currency_card_selector}
          onClick={handleDropDownClick}
        >
          {currentToken ? (
            <>
              <img
                src={currentToken.icon}
                width={24}
                height={24}
                alt={currentToken.name}
              />
              <span>{currentToken.name}</span>
            </>
          ) : (
            <>
              <span></span>
              <span>Select currency...</span>
            </>
          )}
          <SolidDown />
        </div>
        <div style={{ position: "relative" }}>
          <span className={styles.neofi__currency_card_label}>
            Amount you want to invest
          </span>{" "}
          <br />
          <input
            placeholder="0.00"
            className={styles.neo__currency_card_amount_input}
            onChange={handleEstimateAmount}
            type="number"
          />
          <span className={styles.neo__currency_card_currency}>INR</span>
        </div>
        <div>
          <span className={styles.neofi__currency_card_label}>
            Estimate Number of {currentToken ? currentToken.symbol : "Coin(s)"}{" "}
            You will Get
          </span>
          <br />
          <div className={styles.neofi__currency_card_estimate_token}>
            <span>{parseFloat(estimateCoins)}</span>
          </div>
        </div>
        <div style={{ marginTop: "3rem" }}>
          <Button style={{ width: "100%" }}>Buy</Button>
        </div>
      </div>
      {showCurrencyListModal && (
        <CurrencySearchModal
          currentToken={currentToken}
          handleCurrencySelect={handleCurrencySelect}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export { CurrencyCard };
