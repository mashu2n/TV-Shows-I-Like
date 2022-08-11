import React, { useState } from "react";
import {
  Button,
  FloatingLabel,
  Form,
  Modal,
  ModalHeader,
} from "react-bootstrap";

const Modals = (props) => {
  const [showModal, setShowModal] = useState(false);

  const modalHandleClose = () => setShowModal(false);
  const modalHandleOpen = () => setShowModal(true);

  return (
    <React.Fragment>
      <Button onClick={modalHandleOpen} className="button">
        Leave a Comment!
      </Button>
      <Modal show={showModal} onHide={modalHandleClose}>
        <ModalHeader closeButton>
          <Modal.Title>Share Your Common Interests!</Modal.Title>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </ModalHeader>
      </Modal>
    </React.Fragment>
  );
};

export default Modals;
