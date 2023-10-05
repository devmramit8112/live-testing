import React from 'react'
const Pregnancyexternalinj = () => {
  return (
    <div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-lg-3 col-xl-3">
            Examination Uterus casetype
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-lg-3 col-xl-3">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled>
                Select Dynamc
              </option>
              <option value="Yes">Advance Pergency</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3">
            Gastation Pregnancy<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-3">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
          <div className="col-3">
            Uterus status
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-3">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-3 col-xl-3">
            Is Scar
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-lg-3 col-xl-3">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-3 col-xl-3">
            Is ruptured <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-lg-3 col-xl-3">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-3 col-xl-3">
            Fetus status <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-lg-3 col-xl-3">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-lg-3 col-xl-3">
            Placenta status <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-lg-3 col-xl-3">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-3 col-xl-3">
            IsFetus maceration <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-lg-3 col-xl-3">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3">
            Retroplacental clot <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-3">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
          <div className="col-3">
            Presence hemoperitoneum
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-3">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-3 col-xl-3">
            Is foreignbody uterus <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-lg-3 col-xl-3">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-lg-3 col-xl-3">
            Is foreignbody cervis <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-lg-3 col-xl-3">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-3 col-xl-3">
            Is foreignbody vagina <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-lg-3 col-xl-3">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-lg-3 col-xl-3">
            Addlitional remarks <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-3">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pregnancyexternalinj
