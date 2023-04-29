import React, { useState } from "react";
import { CurrencyCardBg, SolidDown } from "../../assets/svg";
import styles from "./currencyBuyCard.module.css";
import { Button } from "../button";
import { currencyFormatter } from "../../utils";
import { CurrencySearchModal } from "../currencyListModal";

const CurrencyCard = () => {
  const [currentToken, setCurrentToken] = useState(null);
  const [showCurrencyListModal, setShowCurrencyListModal] = useState(false);

  const handleDropDownClick = () => {
    setShowCurrencyListModal(true);
  };

  const handleCurrencySelect = (data) => {
    setShowCurrencyListModal(false);
    setCurrentToken(data);
  };

  const handleClose = () => {
    setShowCurrencyListModal(false);
  };

  return (
    <div className={styles.neofi__currency_card_container}>
      <div
        style={{ position: "absolute" }}
        className={`neofi__currency_card_bg`}
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
            {currencyFormatter(currentToken?.price || 0)}
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
            className={styles.neo__currency_card_amount_input}
            placeholder="0.00"
          />
          <span className={styles.neo__currency_card_currency}>INR</span>
        </div>
        <div>
          <span className={styles.neofi__currency_card_label}>
            Estimate Number of ETH You will Get
          </span>
          <br />
          <div className={styles.neofi__currency_card_estimate_token}>
            <span>0.00</span>
          </div>
        </div>
        <div>
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
