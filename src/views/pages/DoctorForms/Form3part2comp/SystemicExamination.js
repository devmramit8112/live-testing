import React, { useEffect } from 'react'
import Form3detailspart2 from './Form3detailspart2'
import { ButtonBackandSave, Dropdownforms, Redstar } from '../common/Operationradionbutton'
import { useState } from 'react'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const SystemicExamination = ({
  SamplecollectionCentraldetail,
  SystemicExaminationdetail,
  PhysicaOrganishmale2detail,
  trn,
}) => {
  const apiPrefix = process.env.REACT_APP_API_PREFIX // Replace with your API prefix
  const token = localStorage.getItem('token') // Make sure 'token' is stored in localStorage
  const enterby = localStorage.getItem('username') // Make sure 'username' is stored in localStorage

  const [formData, setFormData] = useState({
    transactionid: trn,
    center_nervous_system: '',
    cardio_vascular_system: '',
    respiratory_system: '',
    chest: '',
    abdomen: '',
    blood_for_HIV: 'N',
    blood_for_VRDL: 'N',
    blood_for_HbsAg: 'N',
    urine_pregnancy: 'N',
    ultrasound: '',
    x_ray_injury: '',
    creatdate: '',
    createuser: enterby,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleF3_frstClick = async () => {
    SamplecollectionCentraldetail(true)
    SystemicExaminationdetail(false)

    try {
      const payload = { ...formData }
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
      const apipost1 = `${apiPrefix}/user/form3A/save_systemic_examination`
      const response1 = await axios.post(apipost1, payload, {
        headers: headers,
      })

      if (response1.status === 200) {
        // Handle success if needed
      } else {
        console.error('At least one API request failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleF3_frstBackClick = () => {
    SystemicExaminationdetail(false)
    PhysicaOrganishmale2detail(true)
  }

  // API endpoint to get data
  const apigetData = `${apiPrefix}/user/form3A/get_systemic_examination/${trn}`
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
          <h4>Systemic Examination </h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                Central Nervous System <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <textarea
                  name="center_narvous_system"
                  value={formData.center_narvous_system}
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                />
              </div>
              <div className="col-lg-3 col-xl-3">
                Cardio Vascular System
                <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <textarea
                  name="cardio_vascular_system"
                  value={formData.cardio_vascular_system}
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                Respiratory System
                <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <textarea
                  name="respiratory_system"
                  value={formData.respiratory_system}
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                />
              </div>
              <div className="col-lg-3 col-xl-3">
                Chest
                <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <textarea
                  name="chest"
                  value={formData.chest}
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                Abdomen <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <textarea
                  name="abdomen"
                  value={formData.abdomen}
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                />
              </div>
            </div>
            <h6>Sample collection/investigations for hospital laboratory/Clinical laboratory</h6>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">Blood for HIV</div>
              <div className="col-lg-3 col-xl-3">
                <select
                  className="form-select"
                  name="blood_for_HIV"
                  value={formData.blood_for_HIV}
                  onChange={handleChange}
                >
                  <option value="Y">Yes</option>
                  <option value="N" selected>
                    No
                  </option>
                </select>
              </div>
              <div className="col-lg-3 col-xl-3">Blood for VDRL</div>
              <div className="col-lg-3 col-xl-3">
                <select
                  className="form-select"
                  name="blood_for_VRDL"
                  value={formData.blood_for_VRDL}
                  onChange={handleChange}
                >
                  <option value="Y">Yes</option>
                  <option value="N" selected>
                    No
                  </option>
                </select>{' '}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">Blood for HbsAg</div>
              <div className="col-lg-3 col-xl-3">
                <select
                  className="form-select"
                  name="blood_for_HbsAg"
                  value={formData.blood_for_HbsAg}
                  onChange={handleChange}
                >
                  <option value="Y">Yes</option>
                  <option value="N" selected>
                    No
                  </option>
                </select>{' '}
              </div>
              <div className="col-lg-3 col-xl-3">Urine test for pregnancy</div>
              <div className="col-lg-3 col-xl-3">
                <select
                  className="form-select"
                  name="urine_pregnancy"
                  value={formData.urine_pregnancy}
                  onChange={handleChange}
                >
                  <option value="Y">Yes</option>
                  <option value="N" selected>
                    No
                  </option>
                </select>{' '}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                Ultrasound for pregnancy/internal injury (if required)
              </div>
              <div className="col-lg-3 col-xl-3">
                <textarea
                  name="ultrasound"
                  value={formData.ultrasound}
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                />
              </div>
              <div className="col-lg-3 col-xl-3">X-ray for injury (if required)</div>
              <div className="col-lg-3 col-xl-3">
                <textarea
                  name="x_ray_injury"
                  value={formData.x_ray_injury}
                  onChange={handleChange}
                  type="text"
                  class="form-control"
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

export default SystemicExamination
