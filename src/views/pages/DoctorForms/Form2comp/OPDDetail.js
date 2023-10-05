import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi' 
import PoliceStationDropdownSelection from '../../AdminReg/userRegistrationForms/commonComponentForRegistration/PoliceStationDropdownSelection'
import { ButtonBackandSave, DropdownformsYesNo, Redstar, TimeComp } from '../common/Operationradionbutton'
const OPDDetail = ({ GistofIncidentdetail, OPDDetaildetail, caseDetail,trn }) => {
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  
const [ispsother, setpsother] = useState(false)
const [identget, setIdentget] = useState([])
const [isDisable, setDisable] = useState(false)
const [rowId, setrowId] = useState('')
const [Witness, setWitness] = useState(false)
const [Admitted, setAdmitted] = useState(false)
const [DyingDeclaration, setDyingDeclaration] = useState(false)
const [Magistrate, setMagistrate] = useState(true)
const [DyingDeclarationPolice, setDyingDeclarationPolice] = useState(false)
const [ispsFinalother, setpsFinalother] = useState(false)

const apiPrefix = process.env.REACT_APP_API_PREFIX
const apifinalsubmit = `${apiPrefix}/user/form2/add_OPD_IPD_details`

const [handleFinalData, setHandleFinalData] = useState({
  opdtransactionid:trn,
  opdreferredfrom: '',
  admitted: 'N',
  ipdcrno: '',
  ipddate: '',
  ipdward: '',
  dying_Declaration_necessary: 'N',
  magistrate_Informed: 'Y',
  mgiNameofInformer: '',
  mgiDate: '',
  mgiTime: '',
  mgiPoliceStation: '',
  recorded_time_examination: 'N',
  ddpname: '',
  ddpdesignation: '',
  ddpbeltno: '',
  ddp_scode: '',
  ddp_dcode:'',
  ddp_pscode: '',
  ddp_psother:'',
  createuser: changeuser,
})

const [errors, setErrors] = useState({
  opdreferredfrom: '',
  admitted: 'N',
  ipdcrno: '',
  ipddate: '',
  ipdward: '',
  dying_Declaration_necessary: 'N',
  magistrate_Informed: 'Y',
  mgiNameofInformer: '',
  mgiDate: '',
  mgiTime: '',
  mgiPoliceStation: '',
  recorded_time_examination: 'N',
  ddpname: '',
  ddpdesignation: '',
  ddpbeltno: '',
  ddp_scode: '',
  ddp_dcode:'',
  ddp_pscode: '',
  ddp_psother:'',
})
const validateformOTP = () => {
  let valid = true
  const newErrors = {
    opdreferredfrom: '',
    admitted: 'N',
    ipdcrno: '',
    ipddate: '',
    ipdward: '',
    dying_Declaration_necessary: 'N',
    magistrate_Informed: 'Y',
    mgiNameofInformer: '',
    mgiDate: '',
    mgiTime: '',
    mgiPoliceStation: '',
    recorded_time_examination: 'N',
    ddpname: '',
    ddpdesignation: '',
    ddpbeltno: '',
    ddp_scode: '',
    ddp_dcode:'',
    ddp_pscode: '',
    ddp_psother:'',
  }
  if (handleFinalData.opdreferredfrom.trim() === '' || handleFinalData.opdreferredfrom.trim() === null) {
    newErrors.opdreferredfrom = 'Required'
    valid = false
  }
  if (handleFinalData.admitted.trim() === '' || handleFinalData.admitted.trim() === null) {
    newErrors.admitted = 'Required'
    valid = false
  }

  if (handleFinalData.ipdcrno.trim() === '' || handleFinalData.ipdcrno.trim() === null) {
    newErrors.ipdcrno = 'Required'
    valid = false
  }
  if (handleFinalData.ipddate.trim() === '' || handleFinalData.ipddate.trim() === null) {
    newErrors.ipddate = 'Required'
    valid = false
  }
  if (handleFinalData.ipdward.trim() === '' || handleFinalData.ipdward.trim() === null) {
    newErrors.ipdward = 'Required'
    valid = false
  }
  if (handleFinalData.dying_Declaration_necessary.trim() === '' || handleFinalData.dying_Declaration_necessary.trim() === null) {
    newErrors.dying_Declaration_necessary = 'Required'
    valid = false
  }
  if (handleFinalData.magistrate_Informed.trim() === '' || handleFinalData.magistrate_Informed.trim() === null) {
    newErrors.magistrate_Informed = 'Required'
    valid = false
  }
  if (handleFinalData.mgiNameofInformer.trim() === '' || handleFinalData.mgiNameofInformer.trim() === null) {
    newErrors.mgiNameofInformer = 'Required'
    valid = false
  }
  if (handleFinalData.mgiDate.trim() === '' || handleFinalData.mgiDate.trim() === null) {
    newErrors.mgiDate = 'Required'
    valid = false
  }
  if (handleFinalData.mgiTime.trim() === '' || handleFinalData.mgiTime.trim() === null) {
    newErrors.mgiTime = 'Required'
    valid = false
  }
  if (handleFinalData.mgiPoliceStation.trim() === '' || handleFinalData.mgiPoliceStation.trim() === null) {
    newErrors.mgiPoliceStation = 'Required'
    valid = false
  }
  if (handleFinalData.recorded_time_examination.trim() === '' || handleFinalData.recorded_time_examination.trim() === null) {
    newErrors.recorded_time_examination = 'Required'
    valid = false
  }

  if (handleFinalData.ddpname.trim() === '' || handleFinalData.ddpname.trim() === null) {
    newErrors.ddpname = 'Required'
    valid = false
  }
  if (handleFinalData.ddpdesignation.trim() === '' || handleFinalData.ddpdesignation.trim() === null) {
    newErrors.ddpdesignation = 'Required'
    valid = false
  }
  if (handleFinalData.ddpbeltno.trim() === '' || handleFinalData.ddpbeltno.trim() === null) {
    newErrors.ddpbeltno = 'Required'
    valid = false
  }
  if (handleFinalData.ddp_scode.trim() === '' || handleFinalData.ddp_scode.trim() === null) {
    newErrors.ddp_scode = 'Required'
    valid = false
  }

  if (handleFinalData.ddp_dcode.trim() === '' || handleFinalData.ddp_dcode.trim() === null) {
    newErrors.ddp_dcode = 'Required'
    valid = false
  }
  if (handleFinalData.ddp_pscode.trim() === '' || handleFinalData.ddp_pscode.trim() === null) {
    newErrors.ddp_pscode = 'Required'
    valid = false
  }
  // if (handleFinalData.ddp_psother.trim() === '' || handleFinalData.ddp_psother.trim() === null) {
  //   newErrors.ddp_psother = 'Required'
  //   valid = false
  // }
  setErrors(newErrors)
  return valid
}
const apiident = `${apiPrefix}/user/form2/add_witness_details`
const apiidentupdate = `${apiPrefix}/user/form2/update_witness_details`
const apiidentget = `${apiPrefix}/user/form2/get_witness_details/${trn}`
const apiidentgetbyrowid = `${apiPrefix}/user/form2/get_witness_details_byid/`
const apiidentdelete = `${apiPrefix}/user/form2/delete_witness_details_byid/`
const apigetopddet = `${apiPrefix}/user/form2/get_OPD_IPD_details/${trn}`

  const [handleData, setHandleData] = useState({
    wdtransactionid:trn,
    wdname: '',
    wdaddress: '',
    wd_scode: '',
    wd_dcode: '',
    wd_pscode: '',
    wdrelationid: '',
    wdcontact: '',
    wd_psother: '',
    createuser: changeuser,
    cdExaminationStartHour:'',
    cdExaminationStartMint:'',
  })
  const [errors1, setErrors1] = useState({
    wdname: '',
    wdaddress: '',
    wd_scode: '',
    wd_dcode: '',
    wd_pscode: '',
    wdrelationid: '',
    wdcontact: '',
    wd_psother: '',
    cdExaminationStartHour:'',
    cdExaminationStartMint:'',
  })
  const validateformOTP1 = () => {
    let valid = true
    const newErrors = {
      wdname: '',
    wdaddress: '',
    wd_scode: '',
    wd_dcode: '',
    wd_pscode: '',
    wdrelationid: '',
    wdcontact: '',
    wd_psother: '',
    cdExaminationStartHour:'',
    cdExaminationStartMint:'',
    }
    if (handleData.wdname.trim() === '' || handleData.wdname.trim() === null) {
      newErrors.wdname = 'Required'
      valid = false
    }
    if (handleData.wdaddress.trim() === '' || handleData.wdaddress.trim() === null) {
      newErrors.wdaddress = 'Required'
      valid = false
    }
  
    if (handleData.wd_scode.trim() === '' || handleData.wd_scode.trim() === null) {
      newErrors.wd_scode = 'Required'
      valid = false
    }
    if (handleData.wd_dcode.trim() === '' || handleData.wd_dcode.trim() === null) {
      newErrors.wd_dcode = 'Required'
      valid = false
    }
    if (handleData.wd_pscode.trim() === '' || handleData.wd_pscode.trim() === null) {
      newErrors.wd_pscode = 'Required'
      valid = false
    }
    if (handleData.wdrelationid.trim() === '' || handleData.wdrelationid.trim() === null) {
      newErrors.wdrelationid = 'Required'
      valid = false
    }
    if (handleData.wdcontact.trim() === '' || handleData.wdcontact.trim() === null) {
      newErrors.wdcontact = 'Required'
      valid = false
    }
    if (handleData.cdExaminationStartHour.trim() === '' || handleData.cdExaminationStartHour.trim() === null) {
      newErrors.cdExaminationStartHour = 'Required'
      valid = false
    }
    if (handleData.cdExaminationStartMint.trim() === '' || handleData.cdExaminationStartMint.trim() === null) {
      newErrors.cdExaminationStartMint = 'Required'
      valid = false
    }
   
    // if (handleData.wd_psother.trim() === '' || handleData.wd_psother.trim() === null) {
    //   newErrors.wd_psother = 'Required'
    //   valid = false
    // }
    setErrors1(newErrors)
    return valid
  }
  useEffect(() => {
   
    callApi(apiidentget)
        .then((response) => {
          setIdentget(response)
        })
        .catch((error) => {
          console.error('API request failed:', error)
        })
        callApi(apigetopddet)
        .then((response) => {
         console.log(response)
         setHandleFinalData(response)
          setHandleData(response)
        })
        .catch((error) => {
          console.error('API request failed:', error)
        })
        
  },[])

  const handleFinalChange =(e)=>{
    const { name, value } = e.target
    setHandleFinalData({...handleFinalData,[name]:value})
  }

  const onInputFinalChange =(value)=>{
    setHandleFinalData({...handleFinalData,'ddp_scode':value})
  }
  
  const onDistrictFinalChange =(value)=>{
    setHandleFinalData({...handleFinalData,'ddp_dcode':value})
  }
  
  const onPoliceFinalChange =(value)=>{
    setHandleFinalData({...handleFinalData,'ddp_pscode':value})
  }
  

  const handleF3_frstClick = async () => {
    // if (validateformOTP()) {
    handleFinalData.opdtransactionid=trn
    handleFinalData.createuser=changeuser
    if(Admitted===true){
handleFinalData.admitted='Y'
    }else{
      handleFinalData.admitted='N'
    }
    console.log(handleFinalData)
    const response = await axios.post(
      apifinalsubmit,handleFinalData,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    if (response.status === 200) {
    GistofIncidentdetail(true)
    OPDDetaildetail(false)
    }
  // }
  }
  const handleF3_frstBackClick = () => {
    OPDDetaildetail(false)
    caseDetail(true)
  }
 
  const handleClick = () => {
    setAdmitted(!Admitted)
  }
 

  
  const handleChange = (e) => {
    if(e.target.value==='Y'){
      setDyingDeclaration(true)
      handleFinalData.dying_Declaration_necessary='Y'
    }else if(e.target.value==='N'){
      setDyingDeclaration(false)
      handleFinalData.dying_Declaration_necessary='N'
    }
  }
  const handlemagistrate_InformedChange = (e) => {
    
    if(e.target.value==='Y'){
      setMagistrate(true)
    setWitness(false)
    handleFinalData.magistrate_Informed='Y'
    }else if(e.target.value==='N'){
      setMagistrate(false)
      setWitness(true)
      handleFinalData.magistrate_Informed='N'
    }
 
  }
  const handlerecorded_time_examinationChange = (e) => {
    if(e.target.value==='Y'){
      setDyingDeclarationPolice(true)
      handleFinalData.recorded_time_examination='Y'
    }else if(e.target.value==='N'){
      setDyingDeclarationPolice(false)
      handleFinalData.recorded_time_examination='N'
    }
  }
  
  
const handleWitnessChange =(e)=>{
  const { name, value } = e.target
  setHandleData({...handleData,[name]:value})
}

const onInputChange =(value)=>{
  setHandleData({...handleData,'wd_scode':value})
}

const onDistrictChange =(value)=>{
  setHandleData({...handleData,'wd_dcode':value})
}

const onPoliceChange =(value)=>{
  setHandleData({...handleData,'wd_pscode':value})
}

const handleAddWitnessClick = async ()=>{
  // if (validateformOTP1()) {
  const response = await axios.post(
    apiident,handleData,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  )
  if (response.status === 200) {
    callApi(apiidentget)
    .then((response) => {
     //console.log(response)
      setIdentget(response)
    })
    .catch((error) => {
      console.error('API request failed:', error)
    })
    setHandleData({
      wdtransactionid:trn,
      wdname: '',
      wdaddress: '',
      wd_scode: '',
      wd_dcode: '',
      wd_pscode: '',
      wdrelationid: '',
      wdcontact: '',
      wd_psother: '',
      createuser: changeuser,
    })
  }
// }
}
const handleUpdateWitnessClick = async ()=>{
  handleData.rowid = rowId;
  const response = await axios.put(
    apiidentupdate,handleData,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  )
  if (response.status === 200) {
    callApi(apiidentget)
    .then((response) => {
     // console.log(response)
      setIdentget(response)
    })
    .catch((error) => {
      console.error('API request failed:', error)
    })
    setHandleData({
      wdtransactionid:trn,
      wdname: '',
      wdaddress: '',
      wd_scode: '',
      wd_dcode: '',
      wd_pscode: '',
      wdrelationid: '',
      wdcontact: '',
      wd_psother: '',
      createuser: changeuser,
    })
    setDisable(false)
   
  }
}
const handleCancleWitnessClick =()=>{
  setHandleData({
    wdtransactionid:trn,
    wdname: '',
    wdaddress: '',
    wd_scode: '',
    wd_dcode: '',
    wd_pscode: '',
    wdrelationid: '',
    wdcontact: '',
    wd_psother: '',
    createuser: changeuser,
  })
  setDisable(false)
}
const handleEditWitnessClick =rowid=>{
  callApi(apiidentgetbyrowid+rowid)
  .then((response) => {
   setHandleData({
    wdtransactionid:trn,
    wdname: response.wdname,
    wdaddress: response.wdaddress,
    wd_scode: response.wd_scode,
    wd_dcode: response.wd_dcode,
    wd_pscode: response.wd_pscode,
    wdrelationid: response.wdrelationid,
    wdcontact: response.wdcontact,
    wd_psother: response.wd_psother,
    createuser: changeuser,
    
  })
  setrowId(rowid)
  setDisable(true)
  })
  .catch((error) => {
    console.error('API request failed:', error)
  })
}
const handleDeleteWitnessClick = async rowid=>{
  setrowId(rowid)
  const response = await axios.delete(
    apiidentdelete+rowid,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  )
  if (response.status === 200) {
    setrowId('')
    callApi(apiidentget)
    .then((response) => {
     // console.log(response)
      setIdentget(response)
    })
    .catch((error) => {
      console.error('API request failed:', error)
    })
    setHandleData({
      wdtransactionid:trn,
      wdname: '',
      wdaddress: '',
      wd_scode: '',
      wd_dcode: '',
      wd_pscode: '',
      wdrelationid: '',
      wdcontact: '',
      wd_psother: '',
      createuser: changeuser,
    })
  }
}

  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>OPD Detail , IPD Detail(if Any) & Dying declaration(if Any)</h4>
        </div>
        <div className="card-body">
          <div className="">
            <div className="text-center p-3 mb-3 ">
              <h4>Other Details</h4>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="row mb-3">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    OPD No
                    <Redstar /> (Max. 20 Characters)
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <input name="opdnumber" type="text" className="form-control" value={handleFinalData.opdnumber} onChange={handleFinalChange}/>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    Reffered To (Max. 500 Characters)
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <input name="opdreferredfrom" type="text" className="form-control" value={handleFinalData.opdreferredfrom} onChange={handleFinalChange}/>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <input id=" " type="checkbox" name="chkVictimAdmitted" onClick={handleClick} />
                    Admitted
                  </div>
                </div>
              </div>
              {Admitted && (
                <div className="">
                  <div className=" text-center p-3 mb-3">
                    <h4>Admitted </h4>
                  </div>
                  <div className="card-body">
                    <div className="row justify-content-center">
                      <div className="row mb-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                          C.R. No /Emergency No (Max. 15 Characters)
                          <Redstar />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                          <input name="ipdcrno" type="text" className="form-control" value={handleFinalData.ipdcrno} onChange={handleFinalChange} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Date</div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                          <input name="ipddate" type="date" class="form-control" value={handleFinalData.ipddate} onChange={handleFinalChange}/>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                          Ward (Max. 15 Characters)
                          <Redstar />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                          <input name="ipdward" type="text" className="form-control" value={handleFinalData.ipdward} onChange={handleFinalChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                          Where Dying Declaration is necessary, indicate Steps
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
<DropdownformsYesNo name='dying_Declaration_necessary' handleChange={handleChange} yes='Y' no='N'/>
                        </div>
                      </div>

                      {DyingDeclaration && (<>
                        <div className="">
                          <div className=" text-center p-3  ">
                            <h4>If Dying Declaration Necessary </h4>
                          </div>
                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                Magistrate Informed?
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                              <select class="form-select" aria-label="Default select example" name='magistrate_Informed' onChange={handlemagistrate_InformedChange}>
      <option value='Y' selected>Yes</option>
      <option value='N' >No</option>
    </select>
                              
                              </div>
                            </div>
                          </div>
                        </div>
                      {Magistrate && (
                        <div className="">
                          <div className=" text-center p-3  ">
                            <h4>Magistrate Informer Detail</h4>
                          </div>
                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                Name of Person carring information/ Any Other (Max. 50 Characters)
                                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="mgiNameofInformer" type="text" className="form-control" value={handleFinalData.mgiNameofInformer} onChange={handleFinalChange} />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Date & Time
                                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="mgiDate" type="date" class="form-control" value={handleFinalData.mgiDate} onChange={handleFinalChange} />
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="mgiTime" type="time" class="form-control" value={handleFinalData.mgiTime} onChange={handleFinalChange} />
                              </div>
                               </div>
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                Police Station/Police Post (Max. 255 Characters)
                                <Redstar />
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="mgiPoliceStation" type="text" className="form-control" value={handleFinalData.mgiPoliceStation} onChange={handleFinalChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {Witness && (
                        <div className="">
                          <div className=" text-center p-3  ">
                            <h4>Witness Details</h4>
                          </div>
                          <div className="card-body">
                            <p className=" text-center  ">
                              If Magistrate Not Available then Enter Details of Witnesses in whose
                              presence the Dying declaration was recorded:
                            </p>

                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Name
                                <Redstar />
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="wdname" type="text" className="form-control" value={handleData.wdname} onChange={handleWitnessChange}/>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Relation
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="wdrelationid" type="text" class="form-select" value={handleData.wdrelationid} onChange={handleWitnessChange}/>
                              </div>
                            </div>
                            <div className="row mb-3 mt-2">
                            <PoliceStationDropdownSelection onInputChange={onInputChange} onDistrictChange={onDistrictChange} onPoliceChange={onPoliceChange}/>
                            {ispsother &&<>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Police Station Code
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="wd_psother" type="text" className="form-control" value={handleData.wd_psother} onChange={handleWitnessChange}/>
                              </div>
                              </> }
                              </div>

                            <div className="row mb-3 mt-2">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Phone/Mob
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="wdcontact" type="text" className="form-control" value={handleData.wdcontact} onChange={handleWitnessChange}/>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Address(Max. 255 Characters)
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <textarea name="wdaddress" type="text" class="form-control" value={handleData.wdaddress} onChange={handleWitnessChange}></textarea>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <button type="submit" className="btn btn-primary m-2" onClick={handleAddWitnessClick}>
                                  Add to List
                                </button>
                                {isDisable &&
                                  <button type="submit" className="btn btn-secondary m-2" onClick={handleUpdateWitnessClick} >
                                    Update
                                  </button>
                                }
                                <button type="submit" className="btn btn-dark m-2" onClick={handleCancleWitnessClick}>
                                  Cancel
                                </button>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Sr. No.</th>
                                      <th>Transaction ID</th>
                                      <th>Name</th>
                                      <th>Contact</th>
                                      <th>Address</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {identget.map((item, index) => (
                                      <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.wdtransactionid}</td>
                                        <td>{item.wdname}</td>
                                        <td>{item.wdcontact}</td>
                                        <td>{item.wdaddress}</td>
                                        <td>
                                        <button type="submit" className="btn btn-secondary m-2" onClick={() => handleEditWitnessClick(item.rowid)}>
                                          Edit
                                        </button>
                                        <button type="submit" className="btn btn-danger m-2" onClick={() => handleDeleteWitnessClick(item.rowid)}>
                                          Deleted
                                        </button>
                                        </td>
                                       
                                      </tr>))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      )} </>)}
                      <div className="row mb-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                         Record at the time of examinatio
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <DropdownformsYesNo name='recorded_time_examination' handleChange={handlerecorded_time_examinationChange} yes='Y' no='N'/>
                        </div>
                      </div>
                      {DyingDeclarationPolice && (
                        <div className="">
                          <div className=" text-center p-3  ">
                            <h4>Recorded at the time of examination:</h4>
                          </div>
                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Name (Max. 75 Characters)
                                <Redstar />
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="ddpname" type="text" className="form-control" value={handleFinalData.ddpname} onChange={handleFinalChange} />
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Designation
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="ddpdesignation" type="text" class="form-select" value={handleFinalData.ddpdesignation} onChange={handleFinalChange} />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Belt No. (Max. 3 Characters) <Redstar />
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="ddpbeltno" type="text" className="form-control" value={handleFinalData.ddpbeltno} onChange={handleFinalChange} />
                              </div>
                            </div>
                            <div className="row mb-3">
                            <PoliceStationDropdownSelection onInputChange={onInputFinalChange} onDistrictChange={onDistrictFinalChange} onPoliceChange={onPoliceFinalChange}/>
                            {ispsFinalother &&<>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Police Station Code
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="ddp_psother" type="text" className="form-control" value={handleFinalData.ddp_psother} onChange={handleFinalChange}/>
                              </div>
                              </> }
                              </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <ButtonBackandSave
                backButton={handleF3_frstBackClick}
                savebutton={handleF3_frstClick}
              />
              {/* <ButtonBackandSave backButton={() => Navigate("/form2")} savebutton={() => Navigate("/GistofIncident")} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OPDDetail
