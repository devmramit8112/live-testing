import React, { useState } from 'react'
import { Redstar } from './Operationradionbutton'

const ExternalGeneralApperance = () => {
  return (
    <>
      <div className="text-center p-3 mb-3 bg-secondary-subtle">
        <h4>External General Apperance</h4>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-6">Ligature Mark (Max. 4000 Characters)</div>
          <div className="col-6">
            <textarea name="arrival_date" type="date" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <h5>State of eyes:</h5>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Pupil(Rt)
            <Redstar />
            (Max. 50 Characters){' '}
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <textarea type="number" className="form-control" placeholder="" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Pupil(Lt)
            <Redstar />
            (Max. 50 Characters)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <textarea name="weight" type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Cornea/Conjuctiva(Rt)
            <Redstar />
            (Max. 50 Characters)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <textarea name="weight" type="text" className="form-control" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Cornea/Conjuctiva(Lt)
            <Redstar />
            (Max. 50 Characters){' '}
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <textarea name="weight" type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Natural Orifices(Please note presence of blood, froth etc in
            mouth,nose,ears(specify(Rt,Lt),anus,vagina and urethra)*: (Max. 4000 Characters)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <textarea name="weight" type="text" className="form-control" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            Any Other Finding (Max. 4000 Characters)
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <textarea name="weight" type="text" className="form-control" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ExternalGeneralApperance
