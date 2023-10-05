import React, { useState } from 'react'

const BodyInquestPaperRD = (props) => {
  return (
    <div>
      <div className="text-center p-3 mb-3">
        <h4>{props.title}</h4>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Date of reciept of Body/Inquest papers
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input name="patient_name" type="date" className="form-control" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Time of reciept of Body/Inquest papers
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input name="patient_name" type="time" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Date of commencement of Autopsy
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input name="patient_name" type="date" className="form-control" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Time of commencement of Autopsy
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input name="patient_name" type="time" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Whence brought/referral (Max. 4000 Characters):
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input name="patient_name" type="text" className="form-control" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyInquestPaperRD
