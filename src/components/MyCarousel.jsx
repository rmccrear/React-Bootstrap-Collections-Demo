import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const slushyImgSrc = "../assets/francesca-hotchin-DSxurmhrfuc-unsplash.jpg";

class MyCarousel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
      <Carousel>
        <Carousel.Item>
          <img src={slushyImgSrc} />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slushyImgSrc} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MyCarousel;