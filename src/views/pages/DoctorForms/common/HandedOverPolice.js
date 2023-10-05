import React, { useState } from 'react'
import PoliceAccompanied from '../../DoctorDashboard/comp/PoliceAccompanied'
import HandedoverPoliceTb from './HandedoverPoliceTb'
import Operationradionbutton from './Operationradionbutton'

const HandedOverPolice = () => {
  const [selectedoption, setSelectedOption] = useState('no')
  const [selectedoption1, setSelectedOption1] = useState('No1')

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value)
    setSelectedOption1(event.target.value)
  }

  return (
    <>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <p className="text-bold">Stitched dead body after post mortem examination</p>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <Operationradionbutton />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Copy of Post Mortem Report No
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input name="patient_name" type="text" className="form-control" disabled />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Dated</div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input name="patient_name" type="date" className="form-control" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Police Inquest papers (in number duly initialed)
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input name="patient_name" type="text" className="form-control" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          <p className="text-bold"> Sample of-------(for DNA Analysis )</p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <Operationradionbutton />
        </div>
        <div className="col-lg-3 col-xl-3">
          <p className="text-bold">
            {' '}
            Viscera box for chemical / toxicological analysis with request letter
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <Operationradionbutton />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          <p className="text-bold"> Sample of-------(for DNA Analysis )</p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <Operationradionbutton />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Any Other (Max. 255 Characters){' '}
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <textarea name="patient_name" type="text" className="form-control" />
        </div>
      </div>
      <div className="row mb-3">
        <PoliceAccompanied title="Received by Police official" />
      </div>
      <div className="row mb-3">
        <HandedoverPoliceTb />
      </div>
    </>
  )
}

export default HandedOverPolice
