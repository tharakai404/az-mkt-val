import { useNavigate, Routes, Route } from 'react-router-dom';
import React from 'react';
import logoAz from './assets/allianz-logo.png'; 
import landingPhoto from './assets/vehicle-valuation.jpg'; 


function Landing() {

    const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a className="navbar-brand" href="#">
                 <img src={logoAz} alt="Allianz" height="30"/> 
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="verify.html">Get Started</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div className="container my-5">
        <div className="row">
            <div className="col-lg-6">
                <h1 className="display-4 fw-bold mb-4">Accurate Vehicle Valuations You Can Trust</h1>
                <p className="lead mb-4">Allianz Vehicle Valuation Service provides reliable, data-driven market values for your car, motorcycle, or commercial vehicle.</p>
                
                <button className="btn btn-primary" onClick={() => navigate('/verify')}>
                Get Your Valuation Now
                {/* <a className="btn btn-primary btn-lg px-4">Get Your Valuation Now</a> */}
                </button>
            </div>
            <div className="col-lg-6">
                <img src={landingPhoto} alt="Vehicle Valuation" className="img-fluid rounded shadow"/> 
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-12">
                <h2 className="text-center mb-5">Why Choose Allianz for Your Vehicle Valuation?</h2>
            </div>
            
            <div className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                        <div className="icon-box bg-light-primary text-primary mb-3">
                            <i className="bi bi-shield-check fs-2"></i>
                        </div>
                        <h5>Trusted Accuracy</h5>
                        <p>Our valuations are based on comprehensive market data and proprietary algorithms developed by industry experts.</p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                        <div className="icon-box bg-light-primary text-primary mb-3">
                            <i className="bi bi-graph-up fs-2"></i>
                        </div>
                        <h5>Real-Time Market Data</h5>
                        <p>We continuously update our database with the latest sales and market trends to provide current valuations.</p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                        <div className="icon-box bg-light-primary text-primary mb-3">
                            <i className="bi bi-piggy-bank fs-2"></i>
                        </div>
                        <h5>Insurance Integration</h5>
                        <p>Seamlessly connect your valuation to Allianz insurance products for accurate coverage and premiums.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h5>Allianz Vehicle Valuation Service</h5>
                    <p>Providing accurate and reliable vehicle market values since 1990.</p>
                </div>
                <div className="col-md-3">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="index.html" className="text-white">Home</a></li>
                        <li><a href="verify.html" className="text-white">Get Valuation</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Contact</h5>
                    <p>support@allianz-valuation.com</p>
                </div>
            </div>
             <hr/> 
            <div className="text-center">
                <p className="mb-0">© 2023 Allianz Vehicle Valuation Service. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Landing
