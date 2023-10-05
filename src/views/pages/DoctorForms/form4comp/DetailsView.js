import React from 'react'

const DetailsView = (props) => {
  return (
    <>
      <p className="row justify-content-center text-danger">
        [Note: Fields marked * are mandatory]
      </p>
      <div className="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="section-left">
              <div class="row no-gutters">
                <div class="col-4">
                  <h6>Name:</h6>
                </div>
                <div class="col-4">
                  <p>Unknow</p>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-4">
                  <h6>Gender:</h6>
                </div>
                <div class="col-4">
                  <p>Male</p>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-4">
                  <h6>Marital Status:</h6>
                </div>
                <div class="col-4">
                  <p>Unknow</p>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-4">
                  <h6>Transaction ID:</h6>
                </div>
                <div class="col-4">
                  <p>M308010122300004</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="section-left">
              <div class="row no-gutters">
                <div class="col-4">
                  <h6>Unknown</h6>
                </div>
                <div class="col-4">
                  <p>Unknown</p>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-4">
                  <h6>Victim ID:</h6>
                </div>
                <div class="col-4">
                  <p>8 0101223000060</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsView
