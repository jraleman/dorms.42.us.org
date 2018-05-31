import React from "react";
import GridItem from "./GridItem";

export default class FacilitiesGrid extends React.Component {
  render() {
    return (
      <div className="row-project-box row">
        <GridItem />
        <div className="col-project-box col-sm-6 col-md-4 col-lg-3">
          <a
            href="#"
            data-toggle="modal"
            data-target="#modal"
            className="project-box"
          >
            <div className="project-box-inner">
              <h5>{ "Cafeteria" }</h5>
              <div className="project-category">{ "La Cantina" }</div>
            </div>
          </a>
        </div>
        <div className="col-project-box col-sm-6 col-md-4 col-lg-3">
          <a
            href="#"
            data-toggle="modal"
            data-target="#modal"
            className="project-box"
          >
            <div className="project-box-inner">
              <h5>{ "Laundry" }</h5>
              <div className="project-category">{ "Be clean and smell nice" }</div>
            </div>
          </a>
        </div>
        <div className="col-project-box col-sm-6 col-md-4 col-lg-3">
          <a
            href="#"
            data-toggle="modal"
            data-target="#modal"
            className="project-box"
          >
            <div className="project-box-inner">
              <h5>{ "Gym" }</h5>
              <div className="project-category">{ "Workout, code hard" }</div>
            </div>
          </a>
        </div>
        <div className="col-project-box col-sm-6 col-md-4 col-lg-3">
          <a
            href="#"
            data-toggle="modal"
            data-target="#modal"
            className="project-box"
          >
            <div className="project-box-inner">
              <h5>{ "Backyard" }</h5>
              <div className="project-category">{ "Chill with friends" }</div>
            </div>
          </a>
        </div>
        <div className="col-project-box col-sm-6 col-md-4 col-lg-3">
          <a
            href="#"
            data-toggle="modal"
            data-target="#modal"
            className="project-box"
          >
            <div className="project-box-inner">
              <h5>{ "Climbing" }</h5>
              <div className="project-category">{ "To the success!" }</div>
            </div>
          </a>
        </div>
        <div className="col-project-box col-sm-6 col-md-4 col-lg-3">
          <a
            href="#"
            data-toggle="modal"
            data-target="#modal"
            className="project-box"
          >
            <div className="project-box-inner">
              <h5>{ "Cinema" }</h5>
              <div className="project-category">{ "Anime is also included..." }</div>
            </div>
          </a>
        </div>
      </div>
    );
  }
};
