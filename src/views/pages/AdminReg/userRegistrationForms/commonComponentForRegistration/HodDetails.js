import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HodDetails = ({ formData, errors, onChange }) => {
  const [designationcode, setDesignationcode] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [designations] = await Promise.all([
        axios.get(`${process.env.REACT_APP_API_PREFIX}/alluser/all/getactiveddldesgnationAll`),
      ])
      setDesignationcode(designations.data)
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
      <div className="text-center mt-4">
        <h5>HOD Detail</h5>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          HOD Name<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            name="hodname"
            type="text"
            value={formData.hodname}
            onChange={handleChange}
            className={`form-control ${errors.hodname ? 'is-invalid' : ''}`}
          />
          {errors.hodname && <div className="invalid-feedback">{errors.hodname}</div>}

        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Designation<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-">
          <select
            className={`form-control ${errors.Designation ? 'is-invalid' : ''}`}
            aria-label="Default select example"
            name="Designation"
            value={formData.Designation}
            onChange={handleChange}
          >
            <option>Select Designation</option>
            {designationcode.map((Designation) => (
              <option key={Designation[0]} value={Designation[0]}>
                {Designation[1]}
              </option>
            ))}
          </select>
          {errors.Designation && <div className="invalid-feedback">{errors.Designation}</div>}

        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          HOD Mobile Number<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            name="hodmobile"
            value={formData.hodmobile}
            onChange={handleChange}
            type="text"
            className={`form-control ${errors.hodmobile ? 'is-invalid' : ''}`}
          />
          {errors.hodmobile && <div className="invalid-feedback">{errors.hodmobile}</div>}

        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          HOD Email Id<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-">
          <input
            name="hodemail"
            value={formData.hodemail}
            onChange={handleChange}
            type="text"
            className={`form-control ${errors.hodemail ? 'is-invalid' : ''}`}
          />
          {errors.hodemail && <div className="invalid-feedback">{errors.hodemail}</div>}

        </div>
      </div>
    </>
  )
}

export default HodDetails
