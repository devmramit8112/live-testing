import React from 'react'
import { useNavigate } from 'react-router-dom'
import CaseDetails from '../common/CaseDetails'

const BodyInquestPaperRD = ({ backButton1 }) => {
  const Navigate = useNavigate()

  return (
    <div className="card mb-2">
      <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
        <h4>Body/Inquest Paper Receipt Detail</h4>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <CaseDetails
            title=" Arrival  Date & Time"
            title1="Examination  Date & Time"
            title2="Examination Place"
          />

          <div className="row mb-3 ">
            <div className="w-100 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary" onClick={backButton1}>
                Save and Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyInquestPaperRD
