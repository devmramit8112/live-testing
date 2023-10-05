import React from 'react'
import Header from '../common/Header'
import DetailsView from '../common/DetailsView'
import bodyimg from '../common/img/bodyimgmain.jpg'
import Formdetail from '../common/Formdetails'
import Figureimageform from '../common/Figureimageform'

const BodySideView = ({ InnerViewSkulldetail, BodySideViewdetail, OpinionVIdetail, imgid, trn }) => {
  const handleF3_frstClick = () => {
    OpinionVIdetail(true)
    BodySideViewdetail(false)
  }
  const handleF3_frstBackClick = () => {
    BodySideViewdetail(false)
    InnerViewSkulldetail(true)
  }
  return (
    <div className="Container">
      <Figureimageform
        title="Body Side View"
        backButton1={handleF3_frstBackClick}
        savebutton1={handleF3_frstClick}
        imgid={imgid}
        trn={trn}
      />
    </div>
  )
}

export default BodySideView
