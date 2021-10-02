import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';


function Page1() {
    return (
        <footer className="bd-footer py-5 mt-5 bg-light">


            <div className="container py-5  bg-light " >
                <div className="row " >
                    <div className="col-6 col-lg2 mb-3">
                        <h5>   SHOP </h5>
                        <Link to="/home" className="nav-link"> Femme</Link>
                        <Link to="/login" className="nav-link"  >  Homme</Link>
                        <Link to="/singup" className="nav-link"> Enfant</Link>
                        <Link to="/singup" className="nav-link"> Bébé</Link>
                        <Link to="/home" className="nav-link"> H&M Home</Link>
                    </div>

                    <div className="col-6 col-lg2 mb-3">
                    <h5>   HELP </h5>
                        <Link to="/login" className="nav-link"  >  Mon Compte</Link>
                        <Link to="/contact" className="nav-link"  >  Contact</Link>
                    </div>
                </div>


            </div>
            <Footer />




        </footer>


    )
}

export default Page1
