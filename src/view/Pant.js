import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Listepant from '../component/Listepant'
import Page1 from '../component/page1';


function Jube() {
    const [listpant, setListpant] = useState([])  //


    useEffect(() => {
        const list1 = [
          { id: 1, url: 'pant1.jpg', title: '', description: '79.590 TND' , caracteristique: 'Couleur: Jean bleu Foncé ou Bleu ciel '},
          { id: 2, url: 'pant4.jpg', title: ' ', description: '65.00 TND', caracteristique: 'Couleur:Noir/Gris ' },
          { id: 3, url: 'pant3.jpg', title: '', description: '97.500 TND'  ,caracteristique: 'Couleur:Jean Noir'},
          { id: 4, url: 'pant2.jpg', title: '', description: '82.00 TND' ,caracteristique: 'Couleur:Jean Bleu ciel'},
          { id: 5, url: 'pant5.jpg', title: '', description: '89.500 TND', caracteristique: 'Couleur:Jean ' },
          { id: 6, url: 'pant6.jpg', title: 'Hiver 2021 ', description: '55.590 TND',caracteristique: 'Couleur:Noir' }
        ]
        setTimeout(() => {
          setListpant(list1);
        }, 2000);
      }, [])
    return (
      <Row>
           <Col> <Listepant listpant={listpant}   /> </Col>
           <Page1 />
      </Row>
    )
    
}
export default Jube