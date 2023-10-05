import React, { useState, useEffect } from 'react'
import Header from '../common/Header'
import DetailsView from '../common/DetailsView'
import Formdetail from '../common/Formdetails'
import { ButtonBackandSave, Redstar } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const InternalInjuryDetail = ({
  InternalExaminatioDetailctddetail,
  InternalInjuryDetaildetail,
  UnknownFigureForm6detail,
  trn,
}) => {
  const [formData, setFormData] = useState({
    mbaj_dislocation: '',
  })

  // Function to handle changes in the textarea
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const enterby = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apiURL = `${apiPrefix}/user/form6/add_internal_injury_detail`

  const handleF3_frstClick = async () => {
    UnknownFigureForm6detail(true)
    InternalInjuryDetaildetail(false)
    console.log('Data is ', formData)
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
      const postData = {
        mbajtransactionid: trn,
        createuser: enterby,
        ...formData,
      }
      const response = await axios.post(apiURL, postData, config)
      if (response.status === 200) {
        console.log(' API Response:', response.data)
      } else {
        console.error(' API Error:', response.status)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleF3_frstBackClick = () => {
    InternalInjuryDetaildetail(false)
    InternalExaminatioDetailctddetail(true)
  }
  const [nextpage, setnextpage] = useState('U')
  const [nextcomponent, setnextcomponent] = useState('')
  useEffect(() => {
    // alert(nextpage)
    if (nextpage == 'U') {
      setnextcomponent('/UnknownFigureForm6')
      // alert(nextcomponent)
    } else if (nextpage == 'M') {
      setnextcomponent('/MaleFigureForm6')
      // alert(nextcomponent)
    } else if (nextpage == 'F') {
      setnextcomponent('/FemaleFigureForm6')
    }
  }, [])



  // get all data value 
  const apigetData = `${apiPrefix}/user/form6/get_internal_injury_detail/${trn}`

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
      <div className="card mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Internal Injury Detail</h4>
        </div>

        <div className="card-body">
          <div className="row mb-3">
            <div className="col-6">
              Muscle,Bones and Joints (Injury/Injuries ,Diseases, Deformity ,Fractures ,Dislocation)
              (Max. 5000 Characters)
              <Redstar />
            </div>
            <div className="col-6">
              <textarea
                name="mbaj_dislocation"
                type="text"
                value={formData.mbaj_dislocation}
                onChange={handleInputChange}
                className="form-control"
              />{' '}
            </div>
          </div>
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>
  )
}

export default InternalInjuryDetail
