import React from "react";

export default class Modal extends React.Component {
  render() {
    return (
      <div
        tabIndex={-42}
        className="modal modal-open fade"
        id="modal"
        role="dialog"
        aria-labelledby="basicModal"
        aria-hidden="true"
      >
        <div className="vertical-alignment-helper">
          <div className="modal-dialog vertical-align-center md-lg">
            <div className="modal-content">
              <ModalBody />
              <ModalFooter />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const ModalBody = props => {
  return (
    <div className="modal-body">
      <div className="row">
        <div className="col-12">
          <img
            className="lazyload"
            src="images/modal/happy.jpg"
            alt="happy"
          />
        </div>
        <div className="col-12">
          <p>{ "I love 42! <3" }</p>
        </div>
      </div>
    </div>
  );
}

const ModalFooter = props => {
  return (
    <div className="modal-footer">
      <a
        className="btn btn-modal"
        href="#"
        data-dismiss="modal"
        aria-label="close"
      >
        <i className="fa fa-close" />
        <span>{ "Close" }</span>
      </a>
    </div>
  );
}
