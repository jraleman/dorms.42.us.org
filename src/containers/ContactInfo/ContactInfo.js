import React from "react";
import ContactItems from "../ContactItems";

export default class ContactInfo extends React.Component {
  render() {
    return (
      <div className="contact-info">
        <div className="row-contact-info row">
          <ContactItems />
          <div className="col-contact-info col-md-6 col-lg-4">
            <div className="row">
              <h3 className="col-sm-3 col-md-4">Phone</h3>
              <div className="col-right col-sm-8 col-md-7 col-sm-offset-1 col-md-offset-1">
                <div className="contact-info-row col-sm-6 col-md-12">
                  <strong className="text-dark">Main</strong>
                  <br />
                  <a href="tel:1-424-4242">
                    { "+1 (424) 424-4242" }
                  </a>
                  <br />
                  <strong className="text-dark">Security</strong>
                  <br />
                  <a href="tel:1-242-2424">
                    { "+1 (242) 242-2424" }
                  </a>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col-contact-info col-md-6 col-lg-4">
            <div className="row">
              <h3 className="col-sm-3 col-md-4">Address</h3>
              <div className="col-right col-sm-8 col-md-7 col-sm-offset-1 col-md-offset-1">
                <div className="contact-info-row col-sm-6 col-md-12">
                  { "34793 Ardentech Ct, Fremont, CA 94555" }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
