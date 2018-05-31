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
            <a href="#" onclick="alert('Bient\xF4t! :)')">
              { "Français" }
            </a>
            <a href="#" onclick="alert('Esperalo! :)')">
              { "Espanol" }
            </a>
            <a href="#" onclick="alert('Bald! :)')">
              { "Deutsch" }
            </a>
            <a href="#" onclick="alert('Em breve! :)')">
              { "Portuguese" }
            </a>
          </div>
        </div>
      </section>
    );
  }
};
