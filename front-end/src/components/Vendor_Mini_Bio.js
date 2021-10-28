import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardImg,
  CardText,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";


function Vendor_Mini_Bio() {
  return (
    <>
      <Row>
        <Card style={{width: '30rem'}}>
          <CardImg top src="https://picsum.photos/1200/1200"></CardImg>
          <CardBody>
            <CardTitle>Vendor Name</CardTitle>
            <CardText>
              Location <br />
              Today's Business Hours <br />
              Contact Info
            </CardText>
            <CardText>
              <small className="text-muted">
                  Jump to Vendor Profile
              </small>
            </CardText>
          </CardBody>
        </Card>
      </Row>
    </>
  );
}

export default Vendor_Mini_Bio;
