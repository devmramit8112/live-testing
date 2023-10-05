import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackLogin = () => {
  const Navigate = useNavigate()

  return (
    <div className="row m-2">
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  ">
      <button className="btn btn-danger mb-2" style={{padding:"10 14%"}} onClick={() => Navigate('/login')}>
      <FontAwesomeIcon icon={faChevronCircleLeft}   />Back To Login
      </button>
    </div>
    </div>
  )
}

export default BackLogin
