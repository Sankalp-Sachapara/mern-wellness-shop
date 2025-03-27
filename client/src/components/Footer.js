import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <Row>
              <Col md={4}>
                <h5>Shop</h5>
                <ul className='list-unstyled'>
                  <li>All Products</li>
                  <li>Supplements</li>
                  <li>Fitness Equipment</li>
                  <li>Organic Foods</li>
                  <li>Skincare</li>
                </ul>
              </Col>
              <Col md={4}>
                <h5>About Us</h5>
                <ul className='list-unstyled'>
                  <li>Our Story</li>
                  <li>Blog</li>
                  <li>Testimonials</li>
                  <li>Contact Us</li>
                </ul>
              </Col>
              <Col md={4}>
                <h5>Customer Service</h5>
                <ul className='list-unstyled'>
                  <li>FAQs</li>
                  <li>Shipping & Returns</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            <p>
              &copy; {new Date().getFullYear()} Wellness Shop - All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
