import React from 'react'
import Form4Header from '../form4comp/Form4Header'
import DetailsView from '../form4comp/DetailsView'
import { useNavigate } from 'react-router-dom'

const Opinion = () => {
  const Navigate = useNavigate()

  return (
    <div className="card">
      <Form4Header title="Form VI: Post Mortem Examination Report (FOETUS)" />
      <DetailsView />
      <div className="text-center p-3 mb-3 bg-secondary-subtle">
        <h4>Opinion</h4>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Cause And Manner of Death<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
            (Max. 255 Characters)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Live birth / Still birth / Dead birth
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
            (Max. 255 Characters)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Age ,Sex & viability<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
            (Max. 255 Characters)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Probable time since death<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
            (Max. 255 Characters)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Probable duration between injury & death
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
            (Max. 255 Characters)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="w-100 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-danger mx-3"
              onClick={() => Navigate('/internal-examination-detail')}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => Navigate('/form-vi-handed-over-police')}
            >
              Save and Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opinion
