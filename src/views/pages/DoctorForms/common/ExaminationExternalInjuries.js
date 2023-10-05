import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonBackandSave, Redstar } from './Operationradionbutton'
const ExaminationExternalInjuries = () => {
  const Navigate = useNavigate()
  return (
    <div className="card">
      <div className="text-center p-3 mb-3 bg-secondary-subtle">
        <h4>Examination of External Injuries</h4>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            Examination of External Injuries (Including Ligature Mark, if any.)
            <Redstar />
            (Max. 8000 Characters)
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <textarea name="patient_name" type="text" className="form-control" />
          </div>
        </div>
      </div>
      <ButtonBackandSave
        backButton={() => Navigate('/PostMortemChangesVIA')}
        savebutton={() => Navigate('/InternalExamDetailVIA')}
      />
    </div>
  )
}

export default ExaminationExternalInjuries
