import React, { useState } from 'react'
import { Dropdownforms3 } from '../common/Operationradionbutton'

const DetailsRegardingPenetration = ({ title2, handleChange, handleData }) => {
  return (
    <>
      <Form3details handleChange={handleChange} handleData={handleData} />
      <Formdetail3
        title="(b) Was oral sex performed by assailant on the victim?"
        handleChange={handleChange}
        handleData={handleData}
      />
      <Formdetail3
        title="(c)Masturbation of the victim by assailant? "
        handleChange={handleChange}
        handleData={handleData}
      />
      <Formdetail3
        title="(d)Masturbation of assailant by the victim?   "
        handleChange={handleChange}
        handleData={handleData}
      />
      <Formdetail3input
        title="(e) Did ejaculation occur outside body orifice? "
        title1="If yes, describe location: "
        handleChange={handleChange}
        handleData={handleData}
      />
      <Formdetail3input
        title="(f) Kissing, Lickng or sucking of any parts of body?   "
        title1="If yes, describe location: "
        handleChange={handleChange}
        handleData={handleData}
      />
      <Formdetail3input
        title="(g) Is penetration was attempted by object:      "
        title1="If yes, describe Object: "
        handleChange={handleChange}
        handleData={handleData}
      />
      <p>{title2}</p>
      <Formdetail3 title="Bathe " handleChange={handleChange} handleData={handleData} />
      <Formdetail3 title="Wash " handleChange={handleChange} handleData={handleData} />
      <Formdetail3 title="Urinate " handleChange={handleChange} handleData={handleData} />
      <Formdetail3 title="Defecate " handleChange={handleChange} handleData={handleData} />
      <Formdetail3 title="Use spermicide " handleChange={handleChange} handleData={handleData} />
      <Formdetail3
        title="(i) Since the assault, has there been any anal discharge/bleeding?  "
        handleChange={handleChange}
        handleData={handleData}
      />
    </>
  )
}
const Form3details = ({ handleChange, handleData }) => {
  return (
    <>
      <div className="row ">
        <div className="col-lg-6 col-xl-6">
          23. Details regarding penetration (as narrated by the male victim/accused)
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-6 col-xl-6">
          a) Was penetration attempted by penis, fingers or other object?
        </div>
        <div className="col-lg-6 col-xl-6">
          <select
            className="form-select"
            name="cfeWasPenetration"
            value={handleData.cfeWasPenetration}
            aria-label="Default select example"
            onChange={handleChange}
          >
            <option selected>select </option>
            <option value="Y">Yes</option>
            <option value="N">No</option>
            <option value="D">Don't Know </option>
            <option value="R">Don't Remember</option>
            <option value="U">Don't Understand</option>
          </select>
        </div>
      </div>
      {/* {penetration && (
        <div className="row justify-content-center">
          <thead>
            <tr>
              <th></th>
              <th> Attemption penetration</th>
              <th></th>
              <th></th>
              <th>Completed penetration</th>
              <th></th>
              <th></th>
              <th>Emission of Semen</th>
            </tr>
          </thead>
          <tbody>
            {' '}
            <tr>
              <th>Orifice</th>
              <th>By Penis</th>
              <th>By Finger</th>
              <th>By Object</th>
              <th>By Penis</th>
              <th>By Finger</th>
              <th>By Object</th>
              <th> </th>
            </tr>
            <tr>
              <td>Anus</td>
              <td>
                <Dropdownforms3 />
              </td>
              <td>
                <Dropdownforms3 />
              </td>
              <td>
                <Dropdownforms3 />
              </td>
              <td>
                <Dropdownforms3 />
              </td>
              <td>
                <Dropdownforms3 />
              </td>
              <td>
                <Dropdownforms3 />
              </td>
              <td>
                <Dropdownforms3 />
              </td>
            </tr>
            <tr>
              <td>Mouth</td>
              <td>
                <Dropdownforms3 />
              </td>
              <td>
                <Dropdownforms3 />
              </td>
              <td>
                <Dropdownforms3 />
              </td>
              <td>
                <Dropdownforms3 />
              </td>
              <td>
                <Dropdownforms3 />
              </td>
              <td>
                <Dropdownforms3 />
              </td>
              <td>
                <Dropdownforms3 />
              </td>
            </tr>
          </tbody>
        </div>
      )} */}
    </>
  )
}
const Formdetail3 = ({ title }) => {
  return (
    <>
      <div className="row mb-3">
        <div className="col-lg-6 col-xl-6">{title}</div>
        <div className="col-lg-6 col-xl-6">
          <select class="form-select" aria-label="Default select example">
            <option selected>select </option>
            <option value="">Yes</option>
            <option value="">No</option>
            <option value="">Don't Know </option>
            <option value="">Don't Remember</option>
            <option value="">Don't Understand</option>
          </select>
        </div>
      </div>
    </>
  )
}
const Formdetail3input = ({ title, title1 }) => {
  const [detailinput, setdetailinput] = useState(false)

  const handleClick = (e) => {
    if (e.target.value === 'Y') {
      setdetailinput(true)
    } else {
      setdetailinput(false)
    }
  }
  return (
    <>
      <div className="row mb-3">
        <div className="col-lg-6 col-xl-6">{title}</div>
        <div className="col-lg-6 col-xl-6">
          <select class="form-select" aria-label="Default select example" onChange={handleClick}>
            <option selected>select </option>
            <option value="Y">Yes</option>
            <option value="N">No</option>
            <option value="D">Don't Know </option>
            <option value="R">Don't Remember</option>
            <option value="U">Don't Understand</option>
          </select>
        </div>
      </div>

      {detailinput && (
        <div className="row  mb-2">
          <div className="col-lg-6 col-xl-6">{title1}</div>
          <div className="col-lg-6 col-xl-6">
            <input type="text" className="form-control" />
          </div>
        </div>
      )}
    </>
  )
}

export default Form3details
export { Formdetail3, Formdetail3input, DetailsRegardingPenetration }
