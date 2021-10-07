import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Listeacc from '../component/Listacc'
import Page1 from '../component/page1';


function Jube() {
    const [listacc, setListacc] = useState([])  //


    useEffect(() => {
        const list1 = [
          { id: 1, url: 'acc1.jpg', title: 'PLAM SPRINCS/été 2021', description: '79.00 TND' , caracteristique: 'Couleur:Doré'},
          { id: 2, url: 'acc4.jpg', title: ' été 2021', description: '97.500 TND'  ,caracteristique: 'Couleur:Bleu ciel'},
          { id: 3, url: 'acc5.jpg', title: ' Hiver 2021', description: '95.00 TND', caracteristique: 'Couleur:Beige ' },
          { id: 4, url: 'acc6.jpg', title: 'Hiver 2021 ', description: '55.590 TND',caracteristique: 'Couleur:Jaune moutarde ' },
          { id: 5, url: 'acc2.jpg', title: '  Hiver 2021', description: '89.500 TND', caracteristique: 'Couleur:Beige ' },
          { id: 6, url: 'img3.jpg', title: 'été 2021', description: '58.900 TND' ,caracteristique: 'Couleur:Doré  '},
    
        ]
        setTimeout(() => {
          setListacc(list1);
        }, 2000);
      }, [])
    return (
      <Row>
           <Col> <Listeacc listacc={listacc}   /> </Col>
           <Page1 />
      </Row>
    )
    
}
export default Jube