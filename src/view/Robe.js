import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Listerobe from '../component/Listerobe'
import Page1 from '../component/page1';


function Robe() {
    const [listrobe, setListrobe] = useState([])  //


    useEffect(() => {
        const list1 = [
         
          { id: 1, url: 'robe1.jpg', title: 'Nouvlle collection/été 2021', description: '179.00 TND' , caracteristique: 'Couleur:	Noir '},
          { id: 2, url: 'robe5.jpg', title: ' été 2021', description: '197.500 TND'  ,caracteristique: 'Couleur:Vert '},
          { id: 3, url: 'rob2.jpg', title: ' Nouvlle collection/été 2021', description: '195.600 TND', caracteristique: 'Couleur:Noir' },
          { id: 4, url: 'robe2.jpeg', title: 'été 2021', description: '179.800 TND' ,caracteristique: 'Couleur:Jaune moutarde'},
          { id: 5, url: 'robe4.jpg', title: 'Hiver 2021 ', description: '155.590 TND',caracteristique: 'Couleur:Jaune' },
          { id: 6, url: 'robe6.jpg', title: 'Hiver 2021 ', description: '255.590 TND',caracteristique: 'Couleur:Jaune' }
        ]
        setTimeout(() => {
          setListrobe(list1);
        }, 2000);
      }, [])
    return (
      <Row>
           <Col> <Listerobe listrobe={listrobe}   /> </Col>
           <Page1 />
      </Row>
    )
    
}
export default Robe