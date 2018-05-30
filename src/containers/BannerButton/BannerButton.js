import React from "react";

export default class BannerButton extends React.Component {
  render() {
    return (
      <a
        className="btn btn-banner"
        href="https://dorms.42.us.org/users/auth/marvin"
      >
        { "Apply now!" }
      </a>
    );
  }
};
