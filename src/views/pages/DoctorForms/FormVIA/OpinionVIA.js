import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import DetailsView from '../common/DetailsView'
import { useNavigate } from 'react-router-dom'
import PostMortemChanges from '../common/PostMortemChanges'
import Opinion from '../common/Opinion'
import Form6aDetails from './Form6aDetails'
import { ButtonBackandSave } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const OpinionVIA = ({
  InternalExaminDetailctd6adetail,
  OpinionVIAdetail,
  HandedOverPoliceVIAdetail,
  trn,
}) => {
  const handleF3_frstBackClick = () => {
    OpinionVIAdetail(false)
    InternalExaminDetailctd6adetail(true)
  }

  const [formData, setFormData] = useState({
    pmopicausemannerdeath: '',
    pmopilivestilldeadbirth: '',
    pmopiagesexviability: '',
    pmopitimesincedeath: '',
    pmopibetweeninjuryanddeath: '',
  })
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const api = `${apiPrefix}/user/Form6_A/save_post_mortem_opinion`
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
        ...formData,
        pmopitransactionid: trn,
        createuser: enterby,
      }
      const response = await axios.post(api, postData, config)
      if (response.status === 200) {
        HandedOverPoliceVIAdetail(true)
        OpinionVIAdetail(false)
        console.log('Penetration API Response:', response.data)
      } else {
        console.error('Penetration API Error:', response.status)
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error)
    }
  }

  const apigetData = `${apiPrefix}/user/Form6_A/get_post_mortem_opinion/${trn}`

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
      <div className="card mt-2 mb-2">
        <div className="text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Opinion</h4>
        </div>
        <div className="card-body">
          <Opinion formData={formData} onChange={setFormData} />
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>
  )
}

export default OpinionVIA
