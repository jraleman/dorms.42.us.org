import React from "react";
import BannerTitle from "../BannerTitle";
import BannerButton from "../BannerButton";

export default class BannerContent extends React.Component {
  render() {
    return (
      <div className="scrollable-content">
        <div className="vertical-centred">
          <div className="boxed boxed-inner">
            <div className="boxed">
              <div className="container">
                <div className="intro">
                  <div className="row">
                    <div className="col-md-8 col-lg-6">
                      <BannerTitle />
                      <BannerButton />
                      <div className="hr-bottom" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
