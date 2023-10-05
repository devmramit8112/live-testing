import React from 'react'

import { useNavigate } from 'react-router-dom'
import { ButtonBackandSave, Redstar } from '../common/Operationradionbutton'
import Formdetail from '../common/Formdetails'

const PostMortemChanges = () => {
  const Navigate = useNavigate()

  return (
    <div className="Container">
      <Formdetail title="Form VI: Post Mortem Examination Report " />
      <div className="card">
        <div className="text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Post-Mortem Changes -As Seen at Autopsy</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Post - mortem Changes : As Seen at Autopsy Whether rigor morties present
              <Redstar />
              (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Post - mortem staining
              <Redstar />
              (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Any Other
              <Redstar />
              (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
          </div>
          <ButtonBackandSave
            backButton={() => Navigate('/general-description')}
            savebutton={() => Navigate('/examination-external-injuries')}
          />
        </div>
      </div>
    </div>
  )
}

export default PostMortemChanges
