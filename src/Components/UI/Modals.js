import React, { useState } from "react";
import {
  Button,
  FloatingLabel,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
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
        </ModalHeader>
        <ModalBody>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <ModalFooter>
            <Button variant="secondary" onClick={modalHandleClose}>
              Close
            </Button>

            <Button variant="primary">Submit</Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Modals;
