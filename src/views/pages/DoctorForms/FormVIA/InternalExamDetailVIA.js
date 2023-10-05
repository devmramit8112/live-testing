import React, { useEffect, useState } from 'react'
import BodyInquestPaperRD from '../common/BodyInquestPaperRD'
import IdentificationMarkscomp from '../common/IdentificationMarkscomp'
import Header from '../common/Header'
import DetailsView from '../common/DetailsView'
import { useNavigate } from 'react-router-dom'
import InternalExaminationDetail from '../common/InternalExaminationDetail'
import Form6aDetails from './Form6aDetails'
import {
  ButtonBackandSave,
  Form6AInternalExamination,
  Redstar,
} from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const InternalExamDetailVIA = ({
  InternalExaminDetailctd6adetail,
  InternalExamDetailVIAdetail,
  ExaminationExternalInjuriesVIAdetail,
  trn,
}) => {
  const handleF3_frstBackClick = () => {
    InternalExamDetailVIAdetail(false)
    ExaminationExternalInjuriesVIAdetail(true)
  }
  const [formData, setFormData] = useState({
    iecraniumspinalcord: '',
    iescalpcaputhair: '',
    iemeaningbrainconvolutions: '',
    ieeyelidspupilliarymembrane: '',
    ieears: '',
    iebrain: '',
    ieneck: '',
    ielarynuxtrachea: '',
    ienecknoteforeignbody: '',
    iethoraxcheastwall: '',
    iethoraxpleuracavity: '',
    iethoraxlungsrt: '',
    iethoraxlungslt: '',
    iethoraxlungshydrostatictest: '',
    iethoraxheart: '',
    iethoraxthymus: '',
  })

  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const api = `${apiPrefix}/user/Form6_A/save_internal_examination_detail`
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
        iexamtransactionid: trn,
        createuser: enterby,
      }

      const response = await axios.post(api, postData, config)

      if (response.status === 200) {
        InternalExaminDetailctd6adetail(true)
        InternalExamDetailVIAdetail(false)
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

  const apigetData = `${apiPrefix}/user/Form6_A/get_internal_examination_detail/${trn}`

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
          <h4>Internal Examination Detail</h4>
        </div>
        <div className="card-body">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Sr.</th>
                <th scope="col">Component</th>
                <th scope="col">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <h6>1</h6>
              <Form6AInternalExamination
                title="(a)"
                title1="Examination of External Injuries (Max. 8000 Characters)"
                input1Name="iecraniumspinalcord"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(b)"
                title1="Scalp (caput) / Scap hair(Max. 500 Characters)"
                input1Name="iescalpcaputhair"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(c)"
                title1="Meninges / Brain / convolutions(Max. 500 Characters) "
                input1Name="iemeaningbrainconvolutions"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(d)"
                title1="Eyebrows / Eyelashes(Max. 500 Characters) "
                input1Name="ieeyebrowseyelashes"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(e)"
                title1="Eyelids / pupillary membrane / Eyes(Max. 500 Characters) "
                input1Name="ieeyelidspupilliarymembrane"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(f)"
                title1="Ears(Max. 500 Characters) "
                input1Name="ieears"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(g)"
                title1="(Brain must be exposed in every case. Spinal cord need not to be examined except in caseof injury to vertebral column / spinal Cord(Max. 500 Characters) "
                input1Name="iebrain"
                setFormData={setFormData}
                formData={formData}
              />
              <h6>2</h6>
              <Form6AInternalExamination
                title="(a)"
                title1=" Mouth,Pharyx & Oesophagus (Max. 500 Characters)"
                input1Name="iemouthpharyxoesophagus"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(b)"
                title1="Note any foreign body (Max. 500 Characters) "
                input1Name="ienoteforeignbody"
                setFormData={setFormData}
                formData={formData}
              />

              <Form6AInternalExamination
                title="3"
                title1="Neck(Max. 500 Characters)"
                input1Name="ieneck"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(a)"
                title1="Larynx & Trachea (Max. 500 Characters) "
                input1Name="ielarynuxtrachea"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(b)"
                title1="Note any foreign body (Max. 500 Characters)"
                input1Name="ienecknoteforeignbody"
                setFormData={setFormData}
                formData={formData}
              />
              <h6>
                4 Thorax <Redstar />
              </h6>
              <Form6AInternalExamination
                title="(a)"
                title1="Chest Wall, Ribs / Sternum and Cartilage (Max. 500 Characters)"
                input1Name="iethoraxcheastwall"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(b)"
                title1="Pleura / pleural Cavity (Max. 500 Characters)"
                input1Name="iethoraxpleuracavity"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(c)"
                title1="Lungs (wt., colour,consistency ,edges,crepts,collapse,consolidation,motling)(Max. 500 Characters)"
                input1Name="iethoraxlungs"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title=""
                title1="Lungs (Rt)(Max. 500 Characters)"
                input1Name="iethoraxlungsrt"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title=""
                title1="Lungs (Lt)(Max. 500 Characters)"
                input1Name="iethoraxlungslt"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title=""
                title1="Hydrostatic Test(Max. 500 Characters)"
                input1Name="iethoraxlungshydrostatictest"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(d)"
                title1="Heart,Pericardium , Large vessels(any malformation)(Max. 500 Characters)"
                input1Name="iethoraxheart"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(e)"
                title1="Thymus(Max. 500 Characters)"
                input1Name="iethoraxthymus"
                setFormData={setFormData}
                formData={formData}
              />
            </tbody>
          </table>
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>
  )
}

export default InternalExamDetailVIA
