import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
  isOpen={!!props.selectedOption}
  onRequestClose={props.handleClearSelectedOption}
  contentLabel="Selected Option"
  closeTimeoutMS={200}
  className="modal"
  >
    <h3 className="modal__title">天公伯說你該吃</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>好啦</button>
  </Modal>
);

export default OptionModal;
