import React, {useState, useEffect } from 'react'
import { callApi } from 'src/views/CommonModels/CallApi'
import { HomeButton } from './Operationradionbutton'
const Formdetail = (props) => {
  const [userdata, setuserdata] = useState([])
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apidownload = `${apiPrefix}/user/form2/getpateintdetails/${props.trnid}`
  useEffect(() => {
    callApi(apidownload)
      .then((response) => {
        localStorage.setItem('gender', response.vtGenderID);
        setuserdata(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])
  return (
    <div className="card mt-2 mb-2">
      <div className="card-header text-center p-3 mb-2 Headingcolorcard" >
        <h4 className='' >{props.title}</h4>
        <h5 style={{ color: 'red' }}>[Note: Fields marked * are mandatory]</h5>
     
      </div>
      <div className="card-body">
        <div className="row justify-content-center">
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">Name:</div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              {userdata.vtName}
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              Relation Name (Relation Type)
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              {userdata.vtRelativename} ({userdata.vtrelID})
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">Gender:</div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              {userdata.vtGenderID}
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">Marital Status:</div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              {userdata.vtmsID}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">Victim ID:</div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              {userdata.vtUid}
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">Transaction ID:</div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">{props.trnid}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formdetail
