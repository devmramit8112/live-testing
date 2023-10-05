import React, { useState } from 'react'
import MultiAdminReg from './MultiAdminReg'
import AdminHeader from './AdminHeader'
import BackLogin from './BackLogin'
// import imagedata from "./nic.png";
// import haryanapic from './logo.png';
// import mainlogo from './main-logo.png';

const StateAdminMultiForm = (props) => {
  const [showDiv, setShowDiv] = useState(false)
  const [hideButton, setHideButton] = useState(false)

  const handleButtonClick = () => {
    setShowDiv(!showDiv)
    setHideButton(true)
  }

  return (
    <div className="container shadow-lg mb-3">
      <div className="row mb-5">
        <AdminHeader />
        <div className="col text-center p-4 shadow-lg bg-primary text-white">
          <h4>State Admin Registration Form</h4>
        </div>
        <BackLogin />
      </div>
      <div className="row p-3">
        <div className="form-group row mt-4">
          <label className=" col-sm-2 col-form-label">Select State *</label>
          <div className="col-sm-5">
            <select className="form-select" aria-label="Default select example">
              <option selected="">Select State</option>
              <option value={1}>UP</option>
              <option value={2}>CP</option>
            </select>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2">
          {!hideButton && (
            <button type="button" className="btn btn-sm btn-primary" onClick={handleButtonClick}>
              Proceed
            </button>
          )}
        </div>
        {showDiv && <MultiAdminReg />}
      </div>
      {/* this is footer content area  */}
    </div>
  )
}

export default StateAdminMultiForm
