import React,{useState,useEffect, useRef} from 'react'
import Imagetest from './Imagetest'
import { callApi } from 'src/views/CommonModels/CallApi'

const Figureimageform = ({ title, backButton1, savebutton1,trn,imgid }) => {
  const changeuser = localStorage.getItem('username')
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apiidentget = `${apiPrefix}/user/form2/getpatientidentificationmarks/${trn}`
  const [identget, setIdentget] = useState([])
  const [afteridentget, setAfterIdentget] = useState([])
  const [handleData, setHandleData] = useState({
    piTrancationId:trn,
    piMark: '',
    createUser: changeuser,
    rowid:''
  })
  useEffect(() => {
    callApi(apiidentget)
        .then((response) => {
         setIdentget(response)
        })
        .catch((error) => {
          console.error('API request failed:', error)
        })
        
  },[])

  const haldlelableclick = (id) =>{
    const newitem = identget.find((item) => item.rowid === id)
    setAfterIdentget({...afteridentget,newitem})
    setIdentget((prevData) => prevData.filter((item) => item.id !== id));
   
  }
  return (
    <div className="card mt-2 mb-2">
      <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
        <h4>{title}</h4>
      </div>

      <div className="card-body">
      <Imagetest  trn={trn} imgid={imgid}/>
       
        <div className="row mb-3 ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 "></div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-3 ">
            
              <button type="submit" className="btn btn-danger m-2" onClick={backButton1}>
                Back
              </button>
              <button type="submit" className="btn btn-primary m-2" onClick={savebutton1}>
                Save and Proceed
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Figureimageform
