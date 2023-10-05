import React from 'react'
import Header from '../common/Header'
import SymptomsObserved from '../common/SymptomsObserved'
import DetailsView from '../common/DetailsView'
import { useNavigate } from 'react-router-dom'
import GeneralDescriptionVIForm from './GeneralDescriptionVIForm'

const GeneralDescriptionVI = () => {
  const Navigate = useNavigate()

  return (
    <div className="card">
      <Header title="Form VI: Post Mortem Examination Report" />

      <div className="card-body">
        <DetailsView />
        <GeneralDescriptionVIForm />
        <div className="row mb-3">
          <div className="w-100 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-danger mx-3"
              onClick={() => Navigate('/form-vi-symptoms-observed')}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => Navigate('/form-vi-external-general-apperance')}
            >
              Save and Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralDescriptionVI
