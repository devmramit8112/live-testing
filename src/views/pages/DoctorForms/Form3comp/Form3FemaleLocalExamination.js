import React from 'react'
import { useNavigate } from 'react-router-dom'
import Figureimageform from '../common/Figureimageform'
import Formdetail from '../common/Formdetails'
const Form3FemaleLocalExamination = ({examinDetail,femaleLocalExaminationDetail,localExaminationGenitalia,trnid,imgid}) => {
  const handleF3_frstClick = async () => {
    femaleLocalExaminationDetail(false)
    localExaminationGenitalia(true)
  }
  const handleF3_frstBackClick = () => {
    femaleLocalExaminationDetail(false)
    examinDetail(true)
  }
  return (
    <div>
      <div className="Container">
        <Formdetail title="Form-III-Medical Legal Report- Victim/Accused of Sexual Harresment " />
        <Figureimageform
          title="Local Examination of Genitalia Female Only"
          backButton1={handleF3_frstBackClick}
          savebutton1={handleF3_frstClick}
          trn={trnid}
        imgid={imgid}
        />
      </div>
    </div>
  )
}

export default Form3FemaleLocalExamination
