import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleBookingItem = (props) => {
  const { day, img } = props.class;

  const url = `/booking-items/${day}`;
  return (
      <Col style={{ maxWidth: '400px' }} >
        <Link to = {url}>
          <img className='img-thumbnail' src={img} alt="" />
        </Link>
      </Col>
  );
};

export default SingleBookingItem;