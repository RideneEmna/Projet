import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeAuth } from '../redux/slice';
import Filter from '../view/filter';




function Navbars() {
  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth)

  return (

    <nav className="navbar navbar-light bg-light" >
      <div className="container-fluid  "  >
        <Link to="/home" className="nav-link"> <img src="H&M.png" height="50px" width="100px" /> </Link>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-danger" type="submit">Search</button>
        </form>
        <Nav className="">
          {auth && <Button className='btn btn-primary' onClick={() => dispatch(changeAuth(!auth))}>Logout  </Button>}
          {!auth && <Link to="/login" className="nav-link"  > <img width="20px" src="login.jpg" /> Login</Link>}
          {!auth && <Link to="/singup" className="nav-link"> <img width="20px" src="singup.jpg" /> Singup</Link>}
        </Nav>
        {/* <h1 class="text-secondary h4 " >Hennes & Mauritz</h1> */}

        <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>





    //   <>
    //   <Navbar bg="light" variant="light">
    //     <Container>
    //     {/* <Navbar.Brand href="#home">home</Navbar.Brand> */}
    //     <Nav className="me-auto">
    //     <Link to="/home" className="nav-link"> <img  src="new.jpg" height="50px" width="50px" /> </Link>

    //     </Nav>
    //     {auth && <Button className='btn btn-primary' onClick={() =>dispatch(changeAuth(!auth)) }>Logout  </Button>}
    //     {/* <Form className="d-flex">
    //     <FormControl
    //       type="search"
    //       placeholder="Search"
    //       className="mr-2"
    //       aria-label="Search"
    //     />
    //     <Button variant="outline-success">Search</Button>
    //   </Form> */}
    //   {!auth  && <Link to="/singup" className="nav-link"> <img  width="20px" src="singup.jpg"/> Singup</Link>}
    //   {!auth  && <Link to="/login" className="nav-link"  > <img  width="20px" src="login.jpg"/> Login</Link>}
    //     </Container> 
    //   </Navbar>
    // </>
  )
}

export default Navbars
