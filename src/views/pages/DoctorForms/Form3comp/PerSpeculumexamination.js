import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  ButtonBackandSave,
  DropdownformsYesNo,
  PerSpeculume,
  Redstar,
} from '../common/Operationradionbutton'
import { callApi } from 'src/views/CommonModels/CallApi'

const PerSpeculumexamination = ({perSpeculumexamination,perDigitalExamination,sampleCollectionForensicDetail,trnid}) => {
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [DigitalExamination, setDigitalExamination] = useState(false)
  const [handleData, setHandleData] = useState({
    pseTransactionID: trnid,
    pseVagina: '',
    pseCervix: '',
    pseFornices: '',
    pseUterus: '',
    pseHymens: '',
    cfoPerSpeculumExamination:'N',
    createUser: changeuser,
  })
  const [errors, setErrors] = useState({
    pseVagina: '',
    pseCervix: '',
    pseFornices: '',
    pseUterus: '',
    pseHymens: '',
    cfoPerSpeculumExamination:'',
  });
  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      pseVagina: '',
    pseCervix: '',
    pseFornices: '',
    pseUterus: '',
    pseHymens: '',
    cfoPerSpeculumExamination:'',
    };
    if(handleData.pseVagina === null){
      newErrors.pseVagina = 'Required';
      valid = false;
    }
   else if (handleData.pseVagina.trim() === '' ) {
      newErrors.pseVagina = 'Required';
      valid = false;
    }
    if(handleData.pseCervix === null){
      newErrors.pseCervix = 'Required';
      valid = false;
    }
   else if (handleData.pseCervix.trim() === '' ) {
      newErrors.pseCervix = 'Required';
      valid = false;
    }
    if(handleData.pseFornices === null){
      newErrors.pseFornices = 'Required';
      valid = false;
    }
   else if (handleData.pseFornices.trim() === '' ) {
      newErrors.pseFornices = 'Required';
      valid = false;
    }
    if(handleData.pseUterus === null){
      newErrors.pseUterus = 'Required';
      valid = false;
    }
   else if (handleData.pseUterus.trim() === '' ) {
      newErrors.pseUterus = 'Required';
      valid = false;
    }
    if(handleData.pseHymens === null){
      newErrors.pseHymens = 'Required';
      valid = false;
    }
   else if (handleData.pseHymens.trim() === '' ) {
      newErrors.pseHymens = 'Required';
      valid = false;
    }
    if(handleData.cfoPerSpeculumExamination === null){
      newErrors.cfoPerSpeculumExamination = 'Required';
      valid = false;
    }
   else if (handleData.cfoPerSpeculumExamination.trim() === '' ) {
      newErrors.cfoPerSpeculumExamination = 'Required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const url = `${apiPrefix}/user/form3/saveperspeculumexamination`
  const url2 = `${apiPrefix}/user/form3/getperspeculumexamination/${trnid}`

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
    perSpeculumexamination(false)
    sampleCollectionForensicDetail(true)
    }
  }
  }
  const handleF3_frstBackClick = () => {
    perSpeculumexamination(false)
    perDigitalExamination(true)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">

        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Per Speculum examination</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Per Vaginum Digital Examination <Redstar />
                </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <DropdownformsYesNo
              name='cfoPerSpeculumExamination'
              handleChange={handleDrpChange}
              className={`form-control ${errors.phisGPEBSymptoms ? 'is-invalid' : ''}`}
                  value={handleData.phisGPEBSymptoms}
              yes='Y'
              no='N'
            />
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
                  <textarea name="pseVagina" type="text"  className={`form-control ${errors.pseVagina ? 'is-invalid' : ''}`}
                  value={handleData.pseVagina} onChange={handleChange}></textarea>
                  {errors.pseVagina && <div className="invalid-feedback">{errors.pseVagina}</div>}
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  Cervix <Redstar />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <textarea name="pseCervix" type="text"  className={`form-control ${errors.pseCervix ? 'is-invalid' : ''}`}
                  value={handleData.pseCervix} onChange={handleChange}></textarea>
                  {errors.pseCervix && <div className="invalid-feedback">{errors.pseCervix}</div>}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  Uterus
                  <Redstar />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <textarea name="pseUterus" type="text"  className={`form-control ${errors.pseUterus ? 'is-invalid' : ''}`}
                  value={handleData.pseUterus} onChange={handleChange}></textarea>
                  {errors.pseUterus && <div className="invalid-feedback">{errors.pseUterus}</div>}
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                Fornices 
                  <Redstar />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <textarea name="pseFornices" type="text"  className={`form-control ${errors.pseFornices ? 'is-invalid' : ''}`}
                  value={handleData.pseFornices} onChange={handleChange}></textarea>
                  {errors.pseFornices && <div className="invalid-feedback">{errors.pseFornices}</div>}
                </div>
              </div>
              <div className="row mt-2">
              <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Hymen (only if relevant)
          <Redstar />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <textarea name="pseHymens" type="text" className={`form-control ${errors.pseHymens ? 'is-invalid' : ''}`}
                  value={handleData.pseHymens} onChange={handleChange}></textarea>
                  {errors.pseHymens && <div className="invalid-feedback">{errors.pseHymens}</div>}
        </div>
      </div>
            
            </div>
            </div>
          </div>
        </div>
      )}
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

export default PerSpeculumexamination
