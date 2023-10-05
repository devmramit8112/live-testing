import React, { useEffect } from 'react'
import Form3detailspart2 from './Form3detailspart2'
import { ButtonBackandSave, Informationform3part2 } from '../common/Operationradionbutton'
import { useState } from 'react'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const Localexaminatiogenital = ({
  PhysicalInjuriesorganishmdetail,
  Localexaminatiogenitaldetail,
  Generalmaledetail,
  trn,
}) => {
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const token = localStorage.getItem('token')
  const enterby = localStorage.getItem('username')
  // const trn = localStorage.getItem('trn')

  const [formData, setFormData] = useState({
    transactionid: trn,
    urethral_meatus: '',
    labia_majora: '',
    labia_minora: '',
    fourchette: '',
    hymen: '',
    external_urethral: '',
    panis: '',
    scrotum: '',
    testes: '',
    clitoropenis: '',
    libioscrotum: '',
    perineum: '',
    any_other: '',
    ps_finding: '',
    pv_findings: '',
    record_PS_PV_examination: '',
    anus_rectum: 'Select',
    oral_cavity: 'Select',
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
      const apipost1 = `${apiPrefix}/user/form3A/save_localexamination`
      const response1 = await axios.post(apipost1, payload, {
        headers: headers,
      })

      if (response1.status === 200) {
        PhysicalInjuriesorganishmdetail(true)
        Localexaminatiogenitaldetail(false)

      } else {
        console.error('At least one API request failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }
  const handleF3_frstBackClick = () => {
    Localexaminatiogenitaldetail(false)
    Generalmaledetail(true)
  }

  // get all data
  const apigetData = `${apiPrefix}/user/form3A/get_localexamination/${trn}`

  // get all data
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
          <h4>Local examination of genital parts/other orifices:</h4>
          <h5>External Genitalia: Record findings and state NA where not applicable</h5>
        </div>
        <div className="çard-body mb-3">
          <table class="table table table-borderless ">
            <thead>
              <tr>
                <th>Body parts to be examined</th>
                <th>Findings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Urethral meatus & vestibule</td>
                <td>
                  <>
                    <input
                      className="form-control"
                      name="urethral_meatus"
                      value={formData.urethral_meatus}
                      onChange={handleChange}
                    />
                  </>
                </td>
              </tr>
              <tr>
                <td>Labia majora </td>
                <td>
                  <input
                    className="form-control"
                    name="labia_majora"
                    value={formData.labia_majora}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Labia minora </td>
                <td>
                  <input
                    className="form-control"
                    name="labia_minora"
                    value={formData.labia_minora}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Fourchette & Introitus</td>
                <td>
                  <input
                    className="form-control"
                    name="fourchette"
                    value={formData.fourchette}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Hymen (findings only if relevant for example: fresh tears, bleeding, edema etc. to
                  bedocumented){' '}
                </td>
                <td>
                  <input
                    className="form-control"
                    name="hymen"
                    value={formData.hymen}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>External urethral meatus </td>
                <td>
                  <input
                    className="form-control"
                    name="external_urethral"
                    value={formData.external_urethral}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Penis</td>
                <td>
                  <input
                    className="form-control"
                    name="panis"
                    value={formData.panis}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Scrotum</td>
                <td>
                  <input
                    className="form-control"
                    name="scrotum"
                    value={formData.scrotum}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Testes</td>
                <td>
                  <input
                    className="form-control"
                    name="testes"
                    value={formData.testes}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Clitoropenis</td>
                <td>
                  <input
                    className="form-control"
                    name="clitoropenis"
                    value={formData.clitoropenis}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Labioscrotum</td>
                <td>
                  <input
                    className="form-control"
                    name="libioscrotum"
                    value={formData.libioscrotum}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Perineum</td>
                <td>
                  <input
                    className="form-control"
                    name="perineum"
                    value={formData.perineum}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Any other </td>
                <td>
                  <input
                    className="form-control"
                    name="any_other"
                    value={formData.any_other}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="çard-body">
            <div className="row justify-content-center">
              <h5 className="text-center">
                Per Vaginum/Per Speculum examination (should not be done unless required for
                detection of injuries or for medical treatment)
              </h5>
              <div className="row mb-3">
                <div className="col-lg-3 col-xl-3">P/S findings (if performed)</div>
                <div className="col-lg-3 col-xl-3">
                  <textarea
                    className="form-control"
                    name="ps_finding"
                    value={formData.ps_finding}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-3 col-xl-3">P/V findings (if performed)</div>
                <div className="col-lg-3 col-xl-3">
                  <textarea
                    className="form-control"
                    name="pv_findings"
                    value={formData.pv_findings}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-3 col-xl-3">
                  Record reasons of performing P/S or P/V examination
                </div>
                <div className="col-lg-3 col-xl-3">
                  <textarea
                    className="form-control"
                    name="record_PS_PV_examination"
                    value={formData.record_PS_PV_examination}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-3 col-xl-3">Anus and Rectum</div>
                <div className="col-lg-3 col-xl-3">
                  <select
                    className="form-select"
                    onChange={handleChange}
                    name="anus_rectum"
                    value={formData.anus_rectum}
                  >
                    <option selected disabled value="Select">
                      Select
                    </option>
                    <option value="Bleeding">Bleeding</option>
                    <option value="Tear">Tear</option>
                    <option value="Discharge">Discharge</option>
                    <option value="Edema">Edema</option>
                    <option value="Tenderness">Tenderness</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-3 col-xl-3">Oral Cavity</div>
                <div className="col-lg-3 col-xl-3">
                  <select
                    className="form-select"
                    onChange={handleChange}
                    name="oral_cavity"
                    value={formData.oral_cavity}
                  >
                    <option selected disabled value="Select">
                      Select
                    </option>
                    <option value="Bleeding">Bleeding</option>
                    <option value="Tear">Tear</option>
                    <option value="Discharge">Discharge</option>
                    <option value="Edema">Edema</option>
                    <option value="Tenderness">Tenderness</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>
  )
}

export default Localexaminatiogenital
