import React from "react";

export default class BannerTitle extends React.Component {
  render() {
    return (
      <div>
        <h1 className="display-2 text-white">
          <span className="text-primary">{"Dorms "}</span>
          <span>{ "Nostromo 42" }</span>
        </h1>
        <p>{ "42 School Silicon Valley" }</p>
      </div>
    );
  }
};
