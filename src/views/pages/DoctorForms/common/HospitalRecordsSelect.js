import React, { useState } from 'react'

const HospitalRecordsSelect = () => {
  return (
    <div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Date of Arrival (Mother/Live foetus)
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input name="patient_name" type="date" className="form-control" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Time of Arrival (Mother/Live foetus)
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input name="patient_name" type="time" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Date of Foetal Death
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input name="patient_name" type="date" className="form-control" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Time of Death
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input name="patient_name" type="time" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Cental Registration No. of Hospital (Max. 50 Characters)
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input name="patient_name" type="text" className="form-control" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HospitalRecordsSelect
