import React, { useState } from 'react'
import Sandes from '../../../../assets/images/Sandes.png'
import ios from '../../../../assets/images/ios.png'
import android from '../../../../assets/images/android.png'
import { useNavigate } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const Operationradionbutton = () => {
  const [Hand, setFist] = useState(false)
  const handleClickyes = () => {
    setFist(true)
  }
  const handleClickno = () => {
    setFist(false)
  }

  return (
    <div>
      <select class="form-select" aria-label="Default select example">
        <option selected>select </option>
        <option value="" onClick={handleClickyes}>
          Yes
        </option>
        <option value=" " onClick={handleClickno}>
          No
        </option>
      </select>

      {Hand && (
        <div className="row mt-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <input name="" type="text" className="form-control" />
          </div>
        </div>
      )}
    </div>
  )
}

const Radioform3female = ({ title, title1 }) => {
  const [DigitalExamination, setDigitalExamination] = useState(false)
  const handleClickyes = () => {
    setDigitalExamination(true)
  }
  const handleClickno = () => {
    setDigitalExamination(false)
  }

  return (
    <>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">{title}</div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <input className="form-check-input m-2" name="" type="radio" onClick={handleClickyes} />
          <span className="ml-1">Yes </span>

          <input className="form-check-input m-2" name="" type="radio" onClick={handleClickno} />
          <span className="ml-1">No</span>
        </div>
      </div>
      {DigitalExamination && (
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <div className="row mb-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  Vagina <Redstar />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <textarea name="" type="text" class="form-control"></textarea>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  Cervix <Redstar />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <textarea name="" type="text" class="form-control"></textarea>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  Uterus
                  <Redstar />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <textarea name="" type="text" class="form-control"></textarea>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  {title1}
                  <Redstar />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <textarea name="" type="text" class="form-control"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
const PerSpeculume = ({ handleChange }) => {
  return (
    <>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Hymen (only if relevant)
          <Redstar />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <textarea
            name="pseHymens"
            type="text"
            class="form-control"
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
    </>
  )
}
const Dropdownform3part2 = () => {
  return (
    <select class="form-select" aria-label="Default select example">
      <option selected>Yes</option>
      <option value="1">No</option>
      <option value="2">Don't Known</option>
    </select>
  )
}
const Dropdownform4 = ({ title, title1, title2, title3, title4 }) => {
  return (
    <select class="form-select" aria-label="Default select example">
      <option selected>select</option>
      <option value="1">{title}</option>
      <option value="2">{title1}</option>
      <option value="3">{title2}</option>
      <option value="4">{title3}</option>
      <option value="4">{title4}</option>
    </select>
  )
}

const Inputform3part2 = ({ name, handleChange, handleData }) => {
  return (
    <input
      name={name}
      type="text"
      onChange={handleChange}
      value={handleData.name}
      className="form-control"
    />
  )
}
const TimeComp = ({ selectName, onChange }) => {
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')

  // Function to handle hour selection
  const handleHourChange = (event) => {
    const newHours = event.target.value
    setHours(newHours)
    // Call the parent's onChange function to update the formData
    onChange(selectName, `${newHours}:${minutes}`)
  }

  // Function to handle minute selection
  const handleMinuteChange = (event) => {
    const newMinutes = event.target.value
    setMinutes(newMinutes)
    // Call the parent's onChange function to update the formData
    onChange(selectName, `${hours}:${newMinutes}`)
  }

  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
        <div className="input-group">
          <select
            name={`${selectName}_hours`}
            value={hours}
            onChange={handleHourChange}
            className="form-control"
          >
            <option selected="selected" value="00">
              00
            </option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
          </select>
          <div className="input-group-append">
            <span className="input-group-text">Hrs.</span>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
        <div className="input-group">
          <select
            name={`${selectName}_minutes`}
            value={minutes}
            onChange={handleMinuteChange}
            className="form-control"
          >
            <option selected="selected" value="00">
              00
            </option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="56">56</option>
            <option value="57">57</option>
            <option value="58">58</option>
            <option value="59">59</option>
          </select>
          <div className="input-group-append">
            <span className="input-group-text">Mins..</span>
          </div>
        </div>
      </div>
    </>
  )
}
const ButtonBackandSave = ({ backButton, savebutton }) => {
  return (
    <>
      <div className="row mb-3 ">
        <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-3 "></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
          <button type="submit" className="btn btn-danger m-2" onClick={backButton}>
            Back
          </button>

          <button type="submit" className="btn btn-primary m-2" onClick={savebutton}>
            Save and Proceed
          </button>
        </div>
      </div>
    </>
  )
}
const ButtonFinal = ({
  backButton,
  savebutton,
  printbtn,
  isDisable,
  isCheck,
  handlecheckchange,
}) => {
  const Navigate = useNavigate()
  let title = ''
  if (isCheck === true) {
    title = 'print with final detail'
  } else {
    title = 'print with besic detail'
  }
  return (
    <>
      <div className="row mb-3 ">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
          <button type="submit" className="btn btn-danger m-2" onClick={backButton}>
            Back
          </button>
          {!isDisable && (
            <button type="submit" className="btn btn-primary m-2" onClick={savebutton}>
              Save and Proceed
            </button>
          )}
          {isDisable && (
            <>
              {' '}
              <input
                id="freeze"
                type="checkbox"
                name="chkVictimAdmitted"
                onChange={handlecheckchange}
              />
              Freeze Report
              <button type="submit" className="btn btn-dark m-2" onClick={printbtn}>
                {title}
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => Navigate('/DoctorHome')}
              >
                Go To Home
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
const Dropdownforms = ({ name, handleChange, yes, no }) => {
  return (
    <select
      class="form-select"
      aria-label="Default select example"
      name={name}
      onChange={handleChange}
    >
      <option selected>select </option>
      <option value={yes}>Yes</option>
      <option value={no}>No</option>
    </select>
  )
}
const DropdownformsYesNo = ({ name, handleChange }) => {
  return (
    <select
      class="form-select"
      aria-label="Default select example"
      name={name}
      onChange={handleChange}
    >
      <option value="Y">Yes</option>
      <option value="N" selected>
        No
      </option>
    </select>
  )
}
const Dropdownforms3 = () => {
  return (
    <select class="form-select" aria-label="Default select example">
      <option selected>select </option>
      <option value="">Yes</option>
      <option value="">No</option>
      <option value="">Don't Know </option>
      <option value="">Don't Remember</option>
      <option value="">Don't Understand</option>
    </select>
  )
}
const Fileinput = ({ title }) => {
  return (
    <div class="input-group">
      <input class="form-control" type="text" id=""></input>
      <div class="input-group-append">
        <span class="input-group-text">{title}</span>
      </div>
    </div>
  )
}
const Informationform3part2 = ({ title }) => {
  return (
    <tr>
      <td>{title}</td>

      <td>
        <Inputform3part2 />
      </td>
    </tr>
  )
}
const Informationform6 = ({ title, title2 }) => {
  return (
    <tr>
      <td>
        {title}
        <Redstar />
      </td>

      <td>
        <Inputform3part2 />
      </td>
      <td>
        {title2}
        <Redstar />
      </td>

      <td>
        <Inputform3part2 />
      </td>
    </tr>
  )
}
const Form6AInternalExamination = (props) => {
  const { title, title1, input1Name, setFormData, formData } = props

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <tr>
      <td>{title}</td>
      <td>
        {title1}
        <Redstar />
      </td>
      <td>
        <textarea
          type="text"
          name={input1Name}
          value={formData[input1Name] || ''}
          onChange={handleInputChange}
          className="form-control"
        />
      </td>
    </tr>
  )
}
const Redstar = () => {
  return <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
}
const Ageinput = ({ handleData, handleChange, errors }) => {
  return (
    <div className="row justify-content-center">
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Age (as claimed by accompany person / Police)(Only Numeric)
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <div class="input-group">
            <input
              type="text"
              name="vtageyr"
              value={handleData.vtageyr}
              onChange={handleChange}
              className={`form-control ${errors.vtageyr ? 'is-invalid' : ''}`}
            />
            <div class="input-group-append">
              <span class="input-group-text">Years</span>
            </div>
            {errors.vtageyr && <div className="invalid-feedback">{errors.vtageyr}</div>}
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <div class="input-group">
            <input
              type="text"
              name="vtagemonth"
              value={handleData.vtagemonth}
              onChange={handleChange}
              className={`form-control ${errors.vtagemonth ? 'is-invalid' : ''}`}
            />
            <div class="input-group-append">
              <span class="input-group-text">Months</span>
            </div>
            {errors.vtagemonth && <div className="invalid-feedback">{errors.vtagemonth}</div>}
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <div class="input-group">
            <input
              type="text"
              name="vtagedays"
              value={handleData.vtagedays}
              onChange={handleChange}
              className={`form-control ${errors.vtagedays ? 'is-invalid' : ''}`}
            />
            <div class="input-group-append">
              <span class="input-group-text">Days</span>
            </div>
            {errors.vtagedays && <div className="invalid-feedback">{errors.vtagedays}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

const Ageinput1 = ({ handleData, handleChange, errors }) => {
  return (
    <>
      <div class="input-group">
        <input
          type="text"
          name="vtageyr"
          value={handleData.vtageyr}
          onChange={handleChange}
          className={`form-control ${errors.vtageyr ? 'is-invalid' : ''}`}
        />
        <div class="input-group-append">
          <span class="input-group-text">Years</span>
        </div>
        {errors.vtageyr && <div className="invalid-feedback">{errors.vtageyr}</div>}

        <input
          type="text"
          name="vtagemonth"
          value={handleData.vtagemonth}
          onChange={handleChange}
          className={`form-control ${errors.vtagemonth ? 'is-invalid' : ''}`}
        />
        <div class="input-group-append">
          <span class="input-group-text">Months</span>
        </div>
        {errors.vtagemonth && <div className="invalid-feedback">{errors.vtagemonth}</div>}

        <input
          type="text"
          name="vtagedays"
          value={handleData.vtagedays}
          onChange={handleChange}
          className={`form-control ${errors.vtagedays ? 'is-invalid' : ''}`}
        />
        <div class="input-group-append">
          <span class="input-group-text">Days</span>
        </div>
        {errors.vtagedays && <div className="invalid-feedback">{errors.vtagedays}</div>}
      </div>
    </>
  )
}

const Ageinput2 = ({ handleChange, errors }) => {
  return (
    <>
      <div class="input-group">
        <input type="text" name="vtageyr" onChange={handleChange} className={`form-control`} />
        <div class="input-group-append">
          <span class="input-group-text">Years</span>
        </div>
        <input type="text" name="vtagemonth" onChange={handleChange} className={`form-control`} />
        <div class="input-group-append">
          <span class="input-group-text">Months</span>
        </div>
        <input type="text" name="vtagedays" onChange={handleChange} className={`form-control`} />
        <div class="input-group-append">
          <span class="input-group-text">Days</span>
        </div>{' '}
      </div>
    </>
  )
}
// age input for rukkaa
const AgeinputRukka = ({ formData, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    onChange({ ...formData, [name]: value })
  }

  return (
    <div className="row justify-content-center">
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Age (as claimed by accompany person / Police)(Only Numeric)
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <div class="input-group">
            <input
              type="text"
              name="vtageyr"
              value={formData.vtageyr}
              onChange={handleChange}
              className="form-control"
            />
            <div class="input-group-append">
              <span class="input-group-text">Years</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <div class="input-group">
            <input
              type="text"
              name="vtagemonth"
              value={formData.vtagemonth}
              onChange={handleChange}
              className="form-control"
            />
            <div class="input-group-append">
              <span class="input-group-text">Months</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <div class="input-group">
            <input
              type="text"
              name="vtagedays"
              value={formData.vtagedays}
              onChange={handleChange}
              className="form-control"
            />
            <div class="input-group-append">
              <span class="input-group-text">Days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const BodyEvidence = ({ title }) => {
  const [Hand, setFist] = useState(false)
  const handleClickyes = () => {
    setFist(true)
  }
  const handleClickno = () => {
    setFist(false)
  }

  return (
    <div className="row mb-3">
      <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">{title}</div>
      <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <select class="form-select" aria-label="Default select example">
          <option selected>select </option>
          <option value="" onClick={handleClickno}>
            Collected
          </option>
          <option value=" " onClick={handleClickyes}>
            Not Collected
          </option>
        </select>
        {/* <input className="form-check-input m-2" name="Hand" type="radio" onClick={handleClickno} />
				<span className="ml-1" > Collected  </span>
				<input className="form-check-input m-2" name="Hand" type="radio" onClick={handleClickyes} />
				<span className="ml-1">Not Collected</span> */}
      </div>
      {Hand && (
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          {' '}
          <input name="" type="text" className="form-control" />
        </div>
      )}
    </div>
  )
}

const HomeButton = () => {
  const Navigate = useNavigate()
  return (
    <>
      <div className="row m-2 ">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4  ">
          {/* <button type="submit"   className=" px-4 rounded-3 shadow-mb  animated-buttonhome"   onClick={() => Navigate("/DoctorHome")}>
        <FaHome style={{fontSize:"20px"}}  />	Home
					</button> */}
          <button
            type="submit"
            className="animated-buttonhome"
            onClick={() => Navigate('/DoctorHome')}
          >
            {' '}
            <FaHome style={{ fontSize: '20px' }} /> Home
          </button>
        </div>
      </div>
    </>
  )
}

const GOToHome = () => {
  const Navigate = useNavigate()
  return (
    <>


      {/* <button type="submit"   className=" px-4 rounded-3 shadow-mb  animated-buttonhome"   onClick={() => Navigate("/DoctorHome")}>
        <FaHome style={{fontSize:"20px"}}  />	Home
					</button> */}
      {/* <button
            type="submit"
            className="btn btn-primary"
            onClick={() => Navigate('/dashboard/ChooseCertificateType')}
          >
            {' '}
            <FaHome  />Go To Home
          </button> */}

      <button type="submit" className="icon-buttons m-2 btn btn-primary" onClick={() => Navigate('/dashboard/ChooseCertificateType')}>
        Go To Home  <FaHome />
      </button>
    </>
  )
}
const ExaminationExternalInjuries = (props) => {
  const { title, input1Name, setFormData, formData } = props

  const handleInputChange = (event) => {
    const { name, value } = event.target

    // Update the parent's formData state with the new value
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <div>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          {title}
          <Redstar />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <textarea
            type="text"
            name={input1Name}
            value={formData[input1Name] || ''}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
      </div>
    </div>
  )
}

const Sandesandess = ({ }) => {
  return (
    <>
      <div className="card mt-2 shadow-sm cardbackgd">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2 text-center">
          <img src={Sandes} />
          <p>
            <a href="#" target="_blank">
              <h6 style={{ fontFamily: ' Rubik sans-serif' }}>Sandes Services</h6>
            </a>

            <h6 style={{ fontFamily: ' Rubik sans-serif' }}>SANDES</h6>
            <h6 style={{ fontFamily: ' Rubik sans-serif' }}>
              {' '}
              Government Instant Messaging System enabled Application
            </h6>
            <h6 style={{ fontFamily: ' Rubik sans-serif' }}> Download Sandes App</h6>
            <img src={ios} />
            <a href="https://apps.apple.com/in/app/sandes/id1517976582" target="_blank">
              IOS
            </a>
            <img src={android} />
            <a
              href="https://play.google.com/store/apps/details?id=in.nic.gimkerala&hl=en_IN&gl=US"
              target="_blank"
            >
              Android
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

const InternalExaminationDetail = (props) => {

  const { title, title2, input1Name, input2Name, setFormData, formData } = props

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }
  return (
    <tr>
      <td>
        {props.title}
        <Redstar />
      </td>
      <td>
        <textarea
          type="text"
          name={input1Name}
          value={formData[input1Name] || ''}
          onChange={handleInputChange}
          className="form-control"
        />
      </td>
      <td>
        {props.title2}
        <Redstar />
      </td>
      <td>
        <textarea
          type="text"
          name={input2Name}
          value={formData[input2Name] || ''}
          onChange={handleInputChange}
          className="form-control"
        />
      </td>
    </tr>
  )
}

const SingleInputPro = (props) => {

  const { title, input1Name, setFormData, formData } = props

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }
  return (
    <tr>
      <td>{props.title}</td>
      <td>
        <textarea
          type="text"
          name={input1Name}
          value={formData[input1Name] || ''}
          onChange={handleInputChange}
          className="form-control"
        />
      </td>
    </tr>
  )
}
export default Operationradionbutton
export {
  Dropdownform3part2,
  Inputform3part2,
  TimeComp,
  ButtonBackandSave,
  ButtonFinal,
  Dropdownforms,
  DropdownformsYesNo,
  Fileinput,
  Informationform3part2,
  Redstar,
  BodyEvidence,
  Ageinput,
  AgeinputRukka,
  Radioform3female,
  PerSpeculume,
  Dropdownforms3,
  Dropdownform4,
  Informationform6,
  Form6AInternalExamination,
  HomeButton,
  ExaminationExternalInjuries,
  Sandesandess,
  InternalExaminationDetail,
  SingleInputPro,
  Ageinput1,
  Ageinput2, GOToHome
}
