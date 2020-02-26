import React, { Component } from "react";
import styles from "./Home.module.css";
import Header from "../../component/Header/Header";
import Footer from "../../component/footer/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.home}>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Home;
