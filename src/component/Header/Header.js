import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

class Header extends React.Component {
 
  state = {
    classChange: styles.initialHeaderContainer
  };

  componentDidMount = e => {
    window.addEventListener("scroll", this.headerRebuild);
  };

  headerRebuild = () => {
    if (window.pageYOffset > 45) {
      this.setState({ classChange: styles.finalHeaderContainer });
    } else this.setState({ classChange: styles.initialHeaderContainer });
  };

  
  render() {
    return (
      <div className={this.state.classChange} >
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
