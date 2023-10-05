import React, { useState } from 'react'

const Handedcomp = () => {
  const [inputEnabledInquest, setInputEnabledPolice] = useState(false)
  const [inputValueInquest, setInputValuePolice] = useState('')

  const [isPMChecked, setIsPMChecked] = useState(false)
  const [inputValuePM, setInputValuePM] = useState('')

  const [inputEnabledChemical, setInputEnabledChemical] = useState(false)
  const [inputValueChemical, setInputValueChemical] = useState('')

  const handleChemicalCheckboxChange = () => {
    setInputEnabledChemical(!inputEnabledChemical)
    setInputValueChemical('')
  }
  const handleInputChangeChemical = (event) => {
    setInputValueChemical(event.target.value)
  }

  const handleInquestCheckboxChange = () => {
    setInputEnabledPolice(!inputEnabledInquest)
    setInputValueChemical('')
  }

  const handleInputChangeInquest = (event) => {
    setInputValuePolice(event.target.value)
  }

  const handleInputChangePM = (event) => {
    setInputValuePM(event.target.value)
  }
  const handlePMCheckboxChange = () => {
    setIsPMChecked(!isPMChecked)
    setInputValuePM('')
  }
  return (
    <div className="card card-body">
      <div className="row mb-3">
        <div className="col-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckChecked1"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="flexCheckChecked1">
              A Copy of the Post Mortem Report{' '}
            </label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={isPMChecked}
              onChange={handlePMCheckboxChange}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked1">
              Forwarding Letter{' '}
            </label>
          </div>
        </div>
        <div className=" col-lg-3 col-xl-3">
          <input
            name="patient_name"
            type="text"
            className="form-control"
            value={inputValuePM}
            onChange={handleInputChangePM}
            disabled={!isPMChecked}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={inputEnabledInquest}
              onChange={handleInquestCheckboxChange}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked1">
              Inquest Paper(s) Numbering 1 to
            </label>
          </div>
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="police_inquest_text"
            type="text"
            className="form-control"
            value={inputValueInquest}
            onChange={handleInputChangeInquest}
            disabled={!inputEnabledInquest}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckChecked1"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="flexCheckChecked1">
              A sample of Seal{' '}
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Handedcomp
