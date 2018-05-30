import React from "react";
import ContactInfo from "../../containers/ContactInfo";

export default class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="pp-scrollable section section-4">
        <div className="scroll-wrap">
          <div className="scrollable-content">
            <div className="vertical-centred">
              <div className="boxed boxed-inner">
                <div className="boxed">
                  <div className="container">
                    <div className="intro overflow-hidden">
                      <div className="row">
                        <div className="col-md-12">
                          <h2 className="title-uppercase">Contact us</h2>
                          <div id="map" className="map-2" />
                          <ContactInfo />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
