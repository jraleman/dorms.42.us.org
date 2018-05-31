import React from "react";

export default class GridItem extends React.Component {
  render() {
    return (
      <div className="col-project-box col-sm-6 col-md-4 col-lg-3">
        <a
          href="#"
          data-toggle="modal"
          data-target="#modal"
          className="project-box"
        >
          <div className="project-box-inner">
            <h5>
              { "Rooms" }
            </h5>
            <div className="project-category">
              { "For our cadets" }
            </div>
          </div>
        </a>
      </div>
    );
  }
};
