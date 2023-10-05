import React from 'react'

const Figureimageform = ({ title, backButton1, savebutton1 }) => {
  return (
    <div className="card mt-2 mb-2">
      <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
        <h4>{title}</h4>
      </div>

      <div className="card-body">
        <div className="row justify-content-center">
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">image</div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              To Mark On Picture :- Click On injury & then click on Picture
              <textarea name="" type="text" className="form-control"></textarea>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              To remove mark from Picture :- Click On injury made on Picture
              <textarea name="" type="text" className="form-control"></textarea>
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
    </div>
  )
}

export default Figureimageform
