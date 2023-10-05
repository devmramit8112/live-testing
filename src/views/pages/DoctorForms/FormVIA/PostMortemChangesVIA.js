import React, { useEffect, useState } from 'react'
import BodyInquestPaperRD from '../common/BodyInquestPaperRD'
import IdentificationMarkscomp from '../common/IdentificationMarkscomp'
import Header from '../common/Header'
import DetailsView from '../common/DetailsView'
import PostMortemChanges from '../common/PostMortemChanges'
import Form6aDetails from './Form6aDetails'
import { ButtonBackandSave } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const PostMortemChangesVIA = ({
  PostMortemChangesVIAdetail,
  GeneralDescriptionVIAdetail,
  ExaminationExternalInjuriesVIAdetail,
  trn,
}) => {
  const handleF3_frstBackClick = () => {
    PostMortemChangesVIAdetail(false)
    GeneralDescriptionVIAdetail(true)
  }
  const [formData, setFormData] = useState({})
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const api = `${apiPrefix}/user/Form6_A/save_post_mortem_changes`
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
        pmctransactionid: trn,
        createuser: enterby,
        ...formData, // Spread the formData object here
      }
      const response = await axios.post(api, postData, config)
      if (response.status === 200) {
        ExaminationExternalInjuriesVIAdetail(true)
        PostMortemChangesVIAdetail(false)
        console.log(' API Response:', response.data)
      } else {
        // Handle non-200 responses here
        console.error(' API Error:', response.status)
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error)
    }
  }
  const apigetData = `${apiPrefix}/user/Form6_A/get_post_mortem_changes/${trn}`

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
          <h4>Post-Mortem Changes -As Seen at Autopsy</h4>
        </div>
        <div className="card-body">
          <PostMortemChanges formData={formData} onChange={setFormData} />
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>
  )
}

export default PostMortemChangesVIA
