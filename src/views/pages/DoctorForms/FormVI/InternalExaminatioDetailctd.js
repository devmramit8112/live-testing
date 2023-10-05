import React, { useEffect, useState } from 'react'
import { ButtonBackandSave, InternalExaminationDetail, SingleInputPro, trn } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const InternalExaminatioDetailctd = ({
  InternalExamDetailVIdetail,
  InternalExaminatioDetailctddetail,
  InternalInjuryDetaildetail,
  trn,
}) => {
  const handleF3_frstBackClick = () => {
    InternalExaminatioDetailctddetail(false)
    InternalExamDetailVIdetail(true)
  }

  const [formData, setFormData] = useState({
    ieabdomen: '',
    ieabdomen_penito: '',
    ieabdomen_stomach: '',
    ieabdomen_smallins: '',
    ieabdomen_largeins: '',
    ieabdomen_liver: '',
    ieabdomen_splen: '',
    ieabdomen_pancre: '',
    ieabdomen_kidenyr: '',
    ieabdomen_kidenyl: '',
    ieabdomen_urinary: '',
    ieogmale: '',
    ieogfemale: '',
    ieoguterus: '',
    ieoguterus_size: '',
    ieoguteruspro: '',
    ieogoveryr: '',
    ieogoveryl: '',
    ieogunkown_eunuch: '',
    wtliver: '',
    wtspleen: '',
    wtkidneyrt: '',
    wtkidneylt: '',
    wtpancreas: '',
    wttestes: '',
    wtovariesrt: '',
    wtovarieslt: '',
    iesuprarenalrt: '',
    iesuprarenallt: '',
    wtsuprarenalrt: '',
    wtsuprarenallt: '',
    lengthsmall_intenstine: '',
    lengthlarge_intenstine: '',
    ieogmaleleft: '',
    wttestesleft: '',
  })

  const enterby = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const gender = localStorage.getItem('gender')
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apiURL = `${apiPrefix}/user/form6/add_internal_examination_ctd`
  const handleF3_frstClick = async () => {
    InternalInjuryDetaildetail(true)
    InternalExaminatioDetailctddetail(false)

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }

      const postData = {
        iexamtransactionid: trn,
        genderid: gender,
        createuser: enterby,
        ...formData, // Spread the formData object here
      }
      const response = await axios.post(apiURL, postData, config)
      if (response.status === 200) {

        console.log(' API Response:', response.data)
      } else {
        console.error(' API Error:', response.status)
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error)
    }
  }

  const apigetData = `${apiPrefix}/user/form6/get_internal_examination_ctd/${trn}`

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
          <h4>Internal Examination Detail CTD</h4>
        </div>
        <div className="card-body">
          <table className="table table-borderless">
            <h6>Abdomen</h6>
            <tbody>

              <SingleInputPro
                title="Abdomen"
                input1Name="ieabdomen"
                formData={formData}
                setFormData={setFormData}
              />

              <InternalExaminationDetail
                title="Peritoneum,Retroperitoneum(Max. 5000 Characters)"
                title2="Stomach and its contents(Max. 5000 Characters)"
                input1Name="ieabdomen_penito"
                input2Name="ieabdomen_stomach"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Small Intestine and its content(Max. 5000 Characters)"
                title2="Length Small Intestine(Max. 15 Characters)"
                input1Name="ieabdomen_smallins"
                input2Name="lengthsmall_intenstine"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Large Intestine and its content(Max. 5000 Characters)"
                title2="Length Large Intestine(Max. 15 Characters)"
                input1Name="ieabdomen_largeins"
                input2Name="lengthlarge_intenstine"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Liver and Gall Bladder(Max. 5000 Characters)"
                title2="Liver Weight(Max. 15 Characters)"
                input1Name="ieabdomen_liver"
                input2Name="wtliver"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Spleen(Max. 5000 Characters)"
                title2="Spleen Weight(Max. 15 Characters)"
                input1Name="ieabdomen_splen"
                input2Name="wtspleen"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Pancreas(Max. 5000 Characters)"
                title2="Pancreas Weight(Max. 15 Characters)"
                input1Name="ieabdomen_pancre"
                input2Name="wtpancreas"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Kidney(Rt) Max. 5000 Characters)"
                title2="Kidney(Rt) Weight (Max. 15 Characters)"
                input1Name="ieabdomen_kidenyr"
                input2Name="wtkidneyrt"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Kidney(Lt) (Max. 5000 Characters)"
                title2="Kidney(Lt) Weight (Max. 15 Characters)"
                input1Name="wtkidneylt"
                input2Name="ieabdomen_kidenyl"
                formData={formData}
                setFormData={setFormData}
              />
              <SingleInputPro
                title="Suprarenal(Rt)(Max. 5000 Characters)"
                input1Name="iesuprarenalrt"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Suprarenal(Rt)Weight(Max. 15 Characters)"
                title2="Suprarenal(Lt)(Max. 5000 Characters)"
                input1Name="wtsuprarenalrt"
                input2Name="iesuprarenallt"
                formData={formData}
                setFormData={setFormData}
              />
              <InternalExaminationDetail
                title="Suprarenal(Lt)Weight(Max. 15 Characters)"
                title2="Urinary Bladder(Max. 5000 Characters)"
                input1Name="wtsuprarenallt"
                input2Name="ieabdomen_urinary"
                formData={formData}
                setFormData={setFormData}
              />

              {/* this fields for male  */}
              {gender === '1' && (
                <>
                  <h4>Organs of generation(Male)</h4>
                  <InternalExaminationDetail
                    title="Testes(Rt)(Max. 5000 Characters)"
                    title2="Testes(Rt) Weight(Max. 15 Characters)"
                    input1Name="ieogmale"
                    input2Name="wttestes"
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <InternalExaminationDetail
                    title="Testes(Lt)(Max. 5000 Characters)"
                    title2="Testes(Lt) Weight(Max. 15 Characters)"
                    input1Name="ieogmaleleft"
                    input2Name="wttestesleft"
                    formData={formData}
                    setFormData={setFormData}
                  />
                </>
              )}

              {/* fields for Female  */}
              {gender === '2' && (
                <>
                  <h4>Organs of generation
                    (Female)</h4>
                  <InternalExaminationDetail
                    title="Uterus(empty or not)(Max. 5000 Characters)"
                    title2="Uterus Size(Max. 5000 Characters)"
                    input1Name="ieoguterus"
                    input2Name="ieoguterus_size"
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <InternalExaminationDetail
                    title="products of cenception(Max. 5000 Characters)"
                    title2="Ovary(Rt)(Max. 5000 Characters)"
                    input1Name="ieoguteruspro"
                    input2Name="ieogoveryr"
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <InternalExaminationDetail
                    title="Overy(Rt) Weight(Max. 15 Characters)"
                    title2="Ovary(Lt)(Max. 5000 Characters)"
                    input1Name="wtovariesrt"
                    input2Name="ieogoveryl"
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <SingleInputPro
                    title="Overy(Lt) Weight(Max. 15 Characters)"
                    input1Name="wtovarieslt"
                    formData={formData}
                    setFormData={setFormData}
                  />

                </>
              )}

            </tbody>
          </table>
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>
  )
}

export default InternalExaminatioDetailctd
