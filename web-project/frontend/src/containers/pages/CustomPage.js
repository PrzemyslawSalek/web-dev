import React, { Component } from "react";
import Footer from "./elements/Footer";
import Header from "./elements/Header";
import Main from "./elements/Main";

import "./CustomPage.css";

export default class CustomPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mainPage } = this.props;

    return (
      <div className="custom-page">
        <Header />
        <Main mainPage={mainPage} />
        <Footer />
      </div>
    );
  }
}
