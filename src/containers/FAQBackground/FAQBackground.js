import React from "react";

export default class FAQBackground extends React.Component {
  render() {
    return (
      <div
        className="section-bg"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(images/bg/faq.jpg)"
        }}
      />
    );
  }
};
