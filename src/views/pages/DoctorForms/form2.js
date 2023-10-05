import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CaseDetails from './common/CaseDetails'
import IdentificationMarks from './comp/IdentificationMarks'
import OPDDetail from './Form2comp/OPDDetail'
import GistofIncident from './Form2comp/GistofIncident'
import Figure from './Form2comp/Figure'
import Figure2 from './Form2comp/Figure2'
import MaterialCollected from './Form2comp/MaterialCollected'
import AdditionalInjury from './Form2comp/AdditionalInjury'
import Formdetail from './common/Formdetails'
import { callApi } from 'src/views/CommonModels/CallApi'
import { HomeButton } from './common/Operationradionbutton'
const form2 = () => {
  const [caseDetail, setCaseDetail] = useState(true)
  const [OPDDetaildetail, setOPDDetaildetail] = useState(false)
  const [GistofIncidentdetail, setGistofIncident] = useState(false)
  const [FigureDetail, setFigureDetail] = useState(false)
  const [Figure2detail, setFigure2detail] = useState(false)
  const [MaterialCollecteddetail, setMaterialCollecteddetail] = useState(false)
  const [AdditionalInjurydetail, setAdditionalInjurydetail] = useState(false)

  const trn = localStorage.getItem('trn')
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [handleData, setHandleData] = useState({
    cdTransactionID: trn,
    cdArrivalDate: '',
    cdArrivalTime: '',
    cdExaminationStartDate: '',
    cdExaminationStartTime: '',
    cdExaminationCompleteDate: '',
    cdExaminationCompleteTime: '',
    cdExaminationPlaceID: '',
    createUser: changeuser,
  })
  const [errors, setErrors] = useState({
    cdArrivalDate: '',
    cdArrivalTime: '',
    cdExaminationStartDate: '',
    cdExaminationStartTime: '',
    cdExaminationPlaceID: '',
  })
  const validateformOTP = () => {
    let valid = true
    const newErrors = {
      cdArrivalDate: '',
      cdArrivalTime: '',
      cdExaminationStartDate: '',
      cdExaminationStartTime: '',
      cdExaminationPlaceID: '',
    }
    if (handleData.cdArrivalDate === null) {
      newErrors.cdArrivalDate = 'Required'
      valid = false
    } else if (handleData.cdArrivalDate.trim() === '') {
      newErrors.cdArrivalDate = 'Required'
      valid = false
    }
    if (handleData.cdArrivalTime === null) {
      newErrors.cdArrivalTime = 'Required'
      valid = false
    } else if (handleData.cdArrivalTime.trim() === '') {
      newErrors.cdArrivalTime = 'Required'
      valid = false
    }
    if (handleData.cdExaminationStartDate === null) {
      newErrors.cdExaminationStartDate = 'Required'
      valid = false
    } else if (handleData.cdExaminationStartDate.trim() === '') {
      newErrors.cdExaminationStartDate = 'Required'
      valid = false
    }
    if (handleData.cdExaminationStartTime === null) {
      newErrors.cdExaminationStartTime = 'Required'
      valid = false
    } else if (handleData.cdExaminationStartTime.trim() === '') {
      newErrors.cdExaminationStartTime = 'Required'
      valid = false
    }
    if (handleData.cdExaminationPlaceID === null) {
      newErrors.cdExaminationPlaceID = 'Required'
      valid = false
    } else if (handleData.cdExaminationPlaceID.trim() === '') {
      newErrors.cdExaminationPlaceID = 'Required'
      valid = false
    }
    setErrors(newErrors)
    return valid
  }
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apicd = `${apiPrefix}/user/form2/savecasedetails`
  const apigetcd = `${apiPrefix}/user/form2/get_casedetails/${trn}`

  useEffect(() => {
    callApi(apigetcd)
      .then((response) => {
        setHandleData(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }
  const handleF3_frstClick = async () => {
    if (validateformOTP()) {
      const response = await axios.post(apicd, handleData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.status === 200) {
        setCaseDetail(false)
        setOPDDetaildetail(true)
      }
    }
  }
  return (
    <div className="Container">
      <HomeButton />
      <Formdetail title="Form-II Medical Legal Report- Injury" trnid={trn} />
      {caseDetail && (
        <div className="card mt-2 mb-2">
          <div className="card-header text-center p-3 mb-2  Headingcolorcard">
            <h4>Examination Place & Patient Identification Detail</h4>
          </div>
          <div className="card-body">
            <CaseDetails
              title3="Case Details"
              title=" Arrival  Date & Time"
              title1="Examination  Date & Time"
              title2="Examination Place"
              handleChange={handleChange}
              handleData={handleData}
              errors={errors}
            ></CaseDetails>

            <div className=" mt-2">
              <div className=" text-center p-3 mb-3 ">
                <h4>Patient Identification Marks </h4>
              </div>
              <div className="card-body">
                <div className="row justify-content-center">
                  <IdentificationMarks />

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
      {OPDDetaildetail && (
        <OPDDetail
          OPDDetaildetail={setOPDDetaildetail}
          GistofIncidentdetail={setGistofIncident}
          caseDetail={setCaseDetail}
          trn={trn}
        />
      )}
      {GistofIncidentdetail && (
        <GistofIncident
          OPDDetaildetail={setOPDDetaildetail}
          FigureDetail={setFigureDetail}
          GistofIncidentdetail={setGistofIncident}
          trn={trn}
        />
      )}
      {FigureDetail && (
        <Figure
          FigureDetail={setFigureDetail}
          GistofIncidentdetail={setGistofIncident}
          Figure2detail={setFigure2detail}
          trn={trn}
          imgid={1}
        />
      )}
      {Figure2detail && (
        <Figure2
          FigureDetail={setFigureDetail}
          MaterialCollecteddetail={setMaterialCollecteddetail}
          Figure2detail={setFigure2detail}
          trn={trn}
          imgid={10}
        />
      )}
      {MaterialCollecteddetail && (
        <MaterialCollected
          MaterialCollecteddetail={setMaterialCollecteddetail}
          Figure2detail={setFigure2detail}
          AdditionalInjurydetail={setAdditionalInjurydetail}
          trn={trn}
        />
      )}
      {AdditionalInjurydetail && (
        <AdditionalInjury
          AdditionalInjurydetail={setAdditionalInjurydetail}
          MaterialCollecteddetail={setMaterialCollecteddetail}
          trn={trn}
          imgid10={10}
          imgid1={1}
        />
      )}
    </div>
  )
}

export default form2
