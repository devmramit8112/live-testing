import React, { useEffect, useState } from 'react'
import { ButtonBackandSave, Dropdownforms, Redstar } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'
const ConditionsVarious = ({ behavDetail, conDetail, examinDetail, trnid }) => {
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [handleData, setHandleData] = useState({
    phisTransactionID: trnid,
    phisCvcForgeignMatter: '',
    phisCVCTCR: '',
    phisCvcStainBlood: '',
    phisCvcStainSeminal: '',
    phisCvcStainFaecal: '',
    phisCvcStainMud: '',
    phisBurns: '',
    phisButton: '',
    phisClothChanged: '',
    phisClothAvailable: '',
    phisClothWashedOrRepaired: '',
    phisEatenFood: '',
    phisIngestedLiquid: '',
    phisSmoked: '',
    phisBrushed: '',
    phisGargled: '',
    createUser: changeuser,
  })
  const [errors, setErrors] = useState({
    phisCvcForgeignMatter: '',
    phisCVCTCR: '',
    phisCvcStainBlood: '',
    phisCvcStainSeminal: '',
    phisCvcStainFaecal: '',
    phisCvcStainMud: '',
    phisBurns: '',
    phisButton: '',
    phisClothChanged: '',
    phisClothAvailable: '',
    phisClothWashedOrRepaired: '',
    phisEatenFood: '',
    phisIngestedLiquid: '',
    phisSmoked: '',
    phisBrushed: '',
    phisGargled: '',
  });
  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      phisCvcForgeignMatter: '',
    phisCVCTCR: '',
    phisCvcStainBlood: '',
    phisCvcStainSeminal: '',
    phisCvcStainFaecal: '',
    phisCvcStainMud: '',
    phisBurns: '',
    phisButton: '',
    phisClothChanged: '',
    phisClothAvailable: '',
    phisClothWashedOrRepaired: '',
    phisEatenFood: '',
    phisIngestedLiquid: '',
    phisSmoked: '',
    phisBrushed: '',
    phisGargled: '',
    };
    if(handleData.phisCvcForgeignMatter === null){
      newErrors.phisCvcForgeignMatter = 'Required';
      valid = false;
    }
   else if (handleData.phisCvcForgeignMatter.trim() === '' ) {
      newErrors.phisCvcForgeignMatter = 'Required';
      valid = false;
    }
    if(handleData.phisCVCTCR === null){
      newErrors.phisCVCTCR = 'Required';
      valid = false;
    }
   else if (handleData.phisCVCTCR.trim() === '' ) {
      newErrors.phisCVCTCR = 'Required';
      valid = false;
    }
    if(handleData.phisCvcStainBlood === null){
      newErrors.phisCvcStainBlood = 'Required';
      valid = false;
    }
   else if (handleData.phisCvcStainBlood.trim() === '' ) {
      newErrors.phisCvcStainBlood = 'Required';
      valid = false;
    }
    if(handleData.phisCvcStainSeminal === null){
      newErrors.phisCvcStainSeminal = 'Required';
      valid = false;
    }
   else if (handleData.phisCvcStainSeminal.trim() === '' ) {
      newErrors.phisCvcStainSeminal = 'Required';
      valid = false;
    }
    if(handleData.phisCvcStainFaecal === null){
      newErrors.phisCvcStainFaecal = 'Required';
      valid = false;
    }
   else if (handleData.phisCvcStainFaecal.trim() === '' ) {
      newErrors.phisCvcStainFaecal = 'Required';
      valid = false;
    }
    if(handleData.phisCvcStainMud === null){
      newErrors.phisCvcStainMud = 'Required';
      valid = false;
    }
   else if (handleData.phisCvcStainMud.trim() === '' ) {
      newErrors.phisCvcStainMud = 'Required';
      valid = false;
    }
    if(handleData.phisBurns === null){
      newErrors.phisBurns = 'Required';
      valid = false;
    }
   else if (handleData.phisBurns.trim() === '' ) {
      newErrors.phisBurns = 'Required';
      valid = false;
    }
    if(handleData.phisButton === null){
      newErrors.phisButton = 'Required';
      valid = false;
    }
   else if (handleData.phisButton.trim() === '' ) {
      newErrors.phisButton = 'Required';
      valid = false;
    }
   
    if(handleData.phisClothChanged === null){
      newErrors.phisClothChanged = 'Required';
      valid = false;
    }
   else if (handleData.phisClothChanged.trim() === '' ) {
      newErrors.phisClothChanged = 'Required';
      valid = false;
    }
    if(handleData.phisClothAvailable === null){
      newErrors.phisClothAvailable = 'Required';
      valid = false;
    }
   else if (handleData.phisClothAvailable.trim() === '' ) {
      newErrors.phisClothAvailable = 'Required';
      valid = false;
    }
    
    if(handleData.phisClothWashedOrRepaired === null){
      newErrors.phisClothWashedOrRepaired = 'Required';
      valid = false;
    }
   else if (handleData.phisClothWashedOrRepaired.trim() === '' ) {
      newErrors.phisClothWashedOrRepaired = 'Required';
      valid = false;
    }
    if(handleData.phisEatenFood === null){
      newErrors.phisEatenFood = 'Required';
      valid = false;
    }
   else if (handleData.phisEatenFood.trim() === '' ) {
      newErrors.phisEatenFood = 'Required';
      valid = false;
    }
    if(handleData.phisIngestedLiquid === null){
      newErrors.phisIngestedLiquid = 'Required';
      valid = false;
    }
   else if (handleData.phisIngestedLiquid.trim() === '' ) {
      newErrors.phisIngestedLiquid = 'Required';
      valid = false;
    }
    if(handleData.phisSmoked === null){
      newErrors.phisSmoked = 'Required';
      valid = false;
    }
   else if (handleData.phisSmoked.trim() === '' ) {
      newErrors.phisSmoked = 'Required';
      valid = false;
    }
    if(handleData.phisBrushed === null){
      newErrors.phisBrushed = 'Required';
      valid = false;
    }
   else if (handleData.phisBrushed.trim() === '' ) {
      newErrors.phisBrushed = 'Required';
      valid = false;
    }
    if(handleData.phisGargled === null){
      newErrors.phisGargled = 'Required';
      valid = false;
    }
   else if (handleData.phisGargled.trim() === '' ) {
      newErrors.phisGargled = 'Required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apiphysical = `${apiPrefix}/user/form3/updateconditionsofvariousclothes`
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
      conDetail(false)
      examinDetail(true)
    }
  }
  }
  const handleChange = (e) => {
    const { name, value } = e.target

    setHandleData({ ...handleData, [name]: value })
  }
  const handleF3_frstBackClick = () => {
    conDetail(false)
    behavDetail(true)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Conditions of Various Clothes </h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <p>Conditions of various clothes:</p>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <span style={{ fontWeight: 'bold' }}>a) Tears/Cuts/rents</span>
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="phisCVCTCR" type="text"  className={`form-control ${errors.phisCVCTCR ? 'is-invalid' : ''}`}
                  value={handleData.phisCVCTCR} onChange={handleChange}></textarea>
                   {errors.phisCVCTCR && <div className="invalid-feedback">{errors.phisCVCTCR}</div>}
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <span style={{ fontWeight: 'bold' }}> b) Foreign matter</span>
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="phisCvcForgeignMatter" type="text"  className={`form-control ${errors.phisCvcForgeignMatter ? 'is-invalid' : ''}`}
                  value={handleData.phisCvcForgeignMatter} onChange={handleChange}></textarea>
                   {errors.phisCvcForgeignMatter && <div className="invalid-feedback">{errors.phisCvcForgeignMatter}</div>}
              </div>
            </div>
            <p style={{ fontWeight: 'bold' }}>c) Stains -</p>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                (i) Blood
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="phisCvcStainBlood" type="text"  className={`form-control ${errors.phisCvcStainBlood ? 'is-invalid' : ''}`}
                  value={handleData.phisCvcStainBlood} onChange={handleChange}></textarea>
                   {errors.phisCvcStainBlood && <div className="invalid-feedback">{errors.phisCvcStainBlood}</div>}
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                (ii) Seminal
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="phisCvcStainSeminal" type="text"  className={`form-control ${errors.phisCvcStainSeminal ? 'is-invalid' : ''}`}
                  value={handleData.phisCvcStainSeminal}onChange={handleChange}></textarea>
                   {errors.phisCvcStainSeminal && <div className="invalid-feedback">{errors.phisCvcStainSeminal}</div>}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                (iii) Faecal
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="phisCvcStainFaecal" type="text"  className={`form-control ${errors.phisCvcStainFaecal ? 'is-invalid' : ''}`}
                  value={handleData.phisCvcStainFaecal} onChange={handleChange}></textarea>
                   {errors.phisCvcStainFaecal && <div className="invalid-feedback">{errors.phisCvcStainFaecal}</div>}
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                (iv) Mud
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="phisCvcStainMud" type="text"  className={`form-control ${errors.phisCvcStainMud ? 'is-invalid' : ''}`}
                  value={handleData.phisCvcStainMud} onChange={handleChange}></textarea>
                   {errors.phisCvcStainMud && <div className="invalid-feedback">{errors.phisCvcStainMud}</div>}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <span style={{ fontWeight: 'bold' }}>(d) Burns</span>
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="phisBurns" type="text"  className={`form-control ${errors.phisBurns ? 'is-invalid' : ''}`}
                  value={handleData.phisBurns} onChange={handleChange}></textarea>
                   {errors.phisBurns && <div className="invalid-feedback">{errors.phisBurns}</div>}
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <span style={{ fontWeight: 'bold' }}>(e)Buttons(intact,undone,broken,torn)</span>
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="phisButton" type="text"  className={`form-control ${errors.phisButton ? 'is-invalid' : ''}`}
                  value={handleData.phisButton} onChange={handleChange}></textarea>
                   {errors.phisButton && <div className="invalid-feedback">{errors.phisButton}</div>}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <span style={{ fontWeight: 'bold' }}>
                  (f) Since the assault, were the clothes changed?
                </span>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <Dropdownforms name='phisClothChanged'  className={`form-control ${errors.phisClothChanged ? 'is-invalid' : ''}`}
                  value={handleData.phisClothChanged} handleChange={handleChange} yes='Y' no='N'/>
                   {errors.phisClothChanged && <div className="invalid-feedback">{errors.phisClothChanged}</div>}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                If yes, are the clothes available?
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <Dropdownforms name='phisClothAvailable'  className={`form-control ${errors.phisClothAvailable ? 'is-invalid' : ''}`}
                  value={handleData.phisClothAvailable} handleChange={handleChange} yes='Y' no='N'/>
                   {errors.phisClothAvailable && <div className="invalid-feedback">{errors.phisClothAvailable}</div>}
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                Have the clothes been washed / repaired?
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <Dropdownforms name='phisClothWashedOrRepaired'  className={`form-control ${errors.phisClothWashedOrRepaired ? 'is-invalid' : ''}`}
                  value={handleData.phisClothWashedOrRepaired} handleChange={handleChange} yes='Y' no='N'/>
                   {errors.phisClothWashedOrRepaired && <div className="invalid-feedback">{errors.phisClothWashedOrRepaired}</div>}
              </div>
            </div>
            <p style={{ fontWeight: 'bold' }}>g) Since assault, has the person -</p>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">i) Eaten food</div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <Dropdownforms name='phisEatenFood'  className={`form-control ${errors.phisEatenFood ? 'is-invalid' : ''}`}
                  value={handleData.phisEatenFood} handleChange={handleChange} yes='Y' no='N'/>
                   {errors.phisEatenFood && <div className="invalid-feedback">{errors.phisEatenFood}</div>}
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                ii) Ingested liquid
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <Dropdownforms name='phisIngestedLiquid'  className={`form-control ${errors.phisIngestedLiquid ? 'is-invalid' : ''}`}
                  value={handleData.phisIngestedLiquid} handleChange={handleChange} yes='Y' no='N'/>
                   {errors.phisIngestedLiquid && <div className="invalid-feedback">{errors.phisIngestedLiquid}</div>}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">iii) Smoked</div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <Dropdownforms name='phisSmoked'  className={`form-control ${errors.phisSmoked ? 'is-invalid' : ''}`}
                  value={handleData.phisSmoked} handleChange={handleChange} yes='Y' no='N'/>
                   {errors.phisSmoked && <div className="invalid-feedback">{errors.phisSmoked}</div>}
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">iv) Brushed</div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <Dropdownforms name='phisBrushed'  className={`form-control ${errors.phisBrushed ? 'is-invalid' : ''}`}
                  value={handleData.phisBrushed} handleChange={handleChange} yes='Y' no='N'/>
                   {errors.phisBrushed && <div className="invalid-feedback">{errors.phisBrushed}</div>}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">v) Gargled</div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <Dropdownforms name='phisGargled'  className={`form-control ${errors.phisGargled ? 'is-invalid' : ''}`}
                  value={handleData.phisGargled} handleChange={handleChange} yes='Y' no='N'/>
                   {errors.phisGargled && <div className="invalid-feedback">{errors.phisGargled}</div>}
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

export default ConditionsVarious
