import React from 'react'

const Xrayplates = () => {
  return (
    <div className="container">
      <div className="card card-body">
        <div className="row mb-3">
          <div className="col-4">Identity Number's of plates</div>
          <div className="col-4">
            <input name="patient_name" type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">Quantity of plates</div>
          <div className="col-4">
            <input name="patient_name" type="text" className="form-control" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Xrayplates
