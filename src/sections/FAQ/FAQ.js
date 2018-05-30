import React from "react";
import FAQBackground from "../../containers/FAQBackground";
import FAQContent from "../../containers/FAQContent";

export default class FAQ extends React.Component {
  render() {
    return (
      <section id="faq" className="pp-scrollable section section-3">
        <div className="scroll-wrap">
          <FAQBackground />
          <FAQContent />
        </div>
      </section>
    );
  }
};
