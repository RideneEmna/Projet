import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer  from '../component/footer';
import Page1 from '../component/page1';

function Home() {
    return (
      <div>
        
        Home
      
        <Page1/>
        
      </div>
//  <nav className="navbar navbar-light bg-light  ">
//   <div className="container-fluid  " >
   
//     <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//       <div className="offcanvas-header">
//         <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
//         <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//       </div>
//       <div className="offcanvas-body">
//         <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Link</a>
//           </li>
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Dropdown
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
//               <li><a className="dropdown-item" href="#">Action</a></li>
//               <li><a className="dropdown-item" href="#">Another action</a></li>
//               <li>
//                 <hr className="dropdown-divider"/>
//               </li>
//               <li><a className="dropdown-item" href="#">Something else here</a></li>
//             </ul>
//           </li>
//         </ul>
//         <form className="d-flex">
//           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//           <button className="btn btn-outline-success" type="submit">Search</button>
//         </form>
//       </div>
//     </div>
//   </div>
// </nav> 











//         <Nav classNameName="navbar navbar-dark bg-dark">
//   <div classNameName="container-fluid">
  
  
 
 
//     <Link  to="" style={{fontFamily: "'Ruthie', cursive"}} classNameName="navbar-brand" > Store </Link>

//     <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//       <span classNameName="navbar-toggler-icon"></span>
//     </button>
    
//     <div classNameName="collapse navbar-collapse" id="navbarTogglerDemo02">
//     <Link to="/home" classNameNameName="nav-link"> Home</Link>
//       <form classNameName="d-flex">
//         <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button classNameName="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </Nav>
    )
}

export default Home
