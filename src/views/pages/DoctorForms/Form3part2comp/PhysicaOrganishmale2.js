import React from 'react'
import { useNavigate } from 'react-router-dom'
import Form3detailspart2 from './Form3detailspart2'
import Figureimageform from '../common/Figureimageform'
const PhysicaOrganishmale2 = ({
  PhysicaOrganishmaledetail,
  SystemicExaminationdetail,
  PhysicaOrganishmale2detail,
  imgid,
  trn
}) => {
  const Navigate = useNavigate()
  const handleF3_frstClick = () => {
    SystemicExaminationdetail(true)
    PhysicaOrganishmale2detail(false)
  }
  const handleF3_frstBackClick = () => {
    PhysicaOrganishmale2detail(false)
    PhysicaOrganishmaledetail(true)
  }
  return (
    <div className="Container">
      <Figureimageform
        title="General Physical Examination of Injuries :Organishm "
        backButton1={handleF3_frstBackClick}
        savebutton1={handleF3_frstClick}
        imgid={imgid}
        trn={trn}
      />
    </div>
  )
}

export default PhysicaOrganishmale2
