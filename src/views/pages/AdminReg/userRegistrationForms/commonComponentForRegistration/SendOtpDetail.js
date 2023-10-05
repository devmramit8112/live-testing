import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import EmailOTP from './EmailOTP';
import MobileOTP from './MobileOTP';

const SendOtpDetail = ({ formData, errors, onChange,showOtpButton }) => {
  const [otpEmailComp, setotpEmailComp] = useState(true)
const [otpMobileComp, setotpMobileComp] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Name<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Enter Full Name"
            className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
          />

          {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
        </div>

</div>
{otpEmailComp &&<EmailOTP formData={formData} onChange={onChange} otpMobileComp={setotpMobileComp}/>}
{otpMobileComp && <MobileOTP formData={formData} onChange={onChange} showOtpButton={showOtpButton}/>}
    </>
  )
}

export default SendOtpDetail
