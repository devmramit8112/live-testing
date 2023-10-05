import React, { useState, useEffect } from 'react'
import axios from 'axios'

const InstituteDetail = ({ formData, errors, onChange }) => {
  const [healthinstitutetypeid, sethealthinstitutetypeid] = useState([])
  const [instcategory, setinstcategory] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [instcategory, regTypes] = await Promise.all([
        axios.get(`${process.env.REACT_APP_API_PREFIX}/alluser/all/getinstituteTypemaster`),
        axios.get(`${process.env.REACT_APP_API_PREFIX}/alluser/all/getinstitutecategorymasterddlActiveList`),
      ])
      sethealthinstitutetypeid(regTypes.data)
      setinstcategory(instcategory.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  }

  return (
    <>
      <div className="text-center mt-4">
        <h5>Institute Detail</h5>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Institute Name<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            name="healthInstituteName"
            type="text"
            value={formData.healthInstituteName}
            onChange={handleInputChange}
            className={`form-control ${errors.healthInstituteName ? 'is-invalid' : ''}`}
          />
          {errors.healthInstituteName && <div className="invalid-feedback">{errors.healthInstituteName}</div>}

        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Institute Type<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <select
            aria-label="Default select example"
            name="InstituteID"
            value={formData.InstituteID}
            onChange={handleInputChange}
            className={`form-control ${errors.InstituteID ? 'is-invalid' : ''}`}
          >
            <option>Select Institute Category </option>
            {instcategory.map((reg) => (
              <option key={reg[0]} value={reg[0]}>
                {reg[1]}
              </option>
            ))}
          </select>
          {errors.InstituteID && <div className="invalid-feedback">{errors.InstituteID}</div>}
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Institute Category<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <select
            className={`form-control ${errors.healthInstituteCateID ? 'is-invalid' : ''}`}
            aria-label="Default select example"
            onChange={handleInputChange}
            name="healthInstituteCateID"
            value={formData.healthInstituteCateID}

          >
            <option>Select Institute Category </option>
            {instcategory.map((reg) => (
              <option key={reg[0]} value={reg[0]}>
                {reg[1]}
              </option>
            ))}
          </select>
          {errors.healthInstituteCateID && <div className="invalid-feedback">{errors.healthInstituteCateID}</div>}

        </div>
      </div>
    </>
  )
}

export default InstituteDetail
