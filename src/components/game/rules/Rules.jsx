import React from "react";
import Modal from "react-modal";

import "./Rules.scss";

function Rules() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="rules-container">
      <button className="rules-btn" onClick={openModal}>
        Rules
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="rules-modal"
      >
        <h2>Rules</h2>
        <img
          className="close"
          onClick={closeModal}
          src={"/images/icon-close.svg"}
        />
        <img className="rules-map" src={"/images/image-rules.svg"} />
      </Modal>
    </div>
  );
}

export default Rules;
