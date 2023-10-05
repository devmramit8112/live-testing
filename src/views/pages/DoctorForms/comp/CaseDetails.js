import React from 'react'

const CaseDetails = () => {
  return (
    <div className="Container">
      <div className="">
        <div className="text-center p-3 mb-3 ">
          <h4>Case Details</h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                Arrival Date & Time<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <input name="patient_name" type="text" className="form-control" />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <div className="input-group">
                  <select name=" " id=" " className="form-select"></select>
                  <div className="input-group-append">
                    <span className="input-group-text">Hrs.</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <div className="input-group">
                  <select name=" " id=" " className="form-select"></select>
                  <div className="input-group-append">
                    <span className="input-group-text">Mins..</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                Examination Date & Time<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <input name="patient_name" type="text" className="form-control" />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <div className="input-group">
                  <select name=" " id=" " className="form-select"></select>
                  <div className="input-group-append">
                    <span className="input-group-text">Hrs.</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <div className="input-group">
                  <select name=" " id=" " className="form-select"></select>
                  <div className="input-group-append">
                    <span className="input-group-text">Mins..</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                Examination Place<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <input name="patient_name" type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseDetails
