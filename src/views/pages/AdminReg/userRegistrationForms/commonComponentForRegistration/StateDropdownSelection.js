import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StateDropdownSelection = ({ formData, errors, onChange }) => {
  const [statecode, setstatecode] = useState([]);
  const [dcode, setDistrictcode] = useState([]);
  const [selectedState, setSelectedState] = useState(''); // Updated to store state code directly
  const [selectedDistrict, setSelectedDistrict] = useState('');
  
  useEffect(() => {
    // Fetch states from the API...
    axios
      .get(`${process.env.REACT_APP_API_PREFIX}/alluser/all/getstateactivestatelist`)
      .then((response) => setstatecode(response.data))
      .catch((error) => console.error('Error fetching states:', error));
  }, []);

  useEffect(() => {
    // Fetch districts when a state is selected.....
    if (selectedState) {
      axios
        .get(`${process.env.REACT_APP_API_PREFIX}/alluser/all/getdistrictddl/${selectedState}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          setDistrictcode(response.data);
        })
        .catch((error) => console.error('Error fetching districts:', error));
    } else {
      // If no state is selected, reset districts
      setDistrictcode([]);
    }
  }, [selectedState]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'scode') {
      setSelectedState(value);
    } else if (name === 'dcode') {
      setSelectedDistrict(value);
     // setSelectedPolice(value); // yahan 'pscode' ko 'dcode' ke value ke equal set kar rahe hain
    }
    
    onChange({ ...formData, [name]: value });
  };


  return (
    <>
      <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <label>
          Select State <span className="text-danger">*</span>
        </label>
      </div>
      <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <select
          className={`form-select ${errors.scode ? 'is-invalid' : ''}`}
          name="scode"
          value={selectedState} // Updated to use selectedState
          onChange={handleChange}
          required
        >
          <option value="">Select State</option>
          {statecode.map((state) => (
            <option key={state.statecode} value={state.statecode}>
              {state.statename}
            </option>
          ))}
        </select>
        {errors.scode && <div className="invalid-feedback">{errors.scode}</div>}
      </div>

      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <label>
          Select District <span className="text-danger">*</span>
        </label>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <select
          className={`form-select ${errors.dcode ? 'is-invalid' : ''}`}
          name="dcode"
          value={selectedDistrict} // Updated to use selectedDistrict
          onChange={handleChange}
          required
        >
          <option value="">Select District</option>
          {dcode.map((district) => (
            <option key={district[0]} value={district[0]}>
              {district[1]}
            </option>
          ))}
        </select>
        {errors.dcode && <div className="invalid-feedback">{errors.dcode}</div>}
      </div>
    </>
  );
};

export default StateDropdownSelection;
