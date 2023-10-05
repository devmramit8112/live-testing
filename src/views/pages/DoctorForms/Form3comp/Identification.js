import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MarksIdentificationTable from '../comp/MarksIdentificationTable'
import { ButtonBackandSave } from '../common/Operationradionbutton'

const Identification = ({ physicalDetail, identDetail, caseDetail }) => {
  const Navigate = useNavigate()
  const handleF3_frstClick = () => {
    physicalDetail(true)
    identDetail(false)
  }
  const handleF3_frstBackClick = () => {
    identDetail(false)
    caseDetail(true)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Identification Marks</h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <MarksIdentificationTable />
            </div>
            <ButtonBackandSave
              backButton={handleF3_frstBackClick}
              savebutton={handleF3_frstClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Identification
