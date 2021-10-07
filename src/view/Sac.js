import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Listesac from '../component/Listesac'
import Page1 from '../component/page1';


function Sac() {
    const [listsac, setListsac] = useState([])  //


    useEffect(() => {
        const list1 = [
          { id: 1, url: 'sac1.jpg', title: 'Collection 2021', description: '79.00 TND' , caracteristique: 'Couleur:	Bleu Ciel '},
          { id: 2, url: 'sac2.jpg', title: 'Collection 2021', description: '79.500 TND' ,caracteristique: 'Couleur:Jaune'},
          { id: 3, url: 'sac3.jpg', title: 'Collection été 2021', description: '65.500 TND'  ,caracteristique: 'Couleur:Beige'},
          { id: 4, url: 'sac4.jpg', title: 'Collection Hiver 2020', description: '69.900 TND', caracteristique: 'Couleur:Noir' },
          { id: 5, url: 'sac5.jpg', title: ' Collection 2020', description: '89.500 TND', caracteristique: 'Couleur:Noire' },
          { id: 6, url: 'sac6.jpg', title: 'Collection 2021 ', description: '55.590 TND',caracteristique: 'Couleur:Maron' },
          { id: 7, url: 'sac7.jpeg', title: 'Collection 2021 ', description: '55.590 TND',caracteristique: 'Couleur:Gris' },
          { id: 8, url: 'sac8.jpg', title: 'Collection 2021 ', description: '95.590 TND',caracteristique: 'Couleur:Noire' }
          
    
        ]
        setTimeout(() => {
          setListsac(list1);
        }, 2000);
      }, [])
    return (
      <Row>
           <Col> <Listesac listsac={listsac}   /> </Col>
           <Page1 />
      </Row>
    )
    
}
export default Sac