import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import mainlogo from '../../../assets/images/logo.png'
import { PersonCircle, PeopleFill } from 'react-bootstrap-icons'
import { FaUserMd, FaUniversity } from 'react-icons/fa'
import { AiOutlineLink } from 'react-icons/ai'

import { RiAdminFill, RiLoginCircleFill } from 'react-icons/ri'


import { PersonFillLock } from 'react-bootstrap-icons'
import { EnvelopeFill } from 'react-bootstrap-icons'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

// import { AppFooter } from 'src/components'


import RegistrationHeader from '../AdminReg/userRegistrationForms/commonComponentForRegistration/RegistrationHeader'
import { Sandesandess } from '../DoctorForms/common/Operationradionbutton'
import axios from 'axios'

const Login = () => {
  // const SandesPdf = '/institute/SandesServicesMedleapr.pdf'

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const Navigate = useNavigate();

  const handleEmailChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const apiPrefix = process.env.REACT_APP_API_PREFIX

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(`http://10.88.253:9091/auth/login`, loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem('token', data.jwtToken);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userrole', data.authorties[0].authority);
        localStorage.setItem('isLoggedIn', 'true');
        setError(null);
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
          if (localStorage.getItem('userrole') === 'ROLE_29') {
            Navigate('/dashboard-test');
          } else {
            Navigate('/dashboard');
          }
        }, 1000); // Hide success message after 1 second
      } else {
        const data = response.data;
        setError(data.msg);
        setSuccess(false);

        setTimeout(() => {
          setError(null);
        }, 3000); // Hide error message after 3 seconds
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while logging in.');
      setSuccess(false);

      setTimeout(() => {
        setError(null);
      }, 3000); // Hide error message after 3 seconds
    }
  };

  const navitems = {
    backgroundColor: "#1b2642",
    color: "white",

  }
  const navactive = {
    backgroundColor: "white",
    color: "#1b2642",

  }
  const [userlogin, setuserlogin] = useState('');
  const handuselogin = () => {
    setuserlogin('login')
  }
  return (
    <>
      <RegistrationHeader />
      <div className="row p-3">
        {/* Content for Column 1 */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
          <div className="card-body">
            <div className="p-3 text-center">
              <img className="logo   " src={mainlogo} style={{ width: '380px', height: 'auto' }} />
            </div>
          </div>
        </div>
        {/* Content for Column 2 */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
          <div className="p-3 ">
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3"  >
              <Tab style={{ fontFamily: "Rubik sans-serif", }}
                eventKey="home"
                title={
                  <span style={{ fontFamily: " Rubik sans-serif" }}  >
                    <PeopleFill /> User Login
                  </span>
                }
                onClick={handuselogin}
              >
                <div className='row'>
                  <div className='col-lg-2'></div>
                  <div className='col-lg-8'>
                    <form onSubmit={handleSubmit}>
                      {/* Display error message */}
                      {error && <div className="alert alert-danger">{error}</div>}
                      {/* Display success message */}
                      {success && <div className="alert alert-success">Login successfully.....</div>}
                      {/* ... (rest of the form) */}
                      <h4 className="text-center" >Login to Your Account</h4>
                      <h6 className="sub-heading" >Enter your username & password to login</h6>
                      <div className="mb-3 mt-3">
                        <div className="input-group shadow-sm">
                          <span className="input-group-text" style={{ backgroundColor: "#1b2642" }}>
                            <PersonCircle style={{ fontSize: '30px', color: "white" }} />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            value={username}
                            onChange={handleEmailChange}
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="input-group shadow-sm">
                          <span className="input-group-text" style={{ backgroundColor: "#1b2642" }}>
                            <PersonFillLock style={{ fontSize: '30px', color: "white" }} />
                          </span>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="   col-lg-4 text-center  "></div>
                        <div className="   col-lg-4 text-center  ">
                          <button
                            type="submit"
                            className=" px-4 rounded-3 shadow-mb  animated-button"
                          // style={{ width: '100%', fontSize: '25px',backgroundColor:"#1b2642",color:" white" ,fontFamily:" Rubik sans-serif" }}
                          ><RiLoginCircleFill style={{ fontSize: '15px' }} />{" "}
                            Login
                          </button>

                        </div>
                        <div className="col-xs-6 text-center">
                          <button type="button" className="btn btn-link px-0">
                            Forgot your password?
                          </button>
                        </div>
                        <div className="col-xs-6 text-center" >
                          <p>If you don't have a valid userid, contact NIC or authorised person.</p>
                          <p >
                            Support Email: <EnvelopeFill style={{}} /> support-medleapr[at]nic[dot]in (for Haryana
                            User Only)
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="profile"
                title={
                  <span >
                    <RiAdminFill /> Admin Registration
                  </span>
                }
              >
                <span>
                  <h3 className="heading ">
                    <Link to="/state/adminregister" style={{ textDecoration: 'none', fontFamily: " Rubik sans-serif" }}>State Admin Registration</Link><br></br>
                  </h3>
                  <p>(For State Admin only)</p>
                </span>
                <span>
                  <h3 className="heading ">
                    <Link to="/district/adminregister" style={{ textDecoration: 'none', fontFamily: " Rubik sans-serif" }}> District Admin Registration</Link><br></br>

                  </h3>
                  <p>(For District Admin only)</p>
                </span>
              </Tab>
              <Tab
                eventKey="contact"
                title={
                  <span>
                    <FaUserMd /> Doctor Registration
                  </span>
                }
              >
                <span>
                  <h3 className="heading">
                    <Link to="/doctor/registration" style={{ textDecoration: 'none', fontFamily: " Rubik sans-serif" }}> Doctor Registration</Link><br></br>
                  </h3>
                </span>
              </Tab>
              <Tab
                eventKey="institute"
                title={
                  <span>
                    <FaUniversity /> Institute Registration
                  </span>
                }
              >
                <span>
                  <h3 className="heading ">
                    <Link to="/institute/registration" style={{ textDecoration: 'none', fontFamily: " Rubik sans-serif" }}>  Institute Registration</Link><br></br>

                  </h3>
                </span>

              </Tab>
              <Tab
                eventKey=""
                title={
                  <span>
                    <AiOutlineLink />Additional Link
                  </span>
                }
              >
                <span>
                  <ul>
                    <li>
                      <a href="#" >Instructions for Civil Surgeons</a>
                    </li>
                    <li>
                      <a href="#" >
                        Instructions for Private Practioners/Clinic/Hospital and Medical Colleges
                      </a>
                    </li>
                    <li>
                      <a href=" "  >Hon'able High Court Order regarding usage of MedLEaPR</a>
                    </li>
                    <li>
                      <a href="#"  >
                        Instructions regarding issuance of Medico Legal/Post Mortem Reports dated
                        22-02-2021
                      </a>
                    </li>
                    <li>
                      <a href="#" >High Court Order dated 18-02-2021</a>
                    </li>
                    <li>
                      <a href="#" >
                        Disability/MLC/Negligency/Emergency Certificate/age determination cases
                        distribution to state college/Receiving of medico-legal (Post-Mortem) and
                        viscera dated 22-06-2021 sector-6, Panchkula, Contact N
                      </a>
                    </li>
                  </ul>
                </span>

              </Tab>
            </Tabs>
          </div>
        </div>
        {/* Content for Column 3 */}

        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
          <div className="card hover-shadow">
            <h4 className="card-header text-center Headingcolorcard"  >Notice Board</h4>
            <div className="card-body" style={{ height: '480px' }}>
              <h6 className="card-subtitle mb-2 red"></h6>
              <p className="card-text">
              </p>
            </div>
          </div>



        </div>
        <Sandesandess />

      </div>
      {/*  */}
    </>
  )
}

export default Login
