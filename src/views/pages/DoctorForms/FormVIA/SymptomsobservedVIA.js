import React, { useState, useEffect } from 'react'
import SymptomsObserved from '../common/SymptomsObserved'
import { ButtonBackandSave } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const SymptomsobservedVIA = ({
  GeneralDescriptionVIAdetail,
  SymptomsobservedVIAdetail,
  HospitalsDetailss,
  trn,
}) => {
  const handleF3_frstBackClick = () => {
    SymptomsobservedVIAdetail(false)
    HospitalsDetailss(true)
  }

  const [formData, setFormData] = useState({
    smptbeforedeath: '',
    smptbeforedeath_asperHsopitalrecord: '',
  })

  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apisyob = `${apiPrefix}/user/Form6_A/save_symptoms_observed`
  const apigetcd = `${apiPrefix}/user/Form6_A/get_symptoms_observed/${trn}`

  const token = localStorage.getItem('token')
  const enterby = localStorage.getItem('username')

  const handleF3_frstClick = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
      const postData = {
        smpttransactionid: trn,
        createuser: enterby,
        ...formData, // Spread the formData object here
      }
      const response = await axios.post(apisyob, postData, config)
      if (response.status === 200) {
        GeneralDescriptionVIAdetail(true)
        SymptomsobservedVIAdetail(false)
        console.log(' API Response:', response.data)
      } else {
        console.error(' API Error:', response.status)
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    callApi(apigetcd)
      .then((response) => {
        setFormData(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])

  return (
    <div className="Container">
      <div className="card">
        <div className="text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Symptoms Observed...</h4>
        </div>
        <div className="card-body">
          <SymptomsObserved formData={formData} onChange={setFormData} />
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>
  )
}

export default SymptomsobservedVIA
