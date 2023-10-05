import React from 'react'

import { useNavigate } from 'react-router-dom'

import Formdetail from '../common/Formdetails'
import Figureimageform from '../common/Figureimageform'

const InnerViewSkull = ({ HeadSurfacedetail, InnerViewSkulldetail, BodySideViewdetail, imgid, trn }) => {
  const Navigate = useNavigate()
  const handleF3_frstClick = () => {
    BodySideViewdetail(true)
    InnerViewSkulldetail(false)
  }
  const handleF3_frstBackClick = () => {
    InnerViewSkulldetail(false)
    HeadSurfacedetail(true)
  }
  return (
    <div className="Container">
      <Figureimageform
        title="Inner View Of Skull"
        backButton1={handleF3_frstBackClick}
        savebutton1={handleF3_frstClick}
        imgid={imgid}
        trn={trn}
      />
    </div>
  )
}

export default InnerViewSkull
