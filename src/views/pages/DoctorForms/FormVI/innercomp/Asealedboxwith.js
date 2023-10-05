import React from 'react'

const Asealedboxwith = () => {
  return (
    <div className="container">
      <div className="card card-body">
        <div className="row mb-3">
          <div className="col-4">(1) Stomach With Contents</div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            (2) Part of Small and{' '}
            <label className="form-check-label" htmlFor="flexCheckChecked1">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <strong>Large Intestine</strong>
              </div>
            </label>{' '}
            with contents
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4">
            (3) Half of each kidney ,pieces of spleen and of liver with gall bladder all preserved
            in{' '}
          </div>
          <div className="col-4">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">(4) Sample of preservative</div>
        </div>
        <div className="row mb-3">
          <div className="col-4">(5) Blood</div>
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

export default Asealedboxwith
