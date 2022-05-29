import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
  return (
    <Container fluid className='banner'>
      <div className='my-auto text-center text-white banner-text'>
        <h6 className='banner-small-text'>Become A Better Dancer</h6>
        <Row>
          <h2>JOIN OUR</h2>
          <h2> DANCE CREW</h2>
        </Row>
      </div>
    </Container>
  );
};

export default Banner;