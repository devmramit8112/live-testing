import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import HospitalRecordsSelect from './HospitalRecordsSelect'
import Formdetail from '../common/Formdetails'
import { ButtonBackandSave } from '../common/Operationradionbutton'

const IdentificationMarksTb = () => {
  const Navigate = useNavigate()

  return (
    <div className="Container">
      <Formdetail title="Form VI: Post Mortem Examination Report " />
      <div className="card mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Hospital Detail</h4>
        </div>
        <div className="card-body">
          <HospitalRecordsSelect title="Hospital Detail" />
          <ButtonBackandSave
            backButton={() => Navigate('/Form6')}
            savebutton={() => Navigate('/SymptomsObservedVI')}
          />
        </div>
      </div>
    </div>
  )
}

export default IdentificationMarksTb
