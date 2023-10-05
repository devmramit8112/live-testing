import React, { useState, useEffect } from 'react'
import Figureimageform from '../common/Figureimageform'

const PhysicalInjuriesBody = ({ phyExaminBodyDetail, phyExaminDetail,localEDetail,penetDetail,regFeDetail, trnid,imgid }) => {
  
  const gender = localStorage.getItem('gender')
  const handleF3_frstClick = async () => {
    if (gender == '102'||gender == '152') {
      localEDetail(true)
    } else if (gender == '1') {
      penetDetail(true)
    } else if (gender == '2') {
      regFeDetail(true)
    }
    phyExaminBodyDetail(false)
    
  }
  const handleF3_frstBackClick = () => {
    phyExaminBodyDetail(false)
    phyExaminDetail(true)
  }
  return (
    <div className="Container">
      <Figureimageform
        title="Physical Examination of Injuries : Body Views "
        backButton1={handleF3_frstBackClick}
        savebutton1={handleF3_frstClick}
        trn={trnid}
        imgid={imgid}
      />
    </div>
  )
}

export default PhysicalInjuriesBody
