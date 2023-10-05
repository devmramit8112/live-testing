import React from 'react'
import { useNavigate } from 'react-router-dom'
import Formdetail from '../common/Formdetails'
import Figureimageform from '../common/Figureimageform'

const Form3maleLocalExamination = ({ examinDetail, statePenistesticleDetail, maleLocalExaminationDetail, trnid, imgid }) => {
  const handleF3_frstClick = async () => {
    maleLocalExaminationDetail(false)
    statePenistesticleDetail(true)
  }
  const handleF3_frstBackClick = () => {
    maleLocalExaminationDetail(false)
    examinDetail(true)
  }
  return (
    <div>
      <div className="Container">
        <Formdetail title="Form-III-Medical Legal Report- Victim/Accused of Sexual Harresment " />
        <Figureimageform
          title="Local Examination of Genitalia: (For use in Male Survivors only)"
          backButton1={handleF3_frstBackClick}
          savebutton1={handleF3_frstClick}
          trn={trnid}
          imgid={imgid}
        />
      </div>
    </div>
  )
}

export default Form3maleLocalExamination
