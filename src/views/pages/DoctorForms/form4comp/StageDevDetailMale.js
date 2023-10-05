import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import {
  ButtonBackandSave,
} from '../common/Operationradionbutton'
import { callApi } from 'src/views/CommonModels/CallApi'
import axios from 'axios'

const StageDevDetailMale = ({ StageDevDetailMalesow, OralExaminationdetail, Form4details }) => {
  const trn = localStorage.getItem('trn')
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')

  const [handleData, setHandleData] = useState({
    sssmTransactionID: trn,
    sssmPublicHair: '',
    sssmPublicHairRemarks: '',
    sssmPenisDevelopment: '',
    sssmAxillaryHair: '',
    sssmAcne: '',
    sssmAcneRemarks: '',
    sssmAdmsApple: '',
    sssmHorsenessOfVoice: '',
    sssmScrotumDev: '',
    sssmTestisSize: '',
    sssmMoustache: '',
    sssmMoustacheRemarks: '',
    sssmBeard: '',
    sssmBeardRemarks: '',
    createUser: changeuser,
  })
  const [errors, setErrors] = useState({
    sssmTransactionID: '',
    sssmPublicHair: '',
    sssmPublicHairRemarks: '',
    sssmPenisDevelopment: '',
    sssmAxillaryHair: '',
    sssmAcne: '',
    sssmAcneRemarks: '',
    sssmAdmsApple: '',
    sssmHorsenessOfVoice: '',
    sssmScrotumDev: '',
    sssmTestisSize: '',
    sssmMoustache: '',
    sssmMoustacheRemarks: '',
    sssmBeard: '',
    sssmBeardRemarks: '',

  });
  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      sssmPublicHair: '',
      sssmPublicHairRemarks: '',
      sssmPenisDevelopment: '',
      sssmAxillaryHair: '',
      sssmAcne: '',
      sssmAcneRemarks: '',
      sssmAdmsApple: '',
      sssmHorsenessOfVoice: '',
      sssmScrotumDev: '',
      sssmTestisSize: '',
      sssmMoustache: '',
      sssmMoustacheRemarks: '',
      sssmBeard: '',
      sssmBeardRemarks: '',
    };
    if (handleData.sssmPublicHair === null) {
      newErrors.sssmPublicHair = 'Required';
      valid = false;
    }
    else if (handleData.sssmPublicHair.trim() === '') {
      newErrors.sssmPublicHair = 'Required';
      valid = false;
    }
    if (handleData.sssmPublicHairRemarks === null) {
      newErrors.sssmPublicHairRemarks = 'Required';
      valid = false;
    }
    else if (handleData.sssmPublicHairRemarks.trim() === '') {
      newErrors.sssmPublicHairRemarks = 'Required';
      valid = false;
    }
    if (handleData.sssmPenisDevelopment === null) {
      newErrors.sssmPenisDevelopment = 'Required';
      valid = false;
    }
    else if (handleData.sssmPenisDevelopment.trim() === '') {
      newErrors.sssmPenisDevelopment = 'Required';
      valid = false;
    }
    if (handleData.sssmAxillaryHair === null) {
      newErrors.sssmAxillaryHair = 'Required';
      valid = false;
    }
    else if (handleData.sssmAxillaryHair.trim() === '') {
      newErrors.sssmAxillaryHair = 'Required';
      valid = false;
    }
    if (handleData.sssmAcne === null) {
      newErrors.sssmAcne = 'Required';
      valid = false;
    }
    else if (handleData.sssmAcne.trim() === '') {
      newErrors.sssmAcne = 'Required';
      valid = false;
    }
    if (handleData.sssmAcneRemarks === null) {
      newErrors.sssmAcneRemarks = 'Required';
      valid = false;
    }
    else if (handleData.sssmAcneRemarks.trim() === '') {
      newErrors.sssmAcneRemarks = 'Required';
      valid = false;
    }
    if (handleData.sssmAdmsApple === null) {
      newErrors.sssmAdmsApple = 'Required';
      valid = false;
    }
    else if (handleData.sssmAdmsApple.trim() === '') {
      newErrors.sssmAdmsApple = 'Required';
      valid = false;
    }
    if (handleData.sssmHorsenessOfVoice === null) {
      newErrors.sssmHorsenessOfVoice = 'Required';
      valid = false;
    }
    else if (handleData.sssmHorsenessOfVoice.trim() === '') {
      newErrors.sssmHorsenessOfVoice = 'Required';
      valid = false;
    }
    if (handleData.sssmScrotumDev === null) {
      newErrors.sssmScrotumDev = 'Required';
      valid = false;
    }
    else if (handleData.sssmScrotumDev.trim() === '') {
      newErrors.sssmScrotumDev = 'Required';
      valid = false;
    }
    if (handleData.sssmTestisSize === null) {
      newErrors.sssmTestisSize = 'Required';
      valid = false;
    }
    else if (handleData.sssmTestisSize.trim() === '') {
      newErrors.sssmTestisSize = 'Required';
      valid = false;
    }
    if (handleData.sssmMoustache === null) {
      newErrors.sssmMoustache = 'Required';
      valid = false;
    }
    else if (handleData.sssmMoustache.trim() === '') {
      newErrors.sssmMoustache = 'Required';
      valid = false;
    }
    if (handleData.sssmMoustacheRemarks === null) {
      newErrors.sssmMoustacheRemarks = 'Required';
      valid = false;
    }
    else if (handleData.sssmMoustacheRemarks.trim() === '') {
      newErrors.sssmMoustacheRemarks = 'Required';
      valid = false;
    }
    if (handleData.sssmBeard === null) {
      newErrors.sssmBeard = 'Required';
      valid = false;
    }
    else if (handleData.sssmBeard.trim() === '') {
      newErrors.sssmBeard = 'Required';
      valid = false;
    }
    if (handleData.sssmBeardRemarks === null) {
      newErrors.sssmBeardRemarks = 'Required';
      valid = false;
    }
    else if (handleData.sssmBeardRemarks.trim() === '') {
      newErrors.sssmBeardRemarks = 'Required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apigetcd = `${apiPrefix}/user/form4/getsecondarysexualstagemaleform4/${trn}`

  useEffect(() => {
    callApi(apigetcd)
      .then((response) => {
        setHandleData(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])


  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }
  const handleF3_frstClick = async () => {
    if (validateformOTP()) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_PREFIX}/user/form4/savesecondarysexualstagemaleform4`,
        handleData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )

      if (response.status === 200) {
        StageDevDetailMalesow(false)
        OralExaminationdetail(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error logic here
    }
  }
  }
  const handleF3_frstBackClick = () => {
    StageDevDetailMalesow(false)
    Form4details(true)
  }



  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Secondary Sexual Characters’ Stage (Tanner stages)</h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <p>Secondary Sexual Characters’ Stage (Tanner stages)</p>
            <p>Boys :-</p>
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td>(1) Pubic hair</td>
                  <td>
                    <select className={`form-control ${errors.sssmPublicHair ? 'is-invalid' : ''}`} aria-label="Default select example" value={handleData.sssmPublicHair} name='sssmPublicHair' onChange={handleChange}>
                      <option selected>select </option>
                      <option value='Y'>Yes</option>
                      <option value='N'>No</option>
                    </select>
                    {errors.sssmPublicHair && <div className="invalid-feedback">{errors.sssmPublicHair}</div>}
                  </td>
                  <td>
                    <input name='sssmPublicHairRemarks' value={handleData.sssmPublicHairRemarks} type="text" onChange={handleChange} className={`form-control ${errors.sssmPublicHairRemarks ? 'is-invalid' : ''}`} />
                    {errors.sssmPublicHairRemarks && <div className="invalid-feedback">{errors.sssmPublicHairRemarks}</div>}
                  </td>
                </tr>
                <tr>
                  <td>(2) Penis development</td>
                  <td>
                    <select className={`form-control ${errors.sssmPenisDevelopment ? 'is-invalid' : ''}`} name='sssmPenisDevelopment' value={handleData.sssmPenisDevelopment} onChange={handleChange} aria-label="Default select example">
                      <option selected>select</option>
                      <option value="infantile">infantile</option>
                      <option value="adult like">adult like</option>
                    </select>
                    {errors.sssmPenisDevelopment && <div className="invalid-feedback">{errors.sssmPenisDevelopment}</div>}
                  </td>
                </tr>
                <tr>
                  <td>(3) Axillary hair</td>
                  <td>
                    <select className={`form-control ${errors.sssmAxillaryHair ? 'is-invalid' : ''}`} name='sssmAxillaryHair' value={handleData.sssmAxillaryHair} onChange={handleChange} aria-label="Default select example">
                      <option selected>select</option>
                      <option value="brown">brown</option>
                      <option value="light grey">light grey</option>
                    </select>
                    {errors.sssmAxillaryHair && <div className="invalid-feedback">{errors.sssmAxillaryHair}</div>}
                  </td>
                </tr>
                <tr>
                  <td>(4) Acne</td>
                  <td>
                    <select className={`form-control ${errors.sssmAcne ? 'is-invalid' : ''}`} aria-label="Default select example" value={handleData.sssmAcne} name='sssmAcne' onChange={handleChange}>
                      <option selected>select </option>
                      <option value='Y'>Yes</option>
                      <option value='N'>No</option>
                    </select>
                    {errors.sssmAcne && <div className="invalid-feedback">{errors.sssmAcne}</div>}
                  </td>
                  <td>
                    <input name='sssmAcneRemarks' value={handleData.sssmAcneRemarks} type="text" onChange={handleChange} className={`form-control ${errors.sssmAcneRemarks ? 'is-invalid' : ''}`} />
                    {errors.sssmAcneRemarks && <div className="invalid-feedback">{errors.sssmAcneRemarks}</div>}
                  </td>
                </tr>
                <tr>
                  <td>(5) Adam’s apple</td>
                  <td>
                    <select className={`form-control ${errors.sssmAdmsApple ? 'is-invalid' : ''}`} name='sssmAdmsApple' value={handleData.sssmAdmsApple} onChange={handleChange} aria-label="Default select example">
                      <option selected>select</option>
                      <option value="prominent">prominent</option>
                      <option value="non prominent">non prominent</option>
                    </select>
                    {errors.sssmAdmsApple && <div className="invalid-feedback">{errors.sssmAdmsApple}</div>}
                  </td>
                </tr>
                <tr>
                  <td>(6) Hoarseness of voice</td>
                  <td>
                    <select className={`form-control ${errors.sssmHorsenessOfVoice ? 'is-invalid' : ''}`} name='sssmHorsenessOfVoice' value={handleData.sssmHorsenessOfVoice} onChange={handleChange} aria-label="Default select example">
                      <option selected>select</option>
                      <option value="present">present</option>
                      <option value="absent">absent</option>
                    </select>
                    {errors.sssmHorsenessOfVoice && <div className="invalid-feedback">{errors.sssmHorsenessOfVoice}</div>}
                  </td>
                </tr>
                <tr>
                  <td>(7) Scrotum development</td>
                  <td>
                    <select className={`form-control ${errors.sssmScrotumDev ? 'is-invalid' : ''}`} name='sssmScrotumDev' value={handleData.sssmScrotumDev} onChange={handleChange} aria-label="Default select example">
                      <option selected>select</option>
                      <option value="smooth surface">smooth surface</option>
                      <option value="rough surface and rugocities">rough surface and rugocities</option>
                    </select>
                    {errors.sssmScrotumDev && <div className="invalid-feedback">{errors.sssmScrotumDev}</div>}
                  </td>
                </tr>
                <tr>
                  <td>(8) Testis Developement</td>
                  <td>
                    <select className={`form-control ${errors.sssmTestisSize ? 'is-invalid' : ''}`} name='sssmTestisSize' value={handleData.sssmTestisSize} onChange={handleChange} aria-label="Default select example">
                      <option selected>select</option>
                      <option value="pearl beads size">pearl beads size</option>
                      <option value="marble ball size">marble ball size</option>
                      <option value="pigeon’s egg size">pigeon’s egg size</option>
                      <option value="hen’s egg size">hen’s egg size</option>
                    </select>
                    {errors.sssmTestisSize && <div className="invalid-feedback">{errors.sssmTestisSize}</div>}
                  </td>
                </tr>
                <tr>
                  <td>(9) Moustache</td>
                  <td>
                    <select className={`form-control ${errors.sssmMoustache ? 'is-invalid' : ''}`} aria-label="Default select example" value={handleData.sssmMoustache} name='sssmMoustache' onChange={handleChange}>
                      <option selected>select </option>
                      <option value='Y'>Yes</option>
                      <option value='N'>No</option>
                    </select>
                    {errors.sssmMoustache && <div className="invalid-feedback">{errors.sssmMoustache}</div>}
                  </td>
                  <td>
                    <input name='sssmMoustacheRemarks' value={handleData.sssmMoustacheRemarks} type="text" onChange={handleChange} className={`form-control ${errors.sssmMoustacheRemarks ? 'is-invalid' : ''}`} />
                    {errors.sssmMoustacheRemarks && <div className="invalid-feedback">{errors.sssmMoustacheRemarks}</div>}
                  </td>
                </tr>
                <tr>
                  <td>(10) Beard</td>
                  <td>
                    <select className={`form-control ${errors.sssmBeard ? 'is-invalid' : ''}`} aria-label="Default select example" value={handleData.sssmBeard} name='sssmBeard' onChange={handleChange}>
                      <option selected>select </option>
                      <option value='Y'>Yes</option>
                      <option value='N'>No</option>
                    </select>
                    {errors.sssmBeard && <div className="invalid-feedback">{errors.sssmBeard}</div>}
                  </td>
                  <td>
                    <input name='sssmBeardRemarks' value={handleData.sssmBeardRemarks} type="text" onChange={handleChange} className={`form-control ${errors.sssmBeardRemarks ? 'is-invalid' : ''}`} />
                    {errors.sssmBeardRemarks && <div className="invalid-feedback">{errors.sssmBeardRemarks}</div>}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <ButtonBackandSave
          backButton={handleF3_frstBackClick}
          savebutton={handleF3_frstClick}
        />
      </div>
    </div>
  )
}

export default StageDevDetailMale
