import React from 'react'
import { ButtonBackandSave, Redstar } from '../common/Operationradionbutton'

const ExternalGeneralApperance = ({ formData, setFormData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target
    // Update the formData using the setFormData function
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className="Container">
      <div className="text-center p-3 mb-3 bg-secondary-subtle">
        <h4>External General Apperance</h4>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-6">Ligature Mark (Max. 4000 Characters)</div>

          <div className="col-6">
            <input
              name="gpmligaturemark"
              value={formData.gpmligaturemark}
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <h5>State of eyes:</h5>
          <div className="col-lg-3 col-xl-3">
            Pupil(Rt)
            <Redstar />
            (Max. 50 Characters){' '}
          </div>
          <div className="col-lg-3 col-xl-3">
            <input
              name="gpmstateofeyespupilsrt"
              value={formData.gpmstateofeyespupilsrt}
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-lg-3 col-xl-3">
            Pupil(Lt)
            <Redstar />
            (Max. 50 Characters)
          </div>
          <div className="col-lg-3 col-xl-3">
            <input
              name="gpmstateofeyespupilslt"
              value={formData.gpmstateofeyespupilslt}
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />{' '}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-3 col-xl-3">
            Cornea/Conjuctiva(Rt)
            <Redstar />
            (Max. 50 Characters)
          </div>
          <div className="col-lg-3 col-xl-3">
            <input
              name="gpmstateofeyescorneart"
              value={formData.gpmstateofeyescorneart}
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />{' '}
          </div>
          <div className="col-lg-3 col-xl-3">
            Cornea/Conjuctiva(Lt)
            <Redstar />
            (Max. 50 Characters){' '}
          </div>

          <div className="col-lg-3 col-xl-3">
            <input
              name="gpmstateofeyescornealt"
              value={formData.gpmstateofeyescornealt}
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />{' '}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-3 col-xl-3">
            Natural Orifices(Please note presence of blood, froth etc in
            mouth,nose,ears(specify(Rt,Lt),anus,vagina and urethra)*: (Max. 4000 Characters)
          </div>
          <div className="col-lg-3 col-xl-3">
            <input
              name="gpmnaturalorifices"
              value={formData.gpmnaturalorifices}
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-lg-3 col-xl-3">Any Other Finding (Max. 4000 Characters)</div>

          <div className="col-lg-3 col-xl-3">
            <input
              name="anyOtherInfo"
              value={formData.anyOtherInfo}
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExternalGeneralApperance
