import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'
import { ButtonBackandSave, Redstar } from '../common/Operationradionbutton'
import { toast } from 'react-toastify'
function GistofIncident({ FigureDetail, GistofIncidentdetail, OPDDetaildetail, trn }) {
  const [rowId, setrowId] = useState('')
  const [identget, setIdentget] = useState([])
  const [isDisable, setDisable] = useState(false)
  const [isAddDisable, setAddDisable] = useState(true)
  const [isFreeze, setFreeze] = useState(true)
  const [freezeDetail, setFreezeDetail] = useState({
    injtTransactionID: trn,
    freeze_case: '',
  })
  const [gistdet, setgistdet] = useState({})
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [handleData, setHandleData] = useState({
    injtTransactionID: trn,
    createuser: changeuser,
    injtremark: '',
  })
  const [handleSaveData, setHandSaveleData] = useState({
    // gmtransactionid:'',
    // createuser: '',
    gmgist: '',
    gmcondition: '',
    natureofinjuries: '',
    probabledurationofinjury: '',
    injtremark: '',
    kindofweaponused: '',
  })
  const [errors, setErrors] = useState({
    gmgist: '',
    gmcondition: '',
    natureofinjuries: '',
    probabledurationofinjury: '',
    kindofweaponused: '',
  })
  const [errors1, setErrors1] = useState({
    injtremark: '',
  })
  const validateformOTP = () => {
    let valid = true
    const newErrors = {
      gmgist: '',
      gmcondition: '',
      natureofinjuries: '',
      probabledurationofinjury: '',
      kindofweaponused: '',
    }
    if (handleSaveData.gmgist.trim() === '') {
      newErrors.gmgist = 'Required'
      valid = false
    }
    if (handleSaveData.gmcondition.trim() === '') {
      newErrors.gmcondition = 'Required'
      valid = false
    }

    if (handleSaveData.natureofinjuries.trim() === '') {
      newErrors.natureofinjuries = 'Required'
      valid = false
    }
    if (handleSaveData.probabledurationofinjury.trim() === '') {
      newErrors.probabledurationofinjury = 'Required'
      valid = false
    }
    if (handleSaveData.kindofweaponused.trim() === '') {
      newErrors.kindofweaponused = 'Required'
      valid = false
    }
    setErrors(newErrors)
    return valid
  }
  const validateformOTP1 = () => {
    let valid = true
    const newErrors = {
      injtremark: '',
    }

    if (handleData.injtremark.trim() === '') {
      newErrors.injtremark = 'Required'
      valid = false
    }

    setErrors1(newErrors)
    return valid
  }
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apiident = `${apiPrefix}/user/form3/saveinjurydetails`
  const apiidentupdate = `${apiPrefix}/user/form3/updateinjurydetails`
  const apiidentget = `${apiPrefix}/user/form3/getallinjurydetails/${trn}`
  const apiidentgetbyrowid = `${apiPrefix}/user/form3/getbyidinjurydetails/`
  const apiidentdelete = `${apiPrefix}/user/form3/deleteinjurydetails/`
  const apifreeze = `${apiPrefix}/user/form3/fredgeunfredgeinjurydetails`
  const apifinalsave = `${apiPrefix}/user/form2/add_Gist_of_Incident`
  const apigistdet = `${apiPrefix}/user/form2/get_Gist_of_Incident/${trn}`
  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }
  useEffect(() => {
    callApi(apiidentget)
      .then((response) => {
        if (response[0].freeze_case === 'Yes') {
          setFreeze(false)
        } else {
          setFreeze(true)
        }
        setIdentget(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })

    callApi(apigistdet)
      .then((response) => {
        setHandSaveleData(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])

  const handleIdentClick = async () => {
    if (validateformOTP1()) {
      handleSaveData.gmtransactionid = trn
      handleSaveData.createuser = changeuser
      const response = await axios.post(apiident, handleData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.status === 200) {
        callApi(apiidentget)
          .then((response) => {
            console.log(response)
            setIdentget(response)
          })
          .catch((error) => {
            console.error('API request failed:', error)
          })
        setHandleData({
          injtTransactionID: trn,
          createuser: changeuser,
          injtremark: '',
        })
      }
    }
  }
  const handleIdentUpdateClick = async () => {
    if (validateformOTP1()) {
      handleData.rowid = rowId
      const response = await axios.put(apiidentupdate, handleData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.status === 200) {
        callApi(apiidentget)
          .then((response) => {
            // console.log(response)
            setIdentget(response)
          })
          .catch((error) => {
            console.error('API request failed:', error)
          })
        setHandleData({
          injtTransactionID: trn,
          createuser: changeuser,
          injtremark: '',
        })
        setDisable(false)
        setAddDisable(true)
      }
    }
  }

  const handleIdentEditClick = (rowid) => {
    callApi(apiidentgetbyrowid + rowid)
      .then((response) => {
        setHandleData({
          injtTransactionID: trn,
          createuser: changeuser,
          injtremark: response.injtremark,
        })
        setrowId(rowid)
        setDisable(true)
        setAddDisable(false)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }

  const handleIdentDeleteClick = async (rowid) => {
    // rowid.preventDefault()
    setrowId(rowid)
    const response = await axios.delete(apiidentdelete + rowid, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
      setrowId('')
      callApi(apiidentget)
        .then((response) => {
          // console.log(response)
          setIdentget(response)
        })
        .catch((error) => {
          console.error('API request failed:', error)
        })
      setHandleData({
        injtTransactionID: trn,
        createuser: changeuser,
        injtremark: '',
      })
    }
  }

  const handleIdentCancleClick = () => {
    setHandleData({
      injtTransactionID: trn,
      createuser: changeuser,
      injtremark: '',
    })
    setDisable(false)
    setAddDisable(true)
  }
  const handleFreezeClick = async () => {
    freezeDetail.freeze_case = 'Y'

    const response = await axios.post(apifreeze, freezeDetail, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
      setFreeze(false)
    }
  }
  const handleUnFreezeClick = async () => {
    ;(freezeDetail.injtTransactionID = trn), (freezeDetail.freeze_case = 'N')
    const response = await axios
      .post(apifreeze, freezeDetail, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setFreeze(true)
      })
      .catch((error) => {
        toast.error(`Kindly Unmark Enjury`, {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
  }

  const handleF3_frstClick = async () => {
    if (validateformOTP()) {
      const payload = {
        gmtransactionid: trn,
        createuser: changeuser,
        ...handleSaveData,
      }
      const response = await axios.post(apifinalsave, payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.status === 200) {
        FigureDetail(true)
        GistofIncidentdetail(false)
      }
    }
  }
  const handleF3_frstBackClick = () => {
    GistofIncidentdetail(false)
    OPDDetaildetail(true)
  }

  const handleSaveChange = (e) => {
    const { name, value } = e.target
    setHandSaveleData({ ...handleSaveData, [name]: value })
  }
  return (
    <div className="Container">
      <div className="card mb-2 mt-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Gist of Incident, Injuries Detail</h4>
        </div>
        <div className="card-body">
          <div className="">
            <div className="text-center p-3 mb-3 ">
              <h5>Gist of incident as stated by the injured/accompanying person </h5>
            </div>
            <div className="card-body">
              <div className="row mb-3 mt-2">
                <div className="col-lg-5 col-xl-5">
                  Gist of Incident
                  <Redstar /> (Max. 2000 Characters)
                </div>
                <div className="col-lg-5 col-xl-5">
                  <textarea
                    name="gmgist"
                    type="text"
                    className={`form-control ${errors.gmgist ? 'is-invalid' : ''}`}
                    value={handleSaveData.gmgist}
                    onChange={handleSaveChange}
                  ></textarea>
                  {errors.gmgist && <div className="invalid-feedback">{errors.gmgist}</div>}
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center p-3 mb-3 ">
            <h5>General condition of the person, clothing etc.</h5>
          </div>
          <div className="card-body">
            <div className="row mb-3 mt-2">
              <div className="col-lg-5 col-xl-5">
                General Condition
                <Redstar />
                (Max. 2000 Characters)
              </div>
              <div className="col-lg-5 col-xl-5">
                <textarea
                  name="gmcondition"
                  type="text"
                  className={`form-control ${errors.gmcondition ? 'is-invalid' : ''}`}
                  value={handleSaveData.gmcondition}
                  onChange={handleSaveChange}
                ></textarea>
                {errors.gmcondition && <div className="invalid-feedback">{errors.gmcondition}</div>}
              </div>
            </div>
          </div>
          <div className=" text-center p-3 mb-3 ">
            <h5>Particulars of Injuries</h5>
          </div>
          <div className="card-body">
            <div className="row mb-3 mt-2">
              <div className="col-lg-5 col-xl-5">Injuries Detail(Max. 500 Characters)</div>
              <div className="col-lg-5 col-xl-5">
                <textarea
                  name="injtremark"
                  type="text"
                  className={`form-control ${errors1.injtremark ? 'is-invalid' : ''}`}
                  value={handleData.injtremark}
                  onChange={handleChange}
                ></textarea>
                {errors1.injtremark && <div className="invalid-feedback">{errors1.injtremark}</div>}
              </div>
            </div>
            {isFreeze && (
              <div className="row mb-3">
                <div className="col-lg-6 col-xl-6 p-2">
                  {isAddDisable && (
                    <button
                      type="submit"
                      className="btn btn-primary m-2"
                      onClick={handleIdentClick}
                    >
                      Add to List
                    </button>
                  )}
                  {isDisable && (
                    <button
                      type="submit"
                      className="btn btn-secondary m-2"
                      onClick={handleIdentUpdateClick}
                    >
                      Update
                    </button>
                  )}
                  <button
                    type="submit"
                    className="btn btn-dark m-2"
                    onClick={handleIdentCancleClick}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
            <div className="row mb-3">
              <div className="col-lg-12 col-xl-12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Injury Number</th>
                      <th>Injury Detail</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {identget.map((item, index) => (
                      <tr key={index}>
                        <td>{item.srNo}</td>
                        <td>{item.injtremark}</td>
                        <td>
                          {isFreeze && (
                            <td>
                              <button
                                type="submit"
                                className="btn btn-secondary m-2"
                                onClick={() => handleIdentEditClick(item.rowid)}
                              >
                                Edit
                              </button>
                              <button
                                type="submit"
                                className="btn btn-danger m-2"
                                onClick={() => handleIdentDeleteClick(item.rowid)}
                              >
                                Deleted
                              </button>
                            </td>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-12 col-xl-12 text-center">
                {isFreeze && (
                  <button type="submit" className="btn btn-primary" onClick={handleFreezeClick}>
                    Freeze Injury
                  </button>
                )}
                {!isFreeze && (
                  <button type="submit" className="btn btn-primary" onClick={handleUnFreezeClick}>
                    Unfreeze Injury
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="row mb-3 mt-2">
            <div className="col-lg-5 col-xl-5">
              Nature of Injuries(Simple ,Grievous ,Dangerous or pending for observation)
              <Redstar /> (Max. 2000 Characters)
            </div>
            <div className="col-lg-5 col-xl-5">
              <textarea
                name="natureofinjuries"
                type="text"
                className={`form-control ${errors.natureofinjuries ? 'is-invalid' : ''}`}
                value={handleSaveData.natureofinjuries}
                onChange={handleSaveChange}
              ></textarea>
              {errors.natureofinjuries && (
                <div className="invalid-feedback">{errors.natureofinjuries}</div>
              )}
            </div>
          </div>
          <div className="row mb-3 mt-2">
            <div className="col-lg-5 col-xl-5">
              Probable Duration of Injury
              <Redstar /> (Max. 2000 Characters)
            </div>
            <div className="col-lg-5 col-xl-5">
              <textarea
                name="probabledurationofinjury"
                type="text"
                className={`form-control ${errors.probabledurationofinjury ? 'is-invalid' : ''}`}
                value={handleSaveData.probabledurationofinjury}
                onChange={handleSaveChange}
              ></textarea>
              {errors.probabledurationofinjury && (
                <div className="invalid-feedback">{errors.probabledurationofinjury}</div>
              )}
            </div>
          </div>
          <div className="row mb-3 mt-2">
            <div className="col-lg-5 col-xl-5">
              Kind of weapon Used (Sharp , Blunt ,Firearm , Fire ,Position etc)
              <Redstar />
              (Max. 2000 Characters)
            </div>
            <div className="col-lg-5 col-xl-5">
              <textarea
                name="kindofweaponused"
                type="text"
                className={`form-control ${errors.kindofweaponused ? 'is-invalid' : ''}`}
                value={handleSaveData.kindofweaponused}
                onChange={handleSaveChange}
              ></textarea>
              {errors.kindofweaponused && (
                <div className="invalid-feedback">{errors.kindofweaponused}</div>
              )}
            </div>
          </div>
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
          {/* <ButtonBackandSave backButton={() => Navigate("/OPDDetail")} savebutton={() => Navigate("/Figure")} /> */}
        </div>
      </div>
    </div>
  )
}

export default GistofIncident
