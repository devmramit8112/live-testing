import React, { useState } from 'react'
import CaseDetails from '../common/CaseDetails'

const HospitalRecordsSelect = () => {
  const [selectedoption, setSelectedOption] = useState('no')

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <p className="text-bold">In case of hospital death</p>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <div className="d-flex align-items-center mt-3">
            <label className="mx-4">
              <input
                type="radio"
                value="Yes"
                checked={selectedoption === 'Yes'}
                onChange={handleRadioChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={selectedoption === 'No'}
                onChange={handleRadioChange}
              />
              No
            </label>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          CR No. (Max. 50 Characters)
          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input name="patient_name" type="text" className="form-control" />
        </div>
      </div>
      <div className="row mt-3">
        {selectedoption === 'Yes' && (
          <CaseDetails
            title="  Date  and Time of Arrival in Hospital"
            title1="Date and Time of Death"
            title2="Examination Place"
          />
        )}
      </div>
    </>
  )
}

export default HospitalRecordsSelect
