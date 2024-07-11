import React, { useState } from "react";
import Modal from 'react-modal';

const PopUp = ({ message, isOpen, onClose }) => {

   return (
      <Modal isOpen={isOpen}>
         <div>
            <h2>{message}</h2>
            <button onClick={onClose}>Close</button>
         </div>
      </Modal>
   )
}

export default PopUp;