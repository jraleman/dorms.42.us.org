import React from "react";

export default class FacilitiesBackground extends React.Component {
  render() {
    return (
      <div className="bg-changer">
        <div
          className="section-bg"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(images/bg/rooms.jpg)"
          }}
        />
        <div
          className="section-bg"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(images/bg/cantina.jpg)"
          }}
        />
        <div
          className="section-bg"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(images/bg/laundry.jpg)"
          }}
        />
        <div
          className="section-bg"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(images/bg/gym.jpg)"
          }}
        />
        <div
          className="section-bg"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(images/bg/backyard.jpg)"
          }}
        />
        <div
          className="section-bg"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(images/bg/climbing.jpg)"
          }}
        />
        <div
          className="section-bg"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(images/bg/cinema.jpg)"
          }}
        />
      </div>
    );
  }
};
