import React from 'react'
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import './Modal.css'


const Modal = (props) => {
  
  return (
    <div className="modalMain">
    <PureModal
    header="Your Confirmed Meetup"
    footer={
      <div onClick={() => props.setShowModal()}>
      <button>Close</button>
    </div>
      }
      isOpen={props.showModal}
      closeButton="close"
      closeButtonPosition="bottom"
      // onClose={() => {
      //   props.setShowModal(false);
      //   return true;
      // }}
      >
      <p>{props.children}</p>
    </PureModal>
    </div>
  )}

export default Modal