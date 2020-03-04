import React, { Component } from "react";
import styles from "./Home.module.css";
import Header from "../../component/Header/Header";
import Footer from "../../component/footer/Footer";

class Home extends Component {
  render() {
    return (
      <div className={styles.initialHeader}>
        <Header />
        <p className="paragragh">Home</p>
        <Footer />
      </div>
    );
  }
}

export default Home;
