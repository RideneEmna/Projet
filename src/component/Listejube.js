import React from 'react'
import {Container, Col, Row } from 'react-bootstrap';
import Card1 from './Card1';



function Liste({ listjube }) {
    console.log(listjube);
    return (
        <div className='container-xxl my-md-4'>
        <div className='  ps-lg-4'>
<Container fluid className= 'pt-5'>
            <Row >
                {listjube.map((v, i) => (
                    <Col  lg='4' sm ='6' xs='12' key={i} className='mb-3' >
                        <Card1 value={v}  />
                        
                    </Col>

                ))}

            </Row>
            </Container>
        </div>
        </div>

        
        
    )
}

export default Liste