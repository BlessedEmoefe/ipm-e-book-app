import React, { Component } from "react";
import styles from "./Home.module.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className={styles.home}>Home Component</div>;
  }
}

export default Home;
