import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Figureimageform from '../common/Figureimageform'

const LocalEunuch = ({examinDetail,localEDetail,unknownCommentsDetail,trnid,imgid}) => {
  const handleF3_frstClick = async () => {
    localEDetail(false)
    unknownCommentsDetail(true)
  }
  const handleF3_frstBackClick = () => {
    localEDetail(false)
    examinDetail(true)
  }
  return (
    <div className="Container">
      <Figureimageform
        title="Local Examination of Decomposed or Eunuch"
        backButton1={handleF3_frstBackClick}
          savebutton1={handleF3_frstClick}
          trn={trnid}
        imgid={imgid}
      />
    </div>
  )
}

export default LocalEunuch
