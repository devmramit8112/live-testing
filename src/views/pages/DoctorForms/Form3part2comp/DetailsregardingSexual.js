import React, { useEffect, useState } from 'react'
import Form3detailspart2 from './Form3detailspart2'
import Penetration, { Sexualviolence } from './Penetration'
import { ButtonBackandSave, Redstar, TimeComp } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const DetailsregardingSexual = ({
  DetailsregardingSexualdetail,
  GeneralPhysExaminationdetail,
  TypePhysicalViolencedetail,
}) => {
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const token = localStorage.getItem('token')
  const enterby = localStorage.getItem('username')
  const trn = localStorage.getItem('trn')

  const [formData, setFormData] = useState({
    genitaliabypenis: 'Y',
    genitalia_bodypart: '',
    genitalia_object: '',
    genitalia_Action: 'Y',
    anusbypenis: 'Y',
    anus_bodypart: '',
    anus_object: '',
    anus_Action: 'Y',
    mouthbypenis: 'Y',
    mouth_bodypart: '',
    mouth_object: '',
    mouth_Action: 'Y',
    oral_sex: 'Y',
    oral_sex_data: '',
    forced_masturbation: 'Y',
    forced_masturbation_data: '',
    masturbation_assailant: 'Y',
    masturbation_assailant_data: '',
    forced_manipulation: 'Y',
    forced_manipulation_data: '',
    exhibitionism: 'Y',
    exhibitionism_data: '',
    ejaculation: 'Y',
    ejaculation_data: '',
    kissing_sucking_part_body: 'Y',
    kissing_sucking_part_body_data: '',
    touching_fondling: 'Y',
    touching_fondling_data: '',
    condom_used: 'Y',
    condom_used_data: '',
    lubricant_used: 'Y',
    lubricant_used_data: '',
    whether_object: 'Y',
    whether_object_data: '',
    any_other_forms: 'Y',
    any_other_forms_data: '',
    change_clothes: 'Y',
    change_clothes_remark: '',
    change_Undergarments: 'Y',
    change_Undergarments_remark: '',
    cleane_washed_clothes: 'Y',
    cleane_washed_clothes_remark: '',
    clean_undergarments: 'Y',
    clean_undergarments_remark: '',
    bathed: 'Y',
    bathed_remark: '',
    douched: 'Y',
    douched_remarks: '',
    passed_urine: 'Y',
    passed_urine_remark: '',
    passed_stoois: 'Y',
    passed_stoois_remark: '',
    rinsing_of_mouth: 'Y',
    rinsing_of_mouthss: '',
    time_incident: '',
    discharge_since: '',
    discharge_prior: '',
    painful_urination: '',
    // creatdate: "",
    // changedate: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const apiGet1 = `${apiPrefix}/user/form3A/getsexualvilonace/${trn}`

  useEffect(() => {
    callApi(apiGet1)
      .then((response) => {
        setFormData(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])


  const apiGet = `${apiPrefix}/user/form3A/get_detailsregardingsexual_violence/${trn}`

  useEffect(() => {
    callApi(apiGet)
      .then((response) => {
        setFormData(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])

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
      const apipost = `${apiPrefix}/user/form3A/add_detailsregardingsexual_violence`
      const response = await axios.post(apipost, payload, {
        headers: headers,
      })
      if (response.status === 200) {
        GeneralPhysExaminationdetail(true)
        DetailsregardingSexualdetail(false)
      } else {
        console.error('At least one API request failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }
  const handleF3_frstBackClick = () => {
    DetailsregardingSexualdetail(false)
    TypePhysicalViolencedetail(true)
  }

  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Details regarding Sexual Violence:</h4>
          <h5>
            Was penetration by penis, fingers or object or other body parts? Mention and describe
            body part/s and/or object/s used for penetration.
          </h5>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>Penetration</th>
                  <th></th>
                  <th></th>
                  <th>Emission of Semen</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Orifice of victim</th>
                  <th>By Penis</th>
                  <th>
                    By body part of self or assailant or third party (fingure, tongue or any other)
                  </th>
                  <th>By Object</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Genitalia (vagina and/or urethra)</td>
                  <td>
                    <select
                      class="form-select"
                      name="genitaliabypenis"
                      value={formData.genitaliabypenis}
                      onChange={handleChange}
                    >
                      <option value="Y">Yes</option>
                      <option value="N">No</option>
                      <option value="X">Don't Known</option>
                    </select>
                  </td>
                  <td>
                    <input
                      name="genitalia_bodypart"
                      value={formData.genitalia_bodypart}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      name="genitalia_object"
                      value={formData.genitalia_object}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <select
                      class="form-select"
                      name="genitalia_Action"
                      value={formData.genitalia_Action}
                      onChange={handleChange}
                    >
                      <option value="Y" selected>
                        Yes
                      </option>
                      <option value="N">No</option>
                      <option value="X">Don't Known</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Anus</td>
                  <td>
                    <select
                      class="form-select"
                      name="anusbypenis"
                      value={formData.anusbypenis}
                      onChange={handleChange}
                    >
                      <option value="Y" selected>
                        Yes
                      </option>
                      <option value="N" selected>
                        No
                      </option>
                      <option value="X">Don't Known</option>
                    </select>
                  </td>
                  <td>
                    <input
                      name="anus_bodypart"
                      value={formData.anus_bodypart}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      name="anus_object"
                      value={formData.anus_object}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <select
                      class="form-select"
                      name="anus_Action"
                      value={formData.anus_Action}
                      onChange={handleChange}
                    >
                      <option value="Y" selected>
                        Yes
                      </option>
                      <option value="N" selected>
                        No
                      </option>
                      <option value="X">Don't Known</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Mouth</td>
                  <td>
                    <select
                      class="form-select"
                      name="mouthbypenis"
                      value={formData.mouthbypenis}
                      onChange={handleChange}
                    >
                      <option value="Y" selected>
                        Yes
                      </option>
                      <option value="N" selected>
                        No
                      </option>
                      <option value="X">Don't Known</option>
                    </select>
                  </td>
                  <td>
                    <input
                      name="mouth_bodypart"
                      value={formData.mouth_bodypart}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      name="mouth_object"
                      value={formData.mouth_object}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <select
                      class="form-select"
                      name="mouth_Action"
                      value={formData.mouth_Action}
                      onChange={handleChange}
                    >
                      <option value="Y" selected>
                        Yes
                      </option>
                      <option value="N" selected>
                        No
                      </option>
                      <option value="X">Don't Known</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* // send compoent  */}
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Details regarding sexual violence </th>
                  <th></th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <Sexualviolence
                  title="Oral sex performed by assailant on survivor"
                  input1Name="oral_sex_data"
                  selectName="oral_sex"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Forced masturbation of self by survivor"
                  input1Name="forced_masturbation_data"
                  selectName="forced_masturbation"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Masturbation of assailant by survivor"
                  input1Name="masturbation_assailant_data"
                  selectName="masturbation_assailant"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Forced manipulation of genitals of assailant by survivor"
                  input1Name="forced_manipulation_data"
                  selectName="forced_manipulation"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Exhibitionism (perpetrator displaying genitals)"
                  input1Name="exhibitionism_data"
                  selectName="exhibitionism"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Did ejaculation occur outside body orifice (vagina/anus/urethra/mouth)? (if yes, describe where on the body)"
                  input1Name="ejaculation_data"
                  selectName="ejaculation"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Kissing, licking or sucking any part of survivor's body (if yes, describe)"
                  input1Name="kissing_sucking_part_body_data"
                  selectName="kissing_sucking_part_body"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Touching/fondling (if yes, describe)"
                  input1Name="touching_fondling_data"
                  selectName="touching_fondling"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Condom used* (if yes, status of condom)"
                  input1Name="condom_used_data"
                  selectName="condom_used"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Lubricant used (if yes, describe kind of lubricant used)"
                  input1Name="lubricant_used_data"
                  selectName="lubricant_used"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Whether object was used (if yes, describe)"
                  input1Name="whether_object_data"
                  selectName="whether_object"
                  formData={formData}
                  setFormData={setFormData}
                />

                <Sexualviolence
                  title="Any other forms of sexual violence (elaborate)"
                  input1Name="any_other_forms_data"
                  selectName="any_other_forms"
                  formData={formData}
                  setFormData={setFormData}
                />
                <p style={{ color: 'red' }}>
                  * Whether explained to the survivor regarding condom and lubricant Yes/No
                </p>
              </tbody>
            </table>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Post incident has the survivor </th>
                  <th></th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <Sexualviolence
                  title="Changed clothes"
                  input1Name="change_clothes_remark"
                  selectName="change_clothes"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Changed undergarments"
                  input1Name="change_Undergarments_remark"
                  selectName="change_Undergarments"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Cleaned/washed clothes"
                  input1Name="cleane_washed_clothes_remark"
                  selectName="cleane_washed_clothes"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Cleaned/washed undergarments"
                  input1Name="clean_undergarments_remark"
                  selectName="clean_undergarments"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Bathed"
                  input1Name="bathed_remark"
                  selectName="bathed"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Douched"
                  input1Name="douched_remarks"
                  selectName="douched"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Passed urine"
                  input1Name="passed_urine_remark"
                  selectName="passed_urine"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Passed stools"
                  input1Name="passed_stoois_remark"
                  selectName="passed_stoois"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Sexualviolence
                  title="Rinsed mouth/brushed/vomited"
                  input1Name="rinsing_of_mouthss"
                  selectName="rinsing_of_mouth"
                  formData={formData}
                  setFormData={setFormData}
                />
              </tbody>
            </table>
            <div className="row mb-3">
              <div className="col-3">Time since incident</div>
              <div className='col-3'>
                <input
                  type="time"
                  name="time_incident"
                  value={formData.time_incident}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                H/o vaginal/anal/oral bleeding/discharge prior to the incident of sexual violence
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <input
                  name="discharge_since"
                  value={formData.discharge_since}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                H/o vaginal/anal/oral bleeding/discharge since the incident of sexual violence
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <input
                  name="discharge_prior"
                  value={formData.discharge_prior}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                H/o painful urination/painful defecation/fissures/abdominal pain/pain in geintals or
                any other part since the incident of sexual violence
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <input
                  name="painful_urination"
                  value={formData.painful_urination}
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

export default DetailsregardingSexual
