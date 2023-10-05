import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const OssificationBonesTable = () => {
  const trn = localStorage.getItem('trn')
  const token = localStorage.getItem('token')
  const [updatedata, setupdatedata] = useState([])
  const [RowId, setRowId] = useState('')
  const [inputData, setInputData] = useState({
    boneXrayAdvice: '',
    boneFindingObserved: '',
    boneInferenceAboutAge: '',
  })
  const [errors, setErrors] = useState({
    boneXrayAdvice: '',
    boneFindingObserved: '',
    boneInferenceAboutAge: '',
   
  });
  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      boneXrayAdvice: '',
      boneFindingObserved: '',
      boneInferenceAboutAge: '',
    };
    if(inputData.boneXrayAdvice === null){
      newErrors.boneXrayAdvice = 'Required';
      valid = false;
    }
   else if (inputData.boneXrayAdvice.trim() === '' ) {
      newErrors.boneXrayAdvice = 'Required';
      valid = false;
    }
    if(inputData.boneFindingObserved === null){
      newErrors.boneFindingObserved = 'Required';
      valid = false;
    }
    else if (inputData.boneFindingObserved.trim() === '') {
      newErrors.boneFindingObserved = 'Required';
      valid = false;
    }
    if(inputData.boneInferenceAboutAge === null){
      newErrors.boneInferenceAboutAge = 'Required';
      valid = false;
    }
   else if (inputData.boneInferenceAboutAge.trim() === '') {
      newErrors.boneInferenceAboutAge = 'Required';
      valid = false;
    } 
   
    setErrors(newErrors);
    return valid;
  };
  const [tableData, setTableData] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }
  const apiget=`${process.env.REACT_APP_API_PREFIX}/user/form4/getbonesdetails/${trn}`
  const apigetbyrow=`${process.env.REACT_APP_API_PREFIX}/user/form4/getbonesdetailsbyrowid/`
  const apidelete=`${process.env.REACT_APP_API_PREFIX}/user/form4/deletebonesdetails/`
  useEffect(()=>{
    callApi(apiget)
    .then((response) => {
      setupdatedata(response)
    })
    .catch((error) => {
      console.error('API request failed:', error)
    })
  },[])
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateformOTP()) {
    const enterby = localStorage.getItem('username')
   
   
    // if (editingIndex !== null) {
    //   // If editing, update the existing row
    //   const updatedTableData = [...tableData]
    //   updatedTableData[editingIndex] = { ...inputData }
    //   setTableData(updatedTableData)
    //   setEditingIndex(null)
    // } else {
    //   // If not editing, add a new row
    //   setTableData([...tableData, inputData])
    // }
    // setInputData({ boneXrayAdvice: '', boneFindingObserved: '', boneInferenceAboutAge: '' })

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_PREFIX}/user/form4/savebonesdetails`,
        {
          boneXrayAdvice: inputData.boneXrayAdvice,
          boneFindingObserved: inputData.boneFindingObserved,
          boneInferenceAboutAge: inputData.boneInferenceAboutAge,
          CreateUser: enterby,
          boneTransactionid: trn,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
      if(response.status===200){
        console.log(response.data)
        setupdatedata(response.data)
      }
    } catch (error) {
      console.error('Error posting data to the API:', error)
      // Handle error logic
    }
  }
  }

  const handleEdit = async (rowid) => {
    setRowId(rowid)
    const response = await axios.get(
      apigetbyrow+rowid,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    if(response.status===200){
      setInputData(response)
    }
  }

  const handleDelete = async (rowid) => {
    alert(rowid)
    const response = await axios.delete(
      apidelete+rowid,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    if(response.status===200){
      callApi(apiget)
      .then((response) => {
        setupdatedata(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
    }
  }

 

  return (
    <div className="card-body">
      <h4>Ossification of Bones.</h4>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="boneXrayAdvice">X-Ray advised</label>
              <input
                type="text"
                className={`form-control ${errors.boneXrayAdvice ? 'is-invalid' : ''}`}
                id="boneXrayAdvice"
                name="boneXrayAdvice"
                value={inputData.boneXrayAdvice}
                onChange={handleChange}
              />
               {errors.boneXrayAdvice && <div className="invalid-feedback">{errors.boneXrayAdvice}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="boneFindingObserved">Findings Observed</label>
              <input
                type="text"
                className={`form-control ${errors.boneFindingObserved ? 'is-invalid' : ''}`}
                id="boneFindingObserved"
                name="boneFindingObserved"
                value={inputData.boneFindingObserved}
                onChange={handleChange}
              />
               {errors.boneFindingObserved && <div className="invalid-feedback">{errors.boneFindingObserved}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="boneInferenceAboutAge">Inference about age</label>
              <input
                type="text"
                className={`form-control ${errors.boneInferenceAboutAge ? 'is-invalid' : ''}`}
                id="boneInferenceAboutAge"
                name="boneInferenceAboutAge"
                value={inputData.boneInferenceAboutAge}
                onChange={handleChange}
              />
               {errors.boneInferenceAboutAge && <div className="invalid-feedback">{errors.boneInferenceAboutAge}</div>}
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {editingIndex !== null ? 'Update' : 'Add'}
        </button>
      </form>
      <table id="approveinsstitute" className="table text-center table-bordered mt-4 pt-2">
        <thead className="table-secondary text-center">
          <tr>
            <th scope="col">Sr No.</th>
            <th scope="col">X-Ray advised</th>
            <th scope="col">Findings Observed</th>
            <th scope="col">Inference about age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {updatedata.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.boneXrayAdvice}</td>
              <td>{data.boneFindingObserved}</td>
              <td>{data.boneInferenceAboutAge}</td>
              <td>
                <button className="btn btn-sm btn-primary m-2" onClick={() => handleEdit(data.rowid)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger m-2" onClick={() => handleDelete(data.rowid)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OssificationBonesTable
