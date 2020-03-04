import React, { Component } from "react";
import styles from "./Home.module.css";
import Header from "../../component/Header/Header";
import Footer from "../../component/footer/Footer";

class Home extends Component {
  state = {
    classChange: styles.initialHeader
  };
  componentDidMount = ( e ) => {
    window.addEventListener("scroll", this.headerRebuild, this.handleClass)
  };


  headerRebuild = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 45) {
      this.setState({ classChange:styles.finalHeader })
     
    }else
    this.setState({ classChange:styles.initialHeader });
  }
  


  render() {
    return (
      <div className={this.state.classChange}>
        <Header />
        <p className="paragragh">Home</p>
        <Footer />
      </div>
    );
  }
}

export default Home;
