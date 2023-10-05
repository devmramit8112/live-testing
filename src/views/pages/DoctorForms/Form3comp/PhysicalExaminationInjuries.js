import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Figureimageform from '../common/Figureimageform'

const PhysicalExaminationInjuries = ({
  phyExaminBodyDetail,
  examinDetail,
  phyExaminDetail,
  trnid,
  imgid
}) => {
  const handleF3_frstClick = async () => {
    phyExaminDetail(false)
    phyExaminBodyDetail(true)
  }
  const handleF3_frstBackClick = () => {
    phyExaminDetail(false)
    examinDetail(true)
  }
  return (
    <div className="Container">
      <Figureimageform
        title="Physical Examination of Injuries : Hands,Face Views "
        backButton1={handleF3_frstBackClick}
        savebutton1={handleF3_frstClick}
        trn={trnid}
        imgid={imgid}
      />
    </div>
  )
}

export default PhysicalExaminationInjuries
