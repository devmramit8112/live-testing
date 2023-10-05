import React from 'react'

const Tissueskept = () => {
  return (
    <div className="container">
      <div className="card card-body">
        <div className="row mb-3">
          <div className="col-4">Tissues kept for histopathological examination</div>
          <div className="col-4">
            <input name="patient_name" type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-3 justify-content-center">
          <span>
            <button className="btn btn-sm bg-primary text-white m-2">Add to list </button>
            <button className="btn btn-sm bg-success text-white m-2">Update</button>
            <button className="btn btn-sm bg-danger text-white m-2">Delete</button>
            <button className="btn btn-sm bg-dark text-white m-2">Cancel</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Tissueskept
