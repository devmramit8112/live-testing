import React, { useState, useEffect } from 'react'
import Form4Header from './Form4Header'
import DetailsView from './DetailsView'
import { useNavigate } from 'react-router-dom'
import dentalimg from './images/dental.jpg'
import OssificationBonesTable from './OssificationBonesTable'
import { ButtonBackandSave, ButtonFinal, Redstar } from '../common/Operationradionbutton'
import Formdetail from '../common/Formdetails'
import InstructionForm from '../comp/InstructionForm'
import { callApi } from 'src/views/CommonModels/CallApi'
import axios from 'axios'

const OralExamination = ({ OralExaminationdetail, StageDevDetailFemaledetail,StageDevDetailIVsow,StageDevDetailMalesow }) => {
  const trn = localStorage.getItem('trn')
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const gender = localStorage.getItem('gender')
  const [isDisable, setIsDisable] = useState(false)
  const [isCheck, setIsCheck] = useState(false)
  const [isdesable, setdesable] = useState(true);
  const [handleData, setHandleData] = useState({
     oeTransactionID: trn, 
     oeTemporaryTeeth:'', 
     oePermananantTeeth:'', 
     oeSpaceForThirdMolar:'', 
     oeRadiologicalExam:'', 
     oeRadiologicalObservation:'', 
     oeStageOfRootAndCrown:'', 
     boneInference:'', 
    createUser: changeuser,
  })
  const [errors, setErrors] = useState({
    oeTemporaryTeeth:'', 
    oePermananantTeeth:'', 
    oeSpaceForThirdMolar:'', 
    oeRadiologicalExam:'', 
    oeRadiologicalObservation:'', 
    oeStageOfRootAndCrown:'', 
    boneInference:'', 
   
  });
  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      oeTemporaryTeeth:'', 
     oePermananantTeeth:'', 
     oeSpaceForThirdMolar:'', 
     oeRadiologicalExam:'', 
     oeRadiologicalObservation:'', 
     oeStageOfRootAndCrown:'', 
     boneInference:'', 
    };
    if(handleData.oeTemporaryTeeth === null){
      newErrors.oeTemporaryTeeth = 'Required';
      valid = false;
    }
   else if (handleData.oeTemporaryTeeth.trim() === '' ) {
      newErrors.oeTemporaryTeeth = 'Required';
      valid = false;
    }
    if(handleData.oePermananantTeeth === null){
      newErrors.oePermananantTeeth = 'Required';
      valid = false;
    }
    else if (handleData.oePermananantTeeth.trim() === '') {
      newErrors.oePermananantTeeth = 'Required';
      valid = false;
    }
    if(handleData.oeSpaceForThirdMolar === null){
      newErrors.oeSpaceForThirdMolar = 'Required';
      valid = false;
    }
   else if (handleData.oeSpaceForThirdMolar.trim() === '') {
      newErrors.oeSpaceForThirdMolar = 'Required';
      valid = false;
    } 
    if(handleData.oeRadiologicalExam === null){
      newErrors.oeRadiologicalExam = 'Required';
      valid = false;
    }
    else if (handleData.oeRadiologicalExam.trim() === '') {
      newErrors.oeRadiologicalExam = 'Required';
      valid = false;
    }
    if(handleData.oeRadiologicalObservation === null){
      newErrors.oeRadiologicalObservation = 'Required';
      valid = false;
    }
   else if (handleData.oeRadiologicalObservation.trim() === '') {
      newErrors.oeRadiologicalObservation = 'Required';
      valid = false;
    } 
    if(handleData.oeStageOfRootAndCrown === null){
      newErrors.oeStageOfRootAndCrown = 'Required';
      valid = false;
    }
    else if (handleData.oeStageOfRootAndCrown.trim() === '') {
      newErrors.oeStageOfRootAndCrown = 'Required';
      valid = false;
    }
    if(handleData.boneInference === null){
      newErrors.boneInference = 'Required';
      valid = false;
    }
   else if (handleData.boneInference.trim() === '') {
      newErrors.boneInference = 'Required';
      valid = false;
    } 
    setErrors(newErrors);
    return valid;
  };
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apigetcd = `${apiPrefix}/user/form4/getoralexaminationform4/${trn}`
  const apipdf = `${apiPrefix}/user/pdfgenrator/form4/${trn}`
