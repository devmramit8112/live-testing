import React, { useState, useEffect } from 'react'
import ExternalGeneralApperance from './ExternalGeneralApperance'
import { ButtonBackandSave } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const ExternalGeneralApperanceVI = ({
  ExternalGeneralApperanceVIdetail,
  GeneralDescriptionVIFormdetail,
  ExamExternalInjuriesTbdetail,
  trn,
}) => {
  const [formData, setFormData] = useState({
    gpmstateofeyespupilsrt: '',
    gpmstateofeyespupilslt: '',
    gpmstateofeyescorneart: '',
    gpmstateofeyescornealt: '',
    gpmnaturalorifices: '',
    gpmligaturemark: '',
    anyOtherInfo: '',
  })

  const enterby = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apipostsym = `${apiPrefix}/user/form6/add_general_apperance`


  const handleF3_frstClick = async () => {
    ExamExternalInjuriesTbdetail(true)
    ExternalGeneralApperanceVIdetail(false)
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }

      const postData = {
        gpmtransactionid: trn,
        createuser: enterby,
        ...formData,
      }
      const response = await axios.post(apipostsym, postData, config)
      if (response.status === 200) {
        console.log('API Response:', response.data)
      } else {
        console.error('API Error:', response.status)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleF3_frstBackClick = () => {
    ExternalGeneralApperanceVIdetail(false)
    GeneralDescriptionVIFormdetail(true)
  }

  // get data 

  const apigetcd = `${apiPrefix}/user/form6/get_general_apperance/${trn}`

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
        <div className="text-center p-3 mb-3 bg-secondary-subtle"></div>
        {/* Pass formData and setFormData as props */}
        <ExternalGeneralApperance formData={formData} setFormData={setFormData} />
        <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
      </div>
    </div>
  )
}

export default ExternalGeneralApperanceVI
