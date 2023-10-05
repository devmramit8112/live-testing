import React, { useState, useEffect } from 'react'
import { ButtonBackandSave, Redstar } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'
const PhysicalGeneralExamination = ({ physicalDetail, behavDetail, caseDetail, trnid }) => {
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [handleData, setHandleData] = useState({
    phisTransactionID: trnid,
    phisBriefOfIncident: '',
    phisGPEPhysicalDevlopment: '',
    phisGPEGeneralCondition: '',
    phisGPEGaitOfVictim: '',
    createUser: changeuser,
  })
  const [errors, setErrors] = useState({
    phisBriefOfIncident: '',
    phisGPEPhysicalDevlopment: '',
    phisGPEGeneralCondition: '',
    phisGPEGaitOfVictim: '',
   
  });
  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      phisBriefOfIncident: '',
    phisGPEPhysicalDevlopment: '',
    phisGPEGeneralCondition: '',
    phisGPEGaitOfVictim: '',
    };
    if(handleData.phisBriefOfIncident === null){
      newErrors.phisBriefOfIncident = 'Required';
      valid = false;
    }
   else if (handleData.phisBriefOfIncident.trim() === '' ) {
      newErrors.phisBriefOfIncident = 'Required';
      valid = false;
    }
    if(handleData.phisGPEPhysicalDevlopment === null){
      newErrors.phisGPEPhysicalDevlopment = 'Required';
      valid = false;
    }
    else if (handleData.phisGPEPhysicalDevlopment.trim() === '') {
      newErrors.phisGPEPhysicalDevlopment = 'Required';
      valid = false;
    }
    if(handleData.phisGPEGeneralCondition === null){
      newErrors.phisGPEGeneralCondition = 'Required';
      valid = false;
    }
   else if (handleData.phisGPEGeneralCondition.trim() === '') {
      newErrors.phisGPEGeneralCondition = 'Required';
      valid = false;
    } 
    if(handleData.phisGPEGaitOfVictim === null){
      newErrors.phisGPEGaitOfVictim = 'Required';
      valid = false;
    }
    else if (handleData.phisGPEGaitOfVictim.trim() === '') {
      newErrors.phisGPEGaitOfVictim = 'Required';
      valid = false;
    }
  
     

    setErrors(newErrors);
    return valid;
  };
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apiphysical = `${apiPrefix}/user/form3/savegenralphyscialexamination`
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
    const response = await axios.post(apiphysical, handleData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
      behavDetail(true)
      physicalDetail(false)
    }
  }
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }
  const handleF3_frstBackClick = () => {
    physicalDetail(false)
    caseDetail(true)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Brief description of the Incident & General Physical Examination </h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                History /Brief description of the Incident (as narrated by the victim) <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <textarea
                  name="phisBriefOfIncident"
                  type="text"
                  className={`form-control ${errors.phisBriefOfIncident ? 'is-invalid' : ''}`}
                  value={handleData.phisBriefOfIncident}
                  onChange={handleChange}
                ></textarea>
                 {errors.phisBriefOfIncident && <div className="invalid-feedback">{errors.phisBriefOfIncident}</div>}
              </div>
            </div>
          </div>
          <div className=" mt-2 mb-2">
            <div className=" text-center p-3 mb-3 ">
              <h4>General Physical Examination </h4>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="row mb-3">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    (1) Physical development
                    <Redstar />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <textarea
                      name="phisGPEPhysicalDevlopment"
                      type="text"
                      className={`form-control ${errors.phisGPEPhysicalDevlopment ? 'is-invalid' : ''}`}
                      value={handleData.phisGPEPhysicalDevlopment}
                      onChange={handleChange}
                    ></textarea>
                     {errors.phisGPEPhysicalDevlopment && <div className="invalid-feedback">{errors.phisGPEPhysicalDevlopment}</div>}
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    (2) General condition of the person
                    <Redstar />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <textarea
                      name="phisGPEGeneralCondition"
                      type="text"
                      className={`form-control ${errors.phisGPEGeneralCondition ? 'is-invalid' : ''}`}
                      value={handleData.phisGPEGeneralCondition}
                      onChange={handleChange}
                    ></textarea>
                     {errors.phisGPEGeneralCondition && <div className="invalid-feedback">{errors.phisGPEGeneralCondition}</div>}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    (3) Gait
                    <Redstar />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <textarea
                      name="phisGPEGaitOfVictim"
                      type="text"
                      className={`form-control ${errors.phisGPEGaitOfVictim ? 'is-invalid' : ''}`}
                      value={handleData.phisGPEGaitOfVictim}
                      onChange={handleChange}
                    ></textarea>
                     {errors.phisGPEGaitOfVictim && <div className="invalid-feedback">{errors.phisGPEGaitOfVictim}</div>}
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
      </div>
    </div>
  )
}

export default PhysicalGeneralExamination