useEffect(()=>{
  callApi(apigetcd)
  .then((response) => {
   setHandleData(response)
  })
  .catch((error) => {
    console.error('API request failed:', error)
  })
  callApi(apigetcd)
  .then((response) => {
   setHandleData(response)
  })
  .catch((error) => {
    console.error('API request failed:', error)
  })
},[])

  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }
  const handleF3_frstClick = async () => {
    if (validateformOTP()) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_PREFIX}/user/form4/saveoralexaminationform4`,
        handleData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )

      if (response.status === 200) {
        setIsDisable(true)
        console.log(`Status: ${response.status}`)
        
        // Handle error logic here
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error logic here
    }
  }
  }
  const handleF3_frstBackClick = () => {
    OralExaminationdetail(false)
    if(gender=='1'){
      StageDevDetailMalesow(true)
    }else if(gender=='2'){
      StageDevDetailFemaledetail(true)
    }else if(gender == '102'||gender == '152'){
      StageDevDetailIVsow(true)
    }
  }
  const handleF3_prntClick = async () => {
    try {
      // const apipdfgentrn = `${apiPrefix}/user/pdfgenrator/rukka/${trn}`; // pdf generator api 
      alert("PDF REPORT", trn)
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(apipdf, { headers, responseType: 'blob' });
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      } else {
        console.error('API Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handlecheckchange = () => {

    setIsCheck(!isCheck)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Oral Examination of Teeth & Ossification of Bones</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-6">
              <img className="form-control" src={dentalimg} width={150} height={400} />
            </div>
          </div>

          {/* For Dentition form  */}
          <div className="row mb-3">
            <h4 className="text-center p-3 mb-3">Dentition</h4>
          </div>
          <div className="row mb-4">
            <p>
              {' '}
              Oral examination of teeth (this is done by clinical examination by nothing tooth
              eruption, the sequence of eruption)
            </p>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              Temporary teeth (Max. 10 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <input name="oeTemporaryTeeth" value={handleData.oeTemporaryTeeth} onChange={handleChange} type="text" className={`form-control ${errors.oeTemporaryTeeth ? 'is-invalid' : ''}`} />
              {errors.oeTemporaryTeeth && <div className="invalid-feedback">{errors.oeTemporaryTeeth}</div>}
            </div> 
     
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Permanent teeth (Max. 10 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <input name="oePermananantTeeth" value={handleData.oePermananantTeeth} onChange={handleChange} type="text" className={`form-control ${errors.oePermananantTeeth ? 'is-invalid' : ''}`} />
              {errors.oePermananantTeeth && <div className="invalid-feedback">{errors.oePermananantTeeth}</div>}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Space for third molar (Max. 10 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <input name="oeSpaceForThirdMolar" value={handleData.oeSpaceForThirdMolar} onChange={handleChange} type="text" className={`form-control ${errors.oeSpaceForThirdMolar ? 'is-invalid' : ''}`}/>
              {errors.oeSpaceForThirdMolar && <div className="invalid-feedback">{errors.oeSpaceForThirdMolar}</div>}
            </div>
          </div> 
          <div className="row mb-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              Radiological examination of dentition (by AP, oblique tangential view of jaw with open
              mouth Or an Orthopantogram if facilities are available) (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <input name="oeRadiologicalExam" value={handleData.oeRadiologicalExam} onChange={handleChange} type="text" className={`form-control ${errors.oeRadiologicalExam ? 'is-invalid' : ''}`} />
              {errors.oeRadiologicalExam && <div className="invalid-feedback">{errors.oeRadiologicalExam}</div>}
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              Stage of crown and root development stage of molars (2nd and 3rd Molar teeth) (Max.
              4000 Characters) (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <input name="oeStageOfRootAndCrown" value={handleData.oeStageOfRootAndCrown} onChange={handleChange} type="text" className={`form-control ${errors.oeStageOfRootAndCrown ? 'is-invalid' : ''}`} />
              {errors.oeStageOfRootAndCrown && <div className="invalid-feedback">{errors.oeStageOfRootAndCrown}</div>}
            </div>
          </div>
<div className='card shadow-sm p-3 m-2'>
<OssificationBonesTable />

</div>
          
          <div className="row mb-3">
            <div className="col-6">
              Inference of Ossification findings in bones (Max. 100 Characters)Identification
              <Redstar />
            </div>
            <div className="col-6">
              <input name="boneInference" value={handleData.boneInference} onChange={handleChange} type="text" className={`form-control ${errors.boneInference ? 'is-invalid' : ''}`} />
              {errors.boneInference && <div className="invalid-feedback">{errors.boneInference}</div>}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              Opinion After performing general physical, dental, and radiological examination, We
              are of the considered opinion that age of this person is between/aboutIdentification
              <Redstar />
            </div>
            <div className="col-6">
              <input name="oeRadiologicalObservation" value={handleData.oeRadiologicalObservation} onChange={handleChange} type="text" className={`form-control ${errors.oeRadiologicalObservation ? 'is-invalid' : ''}`} />
              {errors.oeRadiologicalObservation && <div className="invalid-feedback">{errors.oeRadiologicalObservation}</div>}
            </div>
          </div>
        </div>
        <ButtonFinal
              backButton={handleF3_frstBackClick}
              savebutton={handleF3_frstClick}
              printbtn={handleF3_prntClick}
              isDisable={isDisable}
              isCheck={isCheck}
              handlecheckchange={handlecheckchange}
            />

        <InstructionForm></InstructionForm>
      </div>
    </div>
  )
}

export default OralExamination
