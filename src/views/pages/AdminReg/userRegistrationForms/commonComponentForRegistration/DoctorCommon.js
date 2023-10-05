import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DoctorCommon = ({ formData, errors, onChange }) => {
  const [instcategory, setinstcategory] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [instcategory] = await Promise.all([
        axios.get(`${process.env.REACT_APP_API_PREFIX}/alluser/all/getinstituteTypemaster`),
      ])
      setinstcategory(instcategory.data)
    } catch (error) {
      console.error(error)
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          UserType<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <select
            aria-label="Default select example"
            name="UserType"
            value={formData.UserType}
            onChange={handleChange}
            className={`form-control ${errors.UserType ? 'is-invalid' : ''}`}
          >
            <option selected="">Select User Type</option>
            <option value="Doctor">Doctor</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
          {errors.UserType && <div className="invalid-feedback">{errors.UserType}</div>}

        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Date of Retirement<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-">
          <input
            type="date"
            name="Retirement_date"
            value={formData.Retirement_date}
            onChange={handleChange}
            className={`form-control ${errors.Retirement_date ? 'is-invalid' : ''}`}
          />
          {errors.Retirement_date && <div className="invalid-feedback">{errors.Retirement_date}</div>}

        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Institute Type
          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <select
            className={`form-control ${errors.InstituteID ? 'is-invalid' : ''}`}
            aria-label="Default select example"
            name="InstituteID"
            value={formData.InstituteID}
            onChange={handleChange}
          >
            <option disabled>Select Institute Category </option>
            {instcategory.map((reg) => (
              <option key={reg[0]} value={reg[0]}>
                {reg[1]}
              </option>
            ))}
          </select>
          {errors.InstituteID && <div className="invalid-feedback">{errors.InstituteID}</div>}

        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Health Institute
          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <select
            className={`form-control ${errors.HealthInstituteId ? 'is-invalid' : ''}`}
            aria-label="Default select example"
            name="HealthInstituteId"
            value={formData.HealthInstituteId}
            onChange={handleChange}
          >
            <option selected="">Select District</option>
            <option value="No">NO</option>
            <option value="YES">Yes</option>
          </select>
          {errors.HealthInstituteId && <div className="invalid-feedback">{errors.HealthInstituteId}</div>}

        </div>
      </div>
    </>
  )
}

export default DoctorCommon
