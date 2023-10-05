import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const EmailOTP = ({formData, onChange,otpMobileComp}) => {
  const token = localStorage.getItem('token')
    const [otpEmail, setotpEmail] = useState(false)
    const [otpEmailbutton, setotpEmailbutton] = useState(true)
    const [isotpid, setisotpid] = useState(false)
    const [otpid, setotpid] = useState('')
    const handleEmail = {
      emailid:formData.emailID,
      emailOtp:formData.emailotp,
    }




    const handleChange = (e) => {
      const { name, value } = e.target;
      onChange({ ...formData, [name]: value });
    };
    const [errors1, setErrors1] = useState({
        emailID: '',
      });
      const validateformOTP1 = () => {
        let valid = true;
        const newErrors = {
          emailID: '',
        };
        if (formData.emailID.trim() === '') {
          newErrors.emailID = 'Email is required';
          valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.emailID)) {
          newErrors.emailID = 'Invalid email format';
          valid = false;
        }
        setErrors1(newErrors);
        return valid;
      };
      const [errors2, setErrors2] = useState({
        emailotp: '',
      });
      const validateformOTP2 = () => {
        let valid = true;
        const newErrors = {
            emailotp: '',
        };
        if (formData.emailotp.trim() === '') {
          newErrors.emailotp = 'Email OTP is required';
          valid = false;
        } else if (!/^\d{6}$/.test(formData.emailotp)) {
          newErrors.emailotp = 'Email OTP should be 7 digits';
          valid = false;
        }
        setErrors2(newErrors);
        return valid;
      };
      const paramsData = new URLSearchParams();
      paramsData.append('emailid', formData.emailID);
    const handleOtpEmailButtonClick = async (e) => {
        if (validateformOTP1()) {

          // const response = await axios.post(
          //   `${process.env.REACT_APP_API_PREFIX}/alluser/otpgrenrate/getemailotp?${paramsData.toString()}`,
          //   {
          //     headers: {
          //       'Content-Type': 'application/json',
          //     },
          //   },
          // )
          // if (response.status === 200) {
            toast.success(`OTP Sent On Given Email`, {
              position: toast.POSITION.TOP_RIGHT,
            })
            setotpEmail(true)
          setotpEmailbutton(false)
          // setotpid(response.data)
            setisotpid(true)
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
      const handleOtpEmailVerifyButtonClick = async (e) => {
        if (validateformOTP2()) {

          // const response = await axios.post(
          //   `${process.env.REACT_APP_API_PREFIX}/alluser/otpgrenrate/getoptvalidationforemail`,handleEmail,
          //   {
          //     headers: {
          //       'Content-Type': 'application/json',
          //     },
          //   },
          // )
          // if (response.status === 200) {
            setisotpid(false)
            setotpEmail(false)
            setotpEmailbutton(false)
            otpMobileComp(true)
            toast.success(`Email OTP Verified`, {
              position: toast.POSITION.TOP_RIGHT,
            })
          // }else{
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


      const handleKeyPress = (e) => {
        const allowedCharacters = /^[0-9]*$/; // Only allow numeric characters
        if (!allowedCharacters.test(e.key)) {
          e.preventDefault();
        }
      };



    
  return (
        <>  <div className="row mt-2">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  Email ID<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <input
                    type="EmailId"
                    name="emailID"
                    placeholder="Enter Email"
                    value={formData.emailID}
                    onChange={handleChange}
                    className={`form-control ${errors1.emailID ? 'is-invalid' : ''}`}
                  />
                  {errors1.emailID && <div className="invalid-feedback">{errors1.emailID}</div>}
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                {otpEmailbutton &&  <button
                            type="button"
                            className="btn btn-primary mb-2"
                            onClick={handleOtpEmailButtonClick} 
                          >
                           <FontAwesomeIcon icon={faClock}  /> Get OTP
                          </button>}
                          {isotpid &&  <span style={{ color: 'red', fontWeight: 'bold' }}>{`Your OTP ID is :- ${otpid}`}</span>}
                </div>
              </div>
              {otpEmail && 
              <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        Email OTP 
          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="text"
            name="emailotp"
            value={formData.emailotp}
            placeholder="Enter Email OTP"
            onChange={handleChange}
            onKeyPress={handleKeyPress} 
            className={`form-control ${errors2.emailotp ? 'is-invalid' : ''}`}
            maxLength={6}
          />
          {errors2.emailotp && <div className="invalid-feedback">{errors2.emailotp}</div>}
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <button
                            type="button"
                            className="btn btn-primary mb-2"
                            onClick={handleOtpEmailVerifyButtonClick} 
                          >
                           <FontAwesomeIcon icon={faClock}  />  Confirm OTP
                          </button>
        </div>
        </div>}
        </>
  )
}

export default EmailOTP
