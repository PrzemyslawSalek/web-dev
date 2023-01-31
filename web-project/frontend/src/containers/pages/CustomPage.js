import React, { Component } from "react";
import axios from "axios";

import { getCookies } from "../../utils/cookies";

import Footer from "./elements/Footer";
import Header from "./elements/Header";
import Main from "./elements/Main";

import "./CustomPage.css";

export const UserContext = React.createContext();
export default class CustomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
  }

  componentDidMount() {
    if (getCookies().get("access") !== undefined) {
      this.fetchUserData();
    }
  }

  fetchUserData = () => {
    axios
      .get("/auth/me/")
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { mainPage } = this.props;

    const user = this.state.user;
    const fetch = this.fetchUserData;

    return (
      <div className="custom-page">
        <UserContext.Provider value={{ user, fetch }}>
          <Header />
          <Main mainPage={mainPage} />
          <Footer />
        </UserContext.Provider>
      </div>
    );
  }
}
