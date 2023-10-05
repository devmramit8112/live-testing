import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

import { ButtonBackandSave } from '../common/Operationradionbutton'
const MaterialCollected = ({ MaterialCollecteddetail, AdditionalInjurydetail, Figure2detail,trn }) => {
  const [rowId, setrowId] = useState('')
  const [identget, setIdentget] = useState([])
  const [isDisable, setDisable] = useState(false)
  const [isAddDisable, setAddDisable] = useState(true)
  const changeuser = localStorage.getItem('username')
  
const token = localStorage.getItem('token')
const [handleData, setHandleData] = useState({
  mctransactionid:trn,
  mcremark: '',
  createuser: changeuser,
  rowid:''
})
const [errors, setErrors] = useState({
  mcremark: '',
  
});
const validateformOTP = () => {
  let valid = true;
  const newErrors = {
    mcremark: '',
  
  };
  if (handleData.mcremark.trim() === '') {
    newErrors.mcremark = 'Required';
    valid = false;
  }

  setErrors(newErrors);
  return valid;
};
const apiPrefix = process.env.REACT_APP_API_PREFIX
const apiident = `${apiPrefix}/user/form2/add_material_collected`
const apiidentupdate = `${apiPrefix}/user/form2/update_material_collected`
const apiidentget = `${apiPrefix}/user/form2/get_material_collected/${trn}`
const apiidentgetbyrowid = `${apiPrefix}/user/form2/get_material_collected_byid/`
const apiidentdelete = `${apiPrefix}/user/form2/delete_material_collected_byid/`
const handleChange = e =>{
  const { name, value } = e.target
  setHandleData({...handleData,[name]:value})
}
useEffect(() => {
  callApi(apiidentget)
      .then((response) => {
       console.log(response)
        setIdentget(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
      
},[])

const handleIdentClick = async () => {
  if (validateformOTP()) {
  const response = await axios.post(
    apiident,handleData,
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
     //console.log(response)
      setIdentget(response)
    })
    .catch((error) => {
      console.error('API request failed:', error)
    })
    setHandleData({
      mctransactionid:trn,
      mcremark: '',
      createuser: changeuser,
      rowid:''
    })
  }
}
}
const handleIdentUpdateClick = async () => {
  if (validateformOTP()) {
  handleData.rowid = rowId;
  const response = await axios.put(
    apiidentupdate,handleData,
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
      mctransactionid:trn,
      mcremark: '',
      createuser: changeuser,
      rowid:''
    })
    setDisable(false)
    setAddDisable(true)
  }
}
}

const handleIdentEditClick = rowid => {
  callApi(apiidentgetbyrowid+rowid)
  .then((response) => {
   setHandleData({
    mctransactionid:trn,
    mcremark: response.mcremark,
    createuser: changeuser,
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
    apiidentdelete+rowid,
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
      mctransactionid:trn,
      mcremark: '',
      createuser: changeuser,
      rowid:''
    })
  }
}

const handleIdentCancleClick = () => {
  setHandleData({
    mctransactionid:trn,
    mcremark: '',
    createuser: changeuser,
    rowid:''
  })
  setDisable(false)
  setAddDisable(true)
}




  const handleF3_frstClick = () => {
    AdditionalInjurydetail(true)
    MaterialCollecteddetail(false)
  }
  const handleF3_frstBackClick = () => {
    MaterialCollecteddetail(false)
    Figure2detail(true)
  }
  return (
    <div className="Container">
      <div className="card mb-2 mt-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Material Collected (Detail and Number of seals)</h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <h6>
              Material Collected, preserved & handed over to police for chemical analysis etc (write
              complete details)
            </h6>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                Material Collected (Detail and Number of seals) (Max. 1000 Characters)
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <textarea name="mcremark" type="text" className={`form-control ${errors.mcremark ? 'is-invalid' : ''}`} value={handleData.mcremark} onChange={handleChange}></textarea>
                {errors.mcremark && <div className="invalid-feedback">{errors.mcremark}</div>}
              </div>
            </div>
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
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <table className="table table-bordered">
            <thead>
              <tr>
              <th>Sr. No.</th>
                <th>Material Collected (Detail and number of seals)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {identget.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.mcremark}</td>
                  <button type="submit" className="btn btn-secondary m-2" onClick={() => handleIdentEditClick(item.rowid)}>
           Edit
          </button>
          <button type="submit" className="btn btn-danger m-2" onClick={() => handleIdentDeleteClick(item.rowid)}>
            Deleted
          </button>
                  </tr>))}
            </tbody>
          </table>
        </div>
      </div>
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

export default MaterialCollected
