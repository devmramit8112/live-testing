import React from 'react'
import Figureimageform from '../common/Figureimageform'
const Figure = ({ FigureDetail, GistofIncidentdetail, Figure2detail, trn, imgid }) => {
  const handleF3_frstClick = () => {
    Figure2detail(true)
    FigureDetail(false)
  }
  const handleF3_frstBackClick = () => {
    FigureDetail(false)
    GistofIncidentdetail(true)
  }
  return (
    <div className="Container">
      <Figureimageform
        title="Figure "
        backButton1={handleF3_frstBackClick}
        savebutton1={handleF3_frstClick}
        trn={trn}
        imgid={imgid}
      />
    </div>
  )
}

export default Figure
