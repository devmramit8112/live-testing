import React, { useState } from 'react'
import Injuriespartforms from '../comp/Injuriespartforms'
import { ButtonBackandSave } from '../common/Operationradionbutton'

const ExaminationInjuries = ({ conDetail, examinDetail, phyExaminDetail, trnid }) => {
  const handleF3_frstClick = async () => {
    examinDetail(false)
    phyExaminDetail(true)
  }
  const handleF3_frstBackClick = () => {
    examinDetail(false)
    conDetail(true)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Examination of Injuries</h4>
        </div>
        <div className="card-body">
          <h6>
            Examination of Injuries (Type of Injury ,Dimensions ,Stage of Healing
            ,Simple/Grievous/Dangerous to life){' '}
          </h6>
          <div className="row justify-content-center">
            <Injuriespartforms />
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

export default ExaminationInjuries
