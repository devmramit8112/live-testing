import React from 'react'
import BodyInquestPaperRD from '../common/BodyInquestPaperRD'
import IdentificationMarkscomp from '../common/IdentificationMarkscomp'
import Header from '../common/Header'
import DetailsView from '../common/DetailsView'
import { useNavigate } from 'react-router-dom'

const IdentificationMarksVI = () => {
  const Navigate = useNavigate()

  return (
    <div className="Container">
      <Formdetail title="Form VI: Post Mortem Examination Report " />
      <div className="card">
        <div className="card-body">
          <IdentificationMarkscomp />
          <div className="row mb-3">
            <div className="w-100 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-danger mx-3"
                onClick={() => Navigate('/form-vi-post-mortem-examination')}
              >
                Back
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => Navigate('/form-vi-symptoms-observed')}
              >
                Save and Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdentificationMarksVI
