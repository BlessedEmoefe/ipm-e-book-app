import React from "react";
import { HeaderContainer } from "./Header.module.js";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

class Header extends React.Component {
  headerRebuild = () => {
    // console.log(window.pageYOffset);
    // if (window.screenTop > 100) {
    
    // }
  };
  render() {
    return (
      <HeaderContainer
      // className='
      //   // this.headerRebuild ? InitialHeader : ScrolledHeader
      //   InitialHeader
      // }
      >
        <div className="logoContainer">
          <Link to="/">
            <img src={Logo} className="logo" />
          </Link>
        </div>
        <div className="navbar">
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/books">
            Books
          </Link>
          <Link className="link" to="/news">
            News
          </Link>
          <Link className="link" to="/support">
            Support Us
          </Link>
        </div>
      </HeaderContainer>
    );
  }
}

export default Header;
