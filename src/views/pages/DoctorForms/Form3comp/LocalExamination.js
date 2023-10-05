import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Formdetail from '../Form2comp/Formdetails'
import Figureimageform from '../comp/Figureimageform'

const LocalExamination = () => {
  const Navigate = useNavigate()
  return (
    <div className="Container">
      <div className="card">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Form-III-Medical Legal Report- Victim/Accused of Sexual Harresment</h4>
          <h5 style={{ color: 'red' }}>[Note: Fields marked * are mandatory]</h5>
        </div>
        <Formdetail />
      </div>
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Local Examination of Genitalia: (For use in Male Survivors only)</h4>
        </div>
        <p>24. Local Examination of Genitalia: (For use in Male Survivors only)</p>
        <Figureimageform />
        <div className="row mb-3 ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-3 "></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => Navigate('/DetailsRegardingPenetration')}
            >
              Back
            </button>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => Navigate('/StatePenistesticle')}
            >
              Save and Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocalExamination
