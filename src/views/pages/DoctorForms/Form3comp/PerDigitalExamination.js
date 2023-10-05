


import React, { useState } from 'react'
import { ButtonBackandSave, DropdownformsYesNo, Radioform3female, Redstar } from '../common/Operationradionbutton'
import axios from 'axios'
import { useEffect } from 'react'
import { callApi } from 'src/views/CommonModels/CallApi'
const PerDigitalExamination = ({localExaminationGenitalia,perDigitalExamination,perSpeculumexamination,trnid}) => {
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [DigitalExamination, setDigitalExamination] = useState(false)
  const [handleData, setHandleData] = useState({
    pvdTransactionId: trnid,
    pvdVagina: '',
    pvdCervix: '',
    pvdUterus: '',
    pvdOtherFinding: '',
    cfoPerViginumDigital: 'N',
    createUser: changeuser,
  })
  const [errors, setErrors] = useState({
    pvdVagina: '',
    pvdCervix: '',
    pvdUterus: '',
    pvdOtherFinding: '',
    cfoPerViginumDigital: '',
  });
  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      pvdVagina: '',
      pvdCervix: '',
      pvdUterus: '',
      pvdOtherFinding: '',
      cfoPerViginumDigital: '',
    };
    if(handleData.pvdVagina === null){
      newErrors.pvdVagina = 'Required';
      valid = false;
    }
   else if (handleData.pvdVagina.trim() === '' ) {
      newErrors.pvdVagina = 'Required';
      valid = false;
    }
    if(handleData.pvdCervix === null){
      newErrors.pvdCervix = 'Required';
      valid = false;
    }
   else if (handleData.pvdCervix.trim() === '' ) {
      newErrors.pvdCervix = 'Required';
      valid = false;
    }
    if(handleData.pvdUterus === null){
      newErrors.pvdUterus = 'Required';
      valid = false;
    }
   else if (handleData.pvdUterus.trim() === '' ) {
      newErrors.pvdUterus = 'Required';
      valid = false;
    }
    if(handleData.pvdOtherFinding === null){
      newErrors.pvdOtherFinding = 'Required';
      valid = false;
    }
   else if (handleData.pvdOtherFinding.trim() === '' ) {
      newErrors.pvdOtherFinding = 'Required';
      valid = false;
    }
   
    setErrors(newErrors);
    return valid;
  };
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const url = `${apiPrefix}/user/form3/saveperviginumdigital`
  const url2 = `${apiPrefix}/user/form3/getperviginumdigital/${trnid}`

  useEffect(()=>{
    callApi(url2)
    .then((response) => {
      console.log(response)
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
  const handleDrpChange = (e) => {
    if(e.target.value==='Y'){
      setDigitalExamination(true)
    }else{
      setDigitalExamination(false)
    }
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
    perDigitalExamination(false)
    perSpeculumexamination(true)
    }
  }
  }
  const handleF3_frstBackClick = () => {
    perDigitalExamination(false)
    localExaminationGenitalia(true)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Per Vaginum Digital Examination</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Per Vaginum Digital Examination <Redstar />
                </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <DropdownformsYesNo
              name='cfoPerViginumDigital'
              handleChange={handleDrpChange}
              className={`form-control ${errors.cfoPerViginumDigital ? 'is-invalid' : ''}`}
                  value={handleData.cfoPerViginumDigital}
              yes='Y'
              no='N'
            />
            {errors.cfoPerViginumDigital && <div className="invalid-feedback">{errors.cfoPerViginumDigital}</div>}
            </div>
             {DigitalExamination && (
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <div className="row mb-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  Vagina <Redstar />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <textarea name="pvdVagina" type="text"  className={`form-control ${errors.pvdVagina ? 'is-invalid' : ''}`}
                  value={handleData.pvdVagina} onChange={handleChange}></textarea>
                  {errors.pvdVagina && <div className="invalid-feedback">{errors.pvdVagina}</div>}
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  Cervix <Redstar />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <textarea name="pvdCervix" type="text" className={`form-control ${errors.pvdCervix ? 'is-invalid' : ''}`}
                  value={handleData.pvdCervix} onChange={handleChange}></textarea>
                  {errors.pvdCervix && <div className="invalid-feedback">{errors.pvdCervix}</div>}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  Uterus
                  <Redstar />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <textarea name="pvdUterus" type="text"  className={`form-control ${errors.pvdUterus ? 'is-invalid' : ''}`}
                  value={handleData.pvdUterus} onChange={handleChange}></textarea>
                  {errors.pvdUterus && <div className="invalid-feedback">{errors.pvdUterus}</div>}
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                 Any other finding to be noted
                  <Redstar />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <textarea name="pvdOtherFinding" type="text"  className={`form-control ${errors.pvdOtherFinding ? 'is-invalid' : ''}`}
                  value={handleData.pvdOtherFinding} onChange={handleChange}></textarea>
                  {errors.pvdOtherFinding && <div className="invalid-feedback">{errors.pvdOtherFinding}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
          </div>

          <ButtonBackandSave
           backButton={handleF3_frstBackClick}
          savebutton  ={handleF3_frstClick}
          />
        </div>
      </div>
    </div>
  )
}

export default PerDigitalExamination






















