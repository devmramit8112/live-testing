import React, { useState } from 'react'
import { Redstar } from '../common/Operationradionbutton'

const GeneralPhysicalExamination = ({handleChange,handleData,errors}) => {
  const [measurementUnit, setMeasurementUnit] = useState('cm') 
  const handleUnitChange = (event) => {
    setMeasurementUnit(event.target.value)
  }

  return (
    <div>
      <div className="text-center p-3 mb-3 ">
        <h4>General Physical Examination</h4>
      </div>
      <div className="card-body">
        {/* Height and Weight */}
        <div className="row mb-3">
          {/* Height */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            (1) Height(Only Numeric)
            <Redstar />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input
              type="number"
              name='gpeHeight'
              className={`form-control ${errors.gpeHeight ? 'is-invalid' : ''}`}
              placeholder="Enter Height"
              value={handleData.gpeHeight}
              onChange={handleChange}
            />
            {errors.gpeHeight && <div className="invalid-feedback">{errors.gpeHeight}</div>}
            {/* Measurement Units */}
            <label className="mx-4">
              <input
                type="radio"
                name='gpeHeight'
                value="cm"
                checked={measurementUnit === 'cm'}
                onChange={handleUnitChange}
              />
              In Inches
            </label>
            <label>
              <input
                type="radio"
                name='gpeHeight'
                value="in"
                checked={measurementUnit === 'in'}
                onChange={handleUnitChange}
              />
              In Centimetre
            </label>
          </div>
          {/* Weight */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            (2) Weight (kgs)* (Only Numeric)
            <Redstar />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input
              name="gpeWeight"
              type="text"
              className={`form-control ${errors.gpeWeight ? 'is-invalid' : ''}`}
              value={handleData.gpeWeight}
              onChange={handleChange}
            />
            {errors.gpeWeight && <div className="invalid-feedback">{errors.gpeWeight}</div>}
          </div>
        </div>
        {/* Abdominal Circumference and Pulse */}
        <div className="row mb-3">
          {/* Abdominal Circumference */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            (3) Abdominal Circumference (cms)* (Max. 3 Digit)
            <Redstar />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input
              name="gpeAbdonomialCirecum"
              type="text"
              className={`form-control ${errors.gpeAbdonomialCirecum ? 'is-invalid' : ''}`}
              value={handleData.gpeAbdonomialCirecum}
              onChange={handleChange}
            />
            {errors.gpeAbdonomialCirecum && <div className="invalid-feedback">{errors.gpeAbdonomialCirecum}</div>}
          </div>
          {/* Pulse */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            (4) Pulse(Max. 3 Digit)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input
              name="gpePulse"
              type="text"
              className={`form-control ${errors.gpePulse ? 'is-invalid' : ''}`}
              value={handleData.gpePulse}
              onChange={handleChange}
            />
            {errors.gpePulse && <div className="invalid-feedback">{errors.gpePulse}</div>}
          </div>
        </div>
        {/* Blood Pressure */}
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            (5) BP (Max. 3 Digit / 3 Digit)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input
              name="gpeBP"
              type="text"
              className={`form-control ${errors.gpeBP ? 'is-invalid' : ''}`}
              value={handleData.gpeBP}
              onChange={handleChange}
            />
            {errors.gpeBP && <div className="invalid-feedback">{errors.gpeBP}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralPhysicalExamination
