import React, { useState, useEffect } from 'react'
import axios from 'axios'

const StatePersonalDetails = ({ onInputChange, onFileUpload }) => {
  const [designationcode, setdesgnationcode] = useState([])

  useEffect(() => {
    getDesginationMaster()
  }, [])

  const getDesginationMaster = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/alluser/all/getactiveddldesgnationAll`)
      setdesgnationcode(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    onInputChange(name, value)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    onFileUpload(file)
  }

  return (
    <>
      <div className="text-center mt-4 mb-2">
        <h5>Personal Detail</h5>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Name<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            placeholder="Name"
            className="form-control "
          />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Designation<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <select
            className="form-select"
            aria-label="Default select example"
            name="designationcode"
            onChange={handleInputChange}
          >
            <option>Select Designation </option>
            {designationcode.map((designation) => (
              <option key={designation[0]} value={designation[0]}>
                {designation[1]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row  mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Mobile Number
          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="text"
            name="mobile"
            onChange={handleInputChange}
            placeholder="Enter Mobile NO"
            className="form-control "
          />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Emailid<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="text"
            name="emailid"
            onChange={handleInputChange}
            placeholder="Enter Your Email ID"
            className="form-control "
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Upload Identity Card (Size-500kb, Type-pdf)
          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="file"
            name="identityCard"
            onChange={handleFileChange}
            accept=".pdf,.PDF"
            className="form-control"
          />
        </div>
      </div>
    </>
  )
}

export default StatePersonalDetails
