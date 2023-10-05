import React, { useState } from 'react'
import { ButtonBackandSave, Dropdownforms, Redstar } from '../common/Operationradionbutton'
import axios from 'axios'
const StatePenistesticle = ({sampleCollectionForensicDetail,statePenistesticleDetail,maleLocalExaminationDetail,trnid}) => {
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [handleData, setHandleData] = useState({
    commTransactionID: trnid,
     commPenisAndTesticles:'',
	  commAnalSphincters:'',
	  commPerineum:'',
	  commOtherInjuries:'',
	 commProctoscopyConducted:'',
	  commFindings:'',
    createUser: changeuser,
  })
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const url = `${apiPrefix}/user/form3/savestateofthepennies`

  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }

  const handleF3_frstClick = async () => {
    const response = await axios.post(
      url, handleData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
    statePenistesticleDetail(false)
    sampleCollectionForensicDetail(true)
    }
  }
  const handleF3_frstBackClick = () => {
    statePenistesticleDetail(false)
    maleLocalExaminationDetail(true)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>State of the Penis, testicle etc</h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                State of the Penis and testicles : <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="commPenisAndTesticles" type="text" class="form-control" value={handleData.commPenisAndTesticles} onChange={handleChange}></textarea>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                State of anal area including sphincters :<Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="commAnalSphincters" type="text" class="form-control" value={handleData.commAnalSphincters} onChange={handleChange}></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                State of perineum and perineal musculature : <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="commPerineum" type="text" class="form-control" value={handleData.commPerineum} onChange={handleChange}></textarea>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                Other injuries :<Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="commOtherInjuries" type="text" class="form-control" value={handleData.commOtherInjuries} onChange={handleChange}></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                Proctoscopy conducted :<Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <Dropdownforms name='commProctoscopyConducted' handleChange={handleChange} yes='Y' no='N'/>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                Findings: <Redstar />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <textarea name="commFindings" type="text" class="form-control" value={handleData.commFindings} onChange={handleChange}></textarea>
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

export default StatePenistesticle
