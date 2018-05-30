import React from "react";

export default class BannerTitle extends React.Component {
  render() {
    return (
      <h1 className="display-2 text-white">
        <span className="text-primary">Dorms</span>
        <span>{ "Nostromo 42" }</span>
      </h1>
    );
  }
};
