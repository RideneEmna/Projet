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
              <h3>Collection Automne/Hiver 2021 </h3>
              <p>Réchauffez l'automne de votre bébé avec des ensembles doux, des bonnets, des mitaines et des sacs à dos fabriqués à partir d'un matériau velours tellement confortable. De plus, nous avons des bottes mignonnes et robustes pour aider votre enfant à découvrir le monde!</p>
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
              <h3>Collection Automne/Hiver 2021  </h3>
              <p> </p>
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
              <h3>Collection Automne/été 2021</h3>
              <p> La durabilité et le style vont de pair dans une collection de plage conçue pour s'adapter à toute la famille. La couleur coordonne votre équipe, optez pour des styles assortis maman -bébé ou restez cool avec des lunettes de soleil jumelées - trouvez vos tenues préférées!</p>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img
              className="d-block w-100"
              src="collE1.jpg"
              alt="Third slide"
              height="700"
              width="700"
            />

            <Carousel.Caption>
              <h3>Collection Automne</h3>
        
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

        
        <Page1 />
      </div>
  


  )
}

export default Home
