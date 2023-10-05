import React from 'react'
import { useNavigate } from 'react-router-dom'
import Figureimageform from '../common/Figureimageform'
import Form3detailspart2 from './Form3detailspart2'
import { ButtonBackandSave } from '../common/Operationradionbutton'

const GeneralPhysicalExaminationf3part2 = ({
  Generalmaledetail,
  GeneralPhysicalExaminationf3part2detail,
  Examinatiobodydetail,
  trn,
  imgid,
}) => {
  const Navigate = useNavigate()
  const handleF3_frstClick = () => {
    Generalmaledetail(true)
    GeneralPhysicalExaminationf3part2detail(false)
  }
  const handleF3_frstBackClick = () => {
    GeneralPhysicalExaminationf3part2detail(false)
    Examinatiobodydetail(true)
  }
  return (
    <div className="Container">
      <Figureimageform
        title="General Physical Examination of Injuries : Hands,Face Views "
        backButton1={handleF3_frstBackClick}
        savebutton1={handleF3_frstClick}
        trn={trn}
        imgid={imgid}
      />
    </div>
  )
}

export default GeneralPhysicalExaminationf3part2
