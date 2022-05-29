import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SingleBookingItem from './SingleBookingItem';

const BookingItems = () => {
  const bookingClass = [
    {
    "day": "monday",
    "img": "./img/monday.png"
  },
    {
    "day": "tuesday",
    "img": "./img/tuesday.png"
  },
    {
    "day": "friday",
    "img": "./img/friday.png"
  }
  ];
  return (
      <Row className='justify-content-center '>
      {bookingClass.map(element => <SingleBookingItem
        key={element.day}
      class={element}>

      </SingleBookingItem>)}
      </Row>
  );
};

export default BookingItems;