import React from "react";

export default class DropdownItem extends React.Component {
  render() {
    return (
      <li>
        <h3 className="question">
          <span>
            { "Am I available to apply?" }
          </span>
          <div className="plus-minus-toggle collapsed" />
        </h3>
        <div className="answer">
          <span>
          { "As long as you have a visa, or any other proof. :)" }
          </span>
        </div>
      </li>
    );
  }
};
