import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PoliceStationDropdownSelection({ onInputChange, onDistrictChange, onPoliceChange }) {
  const [states, setStates] = useState([])
  const [selectedState, setSelectedState] = useState('')
  const [districts, setDistricts] = useState([])
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [policeStations, setPoliceStations] = useState([])
  const [selectedPolice, setselectedPolice] = useState('')

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_PREFIX}/alluser/all/getstateactivestatelist`)
      .then((response) => setStates(response.data))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    if (selectedState) {
      axios
        .get(`${process.env.REACT_APP_API_PREFIX}/alluser/all/getdistrictddl/${selectedState}`)
        .then((response) => setDistricts(response.data))
        .catch((error) => console.error(error))
    }
  }, [selectedState])

  useEffect(() => {
    if (selectedDistrict) {
      axios
        .get(`${process.env.REACT_APP_API_PREFIX}/alluser/all/getpoliceStationlist/${selectedDistrict}`)
        .then((response) => {
          if (Array.isArray(response.data)) {
            setPoliceStations(response.data)
          } else {
            console.error('Invalid police stations data:', response.data)
          }
        })
        .catch((error) => console.error(error))
    }
  }, [selectedDistrict])

  const handleSateChange = (event) => {
    const value = event.target.value
    setSelectedState(value)
    onInputChange(value) // Notify parent of select change
  }

  const handleDistrictChange = (event) => {
    const value = event.target.value
    setSelectedDistrict(value)
    onDistrictChange(value) // Notify parent of district change
  }
  const handlePoliceChange = (event) => {
    const value = event.target.value
    setselectedPolice(value)
    onPoliceChange(value) // Notify parent of district change
  }

  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mb-4">
        <label>
          Select State <span className="text-danger">*</span>
        </label>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <select
          className="form-select"
          name="statecode"
          value={selectedState}
          onChange={handleSateChange}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.statecode} value={state.statecode}>
              {state.statename}
            </option>
          ))}
        </select>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <label>
          Select District <span className="text-danger">*</span>
        </label>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <select
          className="form-select"
          name="dcode"
          value={selectedDistrict}
          disabled={!selectedState}
          onChange={handleDistrictChange}
        >
          <option value="">Select District</option>
          {districts.map((district) => (
            <option key={district[0]} value={district[0]}>
              {district[1]}
            </option>
          ))}
        </select>
      </div>

      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
        <label>
          Select Police Station <span className="text-danger">*</span>
        </label>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <select
          className="form-select"
          value={selectedPolice}
          name="PSCODE"
          onChange={handlePoliceChange}
        >
          <option value="">Select Police Station</option>
          {policeStations.map((station) => (
            <option key={station[0]} value={station[0]}>
              {station[1]}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default PoliceStationDropdownSelection
