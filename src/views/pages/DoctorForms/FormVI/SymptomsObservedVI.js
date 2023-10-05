import React from 'react'
import { Redstar } from '../common/Operationradionbutton'
const SymptomsObservedVI = ({ formData, onChange }) => {

  const gender = localStorage.getItem('gender')

  const handleChange = (e) => {
    const { name, value } = e.target
    onChange({ ...formData, [name]: value })
  }
  return (
    <div className="Container">
      <div className="cardss">
        <div className="card-body">
          <div className="row mb-3">
            <p>Information Supplied by the Police and/or Hospital Record</p>
            <div className="col-lg-3 col-xl-3">
              As Information Provided by Police
              <Redstar />
              (Max. 4000 Characters)
            </div>
            <div className="col-lg-3 col-xl-3">
              <textarea
                name="smptbeforedeath"
                value={formData.smptbeforedeath}
                onChange={handleChange}
                type="text"
                className="form-control"
              />
            </div>

            <div className="col-lg-3 col-xl-3">As Per Hospital Record(Max. 4000 Characters)</div>
            <div className="col-lg-3 col-xl-3">
              <textarea
                name="smptbeforedeath_asperHsopitalrecord"
                value={formData.smptbeforedeath_asperHsopitalrecord}
                onChange={handleChange}
                type="text"
                className="form-control"
              />
            </div>
          </div>

          {/* female case compoent  */}
          {gender === '2' && (<>
            <h6>In Case of Female</h6>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                Married/UnMarried/Divorcee/Widow(Max. 15 Characters)
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="icasefmaritalunmsince"
                  value={formData.icasefmaritalunmsince}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-lg-3 col-xl-3">
                Primigravida/Multipara etc (Max. 200 Characters)
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="icasefprimigravidamultipara"
                  value={formData.icasefprimigravidamultipara}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">No of Chldren (Max. 2 Characters)</div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="icasefnoOfchildren"
                  value={formData.icasefnoOfchildren}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-lg-3 col-xl-3">Youngest (Max. 25 Characters)</div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="icasefyoungestchild"
                  value={formData.icasefyoungestchild}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">Eldest (Max. 25 Characters)</div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="icasefeldestchild"
                  value={formData.icasefeldestchild}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
          </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SymptomsObservedVI
