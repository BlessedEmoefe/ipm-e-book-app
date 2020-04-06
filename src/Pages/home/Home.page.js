import React, { Component } from "react";
import styles from "./Home.module.css";
import Header from "../../component/Header/Header";
import Footer from "../../component/footer/Footer";
import books from "../../assets/books.png";

class Home extends Component {
  render() {
    return (
      <div className={styles.homeHeader}>
        <Header />
        <div className={styles.container}>
          <div className={styles.homeFirstSection}>
            <div className={styles.LandingPagecontent}>
              <div className={styles.landingText}>
                <p className={styles.text1}>The Book Shelf</p>
                <p className={styles.text2}>Checkout Our Library</p>
                <button className={styles.button}>Get A Book</button>
              </div>
              <img className={styles.landingImage} src={books} />
            </div>
          </div>

          <div className={styles.homeSecondSection}>
            <title className={styles.title}>What is IPM?</title>
            <div className={styles.content}></div>
          </div>
          <div className={styles.homeThirdSection}>
            <title className={styles.title}>Books</title>
            <div className={styles.content}></div>
          </div>
          <div className={styles.homeFourthSection}>
            <title className={styles.title}>News</title>
            <div className={styles.content}></div>
          </div>
          <div className={styles.homeFifthSection}>
            <title className={styles.title}>Support Us</title>
            <div className={styles.content}></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
