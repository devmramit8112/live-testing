import React, { useState } from 'react'
import Form3detailspart2 from './Form3detailspart2'
import {
  ButtonBackandSave,
  Dropdownforms,
  Fileinput,
  Redstar,
} from '../common/Operationradionbutton'
import axios from 'axios'
import { useEffect } from 'react'
import { callApi } from 'src/views/CommonModels/CallApi'

const GeneralPhysExamination = ({
  DetailsregardingSexualdetail,
  GeneralPhysExaminationdetail,
  Examinatiobodydetail,
  trn,
}) => {
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const token = localStorage.getItem('token')
  const enterby = localStorage.getItem('username')

  const [formData, setFormData] = useState({
    transactionid: trn,
    first_Examination: 'Select',
    pulse_per_minutes: '',
    bp: '',
    bp2: '',
    temp: '',
    resp_rate: '',
    pupils: '',
    observation: '',
    creatdate: '',
    createuser: enterby,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleF3_frstClick = async () => {

    try {
      const payload = {
        ...formData,
      }
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
      const apipost1 = `${apiPrefix}/user/form3A/save_genralphysical_exammination`
      const response1 = await axios.post(apipost1, payload, {
        headers: headers,
      })

      if (response1.status === 200) {
        Examinatiobodydetail(true)
        GeneralPhysExaminationdetail(false)
      } else {
        console.error('At least one API request failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleF3_frstBackClick = () => {
    GeneralPhysExaminationdetail(false)
    DetailsregardingSexualdetail(true)
  }

  // API endpoint to fetch data
  const apigetData = `${apiPrefix}/user/form3A/get_genralphysical_exammination/${trn}`
  useEffect(() => {
    callApi(apigetData)
      .then((response) => {
        setFormData(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])

  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>General Physical Examination</h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <div className="col-lg-5 col-xl-5">Is this the first examination</div>
              <div className="col-lg-5 col-xl-5">
                <select
                  class="form-select"
                  name="first_Examination"
                  value={formData.first_Examination}
                  onChange={handleChange}
                >
                  <option selected disabled value="Select">
                    Select
                  </option>
                  <option value="Y">Yes</option>
                  <option value="N">No</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-5 col-xl-5">
                Pulse
                <Redstar />
              </div>
              <div className="col-lg-5 col-xl-5">
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    id=""
                    name="pulse_per_minutes"
                    value={formData.pulse_per_minutes}
                    onChange={handleChange}
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">Per-mintues</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-5 col-xl-5">
                BP
                <Redstar />
              </div>
              <div className="col-lg-2 col-xl-2">
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    id=""
                    name="bp"
                    value={formData.bp}
                    onChange={handleChange}
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">/</span>
                  </div>
                </div>{' '}
              </div>
              <div className="col-lg-3 col-xl-3">
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    id=""
                    name="bp2"
                    value={formData.bp2}
                    onChange={handleChange}
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">mm of Hg</span>
                  </div>
                </div>{' '}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-5 col-xl-5">
                Temp
                <Redstar />
              </div>
              <div className="col-lg-5 col-xl-5">
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    id=""
                    name="temp"
                    value={formData.temp}
                    onChange={handleChange}
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">F</span>
                  </div>
                </div>{' '}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-5 col-xl-5">
                Respiratory rate
                <Redstar />
              </div>
              <div className="col-lg-5 col-xl-5">
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    id=""
                    name="resp_rate"
                    value={formData.resp_rate}
                    onChange={handleChange}
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">Per-mintues</span>
                  </div>
                </div>{' '}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-5 col-xl-5">
                Pupils <Redstar />
              </div>
              <div className="col-lg-5 col-xl-5">
                <input
                  type="text"
                  className="form-control"
                  name="pupils"
                  value={formData.pupils}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-5 col-xl-5">
                Any observation in terms of general physical wellbeing of the survivor <Redstar />
              </div>
              <div className="col-lg-5 col-xl-5">
                <input
                  name="observation"
                  value={formData.observation}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <ButtonBackandSave
              backButton={handleF3_frstBackClick}
              savebutton={handleF3_frstClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralPhysExamination
