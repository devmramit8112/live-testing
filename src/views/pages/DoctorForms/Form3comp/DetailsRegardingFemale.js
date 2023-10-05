import React from 'react'
import { DetailsRegardingPenetration, Formdetail3, Formdetail3input } from './Form3details'
import { ButtonBackandSave } from '../common/Operationradionbutton'
const DetailsRegardingFemale = ({
  examinDetail,
  regFeDetail,
  femaleLocalExaminationDetail,
  trnid,
}) => {
  const [handleData, setHandleData] = useState({
    cfeTransactionID: trnid,
    cfeWasPenetration: '',
    cfeMethod: '',
    cfeWasOralSex: '',
    cfeMasturbationByAssailent: '',
    cfeMasturbationByVictim: '',
    cfeIsCondomUsed: '',
    cfeLocationCondomUsedIfYes6: '',
    cfeEjaculation: '',
    cfeLocationEjaculation: '',
    cfeKissingEtc: '',
    cfeLocationKiss: '',
    cfeIsObjectDetail: '',
    cfeObjectDetail: '',
    cfeIsPreintercourse: '',
    cfePreintercourseDetail: '',
    cfeVictimMentuating: '',
    cfeSinceVaginalBleed: '',
    cfePriorVaginalBleed: '',
    cfeIQAssessementOfPatient: '',
    cfeBath: '',
    cfeWash: '',
    cfeUrinate: '',
    cfeDefecate: '',
    cfeUseSpermide: '',
    cfeAnalDischargeBleeding: '',
    cfeReferalAdvice: '',
    cfeEmergencycontraception: '',
    createUser: changeuser,
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...handleData, [name]: value })
  }
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const url = `${apiPrefix}/user/form3/savedetailspenetrationfemalevicitm`
  const handleF3_frstClick = async () => {
    const response = await axios.post(url, handleData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
      regFeDetail(false)
      femaleLocalExaminationDetail(true)
    }
  }
  const handleF3_frstBackClick = () => {
    regFeDetail(false)
    examinDetail(true)
  }

  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Details Regarding Penetration (as narrated by female vicitm / accused /guardian)</h4>
        </div>
        <div className="card-body">
          <DetailsRegardingPenetration
            title2="(m) Between the assault and the time of the examination did the patient:"
            handleChange={handleChange}
            handleData={handleData}
            detailinput={detailinput}
            setDetailInput={setDetailInput}
          />
          {/* <DetailsRegardingPenetration
            title2="(m) Between the assault and the time of the examination did the patient:"
            handleChange={handleChange}
            handleData={handleData}
          /> */}
          <Formdetail3input
            title="(h) Whether condom was used by the assailant/alleged accused ?   "
            title1="If yes, describe location"
            handleChange={handleChange}
            handleData={handleData}
          />
          <Formdetail3input
            title="(i)Was there any H/O previous intercourse prior to the assault? (other than assault)  "
            title1="If yes, when"
            handleChange={handleChange}
            handleData={handleData}
          />
          <Formdetail3
            title="(j)  Was the victim menstruating at the time of the assault?    "
            handleChange={handleChange}
            handleData={handleData}
          />
          <Formdetail3
            title="(k) Since the assault, has there been any vaginal discharge/bleeding?    "
            handleChange={handleChange}
            handleData={handleData}
          />
          <Formdetail3
            title="(l) Prior to the assault, has there been any vaginal discharge/bleeding?  "
            handleChange={handleChange}
            handleData={handleData}
          />

          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>
  )
}

export default DetailsRegardingFemale
