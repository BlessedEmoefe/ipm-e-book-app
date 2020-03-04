import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 90%;
  padding: 0 5%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: 1s;

  .ScrolledHeader {
    width: 90%;
    padding: 0 5%;
    height: 60px;
    background: green;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    transition: 1s;
  }
  .logoContainer {
    min-width: 10%;
    height: 100%;
  }
  .logo {
    width: 100%;
    height: 100%;
  }
  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    height: 40%;
  }
  .link {
    color: grey;
    text-decoration: none;
    font-size: 16px;
    transition: 0.5s;
  }
  .link:hover {
    color: black;
    text-decoration: none;
    font-size: 17px;
    transition: 0.5s;
  }
`;
