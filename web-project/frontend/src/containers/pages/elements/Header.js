import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import {
  Navbar,
  NavLink,
  Container,
  NavbarBrand,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import avatar from "../../../media/images/avatar.png";
import logo from "../../../media/images/logo.png";

import "./Header.css";

const cookies = new Cookies();
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      logged: cookies.get("access"),
    };
  }

  componentDidMount = () => {
    cookies.addChangeListener(this.onCookieChange);
  };

  onCookieChange = () => {
    this.setState({ logged: cookies.get("access") });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  logIn = () => {
    this.props.navigation("/login");
  };

  logOut = () => {
    cookies.remove("access");
  };

  renderProfileButton = () =>
    !this.state.logged ? (
      <NavLink className="header__navlink" onClick={this.logIn}>
        Zaloguj się
      </NavLink>
    ) : (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <img
          className="header__image img-fluid rounded-circle mr-2"
          src={avatar}
        />
        <DropdownToggle caret className="header__dropdown-toggle">
          Przemysław Sałek
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Profil</DropdownItem>
          <DropdownItem>Twoje zamówienia</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this.logOut}>Wyloguj</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  render() {
    return (
      <div className="header">
        <Navbar className="header__navbar">
          <Container className="header__containter">
            <NavbarBrand className="header__navbar-brand" href="/">
              <img className="header__logo" alt="" src={logo} />
              <div>Wallpapers</div>
            </NavbarBrand>
            {this.renderProfileButton()}
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default function (props) {
  const navigation = useNavigate();

  return <Header {...props} navigation={navigation} />;
}
