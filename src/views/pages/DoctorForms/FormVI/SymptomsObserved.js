import React from 'react'
import Form4Header from '../form4comp/Form4Header'
import DetailsView from '../form4comp/DetailsView'
import { useNavigate } from 'react-router-dom'
import Formdetail from '../common/Formdetails'
import { ButtonBackandSave, Redstar } from '../common/Operationradionbutton'

const SymptomsObserved = () => {
  const Navigate = useNavigate()

  return (
    <div className="card-body">
      <p>Information Supplied by the Police and/or Hospital Record</p>
      <div className="row mb-3">
        <div className="col-6">
          As Per Information Provided by Police
          <Redstar />
          (Max. 4000 Characters)
        </div>
        <div className="col-6">
          <textarea name="" type="text" className="form-control" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-6">As Per Hospital Record (Max. 4000 Characters) </div>
        <div className="col-6">
          <textarea name="" type="text" className="form-control" />
        </div>
      </div>
    </div>
  )
}

export default SymptomsObserved
