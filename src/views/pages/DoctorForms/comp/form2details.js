import React from 'react'

const form2details = () => {
  return (
    <div className="card">
      <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
        <h4>Form-II Medical Legal Report- Injury</h4>
        <h5 style={{ color: 'red' }}>[Note: Fields marked * are mandatory]</h5>
      </div>
      <div className="card-body">
        <div className="row justify-content-center">
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Name:</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Yes</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Relation Name (Relation Type)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Yes</div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Gender:</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Yes</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Marital Status:</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Yes</div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Victim ID:</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Yes</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Transaction ID:</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Yes</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default form2details
