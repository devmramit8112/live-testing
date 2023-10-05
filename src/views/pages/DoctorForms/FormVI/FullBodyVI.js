import React from 'react'
import Header from '../common/Header'
import DetailsView from '../common/DetailsView'
import { useNavigate } from 'react-router-dom'
import fullbody from '../common/img/MainPicture.jpg'

const FullBodyVI = () => {
  const Navigate = useNavigate()

  return (
    <div className="card">
      <Header title="Form VI: Post Mortem Examination Report" />

      <div className="card-body">
        <DetailsView />
        <div className="text-center p-3 mb-3">
          <h4>Full Body : Unknown</h4>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <img
              className="form-control"
              src={fullbody}
              width={150}
              height={500}
              style={{ border: 'none' }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="w-100 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-danger mx-3"
              onClick={() => Navigate('/form-vi-internal-injury-detail')}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => Navigate('/form-vi-head-surface')}
            >
              Save and Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullBodyVI
