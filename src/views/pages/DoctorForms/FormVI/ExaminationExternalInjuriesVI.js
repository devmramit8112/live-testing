import React from 'react'
import Header from '../common/Header'
import DetailsView from '../common/DetailsView'
import { useNavigate } from 'react-router-dom'
import ExamExternalInjuriesTb from './ExamExternalInjuriesTb'

const ExaminationExternalInjuriesVI = () => {
  const Navigate = useNavigate()

  return (
    <div className="card">
      <Header title="Form VI: Post Mortem Examination Report" />

      <div className="card-body">
        <DetailsView />
        <ExamExternalInjuriesTb />
        <div className="row mb-3">
          <div className="w-100 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-danger mx-3"
              onClick={() => Navigate('/form-vi-external-general-apperance')}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => Navigate('/form-vi-internal-examination-detail')}
            >
              Save and Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExaminationExternalInjuriesVI
