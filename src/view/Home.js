import React from 'react';

import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../component/footer';
import Page1 from '../component/page1';

function Home() {
  return (

    <div >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img1.jpg"
              alt="First slide"
              height="700"
              width="700"
            />
            <Carousel.Caption>
              <h3>First slide </h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img7.jpg"
              alt="Second slide"
              height="700"
              width="700"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img8.jpg"
              alt="Third slide"
              height="700"
              width="700"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Page1 />
      </div>
  


  )
}

export default Home
