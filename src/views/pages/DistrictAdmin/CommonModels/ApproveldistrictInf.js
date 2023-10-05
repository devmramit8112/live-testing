import React, { useState, useEffect } from 'react'
import { callApi } from 'src/views/CommonModels/CallApi'
const ApproveldistrictInf = ({ userid, onDataChange }) => {
  const [userData, setuserData] = useState([])
  const [isDisabled, setIsDisabled] = useState(true)
  const [isRejectedEmail, setRejectedEmail] = useState(true)
  const [isRejectedMobile, setRejectedMobile] = useState(true)
  const [isVisible, setVisible] = useState(true)
  let result = userid.replaceAll('/', '_')
  const role = localStorage.getItem('userrole')
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  let api2 = ''
  if (role === 'ROLE_A') {
    api2 = `${apiPrefix}/admin/approval/distrtciapproval/${result}`
  } else if (role === 'ROLE_S') {
    api2 = `${apiPrefix}/state/approval/distrtciapproval/${result}`
  }

  useEffect(() => {
    callApi(api2)
      .then((response) => {
        setuserData(response[0])
        onDataChange(response.account_Activated, response.rejectreason)
        if (response.emailid_rejected != null && response.mobile_rejected != null) {
          setRejectedEmail(true)
          setRejectedMobile(true)
        } else {
          setRejectedEmail(false)
          setRejectedMobile(false)
        }
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [userid])
  return (
    <div>
      <div className="card-header text-center p-3 mb-3 Headingcolorcard">
        <h3>District Admin Informtion</h3>
        <h4>Transection ID: </h4>
      </div>
      <div className="card-body">
        <from>
          <div className="row mb-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">User ID</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control" disabled value={userData.userID}></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">Full Name</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control" disabled value={userData.userName}></input>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2"> EMail ID</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              {isRejectedEmail ? (
                <input className="form-control" disabled value={userData.emailid_rejected}></input>
              ) : (
                <input className="form-control" disabled value={userData.emailID}></input>
              )}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">Mobile No</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              {isRejectedMobile ? (
                <input className="form-control" disabled value={userData.mobile_rejected}></input>
              ) : (
                <input className="form-control" disabled value={userData.mobile}></input>
              )}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">State</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control" disabled value={userData.statename}></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">District</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control" disabled value={userData.districtname}></input>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">UserType</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control" disabled value={userData.userType}></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">Dasignation</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control" disabled value={userData.designation}></input>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">Speciality</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control" disabled value={userData.specialityID}></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              Registration Type
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control" disabled value={userData.statename}></input>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              Date Of Registration Certificate Issue
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control" disabled value={userData.userType}></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              Registration Number
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
              <input className="form-control" disabled value={userData.statename}></input>
            </div>
          </div>
        </from>
      </div>
    </div>
  )
}

export default ApproveldistrictInf
