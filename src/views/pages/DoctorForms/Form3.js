import React, { useEffect, useState } from 'react'
import CaseDetails from './common/CaseDetails'
import PhysicalGeneralExamination from './Form3comp/PhysicalGeneralExamination'
import BehavioralSymptoms from './Form3comp/BehavioralSymptoms'
import ConditionsVarious from './Form3comp/ConditionsVarious'
import axios from 'axios'
import IdentificationMarks from './comp/IdentificationMarks'
import ExaminationInjuries from './Form3comp/ExaminationInjuries'
import PhysicalExaminationInjuries from './Form3comp/PhysicalExaminationInjuries'
import PhysicalInjuriesBody from './Form3comp/PhysicalInjuriesBody'
import Formdetail from './common/Formdetails'
import LocalEunuch from './Form3comp/LocalEunuch'
import DetailsRegardingPenetrationmale from './Form3comp/DetailsRegardingPenetrationmale'
import DetailsRegardingFemale from './Form3comp/DetailsRegardingFemale'
import Form3maleLocalExamination from './Form3comp/Form3maleLocalExamination'
import StatePenistesticle from './Form3comp/StatePenistesticle'
import SampleCollectionForensic from './Form3comp/SampleCollectionForensic'
import ReferralAdviceOpinion from './Form3comp/ReferralAdviceOpinion'
import AdditionalComment3 from './Form3comp/AdditionalComment3'
import UnknownComments from './Form3comp/UnknownComments'
import Form3FemaleLocalExamination from './Form3comp/Form3FemaleLocalExamination'
import LocalExaminationGenitalia from './Form3comp/LocalExaminationGenitalia'
import PerDigitalExamination from './Form3comp/PerDigitalExamination'
import PerSpeculumexamination from './Form3comp/PerSpeculumexamination'
import { callApi } from 'src/views/CommonModels/CallApi'
import DetailsRegardingPenetrationFemale from './Form3comp/DetailsRegardingPenetrationFemale'
const Form3 = () => {
    const [caseDetail, setCaseDetail] = useState(true)
    const [physicalDetail, setPhysicalDetail] = useState(false)
    const [behavDetail, setBehavDetail] = useState(false)
    const [conDetail, setConDetail] = useState(false)
    const [examinDetail, setExaminDetail] = useState(false)
    const [phyExaminDetail, setPhyExaminDetail] = useState(false)
    const [phyExaminBodyDetail, setPhyExaminBodyDetail] = useState(false)
    const [localEDetail, setLocalEDetail] = useState(false)
    const [penetDetail, setPenetDetail] = useState(false)
    const [regFeDetail, setRegFeDetail] = useState(false)
    const [maleLocalExaminationDetail, setmaleLocalExaminationDetail] = useState(false)
    const [statePenistesticleDetail, setstatePenistesticleDetail] = useState(false)
    const [additionalComment3Detail, setadditionalComment3Detail] = useState(false)
    const [referralAdviceOpinion, setReferralAdviceOpinion] = useState(false)
    const [sampleCollectionForensicDetail, setSampleCollectionForensicDetail] = useState(false)
    const [unknownCommentsDetail, setunknownCommentsDetail] = useState(false)
    const [femaleLocalExaminationDetail, setfemaleLocalExaminationDetail] = useState(false)
    const [localExaminationGenitalia, setlocalExaminationGenitalia] = useState(false)
    const [perDigitalExamination, setperDigitalExamination] = useState(false)
    const [perSpeculumexamination, setperSpeculumexamination] = useState(false)

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

    });
    const validateformOTP = () => {
        let valid = true;
        const newErrors = {
            cdArrivalDate: '',
            cdArrivalTime: '',
            cdExaminationStartDate: '',
            cdExaminationStartTime: '',
            cdExaminationPlaceID: '',
        };
        if (handleData.cdArrivalDate === null) {
            newErrors.cdArrivalDate = 'Required';
            valid = false;
        }
        else if (handleData.cdArrivalDate.trim() === '') {
            newErrors.cdArrivalDate = 'Required';
            valid = false;
        }
        if (handleData.cdArrivalTime === null) {
            newErrors.cdArrivalTime = 'Required';
            valid = false;
        }
        else if (handleData.cdArrivalTime.trim() === '') {
            newErrors.cdArrivalTime = 'Required';
            valid = false;
        }
        if (handleData.cdExaminationStartDate === null) {
            newErrors.cdExaminationStartDate = 'Required';
            valid = false;
        }
        else if (handleData.cdExaminationStartDate.trim() === '') {
            newErrors.cdExaminationStartDate = 'Required';
            valid = false;
        }
        if (handleData.cdExaminationStartTime === null) {
            newErrors.cdExaminationStartTime = 'Required';
            valid = false;
        }
        else if (handleData.cdExaminationStartTime.trim() === '') {
            newErrors.cdExaminationStartTime = 'Required';
            valid = false;
        }
        if (handleData.cdExaminationPlaceID === null) {
            newErrors.cdExaminationPlaceID = 'Required';
            valid = false;
        }
        else if (handleData.cdExaminationPlaceID.trim() === '') {
            newErrors.cdExaminationPlaceID = 'Required';
            valid = false;
        }


        setErrors(newErrors);
        return valid;
    };
    const apiPrefix = process.env.REACT_APP_API_PREFIX
    const apicd = `${apiPrefix}/user/form2/savecasedetails`
    const apigetcd = `${apiPrefix}/user/form2/get_casedetails/${trn}`
    const handleChange = (e) => {
        const { name, value } = e.target

        setHandleData({ ...handleData, [name]: value })

    }
    useEffect(() => {
        callApi(apigetcd)
            .then((response) => {
                setHandleData(response)

            })
            .catch((error) => {
                console.error('API request failed:', error)
            })
    }, [])
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
                setPhysicalDetail(true)
            }
        }
    }
    return (
        <div className="Container">
            <Formdetail
                title="Form-III-Medical Legal Report- Victim/Accused of Sexual Harresment"
                trnid={trn}
            />
            {caseDetail && (
                <div className="card mt-2 mb-2">
                    <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
                        <h4>Arrival Details & Examination Place</h4>
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
            {physicalDetail && (
                <PhysicalGeneralExamination
                    physicalDetail={setPhysicalDetail}
                    behavDetail={setBehavDetail}
                    caseDetail={setCaseDetail}
                    trnid={trn}
                />
            )}
            {behavDetail && (
                <BehavioralSymptoms
                    behavDetail={setBehavDetail}
                    physicalDetail={setPhysicalDetail}
                    conDetail={setConDetail}
                    trnid={trn}
                />
            )}
            {conDetail && (
                <ConditionsVarious
                    behavDetail={setBehavDetail}
                    conDetail={setConDetail}
                    examinDetail={setExaminDetail}
                    trnid={trn}
                />
            )}
            {examinDetail && (
                <ExaminationInjuries
                    conDetail={setConDetail}
                    examinDetail={setExaminDetail}
                    phyExaminDetail={setPhyExaminDetail}
                    trnid={trn}
                />
            )}
            {/* done */}
            {phyExaminDetail && (
                <PhysicalExaminationInjuries
                    examinDetail={setExaminDetail}
                    phyExaminDetail={setPhyExaminDetail}
                    phyExaminBodyDetail={setPhyExaminBodyDetail}
                    trnid={trn}
                    imgid={2}
                />
            )}
            {phyExaminBodyDetail && (
                <PhysicalInjuriesBody
                    phyExaminDetail={setPhyExaminDetail}
                    phyExaminBodyDetail={setPhyExaminBodyDetail}
                    trnid={trn}
                    imgid={3}
                    localEDetail={setLocalEDetail}
                    penetDetail={setPenetDetail}
                    regFeDetail={setRegFeDetail}
                />
            )}
            {localEDetail && (
                <LocalEunuch
                    examinDetail={setExaminDetail}
                    localEDetail={setLocalEDetail}
                    unknownCommentsDetail={setunknownCommentsDetail}
                    trnid={trn}
                    imgid={11}
                />
            )}
            {unknownCommentsDetail && (
                <UnknownComments
                    localEDetail={setLocalEDetail}
                    unknownCommentsDetail={setunknownCommentsDetail}
                    sampleCollectionForensicDetail={setSampleCollectionForensicDetail}
                    trnid={trn}
                />
            )}
            {/* show compoent by gender id  */}
            {/* // condtion MAle/Female */}
            {/* {genderid === 1 && penetDetail && (
                <DetailsRegardingPenetrationmale
                    phyExaminBodyDetail={setPhyExaminBodyDetail}
                    penetDetail={setPenetDetail}
                    maleLocalExaminationDetail={setmaleLocalExaminationDetail}
                    trnid={trn}
                />
            )}

            {genderid === 2 && penetDetail && (
                <DetailsRegardingPenetrationFemale
                    phyExaminBodyDetail={setPhyExaminBodyDetail}
                    penetDetail={setPenetDetail}
                    maleLocalExaminationDetail={setmaleLocalExaminationDetail}
                    trnid={trn}
                />
            )} */}

            {penetDetail && (
                <DetailsRegardingPenetrationmale
                    phyExaminBodyDetail={setPhyExaminBodyDetail}
                    penetDetail={setPenetDetail}
                    maleLocalExaminationDetail={setmaleLocalExaminationDetail}
                    trnid={trn}

                />
            )}
            {maleLocalExaminationDetail && (
                <Form3maleLocalExamination
                    examinDetail={setExaminDetail}
                    statePenistesticleDetail={setstatePenistesticleDetail}
                    maleLocalExaminationDetail={setmaleLocalExaminationDetail}
                    trnid={trn}
                    imgid={5}
                />
            )}
            {statePenistesticleDetail && (
                <StatePenistesticle
                    statePenistesticleDetail={setstatePenistesticleDetail}
                    maleLocalExaminationDetail={setmaleLocalExaminationDetail}
                    sampleCollectionForensicDetail={setSampleCollectionForensicDetail}
                    trnid={trn}
                    imgid={1}
                />
            )}
            {regFeDetail && (
                <DetailsRegardingPenetrationFemale
                    examinDetail={setExaminDetail}
                    regFeDetail={setRegFeDetail}
                    femaleLocalExaminationDetail={setfemaleLocalExaminationDetail}
                    trnid={trn}

                />
            )}

            {femaleLocalExaminationDetail && (
                <Form3FemaleLocalExamination
                    examinDetail={setExaminDetail}
                    localExaminationGenitalia={setlocalExaminationGenitalia}
                    femaleLocalExaminationDetail={setfemaleLocalExaminationDetail}
                    trnid={trn}
                    imgid={4}
                />
            )}
            {localExaminationGenitalia && (
                <LocalExaminationGenitalia
                    perDigitalExamination={setperDigitalExamination}
                    localExaminationGenitalia={setlocalExaminationGenitalia}
                    femaleLocalExaminationDetail={setfemaleLocalExaminationDetail}
                    trnid={trn}

                />
            )}
            {perDigitalExamination && (
                <PerDigitalExamination
                    perDigitalExamination={setperDigitalExamination}
                    localExaminationGenitalia={setlocalExaminationGenitalia}
                    perSpeculumexamination={setperSpeculumexamination}
                    trnid={trn}
                    imgid={1}
                />
            )}
            {perSpeculumexamination && (
                <PerSpeculumexamination
                    perSpeculumexamination={setperSpeculumexamination}
                    perDigitalExamination={setperDigitalExamination}
                    sampleCollectionForensicDetail={setSampleCollectionForensicDetail}
                    trnid={trn}
                    imgid={1}
                />
            )}
            {sampleCollectionForensicDetail && (
                <SampleCollectionForensic
                    examinDetail={setExaminDetail}
                    sampleCollectionForensicDetail={setSampleCollectionForensicDetail}
                    referralAdviceOpinion={setReferralAdviceOpinion}
                    trnid={trn}
                />
            )}
            {referralAdviceOpinion && (
                <ReferralAdviceOpinion
                    sampleCollectionForensicDetail={setSampleCollectionForensicDetail}
                    referralAdviceOpinion={setReferralAdviceOpinion}
                    additionalComment3Detail={setadditionalComment3Detail}
                    trnid={trn}
                />
            )}
            {additionalComment3Detail && (
                <AdditionalComment3
                    additionalComment3Detail={setadditionalComment3Detail}
                    referralAdviceOpinion={setReferralAdviceOpinion}
                    trn={trn}
                />
            )}


        </div>
    )
}

export default Form3
