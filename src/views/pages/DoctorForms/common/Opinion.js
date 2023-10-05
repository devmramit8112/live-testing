import React from 'react'
import { Redstar } from './Operationradionbutton'

const Opinion = ({ formData, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    onChange({ ...formData, [name]: value })
  }

  return (
    <div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          Cause And Manner of Death
          <Redstar />
          (Max. 255 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <textarea
            name="pmopicausemannerdeath"
            value={formData.pmopicausemannerdeath}
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-lg-3 col-xl-3">
          Live birth / Still birth / Dead birth
          <Redstar />
          (Max. 255 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <textarea
            name="pmopilivestilldeadbirth"
            value={formData.pmopilivestilldeadbirth}
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          Age ,Sex & viability
          <Redstar />
          (Max. 255 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <textarea
            name="pmopiagesexviability"
            value={formData.pmopiagesexviability}
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-lg-3 col-xl-3">
          Probable time since death
          <Redstar />
          (Max. 255 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <textarea
            name="pmopitimesincedeath"
            value={formData.pmopitimesincedeath}
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          Probable duration between injury & death
          <Redstar />
          (Max. 255 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <textarea
            name="pmopibetweeninjuryanddeath"
            value={formData.pmopibetweeninjuryanddeath}
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
      </div>
    </div>
  )
}

export default Opinion
