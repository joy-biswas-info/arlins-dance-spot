import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const [day, setDay] = useState('');
  let classDay = useParams();
  console.log(typeof (classDay.day));

  let myClassDay = '';
  let myClass=''
  if (classDay.day == "monday") {
    myClassDay = 1;
    myClass = "ZUMBA"
  }
  if (classDay.day == "tuesday") {
    myClassDay = 2;
    myClass='CARDIO BALLET'
  }
  if (classDay.day == "friday") {
    myClassDay = 5;
    myClass='Zumba'
  }

  const getNextClass = ()=> {
    let date = new Date();
    const dateCopy = new Date(date.getTime());
    const nextClassday = new Date(
      dateCopy.setDate(
        dateCopy.getDate() + ((7 - dateCopy.getDay()+ myClassDay) % 7 || 7),
      ),
    );
    setDay(nextClassday.toDateString());
  }



  const [myData, setMyData] = useState({});

  const settingStudentData = () => {
    setMyData({
      'class': myClass,
      'classDate': day,
      'spot': '',
      'studentName': '',
      'studentEmail': ''
    });
    console.log(myData);
}
    
  

  useEffect(() => {
    getNextClass();
  });



  return (
    <Container>
      <h4 className='text-center my-4'>{day} : {myClass}</h4>
      <h5 className='text-center'> Instructor </h5>
      <Row className='text-center my-3 justify-content-center'>
        <Row className='m-2 p-2 justify-content-center'>
          <Col className='p-3 mx-4 spot'>
              <h6>1</h6>        
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>2</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>3</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>4</h6>           
          </Col>
        </Row>
        <Row className='m-2 p-2 justify-content-center'>
          <Col className='p-3 mx-4 spot'>
              <h6>5</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>6</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>7</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>8</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>9</h6>            
          </Col>
        </Row>
        <Row className='m-2 p-2 justify-content-center'>
          <Col className='p-3 mx-4 spot'>
              <h6>10</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>11</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>12</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>13</h6>            
          </Col>
        </Row>
        <Row className='m-2 p-2 justify-content-center'>
          <Col className='p-3 mx-4 spot'>
              <h6>14</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>15</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>16</h6>            
          </Col>
         <Col className='p-3 mx-4 spot'>
              <h6>17</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>18</h6>            
          </Col>
        </Row>
        <Row className='m-2 p-2 justify-content-center'>
          <Col className='p-3 mx-4 spot'>
              <h6>19</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>20</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>21</h6>            
          </Col>
          <Col className='p-3 mx-4 spot'>
              <h6>22</h6>            
          </Col>
        </Row>
        <Row className='m-2 p-2 justify-content-center'>
          <Col className='p-3 mx-4 spot'>
              <h6>23</h6>            
          </Col>
        </Row>
      </Row>
      <Button onClick={() => settingStudentData()}>Book Your Spot </Button>
    </Container>
  );
};

export default BookingPage;