import React, { useState, useEffect } from 'react'
import { Redstar, TimeComp } from './common/Operationradionbutton'

const CaseDetail6A = (props) => {
  const {
    title,
    input1Name,
    input2Name,
    input3Name,
    selectName1,
    selectName2,
    setFormData,
    formData,
  } = props

  const handleInputChange = (event) => {
    const { name, value } = event.target

    // Update the parent's formData state with the new value
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <div className="Container">
      <div className="">
        <div className="text-center p-3 mb-3">{/* <h4>{props.title3}</h4> */}</div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                {title} <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  type="date"
                  name={input1Name}
                  value={formData[input1Name] || ''}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  type="time"
                  name={selectName1}
                  value={formData[selectName1] || ''}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                {props.title1} <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  type="date"
                  name={input2Name}
                  value={formData[input2Name] || ''}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  type="time"
                  name={selectName2}
                  value={formData[selectName2] || ''}
                  onChange={handleInputChange}
                  className="form-control"
                />{' '}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                {props.title2}
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  type="text"
                  name={input3Name}
                  value={formData[input3Name] || ''}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseDetail6A
