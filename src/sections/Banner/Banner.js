import React from "react";
import BannerBackground from "../../containers/BannerBackground";
import BannerContent from "../../containers/BannerContent";

export default class Banner extends React.Component {
  render() {
    return (
      <section
        id="banner"
        className="pp-scrollable text-white section section-1"
      >
        <div className="scroll-wrap">
          <BannerBackground />
          <BannerContent />
        </div>
      </section>
    );
  }
};
