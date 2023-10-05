import React, { useEffect, useState } from 'react'
import HospitalsDetail from './FormVIA/HospitalsDetail'
import GeneralDescriptionVIA from './FormVIA/GeneralDescriptionVIA'
import SymptomsobservedVIA from './FormVIA/SymptomsobservedVIA'
import PostMortemChangesVIA from './FormVIA/PostMortemChangesVIA'
import ExaminationExternalInjuriesVIA from './FormVIA/ExaminationExternalInjuriesVIA'
import InternalExamDetailVIA from './FormVIA/InternalExamDetailVIA'
import InternalExaminDetailctd6a from './FormVIA/InternalExaminDetailctd6a'
import OpinionVIA from './FormVIA/OpinionVIA'
import HandedOverPoliceVIA from './FormVIA/HandedOverPoliceVIA'
import Formdetail from './common/Formdetails'
import CaseDetail6A from './CaseDetail6A'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const Form6A = () => {
  const [caseDetail, setCaseDetail] = useState(true)
  const [BodyInquestPaperRDetail, setBodyInquestPaperRDetail] = useState(true)
  const [HospitalsDetailss, setHospitalsDetailss] = useState(false)
  const [SymptomsobservedVIAdetail, setSymptomsobservedVIAdetail] = useState(false)
  const [GeneralDescriptionVIAdetail, setGeneralDescriptionVIAdetail] = useState(false)
  const [PostMortemChangesVIAdetail, setPostMortemChangesVIAdetail] = useState(false)
  const [ExaminationExternalInjuriesVIAdetail, setExaminationExternalInjuriesVIAdetail] =
    useState(false)
  const [InternalExamDetailVIAdetail, setInternalExamDetailVIAdetail] = useState(false)
  const [InternalExaminDetailctd6adetail, setInternalExaminDetailctd6adetail] = useState(false)
  const [OpinionVIAdetail, setOpinionVIAdetail] = useState(false)
  const [HandedOverPoliceVIAdetail, setHandedOverPoliceVIAdetail] = useState(false)

  const trn = localStorage.getItem('trn')
  const token = localStorage.getItem('token')
  const enterby = localStorage.getItem('username')

  const [formData, setFormData] = useState({
    br_bodyinquestdate: '',
    br_bodyinquesttime: '',
    br_commencementautopsydate: '',
    br_commencementautopsytime: '',
    br_whencebroughtreferral: '',
  })

  const handleFormDataChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const api = `${apiPrefix}/user/Form6_A/save_body_inquestpaper_receiptdetail`

  const handleF3_frstClick = async () => {
    console.log(' Data:', formData)
    setCaseDetail(false)
    setHospitalsDetailss(true)
    // setBodyInquestPaperRDetail(true)

    setBodyInquestPaperRDetail(false)

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }

      const postData = {
        br_transactionid: trn,
        createuser: enterby,
        ...formData, // Spread the formData object here
      }
      const response = await axios.post(api, postData, config)
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
  // get all data  
  const apiGet = `${apiPrefix}/user/Form6_A/get_body_inquestpaper_receiptdetail/${trn}`
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
    <>
      <div className="Container">
        <Formdetail title="Form VI: Post Mortem Examination Report (FOETUS)" trnid={trn} />
        {BodyInquestPaperRDetail && (
          <div className="card mt-2 mb-2">
            <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
              <h4>Body/Inquest Paper Receipt Detail</h4>
            </div>
            <div className="card-body">
              <CaseDetail6A
                title="Arrival Date & Time"
                title1="Examination Date & Time"
                title2="Examination Place"
                input1Name="br_bodyinquestdate"
                input2Name="br_commencementautopsydate"
                input3Name="br_whencebroughtreferral"
                selectName1="br_bodyinquesttime"
                selectName2="br_commencementautopsytime"
                onChange={handleFormDataChange}
                setFormData={setFormData}
                formData={formData}
              />
              <div className=" mt-2">
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="row mb-3 ">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleF3_frstClick}
                        >
                          Save and Proceed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {HospitalsDetailss && (
        <HospitalsDetail
          HospitalsDetailss={setHospitalsDetailss}
          BodyInquestPaperRDetail={setBodyInquestPaperRDetail}
          SymptomsobservedVIAdetail={setSymptomsobservedVIAdetail}
          trn={trn}
        />
      )}
      {SymptomsobservedVIAdetail && (
        <SymptomsobservedVIA
          HospitalsDetailss={setHospitalsDetailss}
          GeneralDescriptionVIAdetail={setGeneralDescriptionVIAdetail}
          SymptomsobservedVIAdetail={setSymptomsobservedVIAdetail}
          trn={trn}
        />
      )}
      {GeneralDescriptionVIAdetail && (
        <GeneralDescriptionVIA
          PostMortemChangesVIAdetail={setPostMortemChangesVIAdetail}
          GeneralDescriptionVIAdetail={setGeneralDescriptionVIAdetail}
          SymptomsobservedVIAdetail={setSymptomsobservedVIAdetail}
          trn={trn}
        />
      )}
      {PostMortemChangesVIAdetail && (
        <PostMortemChangesVIA
          PostMortemChangesVIAdetail={setPostMortemChangesVIAdetail}
          GeneralDescriptionVIAdetail={setGeneralDescriptionVIAdetail}
          ExaminationExternalInjuriesVIAdetail={setExaminationExternalInjuriesVIAdetail}
          trn={trn}
        />
      )}{' '}
      {ExaminationExternalInjuriesVIAdetail && (
        <ExaminationExternalInjuriesVIA
          PostMortemChangesVIAdetail={setPostMortemChangesVIAdetail}
          ExaminationExternalInjuriesVIAdetail={setExaminationExternalInjuriesVIAdetail}
          InternalExamDetailVIAdetail={setInternalExamDetailVIAdetail}
          trn={trn}
        />
      )}
      {InternalExamDetailVIAdetail && (
        <InternalExamDetailVIA
          InternalExamDetailVIAdetail={setInternalExamDetailVIAdetail}
          ExaminationExternalInjuriesVIAdetail={setExaminationExternalInjuriesVIAdetail}
          InternalExaminDetailctd6adetail={setInternalExaminDetailctd6adetail}
          trn={trn}
        />
      )}
      {InternalExaminDetailctd6adetail && (
        <InternalExaminDetailctd6a
          InternalExaminDetailctd6adetail={setInternalExaminDetailctd6adetail}
          InternalExamDetailVIAdetail={setInternalExamDetailVIAdetail}
          OpinionVIAdetail={setOpinionVIAdetail}
          trn={trn}
        />
      )}{' '}
      {OpinionVIAdetail && (
        <OpinionVIA
          OpinionVIAdetail={setOpinionVIAdetail}
          HandedOverPoliceVIAdetail={setHandedOverPoliceVIAdetail}
          InternalExaminDetailctd6adetail={setInternalExaminDetailctd6adetail}
          trn={trn}
        />
      )}
      {HandedOverPoliceVIAdetail && (
        <HandedOverPoliceVIA
          HandedOverPoliceVIAdetail={setHandedOverPoliceVIAdetail}
          ExaminationExternalInjuriesVIAdetail={setExaminationExternalInjuriesVIAdetail}
          SymptomsobservedVIAdetail={setSymptomsobservedVIAdetail}
          OpinionVIAdetail={setOpinionVIAdetail}
          trn={trn}
        />
      )}
    </>
  )
}

export default Form6A
