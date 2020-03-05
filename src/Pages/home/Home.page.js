import React, { Component } from "react";
import styles from "./Home.module.css";
import Header from "../../component/Header/Header";
import Footer from "../../component/footer/Footer";
// import books from "../../assets/books.webp"

class Home extends Component {
  render() {
    return (
      <div className={styles.homeHeader}>
        <Header />
        <div className={styles.container}>
          <div className={styles.homeSlider}>
        
          </div>
          <div className={styles.second}></div>
          <div className={styles.third}></div>
          <div className={styles.fourth}></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
