import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MarksIdentificationTable from '../common/MarksIdentificationTable'
import HospitalRecordsSelect from './HospitalRecordsSelect'
const IdentificationMarksTb = (props) => {
  const [selectedoption, setSelectedOption] = useState('no')
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value)
  }
  return (
    <div>
      <div className="text-center p-3 mb-3">
        <h4>Identification Marks & Hospitals Detail</h4>
      </div>
      <div className="card-body">
        <p className="text-bold">
          5.In Case of Unidentified Bodies,any Marks of Identification Marks
        </p>
        <MarksIdentificationTable />
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
            <p className="text-bold">
              6.In case hospital death - (Particular as per Hospital Records)
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
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
          <div className="row mt-3">{selectedoption === 'Yes' && <HospitalRecordsSelect />}</div>
        </div>
      </div>
    </div>
  )
}
export default IdentificationMarksTb
