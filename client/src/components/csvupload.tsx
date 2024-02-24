import React from "react";
import Modal from "react-modal";

const UploadModal = ({ isOpen, onRequestClose, handleFileUpload }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Upload CSV Modal"
    >
      <h2>Upload CSV File</h2>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default UploadModal;