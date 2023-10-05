import React, { useEffect, useState } from 'react'

import {
  ButtonBackandSave,
  InternalExaminationDetail,
  SingleInputPro,
} from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'
const InternalExamDetailVI = ({
  InternalExamDetailVIdetail,
  ExamExternalInjuriesTbdetail,
  InternalExaminatioDetailctddetail,
  trn,
}) => {
  const [formData, setFormData] = useState({
    iescalp: '',
    ieskullvertebra: '',
    iemeaningesvessels: '',
    iebrain: '',
    iespinalcord: '',
    iemouthpharyxo: '',
    ieneck: '',
    ieconditionneck: '',
    iehyoidbone: '',
    iethribschest: '',
    iethpleuracavity: '',
    iethlungsr: '',
    iethlungsl: '',
    wtlungsrt: '',
    wtlungslt: '',
    iethpericardium: '',
    ieheartcoronaryr: '',
    wtbrain: '',
    ielaynx: '',
    iexamtransactionid: trn,
  })

  const handleF3_frstBackClick = () => {
    InternalExamDetailVIdetail(false)
    ExamExternalInjuriesTbdetail(true)
  }

  const enterby = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apiURL = `${apiPrefix}/user/form6/add_internal_examination`

  // API FOR SUBMIT
  const handleF3_frstClick = async () => {
    InternalExaminatioDetailctddetail(true)
    InternalExamDetailVIdetail(false)
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }

      const postData = {
        iexamtransactionid: trn,
        createuser: enterby,
        ...formData, // Spread the formData object here
      }
      const response = await axios.post(apiURL, postData, config)
      if (response.status === 200) {
        // Handle success or any other logic here
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

  const apigetData = `${apiPrefix}/user/form6/get_internal_examination/${trn}`

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
          <h4>Internal Examination Detail</h4>
        </div>
        <div className="card-body">
          <p>
            Cranium & Spinal Cord(Brain must be exposed in every case. Spinal cord need not to be
            examined except in case of injury to vertebral column/Spinal Cord)
          </p>
          <table className="table table-borderless">
            <thead>
              <tr className="mb-3">
                <th scope="col-3">Component</th>
                <th scope="col-3">Remarks</th>
                <th scope="col-3">Component</th>
                <th scope="col-3">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <InternalExaminationDetail
                title="Scalp(Max. 5000 Characters)"
                title2="Skull(Max. 5000 Characters)"
                input1Name="iescalp"
                input2Name="ieskullvertebra"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Meninges and Vessels(Max. 5000 Characters)"
                title2="Brain(Max. 5000 Characters)"
                input1Name="iemeaningesvessels"
                input2Name="iebrain"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Brain Weight(Max. 15 Characters)"
                title2="Vertebrae and Spinal Cord(Max. 5000 Characters)"
                input1Name="wtbrain"
                input2Name="iespinalcord"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Mouth,Pharynx & Oesophagus(Max. 5000 Characters)"
                title2="Neck(Max. 5000 Characters)"
                input1Name="iemouthpharyxo"
                input2Name="ieneck"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Condition of neck tissues Thyroid(Max. 5000 Characters)"
                title2="Hyoid bone(Max. 5000 Characters)"
                input1Name="ieconditionneck"
                input2Name="iehyoidbone"
                formData={formData}
                setFormData={setFormData}
              />
              <SingleInputPro
                title="Larynx & trachea*(Max. 5000 Characters)"
                input1Name="ielaynx"
                formData={formData}
                setFormData={setFormData}
              />
              <h6> Thorax</h6>

              {/* /// net line code  */}
              <InternalExaminationDetail
                title="Chest Wall ,Ribs/Sternum and Cartilage(Max. 5000 Characters)"
                title2="Pleura/pleural Cavity(Max. 5000 Characters)"
                input1Name="iethribschest"
                input2Name="iethpleuracavity"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Lung(Rt)(Max. 5000 Characters)"
                title2="Lung (Rt)Weight(Max. 15 Characters)"
                input1Name="iethlungsr"
                input2Name="wtlungsrt"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Lung(Lt)(Max. 5000 Characters)"
                title2="Lung (Lt)  Weight(Max. 15 Characters)"
                input1Name="iethlungsl"
                input2Name="wtlungslt"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Pericardium(Max. 5000 Characters)"
                title2="Heart(Max. 5000 Characters)"
                input1Name="iethpericardium"
                input2Name="ieheart"
                formData={formData}
                setFormData={setFormData}
              />

              <InternalExaminationDetail
                title="Heart Weight(Max. 15 Characters)"
                title2="Coronary Arteries & Large Blood Vessel(Max. 5000 Characters)"
                input1Name="wtheart"
                input2Name="ieheartcoronaryr"
                formData={formData}
                setFormData={setFormData}
              />
            </tbody>
          </table>
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>
  )
}

export default InternalExamDetailVI
