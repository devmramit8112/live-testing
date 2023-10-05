import React, { useState } from 'react'
import {
  Dropdownform3part2,
  Dropdownforms,
  Dropdownforms3,
  Inputform3part2,
  Redstar,
} from '../common/Operationradionbutton'
import { Title } from 'chart.js'

const Penetration = ({ title }) => {
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>
          <Dropdownform3part2 />
        </td>
        <td>
          <Inputform3part2 />
        </td>
        <td>
          <Inputform3part2 />
        </td>
        <td>
          <Dropdownform3part2 />
        </td>
      </tr>
    </>
  )
}
const Sexualviolence = (props) => {
  // const [input1, setInput1] = useState('')
  // const [select1, setSelect1] = useState('')

  const { title, input1Name, selectName, formData, setFormData } = props


  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>
          <select
            class="form-select"
            name={selectName}
            value={formData[selectName] || ''}
            onChange={handleInputChange}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
            <option value="D">Don't Known</option>
          </select>
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
    </>
  )
}
const Treatment = ({ title }) => {
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>
          <Dropdownforms />
        </td>
        <td>
          <Inputform3part2 />
        </td>
      </tr>
    </>
  )
}
const SampleCollection = ({ title, title1, title2, name, handleChange, value }) => {
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>
          {title1}
          <Redstar />
        </td>
        <td>{title2}</td>
        <td>
          {' '}
          <textarea
            name={name}
            type="text"
            class="form-control"
            value={value}
            onChange={handleChange}
          ></textarea>
        </td>
      </tr>
    </>
  )
}

export default Penetration
export { Sexualviolence, Treatment, SampleCollection }
