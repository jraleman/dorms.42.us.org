import React from "react";

export default class SidebarMenu extends React.Component {
  render() {
    return (
      <div id="menu" className="menu">
        <span className="close-menu right-boxed">
          <li className="fa fa-times" />
        </span>
        <ul className="menu-list right-boxed">
          <li className="active" data-menuanchor="banner">
            <a href="#banner">
              { "Apply" }
            </a>
          </li>
          <li data-menuanchor="facilities">
            <a href="#facilities">
              { "Facilities" }
            </a>
          </li>
          <li data-menuanchor="faq">
            <a href="#faq">
              { "FAQ" }
            </a>
          </li>
          <li data-menuanchor="contact">
            <a href="#contact">
              { "Contact" }
            </a>
          </li>
        </ul>
      </div>
    );
  }
};
