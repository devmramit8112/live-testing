import React from 'react'
import BodyInquestPaperRD from '../common/BodyInquestPaperRD'
import IdentificationMarkscomp from '../common/IdentificationMarkscomp'
import Header from '../common/Header'
import DetailsView from '../common/DetailsView'
import { useNavigate } from 'react-router-dom'

const IdentificationMarksVIA = () => {
  const Navigate = useNavigate()

  return (
    <div className="card">
      <Header title="Form VI: Post Mortem Examination Report (FOETUS)" />

      <div className="card-body">
        <DetailsView />
        <IdentificationMarkscomp />
        <div className="row mb-3">
          <div className="w-100 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-danger mx-3"
              onClick={() => Navigate('/form-vi-a-post-mortem-examination')}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => Navigate('/form-vi-a-symptoms-observed')}
            >
              Save and Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdentificationMarksVIA
