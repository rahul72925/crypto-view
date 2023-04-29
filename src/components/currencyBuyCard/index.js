import React, { useState } from "react";
import { CurrencyCardBg } from "../../assets/svg";
import styles from "./currencyBuyCard.module.css";
import { Button } from "../button";
import { currencyFormatter } from "../../utils";

const CurrencyCard = () => {
  const [currentToken, setCurrentToken] = useState(null);

  return (
    <div className={styles.neofi__currency_card_container}>
      <div
        style={{ position: "absolute" }}
        className={`neofi__currency_card_bg`}
      >
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
    </div>
  );
};

export { CurrencyCard };
