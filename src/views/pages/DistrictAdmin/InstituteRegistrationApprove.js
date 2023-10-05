import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'
import $ from 'jquery'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import { FaEye, FaDownload } from 'react-icons/fa'
import DistrictDropdownSelection from '../AdminReg/userRegistrationForms/commonComponentForRegistration/DistrictDropdownSelection'
import { MdOutlineCancel } from 'react-icons/md'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const InsituteRegistrationApprovel = () => {
  //component load start
  const role = localStorage.getItem('userrole')
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [aprovalPending, setaprovalPending] = useState([])
  const [allreadyApproved, setallreadyApproved] = useState([])
  const [showDivpendingapprovel, setshowDivpendingapprovel] = useState(false)
  const [showDivalreadyAprroved, setshowDivalreadyAprroved] = useState(false)
  const [userid, setuserID] = useState(changeuser)
  const [trn, settrn] = useState('')
  const [inputValue2, setInputValue2] = useState('')
  const [isVisible, setVisible] = useState(false)
  const [reason, setReason] = useState(false)
  const [accActivate, setaccActivate] = useState([])
  const [showToast, setShowToast] = useState(false)
  const [msgToast, setMsgToast] = useState('')
  const [selectedOption, setSelectedOption] = useState('Y')
  const [userData, setuserData] = useState([])
  let apigetapprovalpending = ''
  let apigetalreadyapproved = ''
  let apidownload = ''
  let approvereject = ''
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  if (role === 'ROLE_A') {
    apigetapprovalpending = `${apiPrefix}/admin/instituteapproval/getinstitutedetail`
    // apigetalreadyapproved = `${apiPrefix}/admin/instituteapproval/approvedadmin`;
    apidownload = `${apiPrefix}/admin/instituteapproval/getinstitutedetailbyid/${userid}`
    approvereject = `${apiPrefix}/admin/instituteapproval/updateinstutestatusdetails`
  } else if (role === 'ROLE_S') {
    apigetapprovalpending = `${apiPrefix}/state/instituteapproval/getinstitutedetail/${userid}`
    //apigetalreadyapproved = `${apiPrefix}/state/instituteapproval/approvedadmin/${userid}`;
    apidownload = `${apiPrefix}/state/instituteapproval/getinstitutedetailbyid/${userid}`
    approvereject = `${apiPrefix}/state/instituteapproval/updateinstutestatusdetails`
  } else if (role === 'ROLE_D') {
    apigetapprovalpending = `${apiPrefix}/district/approvehod/getinstitutedetail/${userid}`
    //apigetalreadyapproved = `${apiPrefix}/admin/approval/approvedadmin/${userid}`;
    apidownload = `${apiPrefix}/district/approvehod/getinstitutedetailbyid/${userid}`
    approvereject = `${apiPrefix}/district/approvehod/updateinstutestatusdetails`
  }

  setTimeout(() => {
    $('#approvedoctor').DataTable()
    $('#approvealradydoctor').DataTable()
  }, 1000)
  useEffect(() => {
    callApi(apigetapprovalpending)
      .then((response) => {
        setaprovalPending(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
    // callApi(apigetalreadyapproved)
    //   .then((response) => {
    //     setallreadyApproved(response);
    //   })
    //   .catch((error) => {
    //     console.error('API request failed:', error);
    //   });
  }, [])
  //component load end
  //pending approval start
  //View button click start
  const handleViewPendingApproval = (trn, userID) => {
    settrn(trn)
    setuserID(userID)
    callApi(apigetapprovalpending)
      .then((response) => {
        setuserData(response[0])
        console.log(response[0])
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
    setshowDivpendingapprovel(true)
    setshowDivalreadyAprroved(false)
  }
  //View button lick end
  //Download button click start
  const handleDownloadPendingApproval = (userID) => {
    setuserID(userID)
    callApi(apidownload)
      .then((response) => {
        if (response.status === 200) {
          alert('download')
        } else {
          alert('not download')
        }
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }
  //Download button click end
  //handle Change input value start
  const handleInputChange = (event) => {
    setInputValue2(event.target.value)
  }
  //handle Change input value end
  //Cancle button click start
  const handleCanclePendingApproval = () => {
    setshowDivpendingapprovel(false)
    setInputValue2('')
  }
  //Cancle button click end
  //aproval button click start
  const handleApproved = async () => {
    const response = await axios.post(
      approvereject,
      {
        userID: userid,
        account_Activated: selectedOption,
        changeUser: changeuser,
        healthInstituteID: userData.healthInstituteID,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    if (response.status === 200) {
      setShowToast(true)
      setMsgToast('Successfully Approved')
      setTimeout(() => {
        setShowToast(false)
      }, 10)
      setshowDivpendingapprovel(false)
      callApi(apigetapprovalpending)
        .then((response) => {
          setaprovalPending(response)
        })
        .catch((error) => {
          console.error('API request failed:', error)
        })
      // callApi(apigetalreadyapproved)
      //   .then((response) => {
      //     setallreadyApproved(response);
      //   })
      //   .catch((error) => {
      //     console.error('API request failed:', error);
      //   });
      setTimeout(() => {
        $('#approvedoctor').DataTable()
      }, 100)
    } else {
      setShowToast(true)
      setMsgToast('Error Occured')
      setTimeout(() => {
        setShowToast(false)
      }, 10)
    }
  }
  //aproval button click end
  //reject button click start
  const handleReject = async () => {
    if (inputValue2 !== '') {
      const response = await axios.post(
        approvereject,
        {
          userID: userid,
          account_Activated: 'R',
          rejectreason: inputValue2,
          changeUser: changeuser,
          healthInstituteID: userData.healthInstituteID,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
      if (response.status === 200) {
        setShowToast(true)
        setMsgToast('Successfully Approved')
        setTimeout(() => {
          setShowToast(false)
        }, 10)
        setshowDivpendingapprovel(false)
        callApi(apigetapprovalpending)
          .then((response) => {
            setaprovalPending(response)
          })
          .catch((error) => {
            console.error('API request failed:', error)
          })
        // callApi(apigetalreadyapproved)
        //   .then((response) => {
        //     setallreadyApproved(response);
        //   })
        //   .catch((error) => {
        //     console.error('API request failed:', error);
        //   });
      } else {
        setShowToast(true)
        setMsgToast('Error Occured')
        setTimeout(() => {
          setShowToast(false)
        }, 10)
      }
    } else {
      alert('enter reject reason')
    }
  }
  //reject button click end
  //pending approval end
  //handle data change start
  const handleDataChange = (newData, reason) => {
    setReason(reason)
    if (newData === 'R') {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
  //handle data change end
  //already approvad start
  //View button click start
  const handleViewAllreadyApproved = (trn, userID) => {
    settrn(trn)
    setuserID(userID)
    setshowDivpendingapprovel(false)
  }
  //View button click end
  //handle Change input value start
  const handleChangeAllreadyApproved = (event) => {
    setSelectedOption(event.target.value)
  }
  //handle Change input value end
  //Download button click start
  const handleDownloadAllreadyApproved = (userid) => {
    callApi(apidownload)
      .then((response) => {
        if (response.status === 200) {
          alert('download')
        } else {
          alert('not download')
        }
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }
  //Download button click end
  //Cancle button click start
  const handleCancleAllreadyApproved = () => {
    setshowDivalreadyAprroved(false)
    setSelectedOption('Y')
  }
  //Cancle button click end
  //Update button click start
  const handleUpdate = async () => {
    const response = await axios.post(
      apiupdate,
      {
        userID: userid,
        account_Activated: selectedOption,
        updatedby: changeuser,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    if (response.status === 200) {
      setshowDivpendingapprovel(false)
      callApi(apigetapprovalpending)
        .then((response) => {
          setaprovalPending(response)
        })
        .catch((error) => {
          console.error('API request failed:', error)
        })
      callApi(apigetalreadyapproved)
        .then((response) => {
          setallreadyApproved(response)
        })
        .catch((error) => {
          console.error('API request failed:', error)
        })
    } else {
      alert('n')
    }
  }
  //Update button click end
  //already approvad end
  return (
    <div className="Container">
      <div className="card m-2">
        <div className="card-header text-center  Headingcolorcard">
          <h3 >Institute and HOD Approval</h3>
        </div>
        <div className="card-body">
          <table id="approvedoctor" className="table  text-center table-bordered mt-4 pt-2">
            <thead>
              <tr>
                <th className='colorheadingotab' scope="col">
                  Sr No.
                </th>
                <th className='colorheadingotab' scope="col">
                  Transection ID
                </th>
                <th className='colorheadingotab' scope="col">
                  User ID
                </th>
                <th className='colorheadingotab' scope="col">
                  User Name
                </th>
                <th className='colorheadingotab' scope="col">
                  State
                </th>
                <th className='colorheadingotab' scope="col">
                  District
                </th>
                <th className='colorheadingotab' scope="col">
                  Status
                </th>
                <th className='colorheadingotab' scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {aprovalPending.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.trn}</td>
                  <td>{item.userID}</td>
                  <td>{item.userName}</td>
                  <td>{item.statename}</td>
                  <td>{item.districtname}</td>
                  <td>{item.account_Activated}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm bg-primary text-white m-2"
                      onClick={() => handleDownloadPendingApproval(item.trn)}
                    >
                      <FaDownload className='fa-arrow-right'/>
                    </button>{' '}
                    <button
                      className="btn btn-sm bg-primary text-white m-2"
                      onClick={() => handleViewPendingApproval(item.trn, item.userID)}
                    >
                      <FaEye  className='eye'/>{' '}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showDivpendingapprovel && (
        <div className="card mt-3 mb-3">
          <div className="card-header text-center m-2 Headingcolorcard">
            <h3 >Institute and HoD Informtion</h3>
            <h4>Health Institute ID: {userData.healthInstituteID}</h4>
          </div>
          <div className="card-body">
            <div className="row mb-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">User ID</div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <input className="form-control" disabled value={userData.userID}></input>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                Institute Name
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <input
                  className="form-control"
                  disabled
                  value={userData.healthInstituteName}
                ></input>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">Contact No</div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <input className="form-control" disabled value={userData.mobile}></input>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">Email </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <input className="form-control" disabled value={userData.emailID}></input>
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
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                Account Activated
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <label className="m-2">
                  <input
                    className="form-check-input"
                    value="Y"
                    checked={selectedOption === 'Y'}
                    name="flexRadioDefault"
                    type="radio"
                    onChange={handleChangeAllreadyApproved}
                  ></input>
                  Yes
                </label>
                <label className="m-2">
                  <input
                    className="form-check-input"
                    value="N"
                    checked={selectedOption === 'N'}
                    name="flexRadioDefault"
                    type="radio"
                    onChange={handleChangeAllreadyApproved}
                  ></input>
                  No
                </label>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 mt-2">
                <button
                  type="button"
                  className="btn btn-sm btn-dark m-1"
                  onClick={handleCanclePendingApproval}
                >
                  Cancel <MdOutlineCancel className='fa-times'/>
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-primary m-1"
                  onClick={handleApproved}
                >
                   Update <FontAwesomeIcon icon={faPencil} className='fa-times' />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default InsituteRegistrationApprovel
