import React from 'react'
import Header from '../common/Header'
import DetailsView from '../common/DetailsView'
import { useNavigate } from 'react-router-dom'
import headsurface from '../common/img/headsurface.jpg'
import Figureimageform from '../common/Figureimageform'
import Formdetail from '../common/Formdetails'

const HeadSurface = ({ UnknownFigureForm6detail, HeadSurfacedetail, InnerViewSkulldetail, imgid, trn }) => {
  const Navigate = useNavigate()
  const handleF3_frstClick = () => {
    InnerViewSkulldetail(true)
    HeadSurfacedetail(false)
  }
  const handleF3_frstBackClick = () => {
    HeadSurfacedetail(false)
    UnknownFigureForm6detail(true)
  }

  return (
    <div className="Container">
      <Figureimageform
        title="Head-Surface and Skeletal Anatomy :Lateral View "
        backButton1={handleF3_frstBackClick}
        savebutton1={handleF3_frstClick}
        imgid={imgid}
        trn={trn}
      />
    </div>
  )
}

export default HeadSurface
