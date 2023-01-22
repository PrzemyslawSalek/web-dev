import React, { Component } from "react";
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

import "./Header.css";

const cookies = new Cookies();
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      logged: cookies.get("userToken"),
    };
  }

  componentDidMount = () => {
    cookies.addChangeListener(this.onCookieChange);
  };

  onCookieChange = () => {
    this.setState({ logged: cookies.get("userToken") });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  logIn = () => {
    cookies.set("userToken", "Pacman", { path: "/" });
  };

  logOut = () => {
    cookies.remove("userToken");
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
          src="https://www.kindpng.com/picc/m/404-4042814_facebook-no-profile-png-download-default-headshot-transparent.png"
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
              <img
                className="header__logo"
                alt=""
                src="https://privacyaustralia.net/wp-content/uploads/2020/03/incognito-mode.png"
              />
              <div>Wallpapers</div>
            </NavbarBrand>
            {this.renderProfileButton()}
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
