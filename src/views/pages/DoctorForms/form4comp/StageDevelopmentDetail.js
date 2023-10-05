import React from 'react'

const StageDevelopmentDetail = ({ handleChange, backButton1, savebutton1,handleData, errors }) => {
  return (
    <div className="card">
      <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
        <h4>Stage of Development Detail</h4>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-6">
            Secondary Sexual Characters’ Stage (Tanner stages) Unknown Or Enuach :- Stage Of
            Developement Detail (Max. 4000 Characters)
            <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
          </div>
          <div className="col-6">
            <textarea name="eunuchSexualRemark" type="text" value={handleData.eunuchSexualRemark}  onChange={handleChange} className={`form-control ${errors.eunuchSexualRemark ? 'is-invalid' : ''}`} />
            {errors.eunuchSexualRemark && <div className="invalid-feedback">{errors.eunuchSexualRemark}</div>}
          </div>
        </div>
        <div className="row mb-3 ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-3 "></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
            <button type="submit" className="btn btn-danger" onClick={backButton1}>
              Back
            </button>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
            <button type="submit" className="btn btn-primary" onClick={savebutton1}>
              Save and Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StageDevelopmentDetail
