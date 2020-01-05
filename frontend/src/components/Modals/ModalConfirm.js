import React from 'react';

import { Button, Modal } from 'react-bootstrap';

export default function ModalConfirm({
  show,
  onHide,
  title,
  description,
  handleModal,
}) {
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{description}.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={e => handleModal(e)} id="cancel" variant="secondary">
          Cancelar
        </Button>
        <Button onClick={e => handleModal(e)} id="confirm" variant="primary">
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
