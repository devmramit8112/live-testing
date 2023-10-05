import React, { useState } from 'react'
import axios from 'axios'
import { ButtonBackandSave, Redstar } from '../common/Operationradionbutton'
import { useEffect } from 'react'
import { callApi } from 'src/views/CommonModels/CallApi'

const 
ReferralAdviceOpinion = ({sampleCollectionForensicDetail,referralAdviceOpinion,additionalComment3Detail,trnid}) => {
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [handleData, setHandleData] = useState({
    dropTransactionID: trnid,
    dropAge: '',
    dropEvidenceInjury: '',
    dropEvidenceIntercource: '',
    dropEvidenceAbuse: '',
    dropInvstigationLabAndRadiologist: '',
    dropAfterLabTest: '',
    dropOpinionFinal: '',
    cfeReferalAdvice: '',
    createUser: changeuser,
  })
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const url = `${apiPrefix}/user/form3/savedropenion`
  const url2 = `${apiPrefix}/user/form3/getdropenion/${trnid}`
  useEffect(()=>{
    callApi(url2)
    .then((response) => {
     setHandleData(response)
    })
    .catch((error) => {
      console.error('API request failed:', error)
    })
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }

  const handleF3_frstClick = async () => {
    const response = await axios.post(url, handleData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
     
    referralAdviceOpinion(false)
    additionalComment3Detail(true)
    }
  }
  const handleF3_frstBackClick = () => {
    referralAdviceOpinion(false)
    sampleCollectionForensicDetail(true)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Referral/Advice & Opinion</h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                Referral/Advice
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="cfeReferalAdvice" type="text" class="form-control" value={handleData.cfeReferalAdvice} onChange={handleChange}></textarea>
              </div>
            </div>
            <p>27.Remarks</p>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                1. Age.
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="dropAge" type="text" class="form-control" value={handleData.dropAge} onChange={handleChange}></textarea>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                2. Evidence of injury if any{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="dropEvidenceInjury" type="text" class="form-control" value={handleData.dropEvidenceInjury} onChange={handleChange}></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                3. Evidence of intercourse : <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="dropEvidenceIntercource" type="text" class="form-control" value={handleData.dropEvidenceIntercource} onChange={handleChange}></textarea>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                4.Evidence of child sexual abuse <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="dropEvidenceAbuse" type="text" class="form-control" value={handleData.dropEvidenceAbuse} onChange={handleChange}></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                5. Investigation(Lab and Radiological):
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="dropInvstigationLabAndRadiologist" type="text" class="form-control" value={handleData.dropInvstigationLabAndRadiologist} onChange={handleChange}></textarea>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                6. Laboratory test reports (If Any):
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="dropAfterLabTest" type="text" class="form-control" value={handleData.dropAfterLabTest} onChange={handleChange}></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                7. Opinion
                <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="dropOpinionFinal" type="text" class="form-control" value={handleData.dropOpinionFinal} onChange={handleChange}></textarea>
              </div>
            </div>
            <ButtonBackandSave
              backButton={handleF3_frstBackClick}
              savebutton={handleF3_frstClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralAdviceOpinion
