import React, { useState, useEffect } from 'react'
import axios from 'axios'

const StateDropDownlist = ({ formData, errors, onChange }) => {
  const [statecode, setStatecode] = useState([])
  const [selectedState, setSelectedState] = useState('')

  useEffect(() => {
    // Fetch states from the API
    axios
      .get(`${process.env.REACT_APP_API_PREFIX}/alluser/all/getstateactivestatelist`)
      .then((response) => setStatecode(response.data))
      .catch((error) => console.error('Error fetching states:', error))
  }, [])
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <label className="form-label">
          Select State <span className="text-danger">*</span>
        </label>
      </div>
      <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <select
          className={`form-select ${errors.scode ? 'is-invalid' : ''}`}
          name="scode"
          value={formData.scode}
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
    </>
  )
}

export default StateDropDownlist
