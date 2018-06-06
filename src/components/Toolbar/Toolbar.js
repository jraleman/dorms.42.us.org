import React from "react";

export default class Toolbar extends React.Component {
  render() {
    return (
      <section id="toolbar">
        <div className="copy-bottom white boxed">
          <a href="https://jraleman.com/" target="_blank">
            { "by jraleman" }
          </a>
        </div>
        <div className="lang-bottom white boxed">
          <div className="menu-lang">
            <a href="#" className="active">
              { "English" }
            </a>
            <a href="#">
              { "Français" }
            </a>
            <a href="#">
              { "Espanol" }
            </a>
            <a href="#">
              { "Deutsch" }
            </a>
            <a href="#">
              { "Portuguese" }
            </a>
          </div>
        </div>
      </section>
    );
  }
};
