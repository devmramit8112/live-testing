import React from 'react'
import Formdetail from '../common/Formdetails'
import Figureimageform from '../common/Figureimageform'

const UnknownFigureForm6 = ({
  UnknownFigureForm6detail,
  InternalInjuryDetaildetail,
  HeadSurfacedetail,
  imgid,
  trn, gender
}) => {
  const handleF3_frstClick = () => {
    HeadSurfacedetail(true)
    UnknownFigureForm6detail(false)
  }
  const handleF3_frstBackClick = () => {
    UnknownFigureForm6detail(false)
    InternalInjuryDetaildetail(true)
  }

  const getTitle = () => {
    if (gender === '1') {
      return 'Full Body : Male-Posterior Views (Ventral and Dorsal)';
    } else if (gender === '2') {
      return 'Full Body : Female-Anterior and Posterior Views (Ventral and Dorsal)';
    } else {
      return 'Full Body : Unknown';
    }
  };
  return (
    <div className="Container">
      <Figureimageform
        title={getTitle()}
        backButton1={handleF3_frstBackClick}
        savebutton1={handleF3_frstClick}
        imgid={imgid}
        trn={trn}
      />
    </div>
  )
}

export default UnknownFigureForm6
