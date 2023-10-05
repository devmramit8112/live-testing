import React from 'react'
import { Redstar } from './Operationradionbutton'
const PostMortemChanges = ({ formData, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Post - mortem Changes : As Seen at Autopsy Whether rigor morties present
          <Redstar />
          (Max. 4000 Characters)
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <textarea
            name="pmcrigorortiespresent"
            type="text"
            className="form-control"
            value={formData.pmcrigorortiespresent}
            onChange={handleChange}
          />{' '}
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Post - mortem staining
          <Redstar />
          (Max. 4000 Characters)
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <textarea
            name="pmcpostmortemstaining"
            type="text"
            className="form-control"
            value={formData.pmcpostmortemstaining}
            onChange={handleChange}
          />{' '}
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Any Other
          <Redstar />
          (Max. 4000 Characters)
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <textarea
            name="pmcanyother"
            type="text"
            className="form-control"
            value={formData.pmcanyother}
            onChange={handleChange}
          />{' '}
        </div>
      </div>
    </>
  )
}
export default PostMortemChanges
