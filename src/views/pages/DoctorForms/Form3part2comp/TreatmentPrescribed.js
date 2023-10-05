import React, { useEffect, useState } from 'react'
import { Sexualviolence, Treatment } from './Penetration'
import { ButtonBackandSave } from '../common/Operationradionbutton'
import InstructionForm from '../comp/InstructionForm'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { callApi } from 'src/views/CommonModels/CallApi'

const TreatmentPrescribed = ({ ProvisionalMedicaldetail, TreatmentPrescribeddetail }) => {
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const token = localStorage.getItem('token')
  const enterby = localStorage.getItem('username')
  const trn = localStorage.getItem('trn')
  const [formData, setFormData] = useState({

    sti_pre_treatment: 'N',
    emergency_contraception: 'N',
    wound_treatment: 'N',
    tetanus_prophylaxis: 'N',
    hapatitisB_vac: 'N',
    post_exposure: 'N',
    couneseling: 'N',
    other: 'N',
    sti_pre_treatment_comment: '',
    emergency_contraception_comment: '',
    wound_treatment_comment: '',
    tetanus_prophylaxis_comment: '',
    hapatitisB_vac_comment: '',
    post_exposure_comment: '',
    couneseling_comment: '',
    other_comment: '',

  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleF3_frstClick = async () => {
    try {
      const payload = {
        transactionid: trn,
        createuser: enterby,
        ...formData,
      }
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
      const apipost1 = `${apiPrefix}/user/form3A/save_provisonmedical_opinion2`
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
    TreatmentPrescribeddetail(false)
    ProvisionalMedicaldetail(true)
  }

  // API endpoint to get data
  const apigetData = `${apiPrefix}/user/form3A/get_provisonmedical_opinion2/${trn}`
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
          <h4>Treatment Prescribed </h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Treatment </th>
                  <th>Yes/No</th>
                  <th>Type and comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>STI prevention treatment</td>
                  <td>
                    <select
                      class="form-select"
                      name="sti_pre_treatment"
                      value={formData.sti_pre_treatment}
                      onChange={handleChange}
                    >
                      <option value="Y">Yes</option>
                      <option value="N">No</option>
                    </select>
                  </td>
                  <td>
                    <input
                      name="sti_pre_treatment_comment"
                      value={formData.sti_pre_treatment_comment}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Emergency contraception</td>
                  <td>
                    <select
                      class="form-select"
                      name="emergency_contraception"
                      value={formData.emergency_contraception}
                      onChange={handleChange}
                    >
                      <option value="Y">Yes</option>
                      <option value="N">No</option>
                    </select>
                  </td>
                  <td>
                    <input
                      name="emergency_contraception_comment"
                      value={formData.emergency_contraception_comment}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Wound treatment </td>
                  <td>
                    <select
                      class="form-select"
                      name="wound_treatment"
                      value={formData.wound_treatment}
                      onChange={handleChange}
                    >
                      <option value="Y">Yes</option>
                      <option value="N">No</option>
                    </select>
                  </td>
                  <td>
                    <input
                      name="wound_treatment_comment"
                      value={formData.wound_treatment_comment}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Tetanus prophylaxis</td>
                  <td>
                    <select
                      class="form-select"
                      name="tetanus_prophylaxis"
                      value={formData.tetanus_prophylaxis}
                      onChange={handleChange}
                    >
                      <option value="Y">Yes</option>
                      <option value="N">No</option>
                    </select>
                  </td>
                  <td>
                    <input
                      name="tetanus_prophylaxis_comment"
                      value={formData.tetanus_prophylaxis_comment}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Hepatitis B vaccination</td>
                  <td>
                    <select
                      class="form-select"
                      name="hapatitisB_vac"
                      value={formData.hapatitisB_vac}
                      onChange={handleChange}
                    >
                      <option value="Y">Yes</option>
                      <option value="N">No</option>
                    </select>
                  </td>
                  <td>
                    <input
                      name="hapatitisB_vac_comment"
                      value={formData.hapatitisB_vac_comment}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Post exposure prophylaxis for HIV</td>
                  <td>
                    <select
                      class="form-select"
                      name="post_exposure"
                      value={formData.post_exposure}
                      onChange={handleChange}
                    >
                      <option value="Y">Yes</option>
                      <option value="N">No</option>
                    </select>
                  </td>
                  <td>
                    <input
                      name="post_exposure_comment"
                      value={formData.post_exposure_comment}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Counselling</td>
                  <td>
                    <select
                      class="form-select"
                      name="couneseling"
                      value={formData.couneseling}
                      onChange={handleChange}
                    >
                      <option value="Y">Yes</option>
                      <option value="N">No</option>
                    </select>
                  </td>
                  <td>
                    <input
                      name="couneseling_comment"
                      value={formData.couneseling_comment}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Other</td>
                  <td>
                    <select
                      class="form-select"
                      name="other"
                      value={formData.other}
                      onChange={handleChange}
                    >
                      <option value="Y">Yes</option>
                      <option value="N">No</option>
                    </select>
                  </td>
                  <td>
                    <input
                      name="other_comment"
                      value={formData.other_comment}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        <div className="row mb-3 ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-3 "> </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-3 ">
            <input id=" " type="checkbox" name="chkVictimAdmitted" />
            Freeze Report
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
            <button type="submit" className="btn btn-primary" onClick={() => Navigate('/')}>
              Go To Home
            </button>
          </div>
        </div>
        <InstructionForm></InstructionForm>
      </div>
    </div>
  )
}

export default TreatmentPrescribed
