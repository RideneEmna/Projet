import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeAuth } from '../redux/slice';
import Filter from '../view/filter';
import Search from './Search';
// import SearchOutlined  from  '@ant-design/icons'
import SearchIcon from '@mui/icons-material/Search';


function Navbars() {
  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth)

  return (

    <nav className="navbar navbar-light bg-light" >
      
      <div className="container-fluid "  >
        <Link to="/home" className="nav-link"> <img src="H&M.png" height="50px" width="100px" /> </Link>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-danger" type="submit">Search</button>
        </form> */}
        {/* <SearchOutlined /> */}
        
        <form className="d-flex">
        <Search/>
        <img src="iconesea.jpg" height="50px" width="100px" /> 
        {/* <SearchIcon className=" large" /> */}
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
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Catégoris</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">

            <Link to="/robe" className="nav-link"> Robe</Link>
            <Link to="/jube" className="nav-link"  >  Jube</Link>
            <Link to="/pull" className="nav-link"> Pull</Link>
            <Link to="/sousvet" className="nav-link"> Sous-vétement</Link>
            <Link to="/sac" className="nav-link"> Sac</Link>
            <Link to="/pant" className="nav-link"  >  Pantalon</Link>
            <Link to="/acc" className="nav-link">Accessoire</Link>

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
