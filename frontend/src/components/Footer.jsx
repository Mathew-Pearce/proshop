import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>
              ProShop: built by NodeOutMedia &copy; {currentDate}{" "}
              <a href='https://www.nodeoutmedia.com/'>nodeoutmedia.com</a>
            </p>
            <p>
              Want a webite like this? <a href='https://www.nodeoutmedia.com/'>Click here</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
