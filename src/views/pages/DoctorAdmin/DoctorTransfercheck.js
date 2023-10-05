import React from 'react'
import DistrictDropdownSelection from '../AdminReg/userRegistrationForms/commonComponentForRegistration/DistrictDropdownSelection'

const DoctorTransfercheck = () => {
  return (
    <div className="card mb-2">
      <div className="card-header text-center">
        <h4>MedLEaPR Doctor Transfer</h4>
      </div>
      <div className="card-body">
        <p style={{ color: 'red' }}> [Note: Fields marked * are mandatory]</p>

        <div className="card">
          <div className="card-header text-center">
            <h4>In case Transfer Select Your New Institute</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <DistrictDropdownSelection />
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
                Institute Type
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
                <input className="form-select"></input>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
                Institute Where You Transfered
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
                <input className="form-select"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorTransfercheck
