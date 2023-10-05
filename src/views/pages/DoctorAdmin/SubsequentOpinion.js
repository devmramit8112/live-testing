import React from 'react'
const SubsequentOpinion = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header bg-primary text-center ">
          <h5 className="text-white">SUBSEQUENT OPINION FORM</h5>
        </div>
        <div className="card-body">
          <div className="row mt-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                  Enter Transaction No *<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                  <input
                    name="txtemail"
                    type="date"
                    maxLength={50}
                    id="txtemail"
                    className="form-control "
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                  Captcha *<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                  <input
                    name="txtemail"
                    type="date"
                    maxLength={50}
                    id="txtemail"
                    className="form-control "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SubsequentOpinion
