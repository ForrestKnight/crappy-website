import React, { useState } from "react";
import Modal from 'react-modal';

const PopUp = ({ message, isOpen, onClose, customStyles, children, showCloseButton, onExpand }) => {

   return (
      <Modal isOpen={isOpen} style={customStyles}>
         <div>
            {children}
            <h2>{message}</h2>
            {showCloseButton && <button onClick={onClose}>Close</button>}
            {onExpand && (
               <button onClick={onExpand} style={{ position: 'absolute', top: 0, right: 0}}>X</button>
            )}
         </div>
      </Modal>
   )
}

export default PopUp;