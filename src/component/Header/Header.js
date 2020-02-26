import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.Header}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={Logo} className={styles.logo} />
          </Link>
        </div>
        <div className={styles.navbar}>
          <Link className={styles.link} to="/about">
            About
          </Link>
          <Link className={styles.link} to="/books">
            Books
          </Link>
          <Link className={styles.link} to="/news">
            News
          </Link>
          <Link className={styles.link} to="/support">
            Support Us
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
