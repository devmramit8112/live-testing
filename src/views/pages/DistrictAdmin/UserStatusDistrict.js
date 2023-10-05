import React from 'react'

const UserStatusDistrict = () => {
  return (
    <div className="Container">
      <div className="card">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Users Status</h4>
          <h5> Dated:</h5>
        </div>
        <div className="card-body">
          <from>
            <div className="row mb-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">Date From</div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <input className="form-control" type="date"></input>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">Date To</div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <input className="form-control" type="date"></input>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                Institute Category
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <input className="form-select"></input>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                Institute Type
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <input className="form-select"></input>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-2">
                <button type="button" className="btn btn-sm btn-primary">
                  View User Status
                </button>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-2">
                <textarea className="form-control" disabled></textarea>
              </div>
            </div>
          </from>
        </div>
      </div>
    </div>
  )
}

export default UserStatusDistrict
