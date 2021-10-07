import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Listejube from '../component/Listejube'
import Page1 from '../component/page1';


function Jube() {
    const [listjube, setListjube] = useState([])  //


    useEffect(() => {
        const list1 = [
          { id: 1, url: 'jube1.jpg', title: 'Collection été 2021', description: '79.00 TND' , caracteristique: 'Couleur:Blanc '},
          { id: 2, url: 'jube2.jpg', title: 'Collectionété 2021', description: '69.800 TND' ,caracteristique: 'Couleur:Noire '},
          { id: 3, url: 'jube3.jpg', title: ' Collection été 2021', description: '95.500 TND'  ,caracteristique: 'Couleur:Blanc et Noire'},
          { id: 1, url: 'jube5.webp', title: ' Collection 2021', description: '95.600 TND', caracteristique: 'Couleur:Beige ' },
          { id: 2, url: 'jube4.jpg', title: '  Collection 2021', description: '89.500 TND', caracteristique: 'Couleur:Vert militaire ' },
          { id: 3, url: 'jube6.jpg', title: 'Collection 2021 ', description: '59.590 TND',caracteristique: 'Couleur:Rose Bébé' }
    
        ]
        setTimeout(() => {
          setListjube(list1);
        }, 2000);
      }, [])
    return (
      <Row>
           <Col> <Listejube listjube={listjube}   /> </Col>
           <Page1 />
      </Row>
    )
    
}
export default Jube