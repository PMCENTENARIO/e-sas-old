import React, { useState } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
// import { Container } from './styles';

export default function ModalCalled(props) {
  const [send, setSend] = useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Central de Ajuda
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Abertura de Chamado</h4>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Seu E-mail</Form.Label>
            <Form.Control type="email" placeholder="name@provedor.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Assunto</Form.Label>
            <Form.Control as="select">
              <option selected disabled>
                Selecionar...
              </option>
              <option>Reportar erro do sistema</option>
              <option>Solicitação de ajuda de usabilidade</option>
              <option>Sugestão de funcionabilidade</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          disabled={send}
          onClick={() => {
            setSend(!send);
          }}
        >
          {send && (
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
          {send ? 'Loading...' : 'Enviar mensagem'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
