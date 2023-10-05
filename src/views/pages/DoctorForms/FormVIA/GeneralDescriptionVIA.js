import React, { useEffect, useState } from 'react'
import BodyInquestPaperRD from '../common/BodyInquestPaperRD'
import IdentificationMarkscomp from '../common/IdentificationMarkscomp'
import Header from '../common/Header'
import DetailsView from '../common/DetailsView'
import GeneralDescription from '../common/GeneralDescription'
import Form6aDetails from './Form6aDetails'
import { ButtonBackandSave } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const GeneralDescriptionVIA = ({
  GeneralDescriptionVIAdetail,
  SymptomsobservedVIAdetail,
  PostMortemChangesVIAdetail,
  trn,
}) => {
  const [formData, setFormData] = useState({
    gdclothesandotherwrapping: '',
    gdweight: '',
    gdcronheallength: '',
    gdfootlength: '',
    gdheadcirumference: '',
    gdchestcirumference: '',
    gdumbilicalcord: '',
    gdlengthumbilicalcord: '',
    gdendsumbilicalcord: '',
    gddescriptionplacenta: '',
    gdweightplacenta: '',
    gdconditionplacenta: '',
    gdcongenitalmalformations: '',
    gdsignmacerationmum: '',
    gdsignassisteddelivery: '',
    gdvernixcaseosa: '',
    gddescrioptionskin: '',
    gdnail: '',
    gdhairs: '',
    gdnaturalorifices: '',
  })

  // const handleFormData = (data) => {
  //   // Handle the form data in the parent component
  //   console.log('Received data in parent component:', data)
  //   // You can also submit the data to an API or perform other actions here
  // }

  const handleF3_frstBackClick = () => {
    GeneralDescriptionVIAdetail(false)
    SymptomsobservedVIAdetail(true)
  }
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const api = `${apiPrefix}/user/Form6_A/save_general_description`
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
        gdtransactionid: trn,
        createuser: enterby,
        ...formData, // Spread the formData object here
      }
      const response = await axios.post(api, postData, config)
      if (response.status === 200) {
        PostMortemChangesVIAdetail(true)
        GeneralDescriptionVIAdetail(false)
        console.log(' API Response:', response.data)
        // Redirect or navigate to the next page if needed
      } else {
        // Handle non-200 responses here
        console.error(' API Error:', response.status)
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error)
    }
  }

  const apigetData = `${apiPrefix}/user/Form6_A/get_general_description/${trn}`

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
          <h4>General Description / Examination</h4>
        </div>
        <div className="card-body">
          <GeneralDescription formData={formData} onChange={setFormData} />
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>
  )
}

export default GeneralDescriptionVIA
