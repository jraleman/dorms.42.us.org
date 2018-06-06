import React from "react";
import FAQTitle from "../FAQTitle";
import FAQItems from "../FAQItems";

export default class FAQContent extends React.Component {
  render() {
    return (
      <div className="scrollable-content">
        <div className="vertical-centred">
          <div className="boxed boxed-inner">
            <div className="boxed">
              <div className="container">
                <div className="intro">
                  <FAQTitle />
                  <FAQItems />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
