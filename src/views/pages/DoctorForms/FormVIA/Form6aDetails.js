import React from 'react'

const Form6aDetails = () => {
  return (
    <div className="card mt-2 mb-2">
      <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
        <h4>Form VI: Post Mortem Examination Report (FOETUS)</h4>
        <h5 style={{ color: 'red' }}>[Note: Fields marked * are mandatory]</h5>
      </div>
      <div className="card-body">
        <div className="row justify-content-center">
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">Name of Mother :</div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">Yes</div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">Gender of foetus :</div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">Yes</div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">Victim ID :</div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">Yes</div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">Transaction ID :</div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">Yes</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form6aDetails
