import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import DetailsView from '../common/DetailsView'
import HandedOverPolice from '../common/HandedOverPolice'
import { ButtonBackandSave, Operationradionbutton2 } from '../common/Operationradionbutton'
import Form6aDetails from './Form6aDetails'
import PoliceAccompanied from '../../DoctorDashboard/comp/PoliceAccompanied'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const HandedOverPoliceVIA = ({ OpinionVIAdetail, HandedOverPoliceVIAdetail, trn }) => {
  const [policeData, setPoliceData] = useState([])

  const handleF3_frstBackClick = () => {
    OpinionVIAdetail(true)
    HandedOverPoliceVIAdetail(false)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handlePoliceDataUpdate = (data) => {
    setPoliceData(data)
  }

  const [formData, setFormData] = useState({
    hopisstichedbody: '',
    hopdate: '',
    hopinquestpapers: '',
    hopanyother: '',
  })

  const trnno = localStorage.getItem('trn')

  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const api = `${apiPrefix}/user/Form6_A/save_handed_over_to_police`
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
        hoptransactionid: trn,
        createuser: enterby,
      }

      const response = await axios.post(api, postData, config)
      if (response.status === 200) {
        console.log('Penetration API Response:', response.data)
      } else {
        // Handle non-200 responses here
        console.error('Penetration API Error:', response.status)
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error)
    }
  }

  // get all data  

  const apiGet = `${apiPrefix}/user/Form6_A/get_handed_over_to_police/${trn}`

  useEffect(() => {
    callApi(apiGet)
      .then((response) => {
        setFormData(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])
  return (
    <div className="container">
      <div className="card">
        <div className="text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Handed Over to Police / Received by Police Official</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">
              <p className="text-bold">Stitched dead body after post mortem examination</p>
            </div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                aria-label="Default select example"
                name="hopisstichedbody"
                value={formData.hopisstichedbody}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.hopisstichedbody === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="hopstichedbody"
                    value={formData.hopstichedbody}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">Copy of Post Mortem Report No</div>
            <div className=" col-lg-3 col-xl-3">
              <input name="" type="text" class="form-control" value={trnno} onChange={handleChange} disabled />{' '}
            </div>
            <div className=" col-lg-3 col-xl-3">Dated</div>
            <div className=" col-lg-3 col-xl-3">
              <input
                name="hopdate"
                type="text"
                class="form-control"
                value={formData.hopdate}
                onChange={handleChange}
              />{' '}
            </div>
          </div>
          <div className="row mb-3">
            <div className=" col-lg-3 col-xl-3">
              Police Inquest papers (in number duly initialed)
            </div>
            <div className=" col-lg-3 col-xl-3">
              <input
                name="hopinquestpapers"
                type="text"
                class="form-control"
                value={formData.hopinquestpapers}
                onChange={handleChange}
              />{' '}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-3 col-xl-3">
              <p className="text-bold"> Sample of-------(for DNA Analysis )</p>
            </div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                aria-label="Default select example"
                name="hopissampledna"
                value={formData.hopissampledna}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.hopissampledna === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="hopsampledna"
                    value={formData.hopsampledna}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>

            <div className="col-lg-3 col-xl-3">
              <p className="text-bold">
                {' '}
                Viscera box for chemical / toxicological analysis with request letter
              </p>
            </div>
            <div className=" col-lg-3 col-xl-3">

              <select
                className="form-select"
                aria-label="Default select example"
                name="hopisviscerabox"
                value={formData.hopisviscerabox}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.hopisviscerabox === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="hopviscerabox"
                    value={formData.hopviscerabox}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}

            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-3 col-xl-3">
              <p className="text-bold"> Sample of-------(for DNA Analysis )</p>
            </div>
            <div className="col-lg-3 col-xl-3">
              <select
                className="form-select"
                aria-label="Default select example"
                name="hopisorgananalysis"
                value={formData.hopisorgananalysis}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              {formData.hopisorgananalysis === 'Y' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="hoporgananalysis"
                    value={formData.hoporgananalysis}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              )}
            </div>
            <div className=" col-lg-3 col-xl-3">Any Other (Max. 255 Characters) </div>
            <div className=" col-lg-3 col-xl-3">
              <textarea
                name="hopanyother"
                type="text"
                class="form-control"
                value={formData.hopanyother}
                onChange={handleChange}
              />{' '}
            </div>
          </div>
          <div className="row mb-3">
            <PoliceAccompanied
              title="Received by Police official"
              onDataUpdate={handlePoliceDataUpdate}
            />
          </div>
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div >
  )
}

export default HandedOverPoliceVIA
