import React from 'react'
import { useNavigate } from 'react-router-dom'
import Form3detailspart2 from './Form3detailspart2'
import Figureimageform from '../common/Figureimageform'

const PhysicalInjuriesorganishm = ({
  PhysicaOrganishmaledetail,
  PhysicalInjuriesorganishmdetail,
  Localexaminatiogenitaldetail,
  trn,
  imgid,
}) => {
  const handleF3_frstClick = () => {
    PhysicaOrganishmaledetail(true)
    PhysicalInjuriesorganishmdetail(false)
  }
  const handleF3_frstBackClick = () => {
    PhysicalInjuriesorganishmdetail(false)
    Localexaminatiogenitaldetail(true)
  }
  const Navigate = useNavigate()
  return (
    <div className="Container">
      <Figureimageform
        title="General Physical Examination of Injuries : organishm "
        backButton1={handleF3_frstBackClick}
        savebutton1={handleF3_frstClick}
        trn={trn}
        imgid={imgid}
      />
    </div>
  )
}

export default PhysicalInjuriesorganishm
