import React, { useState } from 'react'
import { toast } from 'react-toastify'
import RegistrationHeader from './commonComponentForRegistration/RegistrationHeader'
import RegistrationTitle from './commonComponentForRegistration/RegistrationTitle'
import SendOtpDetail from './commonComponentForRegistration/SendOtpDetail'
import PoliceStationDropdownSelection from './commonComponentForRegistration/PoliceStationDropdownSelection'
import OtpSection from './commonComponentForRegistration/OtpSection'
import CredentialsDetail from './commonComponentForRegistration/CredentialsDetail'
import DoctorCommon from './commonComponentForRegistration/DoctorCommon'
import PersonalDetails from './commonComponentForRegistration/PersonalDetails'
import TechnicalProfile from './commonComponentForRegistration/TechnicalProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import BackLogin from './commonComponentForRegistration/BackLogin'

const DoctorRegistration = () => {
  const [showDiv, setShowDiv] = useState(false)
  const [hideOTPButton, setHideOTPButton] = useState(false)
  const [hideConfirmButton, setHideConfirmButton] = useState(false)
  const [showConfirmText, setShowConfirmText] = useState(false)
  const [showOtpButton, setShowOtpButton] = useState(true)
  const [selectedPoliceStation, setSelectedPoliceStation] = useState('')
  const [selectedStateCode, setSelectedStateCode] = useState('')
  const [selectedDistrictCode, setSelectedDistrictCode] = useState('')
  const [selectedOption, setSelectedOption] = useState('Private')
  const [fileData, setFileData] = useState(null)
  const [otpbtn, setotpbtn] = useState(false)
  const initialState = {
    scode: '',
    dcode: '',
    pscode: selectedPoliceStation,
    UserType: '',
    InstituteID: '',
    HealthInstituteId: '',
    Retirement_date: '',
    // Doctor COmmon
    userName: '',
    emailID: '',
    designation: '',
    mobile: '',
    drRegType: '',
    SpecialityID: '',
    UserType: '',
    InstituteID: '',
    HealthInstituteId: '',
    userID: '',
    confirmPassword: '',
    password: '',
    Ques1: '',
    Ans1: '',
    Ques2: '',
    Ans2: '',
    Ques3: '',
    Ans3: '',
    drrcer: '',
    drrno: '',
    mobileotp: '',
    emailotp: '',
    DrRegIssuDate: '',
  }
  const [formData, setFormData] = useState(initialState)
  // Form Validation Start 
  const [errors, setErrors] = useState({
    scode: '',
    dcode: '',
    pscode: '',
    UserType: '',
    InstituteID: '',
    HealthInstituteId: '',
    Retirement_date: '',
    // Doctor COmmon
    userName: '',
    emailID: '',
    designation: '',
    mobile: '',
    drRegType: '',
    SpecialityID: '',
    UserType: '',
    InstituteID: '',
    HealthInstituteId: '',
    userID: '',
    password: '',
    confirmPassword: '',
    Ques1: '',
    Ans1: '',
    Ques2: '',
    Ans2: '',
    Ques3: '',
    Ans3: '',
    drrcer: '',
    drrno: '',
    mobileotp: '',
    emailotp: '',
    DrRegIssuDate: '',
  });

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
      newErrors.emailID = 'Invalid email format';
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
  const handleOTPButtonClick = (e) => {
    e.preventDefault();

    if (validateformOTP()) {
      // Handle form submission logic here
      console.log('Form submitted successfully:', formData);
      setShowOtpButton(false)
      setotpbtn(false)
      // If validation is successful, show the OTP section and hide the button
      setShowDiv(!showDiv)
      setShowConfirmText(true)
    } else {
      // Form has validation errors, display error messages
      console.log('Form has validation errors.');
    }
  };

  // Confirm OTP 

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

  const handleConfirmOTPClick = (e) => {
    e.preventDefault();

    if (validateOTPForm()) {
      // Handle form submission logic here
      console.log('Form submitted successfully:', formData);
      setHideConfirmButton(true)
      setShowConfirmText(true)
      setShowDiv(false)
      setHideOTPButton(true)
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
      UserType: '',
      InstituteID: '',
      HealthInstituteId: '',
      Retirement_date: '',
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
    };

    if (formData.scode.trim() === '') {
      newErrors.scode = 'scode is required';
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
    if (formData.UserType.trim() === '') {
      newErrors.UserType = 'UserType is required';
      valid = false;
    }
    if (formData.InstituteID.trim() === '') {
      newErrors.InstituteID = 'InstituteID is required';
      valid = false;
    }
    if (formData.HealthInstituteId.trim() === '') {
      newErrors.HealthInstituteId = 'HealthInstituteId is required';
      valid = false;
    }
    if (formData.Retirement_date.trim() === '') {
      newErrors.Retirement_date = 'Retirement_date is required';
      valid = false;
    }


    // below
    if (formData.designation.trim() === '') {
      newErrors.designation = 'designation is required';
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



  const handleFileSelect = (photoid1) => {
    setFileData(photoid1)
  }

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

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }))
  }
  const handleSubmit = async () => {
    if (childRef.current) {
      const isFormValid = childRef.current.validateFields()

      if (validateForm()) {
        try {
          const formDataWithFile = new FormData()
          for (const key in formData) {
            formDataWithFile.append(key, formData[key])
          }
          formDataWithFile.append('photoid1', fileData)
          formDataWithFile.append('pscode', selectedPoliceStation)
          console.log("pscode selected", selectedPoliceStation)

          const response = await fetch(
            `${process.env.REACT_APP_API_PREFIX}/alluser/doctorregistration/getdoctorregistration`,
            {
              method: 'POST',
              body: formDataWithFile,
            },
          )

          try {
            const responseText = await response.text() // Get the raw response text
            console.log(responseText) // Log the raw response text

            let responseData
            try {
              responseData = JSON.parse(responseText)
            } catch (error) {
              console.error('Error parsing response:', error)
            }

            if (response.status === 200) {
              console.log('Response Data:', responseData) // Log the response data
              toast.success(`Data Successfully Added: ${responseText}`, {
                position: toast.POSITION.TOP_RIGHT,
              })
            } else {
              if (responseData && responseData.message) {
                console.log('Error message:', responseData.message)
              } else {
                console.log('No specific error message available.')
              }
              console.log('user already exists')
              toast.error('User already exists.', {
                position: toast.POSITION.TOP_RIGHT,
              })
            }
          } catch (error) {
            console.error('Error processing response:', error)
          }
        } catch (error) {
          console.error('Fetch API error:', error)
          toast.error('Error submitting the form.', {
            position: toast.POSITION.TOP_RIGHT,
          })
        }
      }
    }
  }

  const childRef = React.createRef()

  return (
    <>
      <RegistrationHeader />
      <div className='row'>
        <div className='col-lg-1 col-md-1 col-1 col-md-1 col-sm-1'></div>
        <div className='col-lg-10 col-10 col-10 col-sm-10 col-md-10'>
          <BackLogin />
          <div className=" card mb-3 pb-3">
            <RegistrationTitle title="Doctor Registration Form" />
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
              {showOtpButton && !showDiv && <SendOtpDetail formData={formData} errors={errors} onChange={setFormData} showOtpButton={setotpbtn} />}
              <div className="row mt-2">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                  {otpbtn && <>  {!hideOTPButton && !showDiv && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleOTPButtonClick}
                    >
                      <FontAwesomeIcon icon={faClock} />  Proceed
                    </button>
                  )}</>}
                </div>
              </div>
              {/* {showDiv && !hideConfirmButton && (
          <>
            <OtpSection formData={formData} errors={errors} onChange={setFormData} />
            <div className="row mt-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <button type="button" className="btn btn-primary" onClick={handleConfirmOTPClick}>
                <FontAwesomeIcon icon={faCheckCircle}  />CONFIRM OTP
                </button>
              </div>
            </div>
          </>
        )} */}

              {showConfirmText && (
                <>
                  <PersonalDetails
                    formData={formData}
                    updateFormData={updateFormData}
                    ref={childRef}
                    onFileSelect={handleFileSelect}
                    errors={errors}
                  />
                  <div className="row mb-2">
                    <PoliceStationDropdownSelection
                      onInputChange={handleStateChange}
                      onDistrictChange={handleDistrictCodeChange}
                      onPoliceChange={handlePoliceChange}
                    />
                  </div>
                  <TechnicalProfile formData={formData} onInputChange={handleInputChange}
                    errors={errors} onChange={setFormData} />
                  <DoctorCommon formData={formData} errors={errors} onChange={setFormData} />
                  <CredentialsDetail formData={formData} errors={errors} onChange={setFormData} />
                  <div className="row mb-2">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2 text-center">
                      <button type="button" onClick={handleSubmit} className="icon-buttons m-2 btn btn-primary">
                        <FontAwesomeIcon icon={faPaperPlane} className="icons" />   Submit
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

export default DoctorRegistration
