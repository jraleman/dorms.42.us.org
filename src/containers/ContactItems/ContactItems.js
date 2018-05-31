import React from "react";

export default class ContactItems extends React.Component {
  render() {
    return (
      <div className="col-contact-info col-md-6 col-lg-4">
        <div className="row">
          <h3 className="col-sm-3 col-md-4">{ "Email" }</h3>
          <div className="col-right col-sm-8 col-md-7 col-sm-offset-1 col-md-offset-1">
            <div className="contact-info-row col-sm-6 col-md-12">
              <strong className="text-dark">
                { "Write us" }
              </strong>
              <br />
              <a href="mailto:nostromo@42.us.org?subject=contact-via-site">
                { "nostromo@42.us.org" }
              </a>
              <br />
              <strong className="text-dark">
                { "Security" }
              </strong>
              <br />
              <a href="mailto:security@42.us.org?subject=contact-via-site">
                { "security@42.us.org" }
              </a>
              <br />
              <strong className="text-dark">
                { "Resident Assistants" }
              </strong>
              <br />
              <a href="mailto:ra@42.us.org?subject=contact-via-site">
                { "ra@42.us.org" }
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
