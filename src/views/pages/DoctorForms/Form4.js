/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import Formdetail from './common/Formdetails'
import CaseDetails, { ExaminationComplete } from './common/CaseDetails'
import { Ageinput } from './common/Operationradionbutton'
import IdentificationMarks from './comp/IdentificationMarks'
import GeneralPhysicalExamination from './form4comp/GeneralPhysicalExamination'
import StageDevDetailFemale from './form4comp/StageDevDetailFemale'
import OralExamination from './form4comp/OralExamination'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'
import StageDevDetailIV from './form4comp/StageDevDetailIV'
import StageDevDetailMale from './form4comp/StageDevDetailMale'

const Form4 = () => {
 
  const [Form4details, setForm4details] = useState(true)
  const [StageDevDetailFemaledetail, setStageDevDetailFemaledetail] = useState(false)
  const [StageDevDetailIVsow, setStageDevDetailIVsow] = useState(false)
  const [StageDevDetailMalesow, setStageDevDetailMalesow] = useState(false)
  StageDevDetailIVsow
  const [OralExaminationdetail, setOralExaminationdetail] = useState(false)
  const [nextpage, setnextpage] = useState('F')
  const [nextcomponent, setnextcomponent] = useState('')
  const trn = localStorage.getItem('trn')
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const gender = localStorage.getItem('gender')
  const [inputData, setInputData] = useState({
   
  })
  const [handle1Data, setHandle1Data] = useState({
    gpeTransactionID: trn,
    createUser: changeuser,
    vtageyr:'',
    vtagemonth:'',
    vtagedays:'',
    gpeHeight: '',
    gpeWeight: '',
    gpeAbdonomialCirecum: '',
    gpePulse: '',
    gpeBP: '',
  })
  const [handle2Data, setHandle2Data] = useState({
    bdesTransactionID:trn,
    vtageyr:'',
    vtagemonth:'',
    vtagedays:'',
    createUser:changeuser,
  })
  const [handleData, setHandleData] = useState({
  
    cdTransactionID: trn,
    cdArrivalDate: '',
    cdArrivalTime: '',
    cdExaminationStartDate: '',
    cdExaminationStartTime: '',
    cdExaminationCompleteDate: '',
    cdExaminationCompleteTime: '',
    cdExaminationPlaceID: '',
    createUser: changeuser,
  })
  const [errors, setErrors] = useState({
    cdArrivalDate: '',
    cdArrivalTime: '',
    cdExaminationStartDate: '',
    cdExaminationStartTime: '',
    cdExaminationCompleteDate: '',
    cdExaminationCompleteTime: '',
    cdExaminationPlaceID: '',
    vtageyr:'',
    vtagemonth:'',
    vtagedays:'',
    gpeHeight: '',
    gpeWeight: '',
    gpeAbdonomialCirecum: '',
    gpePulse: '',
    gpeBP: '',
  });
  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      cdArrivalDate: '',
    cdArrivalTime: '',
    cdExaminationStartDate: '',
    cdExaminationStartTime: '',
    cdExaminationCompleteDate: '',
    cdExaminationCompleteTime: '',
    cdExaminationPlaceID: '',
    vtageyr:'',
    vtagemonth:'',
    vtagedays:'',
    gpeHeight: '',
    gpeWeight: '',
    gpeAbdonomialCirecum: '',
    gpePulse: '',
    gpeBP: '',
    };
    if(handleData.cdArrivalDate === null){
      newErrors.cdArrivalDate = 'Required';
      valid = false;
    }
   else if (handleData.cdArrivalDate.trim() === '' ) {
      newErrors.cdArrivalDate = 'Required';
      valid = false;
    }
    if(handleData.cdArrivalTime === null){
      newErrors.cdArrivalTime = 'Required';
      valid = false;
    }
    else if (handleData.cdArrivalTime.trim() === '') {
      newErrors.cdArrivalTime = 'Required';
      valid = false;
    }
    if(handleData.cdExaminationStartDate === null){
      newErrors.cdExaminationStartDate = 'Required';
      valid = false;
    }
   else if (handleData.cdExaminationStartDate.trim() === '') {
      newErrors.cdExaminationStartDate = 'Required';
      valid = false;
    } 
    if(handleData.cdExaminationStartTime === null){
      newErrors.cdExaminationStartTime = 'Required';
      valid = false;
    }
    else if (handleData.cdExaminationStartTime.trim() === '') {
      newErrors.cdExaminationStartTime = 'Required';
      valid = false;
    }
    if(handleData.cdExaminationCompleteDate === null){
      newErrors.cdExaminationCompleteDate = 'Required';
      valid = false;
    }
   else if (handleData.cdExaminationCompleteDate.trim() === '') {
      newErrors.cdExaminationCompleteDate = 'Required';
      valid = false;
    } 
    if(handleData.cdExaminationCompleteTime === null){
      newErrors.cdExaminationCompleteTime = 'Required';
      valid = false;
    }
    else if (handleData.cdExaminationCompleteTime.trim() === '') {
      newErrors.cdExaminationCompleteTime = 'Required';
      valid = false;
    }
    if(handleData.cdExaminationPlaceID === null){
      newErrors.cdExaminationPlaceID = 'Required';
      valid = false;
    }
   else if (handleData.cdExaminationPlaceID.trim() === '') {
      newErrors.cdExaminationPlaceID = 'Required';
      valid = false;
    } 
    if(handle2Data.vtageyr === null){
      newErrors.vtageyr = 'Required';
      valid = false;
    }
   else if (handle2Data.vtageyr.trim() === '' ) {
      newErrors.vtageyr = 'Required';
      valid = false;
    }
    if(handle2Data.vtagemonth === null){
      newErrors.vtagemonth = 'Required';
      valid = false;
    }
    else if (handle2Data.vtagemonth.trim() === '') {
      newErrors.vtagemonth = 'Required';
      valid = false;
    }
    if(handle2Data.vtagedays === null){
      newErrors.vtagedays = 'Required';
      valid = false;
    }
   else if (handle2Data.vtagedays.trim() === '') {
      newErrors.vtagedays = 'Required';
      valid = false;
    } 
    if(handle1Data.gpeHeight === null){
      newErrors.gpeHeight = 'Required';
      valid = false;
    }
    else if (handle1Data.gpeHeight.trim() === '') {
      newErrors.gpeHeight = 'Required';
      valid = false;
    }
    if(handle1Data.gpeWeight === null){
      newErrors.gpeWeight = 'Required';
      valid = false;
    }
   else if (handle1Data.gpeWeight.trim() === '') {
      newErrors.gpeWeight = 'Required';
      valid = false;
    } 
    if(handle1Data.gpeAbdonomialCirecum === null){
      newErrors.gpeAbdonomialCirecum = 'Required';
      valid = false;
    }
   else if (handle1Data.gpeAbdonomialCirecum.trim() === '') {
      newErrors.gpeAbdonomialCirecum = 'Required';
      valid = false;
    } 
    if(handle1Data.gpePulse === null){
      newErrors.gpePulse = 'Required';
      valid = false;
    }
   else if (handle1Data.gpePulse.trim() === '') {
      newErrors.gpePulse = 'Required';
      valid = false;
    } 
    if(handle1Data.gpeBP === null){
      newErrors.gpeBP = 'Required';
      valid = false;
    }
   else if (handle1Data.gpeBP.trim() === '') {
      newErrors.gpeBP = 'Required';
      valid = false;
    } 
    setErrors(newErrors);
    return valid;
  };
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apicd = `${apiPrefix}/user/form2/savecasedetails`
  const apivtd = `${apiPrefix}/user/form4/savebodydescriptionform4`
  const apigetvtd = `${apiPrefix}/user/form4/getbodydescriptionform4/${trn}`
  const apigetcd = `${apiPrefix}/user/form2/get_casedetails/${trn}`
  const apigetGD = `${apiPrefix}/user/form4/getgenralphyscialexaminationform4/${trn}`
  useEffect(()=>{
    callApi(apigetcd)
    .then((response) => {
     setHandleData(response)
    })
    .catch((error) => {
      console.error('API request failed:', error)
    })
    callApi(apigetGD)
    .then((response) => {
     setHandle1Data(response)
    })
    .catch((error) => {
      console.error('API request failed:', error)
    })
    callApi(apigetvtd)
    .then((response) => {
     setHandle2Data(response)
    })
    .catch((error) => {
      console.error('API request failed:', error)
    })
  },[])
  
  // Form submit
  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
    setHandle1Data({ ...handle1Data, [name]: value })
    setHandle2Data({ ...handle2Data, [name]: value })
  }
 
  const handleF3_frstClick = async () => {
    if (validateformOTP()) {
    try {
      const response = await axios.post(apicd, handleData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.status === 200) {
        try {
          const response = await axios.post(apivtd, handle2Data, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
          if (response.status === 200) {
            const response = await axios.post(
              `${process.env.REACT_APP_API_PREFIX}/user/form4/savegenralphyscialexaminationform4`,
              handle1Data,
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`, 
                },
              },
            )
            if (response.status === 200) {
              setForm4details(false)
              if(gender=='1'){
                setStageDevDetailMalesow(true)
              }else if(gender=='2'){
                setStageDevDetailFemaledetail(true)
              }else if(gender == '102'||gender == '152'){
                setStageDevDetailIVsow(true)
              }
          } else {
            console.log('Form submission failed')
            console.log(`Status: ${response.status}`)
            // Handle error logic here
          }
            }
        } catch (error) {
          console.error('Error submitting form:', error)
          // Handle error logic here
        }
        }
      
      
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error logic here
    }
  }
  }

  const handleDataSubmit = (data) => {
    // Handle the submitted data here in the parent component
    console.log('Submitted Data:', data)
  }

  return (
    <div className="Container">
      <Formdetail title="Form-IV-Medical Legal Report- Age Estimation "  trnid={trn} />
      {Form4details && (
        <div className="card mt-2 mb-2">
          <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
            <h4>Identification Marks & General Physical Examination Detail</h4>
          </div>
          <div className="card-body">
            <CaseDetails
              title=" Arrival  Date & Time"
              title1="Examination  Date & Time"
              title2="Examination Place"
              handleChange={handleChange}
              handleData={handleData}
              errors={errors}
            ></CaseDetails>

            <ExaminationComplete  handleChange={handleChange}
              handleData={handleData}
              errors={errors}/>
            <Ageinput
              handleChange={handleChange}
              handleData={handle2Data}
              errors={errors}/>
              <div className='card shadow-sm p-3'><IdentificationMarks /></div>
             
            <GeneralPhysicalExamination 
            handleChange={handleChange}
              handleData={handle1Data}
              errors={errors} />
            <div className="row mb-3 ">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleF3_frstClick}
                >
                  Save and Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {StageDevDetailIVsow && (
        <StageDevDetailIV
          StageDevDetailIVsow={setStageDevDetailIVsow}
          Form4details={setForm4details}
          OralExaminationdetail={setOralExaminationdetail}
        />
      )}
      {StageDevDetailMalesow && (
        <StageDevDetailMale
          StageDevDetailMalesow={setStageDevDetailMalesow}
          Form4details={setForm4details}
          OralExaminationdetail={setOralExaminationdetail}
        />
      )}
      {StageDevDetailFemaledetail && (
        <StageDevDetailFemale
          StageDevDetailFemaledetail={setStageDevDetailFemaledetail}
          Form4details={setForm4details}
          OralExaminationdetail={setOralExaminationdetail}
        />
      )}
      {OralExaminationdetail && (
        <OralExamination
          StageDevDetailFemaledetail={setStageDevDetailFemaledetail}
          StageDevDetailIVsow={setStageDevDetailIVsow}
          StageDevDetailMalesow={setStageDevDetailMalesow}
          OralExaminationdetail={setOralExaminationdetail}
        />
      )}
    </div>
  )
}

export default Form4
