import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';


function Page1() {
    return (
        <footer className="bd-footer py-5 mt-5 bg-light">


            <div className="container py-5  bg-light " >
                <div className="row " >
                    <div className="col-6 col-lg2 mb-3">
                        Shop
                    </div>

                    <div className="col-6 col-lg2 mb-3">
                        Help

                    </div>
                </div>


            </div>
            <Footer />

           


        </footer>


    )
}

export default Page1
