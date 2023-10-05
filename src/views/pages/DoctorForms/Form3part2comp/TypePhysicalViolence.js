import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Form3detailspart2 from './Form3detailspart2'
import Operationradionbutton, { ButtonBackandSave, Redstar } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const TypePhysicalViolence = ({
  TypePhysicalViolencedetail,
  HistorySexualViolencedetail,
  DetailsregardingSexualdetail,
}) => {
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const token = localStorage.getItem('token')
  const enterby = localStorage.getItem('username')
  const trn = localStorage.getItem('trn')

  const [formData, setFormData] = useState({
    transactionid: trn,
    hand: '',
    hand_t: '',
    fist: '',
    fist_t: '',
    sharpObject: '',
    sharpObject_t: '',
    bluntObject: '',
    bluntObject_t: '',
    pinching: '',
    pinching_t: '',
    burned: '',
    burned_with: '',
    biting: '',
    biting_t: '',
    violent_shaking: '',
    violent_shaking_t: '',
    dragging: '',
    dragging_t: '',
    kicking: '',
    kicking_t: '',
    pulling_Hair: '',
    pulling_Hair_t: '',
    banging_head: '',
    banging_head_t: '',
    anyother1: '',
    anyother: '',
    creatdate: enterby,
    createuser: enterby,
  })

  const [formData1, setFormData1] = useState({
    transactionid: trn,
    emotional_abuse: '',
    restraints: '',
    use_Weapons: '',
    verbal_threats: '',
    luring: '',
    any_other: '',
    any_drug_alcohol: '',
    sleeping_unconscious: '',
    mark_injury: '',
    creatdate: enterby,
    createuser: enterby,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleChange1 = (e) => {
    const { name, value } = e.target
    setFormData1({ ...formData1, [name]: value })
  }

  const handleF3_frstBackClick = () => {
    TypePhysicalViolencedetail(false)
    HistorySexualViolencedetail(true)
  }

  // GET ALL DATA

  const apiGet1 = `${apiPrefix}/user/form3A/getphysicalvilonace/${trn}`
  const apiGet2 = `${apiPrefix}/user/form3A/getphysicalvilonace_c_section/${trn}`

  useEffect(() => {
    callApi(apiGet1)
      .then((response) => {
        setFormData({
          ...formData,
          ...response,
        })
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
    callApi(apiGet2)
      .then((response) => {
        setFormData1({
          ...formData1,
          ...response,
        })
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])
  // GET ALL DATA

  const handleF3_frstClick = async () => {
    try {
      const payload1 = {
        ...formData,
      }
      const payload2 = {
        ...formData1,
      }
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
      const apipost1 = `${apiPrefix}/user/form3A/savephysicalvilonace`
      const apipost2 = `${apiPrefix}/user/form3A/savephysicalvilonace_c_section`
      const response1 = await axios.post(apipost1, payload1, {
        headers: headers,
      })

      const response2 = await axios.post(apipost2, payload2, {
        headers: headers,
      })

      if (response1.status === 200 && response2.status === 200) {
        DetailsregardingSexualdetail(true)
        TypePhysicalViolencedetail(false)
        console.log('API response 1:', response1.data)
        console.log('API response 2:', response2.data)
      } else {
        console.error('At least one API request failed')
      }
    } catch (error) {
      // Handle other errors here
      console.error('Error:', error)
    }
  }
  return (
    <div className="Container">
      <div className="card">
        <div className="text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Handed Over to Police / Received by Police Official</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">Hand</div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                name="hand"
                value={formData.hand}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.hand === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="hand_t"
                    value={formData.hand_t}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
            <div className=" col-lg-3 col-xl-3">Fist</div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                name="fist"
                value={formData.fist}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.fist === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="fist_t"
                    value={formData.fist_t}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">Blunt object</div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                name="bluntObject"
                value={formData.bluntObject}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.bluntObject === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="bluntObject_t"
                    value={formData.bluntObject_t}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
            <div className=" col-lg-3 col-xl-3">Sharp object</div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                name="sharpObject"
                value={formData.sharpObject}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.sharpObject === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="sharpObject_t"
                    value={formData.sharpObject_t}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">Biting</div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                name="biting"
                value={formData.biting}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.biting === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="biting_t"
                    value={formData.biting_t}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
            <div className=" col-lg-3 col-xl-3">Pinching</div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                name="pinching"
                value={formData.pinching}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.pinching === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="pinching_t"
                    value={formData.pinching_t}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">Violent shaking</div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                name="violent_shaking"
                value={formData.violent_shaking}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.violent_shaking === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="violent_shaking_t"
                    value={formData.violent_shaking_t}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
            <div className=" col-lg-3 col-xl-3">Dragging</div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                name="dragging"
                value={formData.dragging}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.dragging === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="dragging_t"
                    value={formData.dragging_t}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">Kicking</div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                name="kicking"
                value={formData.kicking}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.kicking === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="kicking_t"
                    value={formData.kicking_t}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
            <div className=" col-lg-3 col-xl-3">Pulling hair</div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                name="pulling_Hair"
                value={formData.pulling_Hair}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.pulling_Hair === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="pulling_Hair_t"
                    value={formData.pulling_Hair_t}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">Kicking:Banging head</div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                name="banging_head"
                value={formData.banging_head}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.banging_head === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="banging_head_t"
                    value={formData.banging_head_t}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
            <div className=" col-lg-3 col-xl-3">Burned</div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                name="burned"
                value={formData.burned}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.burned === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="burned_with"
                    value={formData.burned_with}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">Any other</div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                name="anyother1"
                value={formData.anyother1}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.anyother1 === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="anyother"
                    value={formData.anyother}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>

            {/* Second api data  */}
            <div className=" col-lg-3 col-xl-3">
              Emotional abuse or violence (if any)(insulting, cursing, belitting, terrorizing)
            </div>
            <div className="col-lg-3 col-xl-3">
              <input
                type="text"
                name="emotional_abuse"
                value={formData1.emotional_abuse}
                onChange={handleChange1}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">Use of restraints (if any)</div>
            <div className="col-lg-3 col-xl-3">
              <input
                type="text"
                name="restraints"
                value={formData1.restraints}
                onChange={handleChange1}
                className="form-control"
              />
            </div>
            <div className=" col-lg-3 col-xl-3">
              Used or threatened the use of weapon(s) or object (if any)
            </div>
            <div className="col-lg-3 col-xl-3">
              <input
                type="text"
                name="use_Weapons"
                value={formData1.use_Weapons}
                onChange={handleChange1}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">
              <h6>Verbal threats (if any)</h6>
              (for example threats of killing or hurting survivor or any other person in whom the
              survivor is interested; use of photographs for blackmailing etc.)
            </div>
            <div className="col-lg-3 col-xl-3">
              <input
                type="text"
                name="verbal_threats"
                value={formData1.verbal_threats}
                onChange={handleChange1}
                className="form-control"
              />
            </div>
            <div className=" col-lg-3 col-xl-3">
              Used or threatened the use of weapon(s) or object (if any)
            </div>
            <div className="col-lg-3 col-xl-3">
              <input
                type="text"
                name="luring"
                value={formData1.luring}
                onChange={handleChange1}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">Any other</div>
            <div className="col-lg-3 col-xl-3">
              <input
                type="text"
                name="any_other"
                value={formData1.any_other}
                onChange={handleChange1}
                className="form-control"
              />
            </div>
            <div className=" col-lg-3 col-xl-3">Any H/o drug/alcohol intoxication*</div>
            <div className="col-lg-3 col-xl-3">
              <input
                type="text"
                name="any_drug_alcohol"
                value={formData1.any_drug_alcohol}
                onChange={handleChange1}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">
              Whether sleeping or unconscious at the time of the incident <Redstar />
            </div>
            <div className="col-lg-3 col-xl-3">
              <input
                type="text"
                name="sleeping_unconscious"
                value={formData1.sleeping_unconscious}
                onChange={handleChange1}
                className="form-control"
              />
            </div>
            <div className=" col-lg-3 col-xl-3">
              If survivor has left any marks of injury on assailant/s, enter details
              <Redstar />
            </div>
            <div className="col-lg-3 col-xl-3">
              <input
                type="text"
                name="mark_injury"
                value={formData1.mark_injury}
                onChange={handleChange1}
                className="form-control"
              />
            </div>
          </div>
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>
  )
}

export default TypePhysicalViolence
