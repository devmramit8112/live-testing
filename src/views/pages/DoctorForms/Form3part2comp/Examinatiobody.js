import React, { useState, useEffect } from 'react'
import Form3detailspart2 from './Form3detailspart2'
import Injuriespartforms from '../comp/Injuriespartforms'
import { ButtonBackandSave, Redstar } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const Examinatiobody = ({
  Examinatiobodydetail,
  GeneralPhysExaminationdetail,
  GeneralPhysicalExaminationf3part2detail,
  trn
}) => {

  const [selectedOption, setSelectedOption] = useState('');
  const [isSecondComponentVisible, setIsSecondComponentVisible] = useState(false); // State for component visibility
  const changeuser = localStorage.getItem('username')
  const [identget, setIdentget] = useState([])
  const token = localStorage.getItem('token')
  const apiPrefix = process.env.REACT_APP_API_PREFIX

  // ingerymark
  const [rowId, setrowId] = useState('')
  const [isDisable, setDisable] = useState(false)
  const [isAddDisable, setAddDisable] = useState(true)
  const [isFreeze, setFreeze] = useState(true)
  const [freezeDetail, setFreezeDetail] = useState({
    injtTransactionID: trn,
    freeze_case: ''
  })

  const [handleData, setHandleData] = useState({
    injtTransactionID: trn,
    createuser: changeuser,
    injtremark: ''
  })

  const validateformOTP1 = () => {
    let valid = true;
    const newErrors = {

      injtremark: '',

    };

    if (handleData.injtremark.trim() === '') {
      newErrors.injtremark = 'Required';
      valid = false;
    }

    setErrors1(newErrors);
    return valid;
  };

  const handleChange = e => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }

  const apiident = `${apiPrefix}/user/form3/saveinjurydetails`
  const apiidentupdate = `${apiPrefix}/user/form3/updateinjurydetails`
  const apiidentget = `${apiPrefix}/user/form3/getallinjurydetails/${trn}`
  const apiidentgetbyrowid = `${apiPrefix}/user/form3/getbyidinjurydetails/`
  const apiidentdelete = `${apiPrefix}/user/form3/deleteinjurydetails/`
  const apifreeze = `${apiPrefix}/user/form3/fredgeunfredgeinjurydetails`
  const [errors1, setErrors1] = useState({
    injtremark: '',
  });


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

    // callApi(apigistdet)
    // .then((response) => {
    //   setHandSaveleData(response[0])
    // })
    // .catch((error) => {
    //   console.error('API request failed:', error)
    // })

  }, [])

  // injuries handle 
  const handleIdentClick = async () => {
    if (validateformOTP1()) {
      const response = await axios.post(
        apiident, handleData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
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
          injtremark: ''
        })
      }
    }
  }
  const handleIdentUpdateClick = async () => {
    if (validateformOTP1()) {
      handleData.rowid = rowId;
      const response = await axios.put(
        apiidentupdate, handleData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
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
          injtremark: ''
        })
        setDisable(false)
        setAddDisable(true)
      }
    }
  }

  const handleIdentEditClick = rowid => {
    callApi(apiidentgetbyrowid + rowid)
      .then((response) => {
        setHandleData({
          injtTransactionID: trn,
          createuser: changeuser,
          injtremark: response.injtremark
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
    const response = await axios.delete(
      apiidentdelete + rowid,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
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
        injtremark: ''
      })
    }
  }

  const handleIdentCancleClick = () => {
    setHandleData({
      injtTransactionID: trn,
      createuser: changeuser,
      injtremark: ''
    })
    setDisable(false)
    setAddDisable(true)
  }
  const handleFreezeClick = async () => {
    freezeDetail.freeze_case = 'Y'

    const response = await axios.post(
      apifreeze, freezeDetail,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    if (response.status === 200) {
      setFreeze(false)
    }
  }
  const handleUnFreezeClick = async () => {
    freezeDetail.injtTransactionID = trn,
      freezeDetail.freeze_case = 'N'
    const response = await axios.post(
      apifreeze, freezeDetail,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((response) => {
        setFreeze(true)
      })
      .catch((error) => {
        toast.error(`Kindly Unmark Enjury`, {
          position: toast.POSITION.TOP_RIGHT,
        })
      });

  }


  const handleF3_frstClick = () => {
    GeneralPhysicalExaminationf3part2detail(true)
    Examinatiobodydetail(false)
  }
  const handleF3_frstBackClick = () => {
    Examinatiobodydetail(false)
    GeneralPhysExaminationdetail(true)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Examination for injuries on the body (if any)</h4>
        </div>
        <div className="card-body">
          <div className="card-body">
            <div className="row mb-3 mt-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                Location of Injury

                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                <textarea name="injtremark" type="text" className={`form-control ${errors1.injtremark ? 'is-invalid' : ''}`} value={handleData.injtremark} onChange={handleChange} ></textarea>
                {errors1.injtremark && <div className="invalid-feedback">{errors1.injtremark}</div>}
              </div>
            </div>
            {isFreeze &&
              <div className="row mb-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 p-2">

                  {isAddDisable &&
                    <button type="submit" className="btn btn-primary m-2" onClick={handleIdentClick}>
                      Add to List
                    </button>
                  }
                  {isDisable &&
                    <button type="submit" className="btn btn-secondary m-2" onClick={handleIdentUpdateClick} >
                      Update
                    </button>
                  }
                  <button type="submit" className="btn btn-dark m-2" onClick={handleIdentCancleClick}>
                    Cancel
                  </button>
                </div>
              </div>
            }
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Injury Number</th>
                      <th>
                        Injury Detail
                      </th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {identget.map((item, index) => (
                      <tr key={index}>
                        <td>{item.srNo}</td>
                        <td>{item.injtremark}</td>
                        <td>
                          {isFreeze &&
                            <td>
                              <button type="submit" className="btn btn-secondary m-2" onClick={() => handleIdentEditClick(item.rowid)}>
                                Edit
                              </button>
                              <button type="submit" className="btn btn-danger m-2" onClick={() => handleIdentDeleteClick(item.rowid)}>
                                Deleted
                              </button>
                            </td>
                          }</td>
                      </tr>))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                {isFreeze &&
                  <button type="submit" className="btn btn-primary" onClick={handleFreezeClick}>
                    Freeze Injury
                  </button>
                }
                {!isFreeze &&
                  <button type="submit" className="btn btn-primary" onClick={handleUnFreezeClick}>
                    Unfreeze Injury
                  </button>
                }
              </div>
            </div>
          </div>

          <div className="row justify-content-center">

            <ButtonBackandSave
              backButton={handleF3_frstBackClick}
              savebutton={handleF3_frstClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Examinatiobody
