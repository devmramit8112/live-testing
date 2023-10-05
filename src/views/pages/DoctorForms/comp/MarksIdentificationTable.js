import React, { useEffect, useState } from 'react'
import { MdCancel, MdVisibility } from 'react-icons/md'
import { Redstar } from '../common/Operationradionbutton'
import { callApi } from 'src/views/CommonModels/CallApi'
import axios from 'axios'

const MarksIdentificationTable = () => {
  const trn = localStorage.getItem('trn')
  const [rowId, setrowId] = useState('')
  const [identget, setIdentget] = useState([])
  const [isDisable, setDisable] = useState(false)
  const [isAddDisable, setAddDisable] = useState(true)
  const changeuser = localStorage.getItem('username')

  const token = localStorage.getItem('token')
  const [handleData, setHandleData] = useState({
    piTrancationId: trn,
    piMark: '',
    createUser: changeuser,
    rowid: '',
  })
  const [errors, setErrors] = useState({
    piMark: '',
  })
  const validateformOTP = () => {
    let valid = true
    const newErrors = {
      piMark: '',
    }
    if (handleData.piMark.trim() === '') {
      newErrors.piMark = 'Required'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apiident = `${apiPrefix}/user/form2/patientidentificationmarks`
  const apiidentupdate = `${apiPrefix}/user/form2/updatepatientidentificationmarks`
  const apiidentget = `${apiPrefix}/user/form2/getpatientidentificationmarks/${trn}`
  const apiidentgetbyrowid = `${apiPrefix}/user/form2/getpatientidentificationmarksbyrowid/`
  const apiidentdelete = `${apiPrefix}/user/form2/deletepatientidentificationmarks/`
  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }
  useEffect(() => {
    callApi(apiidentget)
      .then((response) => {
        setIdentget(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])

  const handleIdentClick = async () => {
    if (validateformOTP()) {
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
          piTrancationId: trn,
          piMark: '',
          createUser: changeuser,
          rowid: '',
        })
      }
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
          piTrancationId: trn,
          piMark: '',
          createUser: changeuser,
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
          piTrancationId: trn,
          piMark: response.piMark,
          createUser: changeuser,
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
        piTrancationId: trn,
        piMark: '',
        createUser: changeuser,
      })
    }
  }

  const handleIdentCancleClick = () => {
    setHandleData({
      piTrancationId: trn,
      piMark: '',
      createUser: changeuser,
      rowid: '',
    })
    setDisable(false)
    setAddDisable(true)
  }
  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Mark* (Max. 500 Characters) <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            name="piMark"
            type="text"
            className={`form-control ${errors.piMark ? 'is-invalid' : ''}`}
            value={handleData.piMark}
            onChange={handleChange}
          />
          {errors.piMark && <div className="invalid-feedback">{errors.piMark}</div>}
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 p-2">
          {isAddDisable && (
            <button type="submit" className="btn btn-primary m-2" onClick={handleIdentClick}>
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
          <button type="submit" className="btn btn-dark m-2" onClick={handleIdentCancleClick}>
            Cancel
          </button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Identification Mark</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {identget.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.piMark}</td>
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
  )
}

export default MarksIdentificationTable
