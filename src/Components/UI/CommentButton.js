import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

import "../Styles/Button.css";
import Modals from "./Modals";

const CommentButton = (props) => {
  return (
    <Modals>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
    </Modals>
  );
};

export default CommentButton;
