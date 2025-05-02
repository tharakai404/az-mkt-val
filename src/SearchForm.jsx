import React, { useState, useEffect } from 'react';

const SearchForm = () => {
  const [years, setYears] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');

  const modelOptions = {
    'Toyota': ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Prius'],
    'Honda': ['Accord', 'Civic', 'CR-V', 'Pilot', 'Odyssey'],
    'Ford': ['F-150', 'Escape', 'Explorer', 'Mustang', 'Focus'],
    'Chevrolet': ['Silverado', 'Equinox', 'Tahoe', 'Camaro', 'Malibu'],
    'BMW': ['3 Series', '5 Series', 'X3', 'X5', '7 Series'],
    'Mercedes': ['C-Class', 'E-Class', 'GLC', 'GLE', 'S-Class'],
    'Audi': ['A4', 'A6', 'Q5', 'Q7', 'A8'],
    'Tesla': ['Model 3', 'Model S', 'Model X', 'Model Y', 'Cybertruck']
  };

  const handleMakeChange = (e) => {
    const make = e.target.value;
    setSelectedMake(make);
    setModels(modelOptions[make] || []);
    setSelectedModel(''); // Reset model
  };

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearArray = [];
    for (let i = currentYear; i >= currentYear - 30; i--) {
      yearArray.push(i);
    }
    setYears(yearArray);
  }, []);
  return ( 
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a className="navbar-brand" href="index.html">
                <img src="img/allianz-logo.png" alt="Allianz" height="30"/>
            </a>
            <div className="navbar-text text-white ms-auto">
                <small>Step 2 of 3: Vehicle Details</small>
            </div>
        </div>
    </nav>

    <div className="container my-5">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="card shadow-sm">
                    <div className="card-header bg-primary text-white">
                        <h4 className="mb-0">Vehicle Search</h4>
                    </div>
                    <div className="card-body">
                        <form id="vehicleSearchForm">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                <label htmlFor="make" className="form-label">Make</label>
                                    <select className="form-select" id="make" required onChange={handleMakeChange} value={selectedMake}>
                                        <option value="" disabled>Select Make</option>
                                        {Object.keys(modelOptions).map(make => (
                                        <option key={make} value={make}>{make}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="model" className="form-label">Model</label>
                                    <select className="form-select" id="model" required disabled={!selectedMake} value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                                        <option value="" disabled>Select Model</option>
                                        {models.map(model => (
                                        <option key={model} value={model}>{model}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="year" className="form-label">Year</label>
                                    <select className="form-select" id="year" required defaultValue="">
                                      <option value="" disabled>Select Year</option>
                                      {years.map((year) => (
                                        <option key={year} value={year}>
                                          {year}
                                        </option>
                                      ))}
                                    </select>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="fuelType" className="form-label">Fuel Type</label>
                                    <select className="form-select" id="fuelType">
                                        <option value="" selected disabled>Select Fuel Type</option>
                                        <option value="Gasoline">Gasoline</option>
                                        <option value="Diesel">Diesel</option>
                                        <option value="Hybrid">Hybrid</option>
                                        <option value="Electric">Electric</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="mileage" className="form-label">Mileage (optional)</label>
                                    <input type="number" className="form-control" id="mileage" placeholder="e.g. 45000"/>
                                </div>
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="priceRange" className="form-label">Price Range (optional)</label>
                                <div className="d-flex align-items-center">
                                    <input type="number" className="form-control me-2" id="minPrice" placeholder="Min"/>
                                    <span className="mx-2">to</span>
                                    <input type="number" className="form-control ms-2" id="maxPrice" placeholder="Max"/>
                                </div>
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="keywords" className="form-label">Keywords (optional)</label>
                                <input type="text" className="form-control" id="keywords" placeholder="e.g. SUV, Automatic, AWD"/>
                                <small className="text-muted">Add any specific features or trim levels</small>
                            </div>
                            
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <a href="verify.html" className="btn btn-outline-secondary me-md-2">Back</a>
                                <button type="submit" className="btn btn-primary">Search Vehicle Value</button>
                            </div>
                        </form>
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
   )
}

export default SearchForm