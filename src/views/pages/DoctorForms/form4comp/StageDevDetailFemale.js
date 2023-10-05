import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonBackandSave, Dropdownforms, Inputform3part2 } from '../common/Operationradionbutton'
import Formdetail from '../common/Formdetails'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const StageDevDetailFemale = ({
  StageDevDetailFemaledetail,
  OralExaminationdetail,
  Form4details,
}) => {
  const trn = localStorage.getItem('trn')
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [handleData, setHandleData] = useState({
    sssfTransactionID: trn,
    createUser: changeuser,
    sssfMenaecheAge: '',
	  sssfHowManyYearBefore: '',
    sssfPublicHair: '',
    sssfPublicHairRemarks: '',
    sssfBreastDevelopment: '',
    sssfAxillaryHair: '',
    sssfAcne: '',
    sssfOtherfinding: '',
	  sssfBreastDevelopmentRemarks: '',
	  sssfAxillaryHairRemarks: '',
	  sssfAcneRemarks: '',
	  sssfOtherfindingRemarks:'',
  })
  const [errors, setErrors] = useState({
    sssfMenaecheAge: '',
	  sssfHowManyYearBefore: '',
    sssfPublicHair: '',
    sssfPublicHairRemarks: '',
    sssfBreastDevelopment: '',
    sssfAxillaryHair: '',
    sssfAcne: '',
    sssfOtherfinding: '',
	  sssfBreastDevelopmentRemarks: '',
	  sssfAxillaryHairRemarks: '',
	  sssfAcneRemarks: '',
    sssfOtherfindingRemarks:'',
  });
  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      sssfMenaecheAge: '',
      sssfHowManyYearBefore: '',
      sssfPublicHair: '',
      sssfPublicHairRemarks: '',
      sssfBreastDevelopment: '',
      sssfAxillaryHair: '',
      sssfAcne: '',
      sssfOtherfinding: '',
      sssfBreastDevelopmentRemarks: '',
      sssfAxillaryHairRemarks: '',
      sssfAcneRemarks: '',
      sssfOtherfindingRemarks:'',
    };
    if(handleData.sssfMenaecheAge === null){
      newErrors.sssfMenaecheAge = 'Required';
      valid = false;
    }
   else if (handleData.sssfMenaecheAge.trim() === '' ) {
      newErrors.sssfMenaecheAge = 'Required';
      valid = false;
    }
    if(handleData.sssfHowManyYearBefore === null){
      newErrors.sssfHowManyYearBefore = 'Required';
      valid = false;
    }
    else if (handleData.sssfHowManyYearBefore.trim() === '') {
      newErrors.sssfHowManyYearBefore = 'Required';
      valid = false;
    }
    if(handleData.sssfPublicHair === null){
      newErrors.sssfPublicHair = 'Required';
      valid = false;
    }
   else if (handleData.sssfPublicHair.trim() === '') {
      newErrors.sssfPublicHair = 'Required';
      valid = false;
    } 
    if(handleData.sssfPublicHairRemarks === null){
      newErrors.sssfPublicHairRemarks = 'Required';
      valid = false;
    }
    else if (handleData.sssfPublicHairRemarks.trim() === '') {
      newErrors.sssfPublicHairRemarks = 'Required';
      valid = false;
    }
    if(handleData.sssfBreastDevelopment === null){
      newErrors.sssfBreastDevelopment = 'Required';
      valid = false;
    }
   else if (handleData.sssfBreastDevelopment.trim() === '') {
      newErrors.sssfBreastDevelopment = 'Required';
      valid = false;
    } 
    if(handleData.sssfAxillaryHair === null){
      newErrors.sssfAxillaryHair = 'Required';
      valid = false;
    }
   else if (handleData.sssfAxillaryHair.trim() === '' ) {
      newErrors.sssfAxillaryHair = 'Required';
      valid = false;
    }
    if(handleData.sssfAcne === null){
      newErrors.sssfAcne = 'Required';
      valid = false;
    }
    else if (handleData.sssfAcne.trim() === '') {
      newErrors.sssfAcne = 'Required';
      valid = false;
    }
    if(handleData.sssfBreastDevelopmentRemarks === null){
      newErrors.sssfBreastDevelopmentRemarks = 'Required';
      valid = false;
    }
   else if (handleData.sssfBreastDevelopmentRemarks.trim() === '') {
      newErrors.sssfBreastDevelopmentRemarks = 'Required';
      valid = false;
    } 
    if(handleData.sssfAxillaryHairRemarks === null){
      newErrors.sssfAxillaryHairRemarks = 'Required';
      valid = false;
    }
    else if (handleData.sssfAxillaryHairRemarks.trim() === '') {
      newErrors.sssfAxillaryHairRemarks = 'Required';
      valid = false;
    }
    if(handleData.sssfAcneRemarks === null){
      newErrors.sssfAcneRemarks = 'Required';
      valid = false;
    }
   else if (handleData.sssfAcneRemarks.trim() === '') {
      newErrors.sssfAcneRemarks = 'Required';
      valid = false;
    } 
    if(handleData.sssfOtherfindingRemarks === null){
      newErrors.sssfOtherfindingRemarks = 'Required';
      valid = false;
    }
   else if (handleData.sssfOtherfindingRemarks.trim() === '') {
      newErrors.sssfOtherfindingRemarks = 'Required';
      valid = false;
    } 
    setErrors(newErrors);
    return valid;
  };
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apigetcd = `${apiPrefix}/user/form4/getsecondarysexualstagefemaleform4/${trn}`
  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }
  useEffect(()=>{
    callApi(apigetcd)
    .then((response) => {
     setHandleData(response)
    })
    .catch((error) => {
      console.error('API request failed:', error)
    })
  },[])
  const handleF3_frstClick = async () => {
    if (validateformOTP()) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_PREFIX}/user/form4/savesecondarysexualstagefemaleform4`,
        handleData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
          },
        },
      )
      if (response.status === 200) {
        OralExaminationdetail(true)
    StageDevDetailFemaledetail(false)
      } else {
        console.log('Form submission failed')
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
    StageDevDetailFemaledetail(false)
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
            <p>Girls :-</p>
            <table class="table table-borderless">
            <thead>
              <tr>
              <th></th>
              <th></th>
              <th>Remarks</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <td>(1)Meenarche Started</td>
                  <td>
                  <select className={`form-control ${errors.sssfMenaecheAge ? 'is-invalid' : ''}`} name='sssfMenaecheAge' value={handleData.sssfMenaecheAge} aria-label="Default select example"  onChange={handleChange}>
      <option selected>select </option>
      <option value='Y'>Yes</option>
      <option value='N'>No</option>
    </select>
    {errors.sssfMenaecheAge && <div className="invalid-feedback">{errors.sssfMenaecheAge}</div>}
                  </td>
                  <td>
                  <input name='sssfHowManyYearBefore' type="text" onChange={handleChange} value={handleData.sssfHowManyYearBefore} className={`form-control ${errors.sssfHowManyYearBefore ? 'is-invalid' : ''}`} />
                  {errors.sssfHowManyYearBefore && <div className="invalid-feedback">{errors.sssfHowManyYearBefore}</div>}
                  </td>
                </tr>
                <tr>
                  <td>(2) Pubic hair</td>
                  <td>
                  <select className={`form-control ${errors.sssfPublicHair ? 'is-invalid' : ''}`} name='sssfPublicHair' value={handleData.sssfPublicHair} aria-label="Default select example"  onChange={handleChange}>
      <option selected>select </option>
      <option value='Y'>Yes</option>
      <option value='N'>No</option>
    </select>
    {errors.sssfPublicHair && <div className="invalid-feedback">{errors.sssfPublicHair}</div>}
                  </td>
                  <td>
                  <input name='sssfPublicHairRemarks' type="text" onChange={handleChange} value={handleData.sssfPublicHairRemarks} className={`form-control ${errors.sssfPublicHairRemarks ? 'is-invalid' : ''}`} />
                  {errors.sssfPublicHairRemarks && <div className="invalid-feedback">{errors.sssfPublicHairRemarks}</div>}
                  </td>
                </tr>

                <tr>
                  <td>(3) Breast development</td>
                  <td>
                  <select className={`form-control ${errors.sssfBreastDevelopment ? 'is-invalid' : ''}`} name='sssfBreastDevelopment' value={handleData.sssfBreastDevelopment} aria-label="Default select example"  onChange={handleChange}>
      <option selected>select </option>
      <option value='Y'>Yes</option>
      <option value='N'>No</option>
    </select>
    {errors.sssfBreastDevelopment && <div className="invalid-feedback">{errors.sssfBreastDevelopment}</div>}
                  </td>
                  <td>
                  <input name='sssfBreastDevelopmentRemarks' type="text" onChange={handleChange} value={handleData.sssfBreastDevelopmentRemarks} className={`form-control ${errors.sssfBreastDevelopmentRemarks ? 'is-invalid' : ''}`} />
                  {errors.sssfBreastDevelopmentRemarks && <div className="invalid-feedback">{errors.sssfBreastDevelopmentRemarks}</div>}
                  </td>
                </tr>
                <tr>
                  <td>(4) Axillary hair</td>
                  <td>
                  <select className={`form-control ${errors.sssfAxillaryHair ? 'is-invalid' : ''}`} name='sssfAxillaryHair' value={handleData.sssfAxillaryHair} aria-label="Default select example"  onChange={handleChange}>
      <option selected>select </option>
      <option value='Y'>Yes</option>
      <option value='N'>No</option>
    </select>
    {errors.sssfAxillaryHair && <div className="invalid-feedback">{errors.sssfAxillaryHair}</div>}
                  </td>
                  <td>
                  <input name='sssfAxillaryHairRemarks' type="text" onChange={handleChange} value={handleData.sssfAxillaryHairRemarks} className={`form-control ${errors.sssfAxillaryHairRemarks ? 'is-invalid' : ''}`} />
                  {errors.sssfAxillaryHairRemarks && <div className="invalid-feedback">{errors.sssfAxillaryHairRemarks}</div>}
                  </td>
                </tr>
                <tr>
                  <td>(5) Acne</td>
                  <td>
                  <select className={`form-control ${errors.sssfAcne ? 'is-invalid' : ''}`} name='sssfAcne' value={handleData.sssfAcne} aria-label="Default select example"  onChange={handleChange}>
      <option selected>select </option>
      <option value='Y'>Yes</option>
      <option value='N'>No</option>
    </select>
    {errors.sssfAcne && <div className="invalid-feedback">{errors.sssfAcne}</div>}
                  </td>
                  <td>
                  <input name='sssfAcneRemarks' type="text" onChange={handleChange} value={handleData.sssfAcneRemarks} className={`form-control ${errors.sssfAcneRemarks ? 'is-invalid' : ''}`} />
                  {errors.sssfAcneRemarks && <div className="invalid-feedback">{errors.sssfAcneRemarks}</div>}
                  </td>
                </tr>
                <tr>
                  <td>(6) Any other important finding (Max. 4000 Characters)</td>
                  <td>
                  <select className={`form-control ${errors.sssfOtherfinding ? 'is-invalid' : ''}`} name='sssfOtherfinding' value={handleData.sssfOtherfinding} aria-label="Default select example"  onChange={handleChange}>
      <option selected>select </option>
      <option value='Y'>Yes</option>
      <option value='N'>No</option>
    </select>
    {errors.sssfOtherfinding && <div className="invalid-feedback">{errors.sssfOtherfinding}</div>}
                  </td>
                  <td>
                  <input name='sssfOtherfindingRemarks' type="text" onChange={handleChange} value={handleData.sssfOtherfindingRemarks} className={`form-control ${errors.sssfOtherfindingRemarks ? 'is-invalid' : ''}`} />
                  {errors.sssfOtherfindingRemarks && <div className="invalid-feedback">{errors.sssfOtherfindingRemarks}</div>}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
      </div>
    </div>
  )
}

export default StageDevDetailFemale
