import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DetailsView from '../common/DetailsView'
import Header from '../common/Header'
import BodyInquestVIA from './BodyInquestVIA'
const FormVIApm = () => {
  const Navigate = useNavigate()

  return (
    <div className="card">
      <Header title="Form VI: Post Mortem Examination Report (FOETUS)" />
      <DetailsView />
      <BodyInquestVIA />
    </div>
  )
}

export default FormVIApm
