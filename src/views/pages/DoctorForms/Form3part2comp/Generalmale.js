import React from 'react'
import { useNavigate } from 'react-router-dom'
import Form3detailspart2 from './Form3detailspart2'
import Figureimageform from '../common/Figureimageform'
const Generalmale = ({
  Generalmaledetail,
  GeneralPhysicalExaminationf3part2detail,
  Localexaminatiogenitaldetail,
  trn,
  imgid
}) => {
  const Navigate = useNavigate()
  const handleF3_frstClick = () => {
    Localexaminatiogenitaldetail(true)
    Generalmaledetail(false)
  }
  const handleF3_frstBackClick = () => {
    Generalmaledetail(false)
    GeneralPhysicalExaminationf3part2detail(true)
  }
  return (
    <div className="Container">
      <Figureimageform
        title="General Physical Examination of Injuries : Body Views "
        backButton1={handleF3_frstBackClick}
        savebutton1={handleF3_frstClick}
        trn={trn}
        imgid={imgid}
      />
    </div>
  )
}

export default Generalmale
