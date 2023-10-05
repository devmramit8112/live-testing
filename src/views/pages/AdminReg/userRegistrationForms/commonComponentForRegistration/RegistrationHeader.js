import React from 'react'
// import HeaderImage from 'src/assets/images/head2.png'
import HeaderImage from '../../../../../assets/images/head2.png'

const RegistrationHeader = () => {
  return (
    <div style={{backgroundColor:"#2c3e50"}}>
      <div className="row">
        <div className="col-sm-6 col-md-12 col-12 col-xl-12 col-lg-12 text-end">
          <img src={HeaderImage} />
        </div>
      </div>
    </div>
  )
}

export default RegistrationHeader
