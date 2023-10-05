import React, { useState } from 'react'
import Form4Header from '../form4comp/Form4Header'
import DetailsView from '../form4comp/DetailsView'
import { useNavigate } from 'react-router-dom'
import PoliceAccompanied from '../../DoctorDashboard/comp/PoliceAccompanied'

const HandedOverPolice = () => {
  const Navigate = useNavigate()
  const [selectedoption, setSelectedOption] = useState('no')
  const [selectedoption1, setSelectedOption1] = useState('No1')

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value)
    setSelectedOption1(event.target.value)
  }

  return (
    <div className="card">
      <Form4Header title="Form VI: Post Mortem Examination Report (FOETUS)" />
      <DetailsView />
      <div className="text-center p-3 mb-3 bg-secondary-subtle">
        <h4>Handed Over to Police / Received by Police Official</h4>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-lg-6 col-xl-6">
            <p className="text-bold">
              Handed Over To Police Stitched dead body after post mortem examination
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
        </div>
        {selectedoption === 'Yes' && (
          <div className="row">
            <div className="col-12 d-flex justify-content-center mb-3">
              <textarea
                name="remarks"
                className="form-control mt-3"
                placeholder=""
                style={{ width: '100%', maxWidth: '300px' }}
              />
            </div>
          </div>
        )}
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Copy of Post Mortem Report No
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input name="patient_name" type="text" className="form-control" disabled />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Dated</div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input name="patient_name" type="date" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Police Inquest papers (in number duly initialed)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <input name="patient_name" type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-3 col-xl-3">
            <p className="text-bold"> Sample of-------(for DNA Analysis )</p>
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
            {selectedoption === 'Yes' && (
              <div className="row">
                <div className="col-6 d-flex justify-content-center mb-3">
                  <textarea
                    name="remarks"
                    className="form-control mt-3"
                    placeholder=""
                    style={{ width: '100%', maxWidth: '300px' }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-3 col-xl-3">
            <p className="text-bold">
              {' '}
              Viscera box for chemical / toxicological analysis with request letter
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <div className="d-flex align-items-center mt-3">
              <label className="mx-4">
                <input
                  type="radio"
                  value="Yes1"
                  checked={selectedoption1 === 'Yes1'}
                  onChange={handleRadioChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="No1"
                  checked={selectedoption1 === 'No1'}
                  onChange={handleRadioChange}
                />
                No
              </label>
            </div>
            {selectedoption === 'Yes1' && (
              <div className="row">
                <div className="col-6 d-flex justify-content-end  mb-3">
                  <textarea
                    name="remarks"
                    className="form-control mt-3"
                    placeholder=""
                    style={{ width: '100%', maxWidth: '300px' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-3 col-xl-3">
            <p className="text-bold"> Sample of-------(for DNA Analysis )</p>
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
            {selectedoption === 'Yes' && (
              <div className="row">
                <div className="col-6 d-flex justify-content-center mb-3">
                  <textarea
                    name="remarks"
                    className="form-control mt-3"
                    placeholder=""
                    style={{ width: '100%', maxWidth: '300px' }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Any Other (Max. 255 Characters){' '}
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <PoliceAccompanied title="Received by Police official" />
        </div>
        <div className="row mb-3">
          <div className="w-100 d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-danger mx-3"
              onClick={() => Navigate('/form-vi-opinio')}
            >
              Back
            </button>
            <button type="submit" className="btn btn-primary" onClick={() => Navigate('#')}>
              Save and Draft Print
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HandedOverPolice
