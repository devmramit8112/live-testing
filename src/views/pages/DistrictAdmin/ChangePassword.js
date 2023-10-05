import React from 'react'

const ChangePassword = () => {
  return (

      <div className="card mt-2">
        <div className="card-header text-center">
          <h4>CHANGE PASSWORD</h4>{' '}
        </div>
        <div className="card-body">
          <h5>Please change your password.... </h5>
          <div className="row mb-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">UserName:</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control"></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">User Id:</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control" disabled></input>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              Old Password (Password received in SMS)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control"></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">New Password</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control"></input>{' '}
              <p>Password should be b/w 6 to 50 characters including #,@,$</p>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              Confirm New Password
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control"></input>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2"></div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
              <button type="button" className="btn btn-sm btn-primary">
                ok
              </button>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default ChangePassword
