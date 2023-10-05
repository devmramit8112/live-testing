import React from 'react'

const AnyDetails = () => {
  return (
    <div className="container">
      <div className="card card-body">
        <div className="row mb-3">
          <div className="col-4">Any Other Detail</div>
          <div className="col-4">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnyDetails
