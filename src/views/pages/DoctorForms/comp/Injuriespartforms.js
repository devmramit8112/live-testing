import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const Injuriespartforms = () => {
  const trn = localStorage.getItem('trn')
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [rowId, setrowId] = useState('')
  const [identget, setIdentget] = useState([])
  const [isDisable, setDisable] = useState(false)
  const [isAddDisable, setAddDisable] = useState(true)
  const [isFreeze, setFreeze] = useState(true)
  const [freezeDetail, setFreezeDetail] = useState({
    injtTransactionID:trn,
    freeze_case:''
  })

const [handleData, setHandleData] = useState({
  injtTransactionID:trn,
  srNo:'',
  rowid:'',
  injtType: '',
  createuser: changeuser,
  injtremark:''
})
const apiPrefix = process.env.REACT_APP_API_PREFIX
const apiident = `${apiPrefix}/user/form3/saveinjurydetails`
const apiidentupdate = `${apiPrefix}/user/form3/updateinjurydetails`
const apiidentget = `${apiPrefix}/user/form3/getallinjurydetails/${trn}`
const apiidentgetbyrowid = `${apiPrefix}/user/form3/getbyidinjurydetails/`
const apiidentdelete = `${apiPrefix}/user/form3/deleteinjurydetails/`
const apifreeze = `${apiPrefix}/user/form3/fredgeunfredgeinjurydetails`
const handleChange = e =>{
  const { name, value } = e.target
  setHandleData({...handleData,[name]:value})
}
useEffect(() => {
  callApi(apiidentget)
      .then((response) => {
       if(response[0].freeze_case === 'Yes'){
        setFreeze(false)
       }else{
        setFreeze(true)
       }
        setIdentget(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
      
},[])

const handleIdentClick = async () => {
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
     console.log(response)
      setIdentget(response)
    })
    .catch((error) => {
      console.error('API request failed:', error)
    })
    setHandleData({
      injtTransactionID:trn,
      injtType: '',
      srNo:'',
      rowid:'',
      createuser: changeuser,
      injtremark:''
    })
  }
}
const handleIdentUpdateClick = async () => {
  
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
      injtTransactionID:trn,
      injtType: '',
      srNo:'',
      rowid:'',
      createuser: changeuser,
      injtremark:''
    })
    setDisable(false)
    setAddDisable(true)
  }
}

const handleIdentEditClick = rowid => {
  callApi(apiidentgetbyrowid+rowid)
  .then((response) => {
   setHandleData({
    injtTransactionID:trn,
    injtType: response.injtType,
    srNo:response.srNo,
    rowid:response.rowid,
    createuser: changeuser,
    injtremark:response.injtremark
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
      injtTransactionID:trn,
      injtType: '',
      srNo:'',
      rowid:'',
      createuser: changeuser,
      injtremark:''
    })
  }
}

const handleIdentCancleClick = () => {
  setHandleData({
    injtTransactionID:trn,
    injtType: '',
    srNo:'',
    rowid:'',
    createuser: changeuser,
    injtremark:''
  })
  setDisable(false)
  setAddDisable(true)
}
const handleFreezeClick = async () => {
  freezeDetail.freeze_case='Y'
  
  const response = await axios.post(
    apifreeze,freezeDetail,
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
  freezeDetail.freeze_case='N'
  const response = await axios.post(
    apifreeze,freezeDetail,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  )
  if (response.status === 200) {
  setFreeze(true)
  }
}
  return (
    <div>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Location of Injury</div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <input type="text" name='injtType' className="form-control" value={handleData.injtType} onChange={handleChange}/>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Remark</div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <textarea type="text"  name='injtremark' class="form-control" value={handleData.injtremark} onChange={handleChange}></textarea>
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
                  Injury Detail (Type of Injury ,Dimensions ,Stage of Healing
                  ,Simple/Grievous/Dangerous to life){' '}
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {identget.map((item, index) => (
                <tr key={index}>
                  <td>{item.srNo}</td>
                  <td>{item.injtType}</td>
                  {isFreeze &&
                  <td>
                  <button type="submit" className="btn btn-secondary m-2" onClick={() => handleIdentEditClick(item.rowid)}>
           Edit
          </button>
          <button type="submit" className="btn btn-danger m-2" onClick={() => handleIdentDeleteClick(item.rowid)}>
            Deleted
          </button>
          </td>
                  }
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
  )
}

export default Injuriespartforms
