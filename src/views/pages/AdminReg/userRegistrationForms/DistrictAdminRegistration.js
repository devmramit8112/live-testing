import React, { useState } from 'react'
import RegistrationHeader from './commonComponentForRegistration/RegistrationHeader'
import RegistrationTitle from './commonComponentForRegistration/RegistrationTitle'
import SendOtpDetail from './commonComponentForRegistration/SendOtpDetail'
import OtpSection from './commonComponentForRegistration/OtpSection'
import CredentialsDetail from './commonComponentForRegistration/CredentialsDetail'
import TechnicalProfile from './commonComponentForRegistration/TechnicalProfile'
import StateDropdownSelection from './commonComponentForRegistration/StateDropdownSelection'
import PersonalDetails from './commonComponentForRegistration/PersonalDetails'
import { toast } from 'react-toastify'
import BackLogin from './commonComponentForRegistration/BackLogin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faChevronCircleRight, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const DistrictAdminRegistration = () => {
  const CreateUser = localStorage.getItem('username')
  const [showSendOtp, setShowSendOtp] = useState(false)
  const [showOtpSection, setShowOtpSection] = useState(false)
  const [showStateDropdownSelection, setShowStateDropdownSelection] = useState(false)
  const [showOtpButton, setShowOtpButton] = useState(false) // New state
  const [selectedStateCode, setSelectedStateCode] = useState('')
  const [selectedDistrictCode, setSelectedDistrictCode] = useState('')
  const [fileData, setFileData] = useState(null)
  const [hideButton, setHideButton] = useState(false)


  const initialState = {

    userName: '',
    emailID: '',
    designation: '',
    mobile: '',
    mobileotp: '',
    emailotp: '',
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
    scode: '',
    dcode: '',
  }
  const [formData, setFormData] = useState(initialState)

  const handleStateChange = (name, scode) => {
    setSelectedStateCode(scode)
    setFormData((prevData) => ({
      ...prevData,
      scode: scode,
    }))
    console.log('Selected :', scode)
  }

  const handleDistrictCodeChange = (name, dcode) => {
    setSelectedDistrictCode(dcode)
    setFormData((prevData) => ({
      ...prevData,
      dcode: dcode,
    }))
    console.log('Selected District Code: ', dcode)
  }

  // form Valdaiton 

  const [errors, setErrors] = useState({
    scode: '',
    dcode: '',
    userName: '',
    emailID: '',
    mobile: '',
    mobileotp: '',
    emailotp: '',
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
  });


  //  valdaton for OTP send 

  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      userName: '',
      email: '',
      mobile: '',
      selectedState: '',
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

  const handleOtpButtonClick = (e) => {
    e.preventDefault();

    if (validateformOTP()) {
      // Handle form submission logic here
      console.log('Form submitted successfully:', formData);

      // If validation is successful, show the OTP section and hide the button
      setShowOtpButton(false)
      setShowSendOtp(true)
      setShowOtpSection(false);
      setShowStateDropdownSelection(true);
    } else {
      // Form has validation errors, display error messages
      console.log('Form has validation errors.');
    }
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

  const handleConfirmOtpClick = (e) => {
    e.preventDefault();

    if (validateOTPForm()) {
      // Handle form submission logic here
      console.log('Form submitted successfully:', formData);

      setShowOtpSection(false)
      setShowStateDropdownSelection(true)
    } else {
      // Form has validation errors, display error messages
      console.log('Form has validation errors.');
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
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

  // validate otp form 
  const validateState = () => {
    let valid = true;
    const newErrors = {
      scode: '',
      dcode: '',
    };
    if (formData.scode.trim() === '') {
      newErrors.scode = 'Select State is required';
      valid = false;
    }
    if (formData.dcode.trim() === '') {
      newErrors.dcode = 'Select District is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // state Select Vadlaition

  const handleProceedClick = (e) => {
    e.preventDefault();

    if (validateState()) {
      // Handle form submission logic here
      console.log('Form submitted successfully:', formData);
      setShowSendOtp(true);
      setHideButton(true);
    } else {
      // Form has validation errors, display error messages
      console.log('Form has validation errors.');
    }
  };



  const handleFileSelect = (photoid1) => {
    setFileData(photoid1)
    console.log(photoid1)
  }


  // const handleOtpButtonClick = () => {
  //   setShowOtpSection(true)
  //   setShowOtpButton(false) // Hide the OTP button
  // }
  // const handleConfirmOtpClick = () => {
  //   setShowOtpSection(false)
  //   setShowStateDropdownSelection(true)
  // }
  const [submittedData, setSubmittedData] = useState(null)
  const handleInputChange = (name, value) => {
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

          const response = await fetch(
            `${process.env.REACT_APP_API_PREFIX}/alluser/districtregistration/getdistrictregistration`,
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
            <RegistrationTitle title="District Admin Registration Form" />
            <div className='card-body'>
              <div className="row p-3">
                <StateDropdownSelection
                  formData={formData} errors={errors} onChange={setFormData}
                />
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2">
                  {!showSendOtp && (
                    <button type="button" className="btn btn-primary mb-2" onClick={handleProceedClick}>
                      <FontAwesomeIcon icon={faChevronCircleRight} />Proceed
                    </button>
                  )}
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2">
                  {showSendOtp && !showOtpSection && (
                    <>
                      {!showStateDropdownSelection && <SendOtpDetail formData={formData} errors={errors} onChange={setFormData} showOtpButton={setShowOtpButton} />}
                      {showOtpButton && (
                        <button
                          type="button"
                          className="btn btn-primary mb-2"
                          onClick={handleOtpButtonClick}
                        >
                          <FontAwesomeIcon icon={faClock} />   Proceed
                        </button>
                      )}
                    </>
                  )}
                  {showOtpSection && (
                    <div>
                      <OtpSection formData={formData} errors={errors} onChange={setFormData} />
                      <button
                        type="button"
                        className="btn btn-primary mb-2"
                        onClick={handleConfirmOtpClick}
                      >
                        <FontAwesomeIcon icon={faCheckCircle} /> Confirm OTP
                      </button>
                    </div>
                  )}
                  {showStateDropdownSelection && (
                    <>
                      {/* <StatePersonalDetails onInputChange={handleInputChange} /> */}
                      <div className="text-center mt-4 mb-2">
                        <h5>Personal Detail</h5>
                      </div>
                      <PersonalDetails
                        formData={formData}
                        updateFormData={updateFormData}
                        ref={childRef}
                        onFileSelect={handleFileSelect}
                        errors={errors}
                      />
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
        </div>
      </div>

    </>
  )
}

export default DistrictAdminRegistration
