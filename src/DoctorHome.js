import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { AppContent, AppFooter, AppHeader, AppSidebar } from './components'
import RegistrationHeader from './views/pages/AdminReg/userRegistrationForms/commonComponentForRegistration/RegistrationHeader'
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { Sandesandess } from './views/pages/DoctorForms/common/Operationradionbutton'
import '../src/components/Animation.css'
import { callApi } from './views/CommonModels/CallApi';
import axios from 'axios';

const DoctorHome = () => {
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [istrue, settrue] = useState(false);
  // const [isShrunk, setIsShrunk] = useState(false);
  const handlclick = () => {
    settrue(true);
    // setIsShrunk(false);

    // // Reset the button size after a short delay
    // setTimeout(() => {
    //   setIsShrunk(true);
    // }, 300); // Adjust the duration as needed
  }
  const [flang, setflang] = useState([]);
  const [selectlang, setselectlang] = useState("");
  const [Form2, setForm2] = useState(false);
  const [Form3, setForm3] = useState(false);
  const [Form4, setForm4] = useState(false);
  const [Form6, setForm6] = useState(false);
  const [Form6A, setForm6A] = useState(false);
  const [Form3New, setForm3New] = useState(false);

  const apiPrefix = process.env.REACT_APP_API_PREFIX;
  const apilang = `${apiPrefix}/alluser/all/getconsentlanguagewordingMasterActiveDDLlist`;

  const [errors, setErrors] = useState({
    cdcerTypeID: '',
    IsRSACase: '',
    cdConsentLangaugeID: '',
  });
  const handlelanguageChange = (e) => {
    if (e.target.value === '1') {
      setForm2(true)
      setForm3(true)
      setForm4(true)
      setForm6(false)
      setForm6A(false)
      setForm3New(false)
    } else if (e.target.value === '2') {
      setForm2(true)
      setForm3(true)
      setForm4(true)
      setForm6(false)
      setForm6A(false)
      setForm3New(false)

    } else if (e.target.value === '3') {
      setForm2(true)
      setForm3(true)
      setForm4(true)
      setForm6(true)
      setForm6A(true)
      setForm3New(true)
    } else if (e.target.value === '4') {
      setForm2(false)
      setForm3(false)
      setForm4(false)
      setForm6(false)
      setForm6A(false)
      setForm3New(false)
    } else if (e.target.value === '5') {
      setForm2(false)
      setForm3(false)
      setForm4(false)
      setForm6(false)
      setForm6A(false)
      setForm3New(false)
    }
    setselectlang(e.target.value)

  };
  /*Form 3 pdf */
  const Form3click = async () => {
    const apipdf = `${apiPrefix}/user/pdfgenrator/form3blank/${changeuser}/${selectlang}`
    try {
      // const apipdfgentrn = `${apiPrefix}/user/pdfgenrator/rukka/${trn}`; // pdf generator api 

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(apipdf, { headers, responseType: 'blob' });
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      } else {
        console.error('API Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  /*end form3 pdf */

  /*Form4 pdf */
  const Form4click = async () => {
    const apipdf = `${apiPrefix}/user/pdfgenrator/form4blank/${changeuser}/${selectlang}`
    try {
      // const apipdfgentrn = `${apiPrefix}/user/pdfgenrator/rukka/${trn}`; // pdf generator api 

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(apipdf, { headers, responseType: 'blob' });
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      } else {
        console.error('API Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  /*End Form 4Pdf */

  /*Form 6A Pdf */
  const Form6Aclick = async () => {
    const apipdf = `${apiPrefix}/user/pdfgenrator/form6ablank/${changeuser}/${selectlang}`
    try {
      // const apipdfgentrn = `${apiPrefix}/user/pdfgenrator/rukka/${trn}`; // pdf generator api 

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(apipdf, { headers, responseType: 'blob' });
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      } else {
        console.error('API Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  /*end form6a pdf */

  /*form 6 pdf */
  const Form6click = async () => {
    const apipdf = `${apiPrefix}/user/pdfgenrator/form6blank/${changeuser}/${selectlang}`
    try {
      // const apipdfgentrn = `${apiPrefix}/user/pdfgenrator/rukka/${trn}`; // pdf generator api 

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(apipdf, { headers, responseType: 'blob' });
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      } else {
        console.error('API Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  /*end form6 pdf */

  /*form 3 new pdf */
  const Form3Newclick = async () => {
    const apipdf = `${apiPrefix}/user/pdfgenrator/form3newblank/${changeuser}/${selectlang}`
    try {
      // const apipdfgentrn = `${apiPrefix}/user/pdfgenrator/rukka/${trn}`; // pdf generator api 

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(apipdf, { headers, responseType: 'blob' });
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      } else {
        console.error('API Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  /*end form 3 new pdf */

  /*form 2 pdf */
  const Form2click = async () => {

    const apipdf = `${apiPrefix}/user/pdfgenrator/form2blank/${changeuser}/${selectlang}`
    try {
      // const apipdfgentrn = `${apiPrefix}/user/pdfgenrator/rukka/${trn}`; // pdf generator api 

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(apipdf, { headers, responseType: 'blob' });
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      } else {
        console.error('API Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  /*end pdf form2 */
  const [handleData, sethandleData] = useState({
    cdcerTypeID: '',
    IsRSACase: '',
    cdManualTransaction: '',
    cdManualTransactionDate: '',
    cdConsentLangaugeID: '',

    cdTransactionID: '',
  })
  useEffect(() => {
    callApi(apilang)
      .then((response) => {
        setflang(response);
      })
      .catch((error) => {
        console.error('API request failed:', error);
      });


  }, []);

  return (
    <>
      <RegistrationHeader />
      <AppHeader />
      {istrue && <AppSidebar />}  <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <div className="body  px-3">
          {istrue ? <AppContent /> :
            <div className="Container">
              <div className="row mb-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <div className='card m-3 shadow-sm cardbackgd  ' >
                    <div className='card-body'>
                      <div className='card m-3 shadow-sm '>
                        <div className='card-header text-center  Headingcolorcard '>
                          <h5 > Activity-1</h5>
                        </div>
                        <div className='card-body'>
                          <Link to="/doctor-registration" className='styled-link '><h5>Registration</h5></Link>
                          <Link to="/drregistration-post-mortem-foetus" className='styled-link '><h5>Registration Post Mortem Foetus</h5></Link>
                          <Link to="/registration-sexual-abuse" className='styled-link '><h5>Registration Sexual Abuse</h5></Link>
                        </div>
                      </div>
                      <div className='card m-3 shadow-sm'>
                        <div className='card-header text-center  Headingcolorcard ' >
                          <h5>Transactional Reports:</h5>
                        </div>
                        <div className='card-body'>
                          <Link to="/ChangePassworddoctor" className='styled-link '><h5>Change password</h5></Link><br></br>
                          <Link to="/UpdateDrProfile" className='styled-link '><h5>Update Your Profile</h5></Link><br></br>
                          <Link to="/doctor-transfer" className='styled-link '><h5>Doctor transfer</h5></Link>
                          <Link to="/DoctortTransferCancelRequest" className='styled-link '><h5>Cancel Doctor transfer Request</h5></Link>
                          <Link to="/MultiLocationRequest" className='styled-link '><h5>Multiple Location Request</h5></Link>
                          <Link to="/CancelInstitute" className='styled-link '><h5>Cancel Assigned Institute</h5></Link><br></br>
                          <Link to="/ViewRecord_userdoctor" className='styled-link ' ><h5 >Case Status</h5></Link>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className='card m-3 shadow-sm cardbackgd '>
                    <div className='card-body'>
                      <div className='card m-3 shadow-sm'>
                        <div className='card-header text-center Headingcolorcard '  >
                          <h5>Activity-2</h5>
                        </div>
                        <div className='card-body'>
                          <button type="submit" onClick={handlclick} className=" px-4 rounded-3 shadow-mb  m-2 button-animation  ">
                            <FileOpenIcon />
                            Medico Legal Reporting
                          </button>
                        </div>
                      </div>
                      <div className='card m-3 shadow-sm '>
                        <div className='card-header text-center Headingcolorcard ' >
                          <h5>Download Blank Forms: Keep some copy at Trauma Centre for usage in case of eclectricity failure or non-availibilty of internet</h5>
                        </div>
                        <div className='card-body'>
                          <select
                            className={`form-select ${errors.cdConsentLangaugeID ? 'is-invalid' : ''}`} value={handleData.cdConsentLangaugeID}
                            aria-label="Default select example"
                            name="cdConsentLangaugeID"
                            onChange={handlelanguageChange}
                          >
                            <option selected >Select Consent Language</option>
                            {flang.map((array, index) => (
                              <option key={index} value={array[0]}>
                                {array[1]}
                              </option>
                            ))}
                          </select>

                          {Form2 && <Link onClick={Form2click} className='styled-link '><h5>Form-II-Medical Legal Report- Injury</h5></Link>}
                          {Form3 && <Link onClick={Form3click} className='styled-link '><h5>Form-III-Medical Legal Report- Victims/Accused of Sexual Abuse</h5></Link>}
                          {Form4 && <Link onClick={Form4click} className='styled-link '><h5>Form-IV-Medical Legal Report- Age Estimation</h5></Link>}
                          {Form6 && <Link onClick={Form6click} className='styled-link '><h5> Form-VI-Medical Legal Report- Post Mortem Examination Report</h5></Link>}
                          {Form6A && <Link onClick={Form6Aclick} className='styled-link '><h5> Form-VIA-Medical Legal Report- Post Mortem Examination Report-Foetus</h5></Link>}
                          {Form3New && <Link onClick={Form3Newclick} className='styled-link '><h5> NEW_Form-III-Medical Legal Report- Victims/Accused of Sexual Abuse</h5></Link>}




                          {errors.cdConsentLangaugeID && <div className="invalid-feedback">{errors.cdConsentLangaugeID}</div>}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <div className='card  m-3 shadow-sm cardbackgd' >
                    <div className='card-body'>
                      <div className='card m-3  shadow-sm'>
                        <div className='  card-header text-center Headingcolorcard ' >
                          <h5>Activity-3</h5>
                        </div>
                        <div className='card-body'>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <Sandesandess />
            </div>


          }</div>
      </div>


    </>
  )
}

export default DoctorHome
