import React from "react";
import logoAz from './assets/allianz-logo.png';
import { useLocation } from "react-router-dom";

const ValuationResults = () => {

    const { state } = useLocation();
    const {  vehicleType,make,model,year} = state || {};

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src={logoAz} alt="Allianz" height="30" />
          </a>
          <div className="navbar-text text-white ms-auto">
            <small>Step 3 of 3: Valuation Results</small>
          </div>
        </div>
      </nav>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Vehicle Valuation Results</h4>
              </div>
              <div className="card-body">
                <div className="alert alert-success">
                  <h5>{year} {make.label} {model.label}</h5>
                  <p className="mb-1">Gasoline | 25,000 miles | Sedan</p>
                </div>

                <div className="valuation-result text-center py-4">
                  <h6 className="text-muted">Estimated Market Value Range</h6>
                  <h2 className="display-4 fw-bold text-primary">LKR 2,500,000</h2>
                  <p className="text-muted">Based on current market data and comparable sales</p>
                </div>

                <div className="valuation-details mt-4">
                  <h5 className="mb-3">Valuation Details</h5>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="table-light">
                        <tr>
                          <th>Factor</th>
                          <th>Impact on Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Market Demand</td>
                          <td className="text-success">+ High demand for this model</td>
                        </tr>
                        <tr>
                          <td>Mileage</td>
                          <td className="text-success">+ Below average mileage</td>
                        </tr>
                        <tr>
                          <td>Condition</td>
                          <td className="text-success">+ Excellent condition (assumed)</td>
                        </tr>
                        <tr>
                          <td>Regional Pricing</td>
                          <td className="text-warning">± Average for your region</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="valuation-actions mt-4">
                  <div className="d-grid gap-3">
                    <button className="btn btn-primary btn-lg">Save This Valuation</button>
                    <button className="btn btn-outline-primary">Get Insurance Quote</button>
                    <a href="search.html" className="btn btn-outline-secondary">Search Another Vehicle</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-header bg-light">
                <h5 className="mb-0">How We Calculate Your Vehicle's Value</h5>
              </div>
              <div className="card-body">
                <p>Allianz Vehicle Valuation Service uses a proprietary algorithm that analyzes:</p>
                <ul>
                  <li>Recent sales data for similar vehicles in your area</li>
                  <li>Current market trends and demand</li>
                  <li>Vehicle specifications and optional equipment</li>
                  <li>Mileage and condition adjustments</li>
                  <li>Seasonal pricing fluctuations</li>
                </ul>
                <p className="mb-0">
                  For the most accurate valuation, consider scheduling a professional inspection to verify your vehicle's condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="text-center">
            <p className="mb-0">© 2023 Allianz Vehicle Valuation Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ValuationResults;
