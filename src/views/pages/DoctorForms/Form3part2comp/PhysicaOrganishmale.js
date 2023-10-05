import React from 'react'
import Form3detailspart2 from './Form3detailspart2'
import Figureimageform from '../common/Figureimageform'

const PhysicaOrganishmale = ({
  PhysicalInjuriesorganishmdetail,
  PhysicaOrganishmaledetail,
  PhysicaOrganishmale2detail,
  imgid,
  trn
}) => {
  const handleF3_frstClick = () => {
    PhysicaOrganishmale2detail(true)
    PhysicaOrganishmaledetail(false)
  }
  const handleF3_frstBackClick = () => {
    PhysicaOrganishmaledetail(false)
    PhysicalInjuriesorganishmdetail(true)
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

export default PhysicaOrganishmale
