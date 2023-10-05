import React, { useState } from 'react'
import { ButtonBackandSave, Redstar, TimeComp } from '../common/Operationradionbutton'
import axios from 'axios'
import { useEffect } from 'react'
import { callApi } from 'src/views/CommonModels/CallApi'
const ProvisionalMedical = ({
  ProvisionalMedicaldetail,
  SamplecollectionCentraldetail,
  TreatmentPrescribeddetail,
}) => {
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const token = localStorage.getItem('token')
  const enterby = localStorage.getItem('username')
  const trn = localStorage.getItem('trn')

  // for gender usestate 
  const [gender, setGender] = useState([])

  const [formData, setFormData] = useState({
    transactionid: trn,
    name: '',
    gender: '',
    dof_Sof: '',
    age: '',
    sexual_violence_Circumstances: '',
    bathed_douchod: '',
    finding_follows: '',
    sample_collected_fsl: '',
    sample_collected_Hospital: '',
    clinical_finding: '',
    additional_obs: '',
    creatdate: '',
    createuser: enterby,
    // changedate: '',
    // changeuser: '',
    day_hours_after_injury: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleF3_frstClick = async () => {
    TreatmentPrescribeddetail(true)
    ProvisionalMedicaldetail(false)
    try {
      const payload = {
        ...formData,
      }
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
      const apipost1 = `${apiPrefix}/user/form3A/save_provisonmedical_opinion`
      const response1 = await axios.post(apipost1, payload, {
        headers: headers,
      })

      if (response1.status === 200) {
      } else {
        console.error('At least one API request failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleF3_frstBackClick = () => {
    ProvisionalMedicaldetail(false)
    SamplecollectionCentraldetail(true)
  }

  // API endpoint to get data
  const apigetData = `${apiPrefix}/user/form3A/get_provisonmedical_opinion/${trn}`
  const apigander = `${apiPrefix}/alluser/all/getGenderActivelistforddl`

  useEffect(() => {
    callApi(apigetData)
      .then((response) => {
        setFormData(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
    callApi(apigander)
      .then((response) => {
        setGender(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Provisional Medical Opinion </h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">Name of survivor</div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-lg-3 col-xl-3">Gender</div>
              <div className="col-lg-3 col-xl-3">
                <select
                  className="form-select"
                  value={formData.gender}
                  aria-label="Default select example"
                  name="gender"
                  onChange={handleChange}
                >
                  <option selected >Select</option>
                  {gender.map((item, index) => (
                    <option key={index} value={item.genderid}>
                      {item.genderdesc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">D/o or S/o</div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="dof_Sof"
                  value={formData.dof_Sof}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-lg-3 col-xl-3">Aged</div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                Type of sexual violence and circumstances <Redstar />{' '}
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="sexual_violence_Circumstances"
                  value={formData.sexual_violence_Circumstances}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-lg-2 col-xl-2">
                Days/hours after the incident <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="day_hours_after_injury"
                  value={formData.day_hours_after_injury}
                  onChange={handleChange}
                  type="time"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                Bathed/douched etc <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <textarea
                  name="bathed_douchod"
                  value={formData.bathed_douchod}
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                ></textarea>
              </div>
              <div className="col-lg-3 col-xl-3">
                My findings are as follows
                <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <textarea
                  name="finding_follows"
                  value={formData.finding_follows}
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                ></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                Samples collected (for FSL), awaiting reports <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="sample_collected_fsl"
                  value={formData.sample_collected_fsl}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-lg-3 col-xl-3">
                Samples collected (for hospital laboratory) <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="sample_collected_Hospital"
                  value={formData.sample_collected_Hospital}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                Clinical findings
                <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="clinical_finding"
                  value={formData.clinical_finding}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-lg-3 col-xl-3">
                Additional observations (if any)
                <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="additional_obs"
                  value={formData.additional_obs}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>
  )
}

export default ProvisionalMedical
