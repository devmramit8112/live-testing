import React, { useState } from 'react'
import { ButtonBackandSave, Redstar } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'
import { useEffect } from 'react'

const BehavioralSymptoms = ({ behavDetail, physicalDetail, conDetail, trnid }) => {
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [handleData, setHandleData] = useState({
    phisTransactionID: trnid,
    phisGPEBSymptoms: '',
    createUser: changeuser,
  })
  const [errors, setErrors] = useState({
    phisGPEBSymptoms: '',
  
   
  });
  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      phisGPEBSymptoms: '',
   
    };
    if(handleData.phisGPEBSymptoms === null){
      newErrors.phisGPEBSymptoms = 'Required';
      valid = false;
    }
   else if (handleData.phisGPEBSymptoms.trim() === '' ) {
      newErrors.phisGPEBSymptoms = 'Required';
      valid = false;
    }
   
    setErrors(newErrors);
    return valid;
  };
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apiphysical = `${apiPrefix}/user/form3/updatebehavioralsymptoms`
  const apigetphysical = `${apiPrefix}/user/form3/getgenralphyscialexamination/${trnid}`

  useEffect(()=>{
    callApi(apigetphysical)
    .then((response) => {
     setHandleData(response)
    })
    .catch((error) => {
      console.error('API request failed:', error)
    })
  },[])


  const handleF3_frstClick = async () => {
    if (validateformOTP()) {
    const response = await axios.put(apiphysical, handleData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
      conDetail(true)
      behavDetail(false)
    }
  }
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }
  const handleF3_frstBackClick = () => {
    behavDetail(false)
    physicalDetail(true)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Behavioral Symptoms </h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                Behavioral Symptoms
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <textarea
                  name="phisGPEBSymptoms"
                  type="text"
                  className={`form-control ${errors.phisGPEBSymptoms ? 'is-invalid' : ''}`}
                  value={handleData.phisGPEBSymptoms}
                  onChange={handleChange}
                ></textarea>
                 {errors.phisGPEBSymptoms && <div className="invalid-feedback">{errors.phisGPEBSymptoms}</div>}
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

export default BehavioralSymptoms
