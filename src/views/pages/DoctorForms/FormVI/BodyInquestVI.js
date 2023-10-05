import React from 'react'
import BodyInquestPaperRD from '../common/BodyInquestPaperRD'
import { useNavigate } from 'react-router-dom'

const BodyInquestVI = () => {
  const Navigate = useNavigate()

  return (
    <div>
      <BodyInquestPaperRD title="Body/Inquest Paper Receipt Detail" />
      <div className="row mb-3">
        <div className="w-100 d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => Navigate('/form-vi-identification-marks')}
          >
            Save and Proceed
          </button>
        </div>
      </div>
    </div>
  )
}

export default BodyInquestVI
