import React, { useState } from 'react'
import StateDropdownSelection from './StateDropdownSelection'
import OtpSection from './OtpSection'

const StateAdminReg = () => {
  const [showDiv, setShowDiv] = useState(false)
  const [hideOTPButton, setHideOTPButton] = useState(false)
  const [hideConfirmButton, setHideConfirmButton] = useState(false)
  const [showConfirmText, setShowConfirmText] = useState(false)

  const handleOTPButtonClick = () => {
    setShowDiv(!showDiv)
    setHideOTPButton(true)
  }

  const handleConfirmOTPClick = () => {
    setHideConfirmButton(true)
    setShowConfirmText(true)
  }

  return (
    <div className="container shadow-lg">
      <div className="row mt-2 p-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
              Person Name<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
              <input
                name="txtcontactPerson"
                type="text"
                maxLength={50}
                id="txtcontactPerson"
                className="form-control "
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
              Email ID<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
              <input
                name="txtemail"
                type="text"
                maxLength={50}
                id="txtemail"
                className="form-control "
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
              Mobile No<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
              <input
                name="txtcontactPerson"
                type="text"
                maxLength={50}
                id="txtcontactPerson"
                className="form-control "
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2">
          {!hideOTPButton && !showDiv && (
            <button type="button" className="btn btn-sm btn-primary" onClick={handleOTPButtonClick}>
              OTP
            </button>
          )}
        </div>

        {showDiv && !hideConfirmButton && (
          <>
            {' '}
            <OtpSection />
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2">
              <button type="button" className="btn btn-primary" onClick={handleConfirmOTPClick}>
                CONFIRM OTP
              </button>
            </div>
          </>
        )}
        {showConfirmText && <StateDropdownSelection />}
      </div>
    </div>
  )
}

export default StateAdminReg
