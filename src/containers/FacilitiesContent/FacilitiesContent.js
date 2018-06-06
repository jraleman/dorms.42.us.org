import React from "react";
import FacilitiesGrid from "../FacilitiesGrid";

export default class FacilitiesContent extends React.Component {
  render() {
    return (
      <div className="scrollable-content">
        <div className="vertical-centred">
          <div className="boxed boxed-inner">
            <div className="boxed">
              <div className="container">
                <div className="intro">
                  <div className="row">
                    <div className="col-md-12">
                      <h2 className="title-uppercase text-white">
                        { "Facilities" }
                      </h2>
                      <FacilitiesGrid />
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
