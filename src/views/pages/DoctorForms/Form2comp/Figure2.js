import React from 'react'
import imageUrl from "../../../../assets/injurues_image/MainPicture (1).jpg"
import Figureimageform from '../common/Figureimageform'
const Figure2 = ({ Figure2detail, FigureDetail, MaterialCollecteddetail,trn,imgid }) => {
  const handleF3_frstClick = () => {
    MaterialCollecteddetail(true)
    Figure2detail(false)
  }
  const handleF3_frstBackClick = () => {
    Figure2detail(false)
    FigureDetail(true)
  }
  return (
    <div className="Container">
      <Figureimageform
        title="Figure2 "
        backButton1={handleF3_frstBackClick}
        savebutton1={handleF3_frstClick}
        imgid={imgid}
        trn={trn}
      />
    </div>
  )
}

export default Figure2
