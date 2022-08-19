import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ShowItem = (props) => {
  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={props.img} />
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                  {props.description} {props.genre}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ShowItem;
