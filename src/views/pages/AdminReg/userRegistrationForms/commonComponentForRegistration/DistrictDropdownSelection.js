import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StateDropdownSelection from './StateDropdownSelection'

const DistrictDropdownSelection = () => {
  const [statecode, setStatecode] = useState('')
  const [districtcode, setDistrictcode] = useState([])
  const [state, setState] = useState({
    districtcode: '',
  })
  const [error, setError] = useState(null)

  const handledistrictdropdown = (scode) => {
    setStatecode(scode)
  }

  useEffect(() => {
    // Fetch districts when a state is selected
    if (statecode) {
      axios
        .get(`${process.env.REACT_APP_API_PREFIX}/alluser/all/getdistrictddl/${statecode}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          setDistrictcode(response.data)
        })
        .catch((error) => setError('Error fetching districts: ' + error))
    } else {
      // If no state is selected, reset districts
      setDistrictcode([])
    }
  }, [statecode])

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value
    setState((prevState) => ({
      ...prevState,
      districtcode: selectedDistrict,
    }))
  }

  return (
    <>
      <StateDropdownSelection onValueChange={handledistrictdropdown} />
      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        Select District
        <span className="alert">*</span>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleDistrictChange}
          value={state.districtcode}
        >
          <option value="">Select District</option>
          {districtcode.map((district) => (
            <option key={district[0]} value={district[1]}>
              {district[1]}
            </option>
          ))}
        </select>
      </div>
      {error && <div className="error-message">{error}</div>}
    </>
  )
}

export default DistrictDropdownSelection
