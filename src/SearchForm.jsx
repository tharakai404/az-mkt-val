import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logoAz from './assets/allianz-logo.png';
import AutoCompleteDropDown from './components/AutoCompleteDropDown';

const SearchForm = () => {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);

  const [vehicleType, setVehicleType] = useState('');
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState('');
  const [year, setYear] = useState('');
  const [makeQuery, setMakeQuery] = useState('');
  const [modelQuery, setModelQuery] = useState('');

  const token = 'valid-token-123';

  const [selectedFilm, setSelectedFilm] =  useState('');
  
  // const [selectedModel, setSelectedModel] =  useState('');

  const handleValueChange = (newValue) => {
    debugger;
    setSelectedFilm(newValue); // Update state
    console.log('Selected movie:', newValue); // Trigger your custom logic
    // Call any other method you need here
    setMakeQuery(newValue);
    setSelectedMake(newValue);
    setSelectedModel('');
    setModels([]);
    
  };

      const top100Films = [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
      ];

  const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  });

  useEffect(() => {
    // Fetch vehicle types and years on initial load
    api.get('/api/vehicle-types')
      .then((response) => setVehicleTypes(Array.isArray(response.data) ? response.data : []))
      .catch((error) => {
        console.error('Failed to load vehicle types', error);
        setVehicleTypes([]);
      });

    api.get('/api/years')
      .then((response) => setYears(Array.isArray(response.data) ? response.data : []))
      .catch((error) => {
        console.error('Failed to load years', error);
        setYears([]);
      });
  }, []);

  const handleVehicleTypeChange = (e) => {
    const type = e.target.value;
    setVehicleType(type);
    setSelectedMake('');
    setSelectedModel('');
    setMakes([]);
    setModels([]);

    api.get(`/api/makes?vehicleType=${encodeURIComponent(type)}`)
      .then((response) => setMakes(Array.isArray(response.data) ? response.data : []))
      .catch((error) => {
        console.error('Failed to load makes', error);
        setMakes([]);
      });
  };

  const handleMakeChange = (e) => {
    setMakeQuery(e.target.value);
    setSelectedMake('');
    setSelectedModel('');
    setModels([]);
  };

  const handleModelChange = (e) => {
    setModelQuery(e.target.value);
    setSelectedModel('');
  };

  // Fetch Makes with Autocomplete
  useEffect(() => {
   // if (makeQuery && makeQuery.length >= 3) {
      if (true) {
      api.get(`/api/makes?vehicleType=${encodeURIComponent(vehicleType)}`)
        .then((response) => setMakes(Array.isArray(response.data) ? response.data : []))
        .catch((error) => {
          console.error('Failed to load makes', error);
          setMakes([]);
        });
    } else {
      setMakes([]); // Clear makes if the query length is less than 3
    }
  }, [makeQuery]);

  // Fetch Models with Autocomplete
  useEffect(() => {
    // if (modelQuery.length >= 3 && selectedMake) {
      if (true) {
      api.get(`/api/models?make=${encodeURIComponent(selectedMake)}`)
        .then((response) => setModels(Array.isArray(response.data) ? response.data : []))
        .catch((error) => {
          console.error('Failed to load models', error);
          setModels([]);
        });
    } else {
      setModels([]); // Clear models if the query length is less than 3 or no make selected
    }
  }, [modelQuery, selectedMake]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      vehicleType,
      make: selectedMake,
      model: selectedModel,
      year,
      fuelType,
      mileage,
      minPrice,
      maxPrice,
      keywords,
    };
    console.log("Form Data:", formData);
    // send to backend as needed
  };
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src={logoAz} alt="Allianz" height="30" />
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
                <form id="vehicleSearchForm" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
                      <select
                        className="form-select"
                        id="vehicleType"
                        required
                        value={vehicleType}
                        onChange={handleVehicleTypeChange}
                      >
                        <option value="" disabled>Select Vehicle Type</option>
                        {vehicleTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="year" className="form-label">Year</label>
                      <select className="form-select" id="year" required value={year} onChange={(e) => setYear(e.target.value)}>
                        <option value="" disabled>Select Year</option>
                        {years.map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="vehicleType" className="form-label">Vehicle Make</label>
                      <AutoCompleteDropDown
                      name="Select Make"
                      top100Films={makes}
                     value={setSelectedMake}
                 //     onValueChange={handleValueChange}
                    />
                    </div>

                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="year" className="form-label">Vehicle Model</label>
                      <AutoCompleteDropDown
                      name="Select Models"
                   //   getOptionLabel={(option) => (option ? option.label || '' : '')}
                      top100Films={models}
                      value={setSelectedModel}
                      // onValueChange={handleValueChange}
                    />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <button type="submit" className="btn btn-primary w-100">Search</button>
                    </div>
                  </div>
                </form>      
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
