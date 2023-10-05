import React, { useEffect, useState } from 'react'
import { ButtonBackandSave, Redstar } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'
const LocalExaminationGenitalia = ({perDigitalExamination,femaleLocalExaminationDetail,localExaminationGenitalia,trnid}) => {
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [handleData, setHandleData] = useState({
    cfoTransaction_ID: trnid,
    cfoStateTopOfTight: '',
    cfoStateSphincters: '',
    cfoStatePerineal: '',
    cfoLabiaMajora: '',
    cfoFourchetteAndInntroitus: '',
    cfoAnusRectum: '',
    createUser: changeuser,
  })
  const [errors, setErrors] = useState({
    cfoStateTopOfTight: '',
    cfoStateSphincters: '',
    cfoStatePerineal: '',
    cfoLabiaMajora: '',
    cfoFourchetteAndInntroitus: '',
    cfoAnusRectum: '',
  });
  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      cfoStateTopOfTight: '',
      cfoStateSphincters: '',
      cfoStatePerineal: '',
      cfoLabiaMajora: '',
      cfoFourchetteAndInntroitus: '',
      cfoAnusRectum: '',
    };
    if(handleData.cfoStateTopOfTight === null){
      newErrors.cfoStateTopOfTight = 'Required';
      valid = false;
    }
   else if (handleData.cfoStateTopOfTight.trim() === '' ) {
      newErrors.cfoStateTopOfTight = 'Required';
      valid = false;
    }
    if(handleData.cfoStateSphincters === null){
      newErrors.cfoStateSphincters = 'Required';
      valid = false;
    }
   else if (handleData.cfoStateSphincters.trim() === '' ) {
      newErrors.cfoStateSphincters = 'Required';
      valid = false;
    }
    if(handleData.cfoStatePerineal === null){
      newErrors.cfoStatePerineal = 'Required';
      valid = false;
    }
   else if (handleData.cfoStatePerineal.trim() === '' ) {
      newErrors.cfoStatePerineal = 'Required';
      valid = false;
    }
    if(handleData.cfoLabiaMajora === null){
      newErrors.cfoLabiaMajora = 'Required';
      valid = false;
    }
   else if (handleData.cfoLabiaMajora.trim() === '' ) {
      newErrors.cfoLabiaMajora = 'Required';
      valid = false;
    }
    if(handleData.cfoFourchetteAndInntroitus === null){
      newErrors.cfoFourchetteAndInntroitus = 'Required';
      valid = false;
    }
   else if (handleData.cfoFourchetteAndInntroitus.trim() === '' ) {
      newErrors.cfoFourchetteAndInntroitus = 'Required';
      valid = false;
    }
    if(handleData.cfoAnusRectum === null){
      newErrors.cfoAnusRectum = 'Required';
      valid = false;
    }
   else if (handleData.cfoAnusRectum.trim() === '' ) {
      newErrors.cfoAnusRectum = 'Required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const url = `${apiPrefix}/user/form3/savedetailexaminationofgentila`
  const url2 = `${apiPrefix}/user/form3/getdetailexaminationofgentila/${trnid}`

  useEffect(()=>{
    callApi(url2)
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
    const response = await axios.post(url, handleData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
    localExaminationGenitalia(false)
    perDigitalExamination(true)
    }
  }
  }
  const handleF3_frstBackClick = () => {
    localExaminationGenitalia(false)
    femaleLocalExaminationDetail(true)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Local Examination of Genitalia : In Case in Females</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              State of the Tops of Thighs, Pubic Region and Perineum <Redstar />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea
               name="cfoStateTopOfTight"
               type="text" 
               className={`form-control ${errors.cfoStateTopOfTight ? 'is-invalid' : ''}`}
              value={handleData.cfoStateTopOfTight} 
               onChange={handleChange}></textarea>
                {errors.cfoStateTopOfTight && <div className="invalid-feedback">{errors.cfoStateTopOfTight}</div>}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              State of the sphincters <Redstar />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="cfoStateSphincters" type="text" className={`form-control ${errors.cfoStateSphincters ? 'is-invalid' : ''}`}
              value={handleData.cfoStateSphincters}  onChange={handleChange}></textarea>
               {errors.cfoStateSphincters && <div className="invalid-feedback">{errors.cfoStateSphincters}</div>}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              State of perineal musculature
              <Redstar />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="cfoStatePerineal" type="text" className={`form-control ${errors.cfoStatePerineal ? 'is-invalid' : ''}`}
              value={handleData.cfoStatePerineal}  onChange={handleChange}></textarea>
               {errors.cfoStatePerineal && <div className="invalid-feedback">{errors.cfoStatePerineal}</div>}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Labia Majora <Redstar />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="cfoLabiaMajora" type="text" className={`form-control ${errors.cfoLabiaMajora ? 'is-invalid' : ''}`}
              value={handleData.cfoLabiaMajora}  onChange={handleChange}></textarea>
               {errors.cfoLabiaMajora && <div className="invalid-feedback">{errors.cfoLabiaMajora}</div>}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Fourchette and introitus <Redstar />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="cfoFourchetteAndInntroitus" type="text" className={`form-control ${errors.cfoFourchetteAndInntroitus ? 'is-invalid' : ''}`}
              value={handleData.cfoFourchetteAndInntroitus}  onChange={handleChange}></textarea>
               {errors.cfoFourchetteAndInntroitus && <div className="invalid-feedback">{errors.cfoFourchetteAndInntroitus}</div>}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Anus and Rectum <Redstar />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="cfoAnusRectum" type="text" className={`form-control ${errors.cfoAnusRectum ? 'is-invalid' : ''}`}
              value={handleData.cfoAnusRectum}  onChange={handleChange}></textarea>
               {errors.cfoAnusRectum && <div className="invalid-feedback">{errors.cfoAnusRectum}</div>}
            </div>
          </div>
          <ButtonBackandSave
            backButton={handleF3_frstBackClick}
            savebutton={handleF3_frstClick}
          />
        </div>
      </div>
    </div>
  )
}

export default LocalExaminationGenitalia
