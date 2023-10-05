import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form3detailspart2 from './Form3detailspart2'
import { ButtonBackandSave, Redstar, TimeComp } from '../common/Operationradionbutton'
import { callApi } from 'src/views/CommonModels/CallApi'
import axios from 'axios'

const HistorySexualViolence = ({
  HistorySexualViolencedetail,
  TypePhysicalViolencedetail,
  Identificationdetail,
}) => {
  const trn = localStorage.getItem('trn')
  const [rowId, setrowId] = useState('')
  const [identget, setIdentget] = useState([])
  const [isDisable, setDisable] = useState(false)
  const [isAddDisable, setAddDisable] = useState(true)
  const [identget1, setIdentget1] = useState([])
  const [isDisable1, setDisable1] = useState(false)
  const [isAddDisable1, setAddDisable1] = useState(true)
  const enterby = localStorage.getItem('username')

  const token = localStorage.getItem('token')
  const [handleData, setHandleData] = useState({
    rowid: '',
    transactionid: trn,
    dateincident: '',
    timeincident: '',
    location: '',
    createuser: enterby,
  })
  const [handle1Data, setHandle1Data] = useState({
    rowid: '',
    transactionid: trn,
    name: '',
    sexassuailant: '',
    ageassailant: '',
    relationshipsurvivor: '',
    createuser: enterby,
  })
  const [handle2Data, setHandle2Data] = useState({
    date_incident: '',
    time_incident: '',
    location: '',
    estimated_duration: '',
    episode: '',
    no_assailant: '',
    name: '',
    sexassuailant: '',
    ageassailant: '',
    relationshipsurvivor: '',
    description_of_incident: '',
    narrator_incident: '',
  })
  const [errors, setErrors] = useState({
    dateincident: '',
    timeincident: '',
    location: '',
    name: '',
    sexassuailant: '',
    ageassailant: '',
    relationshipsurvivor: '',
    date_incident: '',
    time_incident: '',
    location: '',
    estimated_duration: '',
    episode: '',
    no_assailant: '',
    name: '',
    sexassuailant: '',
    ageassailant: '',
    relationshipsurvivor: '',
    description_of_incident: '',
    narrator_incident: '',
  })
  const validateformOTP = () => {
    let valid = true
    const newErrors = {
      dateincident: '',
      timeincident: '',
      location: '',
      name: '',
      sexassuailant: '',
      ageassailant: '',
      relationshipsurvivor: '',
    }
    if (handleData.dateincident.trim() === '') {
      newErrors.dateincident = 'Required'
      valid = false
    }
    if (handleData.timeincident.trim() === '') {
      newErrors.timeincident = 'Required'
      valid = false
    }
    if (handleData.location.trim() === '') {
      newErrors.location = 'Required'
      valid = false
    }
    setErrors(newErrors)
    return valid
  }
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apiident = `${apiPrefix}/user/form3A/savehistorysexualviolence1Add`
  const apiidentupdate = `${apiPrefix}/user/form3A/updatehistorysexualviolence1Add`
  const apiidentget = `${apiPrefix}/user/form3A/getbytrnhistorysexualviolence1Add/${trn}`
  const apiidentgetbyrowid = `${apiPrefix}/user/form3A/getbyrowidhistorysexualviolence1Add/`
  const apiidentdelete = `${apiPrefix}/user/form3A/deletehistorysexualviolence1Add/`

  const apiident1 = `${apiPrefix}/user/form3A/savehistorysexualviolenceAdd`
  const apiidentupdate1 = `${apiPrefix}/user/form3A/updatehistorysexualviolenceAdd`
  const apiidentget1 = `${apiPrefix}/user/form3A/getallhistorysexualviolenceAdd/${trn}`
  const apiidentgetbyrowid1 = `${apiPrefix}/user/form3A/getbyidhistorysexualviolenceAdd/`
  const apiidentdelete1 = `${apiPrefix}/user/form3A/deletehistorysexualviolenceAdd/`

  const apifinaladd = `${apiPrefix}/user/form3A/savehistorysexualvilonace`
  const apifinalget = `${apiPrefix}/user/form3A/gethistorysexualvilonace/${trn}`
  useEffect(() => {
    callApi(apiidentget)
      .then((response) => {
        setIdentget(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
    callApi(apiidentget1)
      .then((response) => {
        setIdentget1(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
    callApi(apifinalget)
      .then((response) => {
        setHandle2Data(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])
  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }

  const handleIdentClick = async () => {
    const response = await axios.post(apiident, handleData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
      callApi(apiidentget)
        .then((response) => {
          setIdentget(response)
        })
        .catch((error) => {
          console.error('API request failed:', error)
        })
      setHandleData({
        rowid: '',
        transactionid: trn,
        dateincident: '',
        timeincident: '',
        location: '',
        createuser: enterby,
      })
    }
  }
  const handleIdentUpdateClick = async () => {
    if (validateformOTP()) {
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
            setIdentget(response)
          })
          .catch((error) => {
            console.error('API request failed:', error)
          })
        setHandleData({
          rowid: '',
          transactionid: trn,
          dateincident: '',
          timeincident: '',
          location: '',
          createuser: enterby,
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
          transactionid: trn,
          dateincident: response.dateincident,
          timeincident: response.timeincident,
          location: response.location,
          createuser: enterby,
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
          setIdentget(response)
        })
        .catch((error) => {
          console.error('API request failed:', error)
        })
      setHandleData({
        rowid: '',
        transactionid: trn,
        dateincident: '',
        timeincident: '',
        location: '',
        createuser: enterby,
      })
    }
  }

  const handleIdentCancleClick = () => {
    setHandleData({
      rowid: '',
      transactionid: trn,
      dateincident: '',
      timeincident: '',
      location: '',
      createuser: enterby,
    })
    setDisable(false)
    setAddDisable(true)
  }

  const handle1Change = (e) => {
    const { name, value } = e.target
    setHandle1Data({ ...handle1Data, [name]: value })
  }

  const handleIdentClick1 = async () => {
    const response = await axios.post(apiident1, handle1Data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
      callApi(apiidentget1)
        .then((response) => {
          setIdentget1(response)
        })
        .catch((error) => {
          console.error('API request failed:', error)
        })
      setHandle1Data({
        rowid: '',
        transactionid: trn,
        name: '',
        sexassuailant: '',
        ageassailant: '',
        relationshipsurvivor: '',
        createuser: enterby,
      })
    }
  }
  const handleIdentUpdateClick1 = async () => {
    handle1Data.rowid = rowId
    const response = await axios.put(apiidentupdate1, handle1Data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
      callApi(apiidentget1)
        .then((response) => {
          setIdentget1(response)
        })
        .catch((error) => {
          console.error('API request failed:', error)
        })
      setHandle1Data({
        rowid: '',
        transactionid: trn,
        name: '',
        sexassuailant: '',
        ageassailant: '',
        relationshipsurvivor: '',
        createuser: enterby,
      })
      setDisable1(false)
      setAddDisable1(true)
    }
  }

  const handleIdentEditClick1 = (rowid) => {
    callApi(apiidentgetbyrowid1 + rowid)
      .then((response) => {
        setHandle1Data({
          transactionid: trn,
          name: response.name,
          sexassuailant: response.sexassuailant,
          ageassailant: response.ageassailant,
          relationshipsurvivor: response.relationshipsurvivor,
          createuser: enterby,
        })
        setrowId(rowid)
        setDisable1(true)
        setAddDisable1(false)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }

  const handleIdentDeleteClick1 = async (rowid) => {
    setrowId(rowid)
    const response = await axios.delete(apiidentdelete1 + rowid, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
      setrowId('')
      callApi(apiidentget1)
        .then((response) => {
          setIdentget1(response)
        })
        .catch((error) => {
          console.error('API request failed:', error)
        })
      setHandle1Data({
        rowid: '',
        transactionid: trn,
        name: '',
        sexassuailant: '',
        ageassailant: '',
        relationshipsurvivor: '',
        createuser: enterby,
      })
    }
  }

  const handleIdentCancleClick1 = () => {
    setHandle1Data({
      rowid: '',
      transactionid: trn,
      name: '',
      sexassuailant: '',
      ageassailant: '',
      relationshipsurvivor: '',
      createuser: enterby,
    })
    setDisable1(false)
    setAddDisable1(true)
  }
  const handle2Change = (e) => {
    const { name, value } = e.target
    setHandle2Data({ ...handle2Data, [name]: value })
  }
  const handleF3_frstClick = async () => {
    const payload = {
      transactionid: trn,
      createuser: enterby,
      ...handle2Data,
    }
    const response = await axios.post(apifinaladd, payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
      TypePhysicalViolencedetail(true)
      HistorySexualViolencedetail(false)
    }
  }
  const handleF3_frstBackClick = () => {
    HistorySexualViolencedetail(false)
    Identificationdetail(true)
  }
  return (
    <div className="Container">
      <div className="card  mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>History of Sexual Violence</h4>
        </div>
        <div className=" card-body">
          <div className="card card-body">
            <div className="row justify-content-center">
              <div className="row mb-3">
                <div className="col-lg-3 col-xl-3">
                  Date of incident/s being reported
                  <Redstar />
                </div>
                <div className="col-lg-3 col-xl-3">
                  <input
                    name="dateincident"
                    value={handleData.dateincident}
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-2 col-xl-2">Time of incident</div>
                <div className="col-lg-3 col-xl-3">
                  <input
                    name="timeincident"
                    value={handleData.timeincident}
                    onChange={handleChange}
                    type="time"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-3 col-xl-3">
                  Location/s
                  <Redstar />
                </div>
                <div className="col-lg-3 col-xl-3">
                  <input
                    name="location"
                    value={handleData.location}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
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
              <div className="row mb-3">
                <div className="col-lg-12 col-xl-12">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Sr. No.</th>
                        <th>Transaction ID</th>
                        <th>Date of incident/s</th>
                        <th>Time of incident/s</th>
                        <th>Location/s</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {identget.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.transactionid}</td>
                          <td>{item.dateincident}</td>
                          <td>{item.timeincident}</td>
                          <td>{item.location}</td>
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
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className=" card card-body mt-2">
            <div className="row justify-content-center">
              <div className="row mb-3">
                <div className="col-lg-3 col-xl-3">Estimated duration</div>
                <div className="col-lg-3 col-xl-3">
                  <input
                    name="estimated_duration"
                    value={handle2Data.estimated_duration}
                    onChange={handle2Change}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-3 col-xl-3">
                  Episode
                  <Redstar />
                </div>
                <div className="col-lg-3 col-xl-3">
                  <input
                    name="episode"
                    value={handle2Data.episode}
                    onChange={handle2Change}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-3 col-xl-3">Number of assailant(s)</div>
                <div className="col-lg-3 col-xl-3">
                  <input
                    name="no_assailant"
                    value={handle2Data.no_assailant}
                    onChange={handle2Change}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="card card-body mt-2">
              <div className="row justify-content-center">
                <div className="row mb-3">
                  <div className="col-lg-3 col-xl-3">
                    Name/s (if known)
                    <Redstar />
                  </div>
                  <div className="col-lg-3 col-xl-3">
                    <input
                      name="name"
                      value={handle1Data.name}
                      onChange={handle1Change}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-3 col-xl-3">
                    Sex of assailant(s)
                    <Redstar />
                  </div>
                  <div className="col-lg-3 col-xl-3">
                    <input
                      name="sexassuailant"
                      value={handle1Data.sexassuailant}
                      onChange={handle1Change}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-3 col-xl-3">
                    Approx. age of assailant
                    <Redstar />
                  </div>
                  <div className="col-lg-3 col-xl-3">
                    <input
                      name="ageassailant"
                      value={handle1Data.ageassailant}
                      onChange={handle1Change}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-3 col-xl-3">
                    If known to the survivor- relationship with the survivor
                    <Redstar />
                  </div>
                  <div className="col-lg-3 col-xl-3">
                    <input
                      name="relationshipsurvivor"
                      value={handle1Data.relationshipsurvivor}
                      onChange={handle1Change}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                {/* <div className="row mb-3">
                  <div className="col-lg-3 col-xl-3">
                    Location/s
                    <Redstar />
                  </div>
                  <div className="col-lg-3 col-xl-3">
                    <input name="patient_name" type="text" className="form-control" />
                  </div>
                </div> */}
                <div className="row mb-3">
                  <div className="col-lg-6 col-xl-6 p-2">
                    {isAddDisable1 && (
                      <button
                        type="submit"
                        className="btn btn-primary m-2"
                        onClick={handleIdentClick1}
                      >
                        Add to List
                      </button>
                    )}
                    {isDisable1 && (
                      <button
                        type="submit"
                        className="btn btn-secondary m-2"
                        onClick={handleIdentUpdateClick1}
                      >
                        Update
                      </button>
                    )}
                    <button
                      type="submit"
                      className="btn btn-dark m-2"
                      onClick={handleIdentCancleClick1}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-12 col-xl-12">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Sr. No.</th>
                          <th>Transaction ID</th>
                          <th>Name</th>
                          <th>Sex of assailant</th>
                          <th>Approx. age of assailant</th>
                          <th>Relationship With the Survivor</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {identget1.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.transactionid}</td>
                            <td>{item.name}</td>
                            <td>{item.sexassuailant}</td>
                            <td>{item.ageassailant}</td>
                            <td>{item.relationshipsurvivor}</td>
                            <td>
                              <button
                                type="submit"
                                className="btn btn-secondary m-2"
                                onClick={() => handleIdentEditClick1(item.rowid)}
                              >
                                Edit
                              </button>
                              <button
                                type="submit"
                                className="btn btn-danger m-2"
                                onClick={() => handleIdentDeleteClick1(item.rowid)}
                              >
                                Deleted
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="row mb-3">
            <div className="col-lg-3 col-xl-3">
              Description of incident in the words of the narrator
            </div>
            <div className="col-lg-3 col-xl-3">
              <textarea
                name="description_of_incident"
                value={handle2Data.description_of_incident}
                onChange={handle2Change}
                type="text"
                class="form-control"
              ></textarea>
            </div>
            <p style={{ color: 'red' }}>
              Narrator of the incident: survivor/informant (specify name and relation to survivor)
            </p>
          </div>
        </div>
        <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
      </div>
    </div>
  )
}

export default HistorySexualViolence
