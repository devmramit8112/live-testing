import React, { useState } from 'react'

const GeneralPhysicalExamination = () => {
  const [arrivalDate, setArrivalDate] = useState('')
  const [arrivalTime, setArrivalTime] = useState('')
  const [measurementValue, setMeasurementValue] = useState('')
  const [measurementUnit, setMeasurementUnit] = useState('cm') // Default to centimeters

  const handleArrivalDateChange = (event) => {
    setArrivalDate(event.target.value)
  }

  const handleArrivalTimeChange = (event) => {
    setArrivalTime(event.target.value)
  }

  const handleMeasurementValueChange = (event) => {
    setMeasurementValue(event.target.value)
  }

  const handleUnitChange = (event) => {
    setMeasurementUnit(event.target.value)
  }

  return (
    <div>
      <div className="text-center p-3 mb-3">
        <h4>General Physical Examination</h4>
      </div>
      <div className="card-body">
        {/* Height and Weight */}
        <div className="row mb-3">
          {/* Height */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            (1) Height(Only Numeric)<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Height"
              value={measurementValue}
              onChange={handleMeasurementValueChange}
            />
            {/* Measurement Units */}
            <label className="mx-4">
              <input
                type="radio"
                value="cm"
                checked={measurementUnit === 'cm'}
                onChange={handleUnitChange}
              />
              In Inches
            </label>
            <label>
              <input
                type="radio"
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
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input
              name="weight"
              type="text"
              className="form-control"
              value={measurementValue}
              onChange={handleMeasurementValueChange}
            />
          </div>
        </div>
        {/* Abdominal Circumference and Pulse */}
        <div className="row mb-3">
          {/* Abdominal Circumference */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            (3) Abdominal Circumference (cms)* (Max. 3 Digit)
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input
              name="abdominal_circumference"
              type="text"
              className="form-control"
              value={arrivalDate}
              onChange={handleArrivalDateChange}
            />
          </div>
          {/* Pulse */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            (4) Pulse(Max. 3 Digit)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input
              name="pulse"
              type="text"
              className="form-control"
              value={arrivalTime}
              onChange={handleArrivalTimeChange}
            />
          </div>
        </div>
        {/* Blood Pressure */}
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            (5) BP (Max. 3 Digit / 3 Digit)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input
              name="blood_pressure"
              type="text"
              className="form-control"
              value={arrivalTime}
              onChange={handleArrivalTimeChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralPhysicalExamination
