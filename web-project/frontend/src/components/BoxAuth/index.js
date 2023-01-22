import React, { Component } from "react";
import LoginForm from "./elements/LoginForm";
import login from "../../media/images/login.png";
import RegistrationForm from "./elements/RegistrationForm";

class BoxAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegistrationModal: false,
    };
  }

  toggleRegistrationModal = () => {
    this.setState({
      showRegistrationModal: !this.state.showRegistrationModal,
    });
  };

  render() {
    return (
      <main className="container">
        <div className="col-md-8 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="row">
              <div className="col">
                <img className="img-fluid" src={login}></img>
              </div>
              <div className="col">
                <LoginForm
                  toggleRegistrationModal={this.toggleRegistrationModal}
                />
              </div>
            </div>
          </div>
        </div>
        <RegistrationForm
          show={this.state.showRegistrationModal}
          toggle={this.toggleRegistrationModal}
        />
      </main>
    );
  }
}

export default BoxAuth;
