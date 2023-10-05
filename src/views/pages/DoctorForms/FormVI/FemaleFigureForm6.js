import React from 'react'
import { useNavigate } from 'react-router-dom'
import Formdetail from '../common/Formdetails'
import Figureimageform from '../common/Figureimageform'

const FemaleFigureForm6 = () => {
  const Navigate = useNavigate()
  return (
    <div className="Container">
      <Formdetail title="Form VI: Post Mortem Examination Report " />
      <Figureimageform
        title="Full Body : Female-Anterior and Posterior Views (Ventral and Dorsal)"
        backButton1={() => Navigate('/InternalInjuryDetail')}
        savebutton1={() => Navigate('/HeadSurface')}
      />
    </div>
  )
}

export default FemaleFigureForm6
