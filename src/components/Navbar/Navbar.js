import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <header id="navbar" className="navbar navbar-2 navbar-white boxed">
        <div className="navbar-bg" />
        <button
          id="menu-icon"
          type="button"
          className="navbar-toggle"
          aria-expanded="false"
          data-toggle="collapse"
          data-target="#navbar-collapse"
        >
          <span className="fa fa-2x fa-bars" />
        </button>
        <NavbarLogo />
        <NavbarAddress />
        <NavbarSocialIcons />
      </header>
    );
  }
};

const NavbarAddress = props => {
  return (
    <address className="navbar-address visible-lg">
      <li className="fa fa-map-marker" />
      <span className="text-dark">
        { "34793 Ardentech Ct" }
      </span>
    </address>
  );
}

const NavbarLogo = props => {
  return (
    <a className="brand" href="#">
      <img
        className="brand-img"
        alt="logo"
        src="%PUBLIC_URL%/images/logo/logo.png"
      />
      <img
        className="brand-img-white"
        alt="logo"
        src="%PUBLIC_URL%/images/logo/logo-white.png"
      />
      <div className="brand-info">
        <div className="brand-name">
          { "Dorms" }
        </div>
        <div className="brand-text">
          { "Nostromo 42" }
        </div>
      </div>
    </a>
  );
}

const NavbarSocialIcons = props => {
  return (
    <div className="social-list hidden-xs">
      <a
        href="https://www.facebook.com/42SiliconValley"
        target="_blank"
        className="fa fa-facebook"
      />
      <a
        href="https://www.twitter.com/42SiliconValley"
        target="_blank"
        className="fa fa-twitter"
      />
      <a
        href="https://www.youtube.com/channel/UC8fe6mEpGZGg2hSDKyYMKPg"
        target="_blank"
        className="fa fa-youtube"
      />
    </div>
  );
}
