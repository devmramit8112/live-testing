import React, { useState } from 'react'
import RegistrationHeader from './commonComponentForRegistration/RegistrationHeader'
import RegistrationTitle from './commonComponentForRegistration/RegistrationTitle'
import InstituteDetail from './commonComponentForRegistration/InstituteDetail'
import PoliceStationDropdownSelection from './commonComponentForRegistration/PoliceStationDropdownSelection'
import SendOtpDetail from './commonComponentForRegistration/SendOtpDetail'
import OtpSection from './commonComponentForRegistration/OtpSection'
import CredentialsDetail from './commonComponentForRegistration/CredentialsDetail'
import HodDetails from './commonComponentForRegistration/HodDetails'
import TechnicalProfile from './commonComponentForRegistration/TechnicalProfile'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import BackLogin from './commonComponentForRegistration/BackLogin'

const InstituteRegistration = () => {
  const [showDiv, setShowDiv] = useState(false)
  const [hideOTPButton, setHideOTPButton] = useState(false)
  const [hideConfirmButton, setHideConfirmButton] = useState(false)
  const [showConfirmText, setShowConfirmText] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Private') // Add this line
  const [selectedPoliceStation, setSelectedPoliceStation] = useState('')
  const [selectedStateCode, setSelectedStateCode] = useState('')
  const [selectedDistrictCode, setSelectedDistrictCode] = useState('')
  const [showOtpButton, setShowOtpButton] = useState(false)
  const initialState = {
    scode: '',
    dcode: '',
    pscode: '',
    drRegType: '',
    SpecialityID: '',
    InstituteID: '',
    userID: '',
    password: '',
    Ques1: '',
    Ques2: '',
    Ques3: '',
    Ans1: '',
    Ans2: '',
    Ans3: '',
    drrcer: '',
    drrno: '',
    hodname: '',
    Designation: '',
    hodmobile: '',
    hodemail: '',
    healthInstituteName: '',
    DrRegIssuDate: '',
    healthInstituteCateID: '',
    // send otp
    userName: '',
    emailID: '',
    mobile: '',
    confirmPassword: '',
  }

  const [formData, setFormData] = useState(initialState)


  const [errors, setErrors] = useState({
    scode: '',
    dcode: '',
    pscode: '',
    drRegType: '',
    SpecialityID: '',
    InstituteID: '',
    userID: '',
    password: '',
    Ques1: '',
    Ques2: '',
    Ques3: '',
    Ans1: '',
    Ans2: '',
    Ans3: '',
    drrcer: '',
    drrno: '',
    hodname: '',
    Designation: '',
    hodmobile: '',
    hodemail: '',
    healthInstituteName: '',
    healthInstituteCateID: '',
    DrRegIssuDate: '',
    // otp send 
    userName: '',
    emailID: '',
    mobile: '',
    confirmPassword: '',
  })

  //send otp message details 

  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      userName: '',
      emailID: '',
      mobile: '',
    };
    if (formData.userName.trim() === '') {
      newErrors.userName = 'Name is required';
      valid = false;
    } else if (!/^[a-zA-Z]{3,30}$/.test(formData.userName)) {
      newErrors.userName = 'Name should be 3 to 30 alphabetic characters';
      valid = false;
    }

    if (formData.emailID.trim() === '') {
      newErrors.emailID = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.emailID)) {
      newErrors.emailID = 'Invalid emailID format';
      valid = false;
    }
    if (formData.mobile.trim() === '') {
      newErrors.mobile = 'Mobile is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile should be 10 digits';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // validate otp form 
  const validateOTPForm = () => {
    let valid = true;
    const newErrors = {
      mobileotp: '',
      emailotp: '',
    };
    if (formData.mobileotp.trim() === '') {
      newErrors.mobileotp = 'Mobile OTP is required';
      valid = false;
    } else if (!/^\d{6}$/.test(formData.mobileotp)) {
      newErrors.mobileotp = 'Mobile OTP should be  numeric digits';
      valid = false;
    }

    if (formData.emailotp.trim() === '') {
      newErrors.emailotp = 'Email OTP is required';
      valid = false;
    } else if (!/^\d{6}$/.test(formData.emailotp)) {
      newErrors.emailotp = 'Email OTP should be 6 numeric digits';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleOTPButtonClick = (e) => {

    e.preventDefault();

    if (validateformOTP()) {
      console.log('Form submitted successfully:', formData);
      setShowOtpButton(false)
      // If validation is successful, show the OTP section and hide the button
      setShowDiv(!showDiv)
      // setHideOTPButton(true)
      setHideConfirmButton(true)
      setShowConfirmText(true)
    } else {
      // Form has validation errors, display error messages
      console.log('Form has validation errors.');
    }
  };


  const validateForm = () => {
    let valid = true;
    const newErrors = {
      scode: '',
      dcode: '',
      pscode: '',
      InstituteID: '',
      HealthInstituteId: '',
      healthInstituteName: '',
      healthInstituteCateID: '',
      // below
      designation: '',
      drRegType: '',
      SpecialityID: '',
      DrRegIssuDate: '',
      drrno: '',
      userID: '',
      password: '',
      confirmPassword: '',
      Ques1: '',
      Ans1: '',
      Ques2: '',
      Ans2: '',
      Ques3: '',
      Ans3: '',
      //hod section
      hodname: '',
      Designation: '',
      hodmobile: '',
      hodemail: '',

    };

    if (formData.scode.trim() === '') {
      newErrors.scode = 'scode is required';
      valid = false;
    }
    if (formData.hodname.trim() === '') {
      newErrors.hodname = 'HOD Name is required';
      valid = false;
    }
    if (formData.Designation.trim() === '') {
      newErrors.Designation = 'Designation is required';
      valid = false;
    }
    if (formData.hodmobile.trim() === '') {
      newErrors.hodmobile = 'Hod Mobile is required';
      valid = false;
    }
    if (formData.hodemail.trim() === '') {
      newErrors.hodemail = 'Hod Mail is required';
      valid = false;
    }

    if (formData.healthInstituteName.trim() === '') {
      newErrors.healthInstituteName = 'Institute Name is required';
      valid = false;
    }
    if (formData.dcode.trim() === '') {
      newErrors.dcode = 'dcode is required';
      valid = false;
    }
    if (formData.pscode.trim() === '') {
      newErrors.pscode = 'pscode is required';
      valid = false;
    }

    if (formData.InstituteID.trim() === '') {
      newErrors.InstituteID = 'InstituteID is required';
      valid = false;
    }
    if (formData.healthInstituteCateID.trim() === '') {
      newErrors.healthInstituteCateID = 'Institute Category is required';
      valid = false;
    }
    if (formData.drRegType.trim() === '') {
      newErrors.drRegType = 'drRegType is required';
      valid = false;
    }
    if (formData.SpecialityID.trim() === '') {
      newErrors.SpecialityID = 'SpecialityID is required';
      valid = false;
    }
    if (formData.DrRegIssuDate.trim() === '') {
      newErrors.DrRegIssuDate = 'DrRegIssuDate is required';
      valid = false;
    }
    if (formData.drrno.trim() === '') {
      newErrors.drrno = 'drrno is required';
      valid = false;
    }

    // user credentials
    if (formData.userID.trim() === '') {
      newErrors.userID = 'userID is required';
      valid = false;
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'password is required';
      valid = false;
    }
    if (formData.confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'confirmPassword is required';
      valid = false;
    }
    if (formData.Ques1.trim() === '') {
      newErrors.Ques1 = 'Ques1 is required';
      valid = false;
    }
    if (formData.Ans1.trim() === '') {
      newErrors.Ans1 = 'Ans1 is required';
      valid = false;
    }
    if (formData.Ques2.trim() === '') {
      newErrors.Ques2 = 'Ques2 is required';
      valid = false;
    }
    if (formData.Ans2.trim() === '') {
      newErrors.Ans2 = 'Ans2 is required';
      valid = false;
    }
    if (formData.Ques3.trim() === '') {
      newErrors.Ques3 = 'Ques3 is required';
      valid = false;
    }
    if (formData.Ans3.trim() === '') {
      newErrors.Ans3 = 'Ans3 is required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };



  const handleConfirmOTPClick = (e) => {
    e.preventDefault();
    if (validateOTPForm()) {
      // Handle form submission logic here
      console.log('Form submitted successfully:', formData);
      setHideConfirmButton(true)
      setShowConfirmText(true)
    } else {
      // Form has validation errors, display error messages
      console.log('Form has validation errors.');
    }
  };

  const handleStateChange = (scode) => {
    setSelectedStateCode(scode)
    setFormData((prevData) => ({
      ...prevData,
      scode: scode,
    }))
    console.log('Selected :', scode)
  }

  const handleDistrictCodeChange = (dcode) => {
    setSelectedDistrictCode(dcode)
    setFormData((prevData) => ({
      ...prevData,
      dcode: dcode,
    }))
    console.log('Selected District Code: ', dcode)
  }
  const handlePoliceChange = (pscode) => {
    setSelectedPoliceStation(pscode)
    setFormData((prevData) => ({
      ...prevData,
      pscode: pscode,
    }))
    console.log('Selected PoliceStation Code: ', pscode)
  }

  const [submittedData, setSubmittedData] = useState(null)
  const handleInputChange = (name, value, event) => {
    if (name === 'selectedOption') {
      setSelectedOption(value)
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }



  const handleSubmit = async (event) => {
    event.preventDefault()
    if (validateForm()) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_PREFIX}/alluser/instituteregistration/getinstituteregistration`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          },
        )
        const responseText = await response.text() // Get the raw response text
        console.log(responseText)

        if (response.status === 200) {
          console.log('Response Data:', responseText) // Log the response data
          toast.success(`Data Successfully Added: ${responseText}`, {
            position: toast.POSITION.TOP_RIGHT,
          })
        } else {
          toast.error('Api Error Response', {
            position: toast.POSITION.TOP_RIGHT,
          })
        }
      } catch (error) {
        toast.error('Fetch api error response', {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    }
  }



  return (
    <>
      <RegistrationHeader />
      <div className='row'>
        <div className='col-lg-1 col-md-1 col-1 col-md-1 col-sm-1'></div>
        <div className='col-lg-10 col-10 col-10 col-sm-10 col-md-10'>
          <BackLogin />
          <div className=" card mb-3 pb-3">
            <RegistrationTitle title="Institute Admin Registration Form" />
            <div className='card-body'>

              <div className="row p-3 text-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2 p-3">
                  <span disabled="disabled">
                    <input
                      type="radio"
                      value="Private"
                      checked={selectedOption === 'Private'}
                      onChange={(event) => handleInputChange('selectedOption', 'Private', event)}
                    />
                    <label>Private</label>
                  </span>
                  <span disabled="disabled" className="mx-4">
                    <input
                      type="radio"
                      value="Goverment"
                      checked={selectedOption === 'Goverment'}
                      onChange={(event) => handleInputChange('selectedOption', 'Goverment', event)}
                    />

                    <label>Government</label>
                  </span>
                </div>
              </div>
              <SendOtpDetail formData={formData} errors={errors} showOtpButton={setShowOtpButton} onChange={setFormData} />
              <div className="row mt-2">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                  {showOtpButton && !showDiv && (
                    <button
                      type="button"
                      className="btn btn-primary mb-2"
                      onClick={handleOTPButtonClick}
                    >
                      <FontAwesomeIcon icon={faClock} />Proceed
                    </button>
                  )}
                </div>
              </div>
              {showDiv && !hideConfirmButton && (
                <>
                  <OtpSection formData={formData} errors={errors} onChange={setFormData} />

                  <div className="row mt-2">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <button type="button" className="btn btn-primary" onClick={handleConfirmOTPClick}>
                        <FontAwesomeIcon icon={faCheckCircle} />CONFIRM OTP
                      </button>
                    </div>
                  </div>
                </>
              )}

              {showConfirmText && (
                <>
                  <InstituteDetail formData={formData} errors={errors} onChange={setFormData} />
                  <div className='row mt-2'>
                    <PoliceStationDropdownSelection
                      onInputChange={handleStateChange}
                      onDistrictChange={handleDistrictCodeChange}
                      onPoliceChange={handlePoliceChange}
                    />
                  </div>
                  <HodDetails formData={formData} errors={errors} onChange={setFormData} />
                  <div className="text-center mt-4 mb-2">
                    <h5>Technical Profile</h5>
                  </div>
                  <TechnicalProfile formData={formData} onInputChange={handleInputChange}
                    errors={errors} onChange={setFormData} />
                  <CredentialsDetail formData={formData} errors={errors} onChange={setFormData} />
                  <div className="row mb-2">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2 text-center">
                      <button type="button" onClick={handleSubmit} className="icon-buttons m-2 btn btn-primary">
                        <FontAwesomeIcon icon={faPaperPlane} className="icons" /> Submit
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default InstituteRegistration
