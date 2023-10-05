import React from 'react'
const DoctorExaminationDE = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header bg-primary text-center ">
          <h5 className="text-white">Notification: Add New</h5>
        </div>
        <div className="card-body">
          <div className="row mt-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                  Certificate Type *<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                  <select name="DrpDesignation" id="DrpDesignation" className="form-select">
                    <option selected="selected" value="">
                      Select Certificate Type
                    </option>
                    <option value={1}>Active</option>
                    <option value={2}>De-Active</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                  Transaction ID *<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                  <select name="DrpDesignation" id="DrpDesignation" className="form-select">
                    <option selected="selected" value="">
                      Select Transaction ID
                    </option>
                    <option value={1}>Active</option>
                    <option value={2}>De-Active</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-4">
              <div className="row">
                <div className="col-6">
                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DoctorExaminationDE
