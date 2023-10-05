import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const MobileOTP = ({formData, onChange,showOtpButton}) => {
  const token = localStorage.getItem('token')
    const [otpMobile, setotpMobile] = useState(false)
    const [isotpid, setisotpid] = useState(false)
    const [otpid, setotpid] = useState('')
    const [otpMobilebutton, setotpMobilebutton] = useState(true)
    const handleMobile = {
      mobilenumber:formData.mobile,
      mobileOtp:formData.mobileotp,
    }
    const handleChange = (e) => {
      const { name, value } = e.target;
      onChange({ ...formData, [name]: value });
    };
    const [errors1, setErrors1] = useState({
      mobile: '',
      });
      const validateformOTP1 = () => {
        let valid = true;
        const newErrors = {
          mobile: '',
        };
        if (formData.mobile.trim() === '') {
          newErrors.mobile = 'Mobile is required';
          valid = false;
        } else if (!/^\d{10}$/.test(formData.mobile)) {
          newErrors.mobile = 'Mobile should be 10 digits';
          valid = false;
        }
        setErrors1(newErrors);
        return valid;
      };
      const [errors2, setErrors2] = useState({
        mobileotp: '',
      });
      const validateformOTP2 = () => {
        let valid = true;
        const newErrors = {
          mobileotp: '',
        };
        if (formData.mobileotp.trim() === '') {
          newErrors.mobileotp = 'Mobile No. is required';
          valid = false;
        } else if (!/^\d{6}$/.test(formData.mobileotp)) {
          newErrors.mobileotp = 'Mobile OTP should be 7 digits';
          valid = false;
        }
        setErrors2(newErrors);
        return valid;
      };
      const paramsData = new URLSearchParams();
    paramsData.append('mobilenumber', formData.mobile);
    const handleOtpMobileButtonClick = async (e) => {
        if (validateformOTP1()) {
          // const response = await axios.post(
          //   `${process.env.REACT_APP_API_PREFIX}/alluser/otpgrenrate/getmobileotp?${paramsData.toString()}`,
          //   {
          //     headers: {
          //       'Content-Type': 'application/json',
          //     },
          //   },
          // )
          // if (response.status === 200) {
            // setotpid(response.data)
            setisotpid(true)
            toast.success(`OTP Sent On Given Mobile Number`, {
              position: toast.POSITION.TOP_RIGHT,
            })
setotpMobile(true)
          setotpMobilebutton(false)
         
          // }
          // else{
          //   toast.error(`error Occur`, {
          //     position: toast.POSITION.TOP_RIGHT,
          //   })
          // }
        } else {
          toast.error(`Fill ALl Required Data Properly`, {
            position: toast.POSITION.TOP_RIGHT,
          })
        }
      };
      const handleotpMobileVerifyButtonClick = async (e) => {
        if (validateformOTP2()) {

          // const response = await axios.post(
          //   `${process.env.REACT_APP_API_PREFIX}/alluser/otpgrenrate/getoptvalidationformobile`,handleMobile,
          //   {
          //     headers: {
          //       'Content-Type': 'application/json',
          //       Authorization: `Bearer ${token}`,
          //     },
          //   },
          // )
          // if (response.status === 200) {
            setisotpid(false)
            setotpMobile(false)
            setotpMobilebutton(false)
            showOtpButton(true)
            toast.success(`Mobile OTP Verified`, {
              position: toast.POSITION.TOP_RIGHT,
            })
          // } else{
          //   toast.error(`error Occur`, {
          //     position: toast.POSITION.TOP_RIGHT,
          //   })
          // }
        }else {
          toast.error(`Fill ALl Required Data Properly`, {
            position: toast.POSITION.TOP_RIGHT,
          })
        }
      };


      const handleKeyPress = (e) => {
        const allowedCharacters = /^[0-9]*$/; // Only allow numeric characters
        if (!allowedCharacters.test(e.key)) {
          e.preventDefault();
        }
      };



    
  return (
        <>
         <div className="row mt-2">
        
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Mobile No<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="text"
            name="mobile"
            placeholder="Enter Mobile No"
            value={formData.mobile}
            onChange={handleChange}
            maxLength={10}
            className={`form-control ${errors1.mobile ? 'is-invalid' : ''}`}
          />
          {errors1.mobile && <div className="invalid-feedback">{errors1.mobile}</div>}

        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        {otpMobilebutton &&<button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={handleOtpMobileButtonClick} 
                  >
                   <FontAwesomeIcon icon={faClock}  />  Send Mobile OTP
                  </button>}
                {isotpid &&  <span style={{ color: 'red', fontWeight: 'bold' }}>{`Your OTP ID is :- ${otpid}`}</span>}

        </div>
      </div>
              {otpMobile && 
              <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Mobile OTP 
          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="text"
            name="mobileotp"
            value={formData.mobileotp}
            placeholder="Enter Email OTP"
            onChange={handleChange}
            onKeyPress={handleKeyPress} 
            className={`form-control ${errors2.mobileotp ? 'is-invalid' : ''}`}
            maxLength={6}
          />
          {errors2.mobileotp && <div className="invalid-feedback">{errors2.mobileotp}</div>}
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <button
                            type="button"
                            className="btn btn-primary mb-2"
                            onClick={handleotpMobileVerifyButtonClick} 
                          >
                           <FontAwesomeIcon icon={faClock}  />  Confirm OTP
                          </button>
        </div>
        </div>}
        </>
  )
}

export default MobileOTP
