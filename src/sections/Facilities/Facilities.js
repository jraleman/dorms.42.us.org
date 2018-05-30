import React from "react";
import FacilitiesBackground from "../../containers/FacilitiesBackground";
import FacilitiesContent from "../../containers/FacilitiesContent";

export default class Facilities extends React.Component {
  render() {
    return (
      <section
        id="facilities"
        className="pp-scrollable text-white section section-2"
      >
        <div className="scroll-wrap">
          <FacilitiesBackground />
          <FacilitiesContent />
        </div>
      </section>
    );
  }
};
