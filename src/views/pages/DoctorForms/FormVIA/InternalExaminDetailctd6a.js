import React, { useEffect, useState } from 'react'
import Form6aDetails from './Form6aDetails'
import { useNavigate } from 'react-router-dom'
import { ButtonBackandSave, Form6AInternalExamination } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const InternalExaminDetailctd6a = ({
  OpinionVIAdetail,
  InternalExaminDetailctd6adetail,
  InternalExamDetailVIAdetail,
  trn,
}) => {
  const [formData, setFormData] = useState({
    iebdomenlargeIns: '',
    iebdomenliver: '',
    iebdomenpancreas: '',
    iebdomenpenitoneum: '',
    iebdomensmallIns: '',
    iebdomenspleen: '',
    iebdomenstomach: '',
    iebdomenurinary: '',
    iebdomenwall: '',
    iebdomenkidenyl: '',
    iebdomenkidenyr: '',
    ielibsmusclesbonesjoints: '',
    ieogansgeneration: '',
  })
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const api = `${apiPrefix}/user/Form6_A/save_internal_examination_detail_ctd`
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
        OpinionVIAdetail(true)
        InternalExaminDetailctd6adetail(false)
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

  // back button
  const handleF3_frstBackClick = () => {
    InternalExamDetailVIAdetail(true)
    InternalExaminDetailctd6adetail(false)
  }

  const apigetData = `${apiPrefix}/user/Form6_A/get_internal_examination_detail_ctd/${trn}`

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
            <tbody>
              <h6>Internal Examination Details CTD..</h6>
              <h6>5.</h6>
              <Form6AInternalExamination
                title="(a)"
                title1="Abdominal Wall(Max. 500 Characters)"
                input1Name="ieabdomenwall"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(b)"
                title1="Peritoneum,Retroperitonem(Max. 500 Characters)"
                input1Name="ieabdomenpenitoneum"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(c)"
                title1="Stomach and its contents Stomach bowel test / Milk(Max. 500 Characters)"
                input1Name="ieabdomenstomach"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(d)"
                title1="Small Intestine and its content / meconium(Max. 500 Characters) "
                input1Name="ieabdomensmallIns"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(e)"
                title1="Large Intestine and its content / meconium(Max. 500 Characters) "
                input1Name="ieabdomenlargeIns"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(f)"
                title1="Liver and Gall Bladder(Max. 500 Characters) "
                input1Name="ieabdomenliver"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(g)"
                title1="Spleen(Max. 500 Characters)"
                input1Name="ieabdomenspleen"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(h)"
                title1=" Pancreas(Max. 500 Characters)"
                input1Name="ieabdomenpancreas"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(i)"
                title1="Kidney(Rt)(Max. 500 Characters) "
                input1Name="ieabdomenkidenyr"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title=""
                title1="Kidney(Lt)(Max. 500 Characters)"
                input1Name="ieabdomenkidenyl"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(j)"
                title1="Urinary Bladder(Max. 500 Characters) "
                input1Name="ieabdomenurinary"
                setFormData={setFormData}
                formData={formData}
              />
              <Form6AInternalExamination
                title="(k)"
                title1="Organs of generation /Sex of Foetus(Position of testicles in males)(Max. 500 Characters)"
                input1Name="ieogansgeneration"
                setFormData={setFormData}
                formData={formData}
              />

              <Form6AInternalExamination
                title="6"
                title1="Limbs ,Muscles ,Bones ,Joints(Inury , Diease, Deformity ,Fracture , Dislocation )-Ossification Centers lower end of femur,upper end of tibia , manubrium , body of sternum ,calcaneum ,talus and cubid*(Max. 500 Characters)"
                input1Name="ielibsmusclesbonesjoints"
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

export default InternalExaminDetailctd6a
