import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TechnicalProfile = ({ onInputChange, formData, errors, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('')
  const [options, setOptions] = useState([])
  const [inputFields, setInputFields] = useState([])
  const [spcislistmastercode, setSpcislistmastercode] = useState([])

  useEffect(() => {
    fetchData()
    fetchSpecialists()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_PREFIX}/alluser/all/doctorRegestationTypeMasterddlActiveList`,
      )
      setOptions(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchSpecialists = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_PREFIX}/alluser/all/getspecialitymasterddlActiveList`,
      )
      setSpcislistmastercode(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value)
    setInputFields(Array.from({ length: parseInt(e.target.value) }, () => ''))
  }

  const renderInputFields = () => {
    const commonFields = (
      <>
        <div className="col-12 mt-2 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Date of Registration Certificate Issue{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 mt-2 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="date"
            placeholder=""
            name="DrRegIssuDate"
            value={inputFields[0] || onInputChange.DrRegIssuDate}
            className={`form-control ${errors.DrRegIssuDate ? 'is-invalid' : ''}`}
            onChange={(e) => handleInputChange(0, e)}
          />
          {errors.DrRegIssuDate && <div className="invalid-feedback">{errors.DrRegIssuDate}</div>}

        </div>
        <div className="col-12 mt-3 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Doctor Registration Number <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 mt-3 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="text"
            name="drrno"
            placeholder="Enter Doctor Registration Number"
            value={inputFields[1] || onInputChange.drrno}
            className={`form-control ${errors.drrno ? 'is-invalid' : ''}`}
            onChange={(e) => handleInputChange(1, e)}
          />
          {errors.drrno && <div className="invalid-feedback">{errors.drrno}</div>}

        </div>
      </>
    )

    if (selectedOption === '1' || selectedOption === '2') {
      return commonFields
    } else if (selectedOption === '3' || selectedOption === '4') {
      return (
        <>
          <div className="col-12 mt-3 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            State to which Council belongs{' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-12 mt-3 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <select
              className={`form-select ${errors.SpecialityID ? 'is-invalid' : ''}`}
              aria-label="Default select example" name="SpecialityID">
              <option>Select Specialist</option>
              {spcislistmastercode.map((Specialist) => (
                <option key={Specialist[0]} value={Specialist[0]}>
                  {Specialist[1]}
                </option>
              ))}
            +</select>
            {errors.SpecialityID && <div className="invalid-feedback">{errors.SpecialityID}</div>}

          </div>
          {commonFields}
        </>
      )
    }
    return null
  }

  const handleSpecialistChange = (e) => {
    onInputChange('SpecialityID', e.target.value)
  }

  const handleRegistrationTypeChange = (e) => {
    setSelectedOption(e.target.value)
    onInputChange('drRegType', e.target.value)
  }
  const handleInputChange = (index, e) => {
    const { name, value } = e.target
    const updatedFields = [...inputFields]
    updatedFields[index] = e.target.value
    setInputFields(updatedFields)
    onInputChange(name, value)
  }

  return (
    <div>
      <div className="row mt-2">
        <div className="col-12 mt-2 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Specialist<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 mt-2 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <select
            className={`form-select ${errors.SpecialityID ? 'is-invalid' : ''}`}
            aria-label="Default select example"
            name="SpecialityID"
            value={onInputChange.SpecialityID}
            onChange={handleSpecialistChange}
          >
            <option>Select Specialist</option>
            {spcislistmastercode.map((Specialist) => (
              <option key={Specialist[0]} value={Specialist[0]}>
                {Specialist[1]}
              </option>
            ))}
          </select>
          {errors.SpecialityID && <div className="invalid-feedback">{errors.SpecialityID}</div>}

        </div>
        <div className="col-12 mt-2 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Doctor Registration Type
          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 mt-2 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <select
            className={`form-select ${errors.drRegType ? 'is-invalid' : ''}`}
            value={onInputChange.drRegType}
            name="drRegType"
            onChange={handleRegistrationTypeChange}
          >
            <option>Select Doctor Registration Type</option>
            {options.map((reg) => (
              <option key={reg[0]} value={reg[0]}>
                {reg[1]}
              </option>
            ))}
          </select>
          {errors.drRegType && <div className="invalid-feedback">{errors.drRegType}</div>}

        </div>
        {renderInputFields()}
      </div>
    </div>
  )
}

export default TechnicalProfile
