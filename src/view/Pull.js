import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Listepull from '../component/Listepull';
import Page1 from '../component/page1';


function Pull() {
    const [listpull, setListpull] = useState([])  //


    useEffect(() => {
        const list1 = [
          { id: 1, url: 'pull1.jpg', title: 'PLAM SPRINCS/été 2021', description: '79.00 TND' , caracteristique: 'Couleur:	pink '},
          { id: 2, url: 'pull2.jpg', title: 'été 2021', description: '79.00 TND' ,caracteristique: 'Couleur:darck '},
          { id: 3, url: 'pull3.jpg', title: ' été 2021', description: '97.500 TND'  ,caracteristique: 'Couleur:Bleu ciel'},
          { id: 4, url: 'img5.jpg', title: ' Hiver 2021', description: '95.00 TND', caracteristique: 'Couleur:Beige ' },
          { id: 5, url: 'img4.jpg', title: '  Hiver 2021', description: '89.500 TND', caracteristique: 'Couleur:Beige ' },
          { id: 6, url: 'pull6.jpg', title: 'Hiver 2021 ', description: '55.590 TND',caracteristique: 'Couleur:Jaune moutarde ' },
          { id: 7, url: 'pull4.jpg', title: 'Hiver 2021 ', description: '55.590 TND',caracteristique: 'Couleur:Jaune moutarde ' },
          { id: 8, url: 'pull5.jpg', title: '  Hiver 2021', description: '89.500 TND', caracteristique: 'Couleur:Beige ' },
        ]
        setTimeout(() => {
          setListpull(list1);
        }, 2000);
      }, [])
    return (

      <Row>
           <Col> <Listepull listpull={listpull}   /> </Col>
           <Page1 />
      </Row>
    
     
    )
    
}

export default Pull
