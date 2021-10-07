import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Listesousvet from '../component/Listesouvet'
import Page1 from '../component/page1';


function Sousvet() {
    const [listsousvet, setListsousvet] = useState([])  //


    useEffect(() => {
        const list1 = [
          { id: 1, url: 'sous1.jpg', title: 'Collection été 2021', description: '79.00 TND' , caracteristique: 'Couleur:	rouge '},
          { id: 2, url: 'sous2.jpg', title: 'Collection  été 2021', description: '79.500 TND' ,caracteristique: 'Couleur:Rose '},
          { id: 3, url: 'sous3.jpg', title: 'Collection été 2021', description: '98.500 TND'  ,caracteristique: 'Couleur:Gris'},
          { id: 4, url: 'sous5.jpg', title: '  Hiver 2021', description: '59.500 TND', caracteristique: 'Couleur:Gris' },
          { id: 5, url: 'sous4.jpg', title: ' Collection été 2021', description: '95.400 TND', caracteristique: 'Couleur: Rose' },
          { id: 6, url: 'sous6.jpg', title: 'Hiver 2021 ', description: '55.590 TND',caracteristique: 'Couleur:Blanc' }
        ]
        setTimeout(() => {
          setListsousvet(list1);
        }, 2000);
      }, [])
    return (
      <Row>
           <Col> <Listesousvet listsousvet={listsousvet}   /> </Col>
           <Page1 />
      </Row>
    )
    
}
export default Sousvet