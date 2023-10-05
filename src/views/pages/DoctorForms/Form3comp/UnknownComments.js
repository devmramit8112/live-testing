import React, { useState } from 'react'
import axios from 'axios'
import { ButtonBackandSave, Redstar } from '../common/Operationradionbutton'

const UnknownComments = ({unknownCommentsDetail,localEDetail,sampleCollectionForensicDetail,trnid}) => {
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [handleData, setHandleData] = useState({
    esrTransactionID: trnid,
    eunuchSexualRemark:'',
	  internal_Examination:'',
    createUser: changeuser,
  })
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const url = `${apiPrefix}/user/form3/saveeunuchsexualremark`

  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }

  const handleF3_frstClick = async () => {
    const response = await axios.post(
      url, handleData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
    unknownCommentsDetail(false)
    sampleCollectionForensicDetail(true)
    }
  }
  const handleF3_frstBackClick = () => {
    unknownCommentsDetail(false)
    localEDetail(true)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Eunuch/Unknown Comments</h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                External Genitalia / Anal region
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <textarea name="eunuchSexualRemark" type="text" class="form-control" onChange={handleChange}></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                Internal Examination
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <textarea name="internal_Examination" type="text" class="form-control" onChange={handleChange}></textarea>
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

export default UnknownComments
