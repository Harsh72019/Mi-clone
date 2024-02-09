import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = ({start}) => {
  return (
    <Carousel fade>
      {start.map((item) => (
        <Carousel.Item  interval={1000} keyboard={true}>
          <img className='d-block w-100' src={item} alt="Slide"/>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
