import React from 'react'
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { FacebookOutlined } from 'antd'

import { Link } from 'react-router-dom';
import Page1 from './page1';

function Footer() {
    return (
        <>
            {/* <FacebookOutlined /> */}
            <Navbar className="navbar navbar-light bg-light" >


                <Container>
                    <Nav className="me-auto">
                                <a href="https://www.facebook.com/hmMiddleEast" className="nav-link"> <img src="iconefb.png" height="40" width="40" />Facebbok</a>
                                <a href="https://www.instagram.com/hm/" className="nav-link"> <img src="iconeins.png" height="40" width="40" />Instagram</a>
                                <a href=" https://twitter.com/hm?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="nav-link"> <img src="iconetw.png" height="40" width="40" />Twitter</a>
                           


                        {/* <Link to="https://www.instagram.com/hm/" className="nav-link"> <img src="iconefb.png" height="40" width="40" />  Facebook</Link> */}
                        {/* <Link to="/posts" className="nav-link" > <img src="iconeins.png" height="40" width="40" />  Instagram</Link> */}
                        {/* <Link to="/add" className="nav-link"> AddPost</Link> */}
                    </Nav>
                  
                </Container>
                
                {/* <div>
            <ul>
                <li>
                    <Link to="/home"> Home</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/profile"> Profile</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/login"> Login</Link>
                </li>
            </ul>
        </div> */}
            </Navbar>

        </>
    )
}

export default Footer
