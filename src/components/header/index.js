import styles from "./header.module.css";
import { CloseIcon, HamBurgerIcon, Logo } from "../../assets";
import { useState } from "react";
import { Button } from "../index";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("Trade");
  const [showSideNavBar, setShowSideNavBar] = useState(false);

  const isActive = (page) => {
    return page === currentPage ? styles.neofi_header__nav_item__active : "";
  };

  const handleSideBarChange = () => {
    setShowSideNavBar(!showSideNavBar);
  };

  return (
    <header className={styles.neofi__header}>
      <div className={styles.neofi__logo}>
        <Logo />
      </div>
      <ul className={styles.neofi_header__nav_items}>
        {pages.map((eachPage) => (
          <li
            className={`${styles.neofi_header__nav_item} ${isActive(
              eachPage
            )} ${styles.neofi_header__nev_item_text}`}
            key={eachPage}
          >
            {eachPage}
          </li>
        ))}
      </ul>
      <div className={styles.neofi__header__connect__wallet}>
        <Button style={{ padding: "0 1rem" }}>Connect wallet</Button>
      </div>
      <div
        className={styles.neefi__header__hamBurger}
        onClick={showSideNavBar ? null : handleSideBarChange}
      >
        <HamBurgerIcon fill={"#627EEA"} />
      </div>
      <NavSideBar
        isVisible={showSideNavBar}
        handleSideBarChange={handleSideBarChange}
        currentPage={currentPage}
      />
    </header>
  );
};

const NavSideBar = ({ isVisible, handleSideBarChange, currentPage }) => {
  const isActive = (page) => {
    return page === currentPage ? styles.neofi_header__nav_item_mv__active : "";
  };
  return (
    <div
      className={`${styles.neofi__header__navSideBar_container} ${
        isVisible ? styles.neofi__header__navSideBar_container__active : ""
      }`}
    >
      <div className={styles.neofi__header__close}>
        <div onClick={handleSideBarChange} style={{ padding: "1rem" }}>
          <CloseIcon fill="#627EEA" />
        </div>
      </div>
      <ul className={styles.neofi_header__nav_items_mv}>
        {pages.map((eachPage) => (
          <li
            className={`${styles.neofi_header__nav_item_mv} ${isActive(
              eachPage
            )} ${styles.neofi_header__nev_item_text}`}
            key={eachPage}
          >
            {eachPage}
          </li>
        ))}
      </ul>
      <div className={styles.neofi__header__connect__wallet_mv}>
        <Button style={{ padding: "0 1rem" }}>Connect wallet</Button>
      </div>
    </div>
  );
};

const pages = ["Trade", "Earn", "Support", "About"];

export { Header };
