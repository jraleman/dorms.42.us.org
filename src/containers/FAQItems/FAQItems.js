import React from "react";
import DropdownItem from "../../components/DropdownItem";

export default class FAQItems extends React.Component {
  render() {
    return (
      <div className="row">
        <ul className="faq">
          <DropdownItem />
          <li>
            <h3 className="question">
              <span>{ "How do I choose my roomate." }</span>
              <div className="plus-minus-toggle collapsed" />
            </h3>
            <div className="answer">
              <span>{ "Make some friends :P" }</span>
            </div>
          </li>
          <li>
            <h3 className="question">
              <span>{ "How does the laundry service work" }?</span>
              <div className="plus-minus-toggle collapsed" />
            </h3>
            <div className="answer">
              <span>{ "IT'S FREE! But you have to do it yourself." }</span>
            </div>
          </li>
          <li>
            <h3 className="question">
              <span>{ "How do I register my vehicule?" }</span>
              <div className="plus-minus-toggle collapsed" />
            </h3>
            <div className="answer">
              <a href="https://heimdall.42.us.org/">
                { "Click here and complete the form" }
              </a>
            </div>
          </li>
          <li>
            <h3 className="question">
              <span>{ "Can I watch a movie with you?" }</span>
              <div className="plus-minus-toggle collapsed" />
            </h3>
            <div className="answer">
              <span>{ "Yes :3" }</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
};
