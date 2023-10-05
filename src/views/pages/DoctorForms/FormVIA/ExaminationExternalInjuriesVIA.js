import React, { useEffect, useState } from 'react'

import Form6aDetails from './Form6aDetails'
import {
  ButtonBackandSave,
  Redstar,
  ExaminationExternalInjuries,
} from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const ExaminationExternalInjuriesVIA = ({
  InternalExamDetailVIAdetail,
  ExaminationExternalInjuriesVIAdetail,
  PostMortemChangesVIAdetail,
}) => {
  const handleF3_frstBackClick = () => {
    ExaminationExternalInjuriesVIAdetail(false)
    PostMortemChangesVIAdetail(true)
  }
  const [formData, setFormData] = useState({
    gdexaminationexternalinjuries:"",
  })
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const api = `${apiPrefix}/user/Form6_A/save_examination_external_injuries`
  const token = localStorage.getItem('token')
  const enterby = localStorage.getItem('username')
  const trn = localStorage.getItem('trn')
  const handleF3_frstClick = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }

      const postData = {
        ...formData,
        gdtransactionid: trn,
        createuser: enterby,
      }

      const response = await axios.post(api, postData, config)

      if (response.status === 200) {
        InternalExamDetailVIAdetail(true)
        ExaminationExternalInjuriesVIAdetail(false)
        console.log('Penetration API Response:', response.data)

        // Redirect or navigate to the next page if needed
      } else {
        // Handle non-200 responses here
        console.error('Penetration API Error:', response.status)
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error)
    }
  }

  const apigetData = `${apiPrefix}/user/Form6_A/get_examination_external_injuries/${trn}`

  // get all data
  useEffect(() => {
    callApi(apigetData)
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
          <h4>Examination of External Injuries</h4>
        </div>
        <div className="card-body">
          <ExaminationExternalInjuries
            title="Examination of External Injuries (Including Ligature Mark, if any.) *(Max. 8000 Characters) propsss"
            input1Name="gdexaminationexternalinjuries"
            setFormData={setFormData}
            formData={formData}
          />
        </div>
        <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
      </div>
    </div>
  )
}

export default ExaminationExternalInjuriesVIA
