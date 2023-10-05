import React from 'react'
import Form4Header from '../form4comp/Form4Header'
import DetailsView from '../form4comp/DetailsView'
import { useNavigate } from 'react-router-dom'

const ExaminationExternalInjuries = () => {
  const Navigate = useNavigate()

  return (
    <div className="card">
      <Form4Header title="Form VI: Post Mortem Examination Report (FOETUS)" />
      <DetailsView />
      <div className="text-center p-3 mb-3 bg-secondary-subtle">
        <h4>Examination of External Injuries</h4>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            Examination of External Injuries (Including Ligature Mark, if any.)
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
            (Max. 8000 Characters)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="w-100 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-danger mx-3"
              onClick={() => Navigate('/post-mortem-changes')}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => Navigate('/internal-examination-detail')}
            >
              Save and Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExaminationExternalInjuries
