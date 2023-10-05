import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import StageDevelopmentDetail from './StageDevelopmentDetail'
import { callApi } from 'src/views/CommonModels/CallApi'
import axios from 'axios'

const StageDevDetailIV = ({StageDevDetailIVsow,Form4details,OralExaminationdetail}) => {
  const trn = localStorage.getItem('trn')
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
 
  const [handleData, setHandleData] = useState({
    esrTransactionID:trn,
    eunuchSexualRemark:'',
      createUser: changeuser,
  })
  const [errors, setErrors] = useState({
    eunuchSexualRemark:'',
  });
  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      eunuchSexualRemark:'',
    };
    if(handleData.eunuchSexualRemark === null){
      newErrors.eunuchSexualRemark = 'Required';
      valid = false;
    }
   else if (handleData.eunuchSexualRemark.trim() === '' ) {
      newErrors.eunuchSexualRemark = 'Required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apigetcd = `${apiPrefix}/user/form4/geteunuchSexualRemarkForm4/${trn}`

useEffect(()=>{
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
        '${process.env.REACT_APP_API_PREFIX}/user/form4/saveeunuchSexualRemarkForm4',
        handleData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )

      if (response.status === 200) {
        StageDevDetailIVsow(false)
        OralExaminationdetail(true)
      } 
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error logic here
    }
  }
  }
  const handleF3_frstBackClick = () => {
    StageDevDetailIVsow(false)
    Form4details(true)
  }

  return (
    <div className="Container">
      <StageDevelopmentDetail
      handleChange={handleChange}
        backButton1={handleF3_frstBackClick}
        savebutton1={handleF3_frstClick}
        handleData={handleData}
        errors={errors}
      />
    </div>
  )
}

export default StageDevDetailIV
