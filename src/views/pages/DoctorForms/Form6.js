import React, { useState, useEffect } from 'react'
import Formdetail from './common/Formdetails'
import BodyInquestPaperRD from './FormVI/BodyInquestPaperRD'
import IdentificatioHospital from './FormVI/IdentificatioHospital'
import SymptomsObservedUnknow from './FormVI/SymptomsObservedUnknow'
import GeneralDescriptionVIForm from './FormVI/GeneralDescriptionVIForm'
import ExternalGeneralApperanceVI from './FormVI/ExternalGeneralApperanceVI'
import InternalInjuryDetail from './FormVI/InternalInjuryDetail'
import InternalExaminatioDetailctd from './FormVI/InternalExaminatioDetailctd'
import InternalExamDetailVI from './FormVI/InternalExamDetailVI'
import ExamExternalInjuriesTb from './FormVI/ExamExternalInjuriesTb'
import AdditionalInjury from './FormVI/innercomp/AdditionalInjury'
import HandedOverpoliceVI from './FormVI/HandedOverpoliceVI'
import OpinionVI from './FormVI/OpinionVI'
import BodySideView from './FormVI/BodySideView'
import InnerViewSkull from './FormVI/InnerViewSkull'
import HeadSurface from './FormVI/HeadSurface'
import UnknownFigureForm6 from './FormVI/UnknownFigureForm6'
import CaseDetails from './common/CaseDetails'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'
import CaseDetail6A from './CaseDetail6A'
import { toast } from 'react-toastify'

const Form6 = () => {
  const [BodyInquestPaperRDetail, setBodyInquestPaperRDetail] = useState(true)

  const [IdentificatioHospitaldetail, setIdentificatioHospitaldetail] = useState(false)
  const [SymptomsObservedUnknowdetail, setSymptomsObservedUnknowdetail] = useState(false)
  const [GeneralDescriptionVIFormdetail, setGeneralDescriptionVIFormdetail] = useState(false)
  const [ExternalGeneralApperanceVIdetail, setExternalGeneralApperanceVIdetail] = useState(false)
  const [ExamExternalInjuriesTbdetail, setExamExternalInjuriesTbdetail] = useState(false)
  const [InternalExamDetailVIdetail, setInternalExamDetailVIdetail] = useState(false)
  const [InternalExaminatioDetailctddetail, setInternalExaminatioDetailctddetail] = useState(false)
  const [InternalInjuryDetaildetail, setInternalInjuryDetaildetail] = useState(false)

  const [UnknownFigureForm6detail, setUnknownFigureForm6detail] = useState(false)
  const [HeadSurfacedetail, setHeadSurfacedetail] = useState(false)
  const [InnerViewSkulldetail, setInnerViewSkulldetail] = useState(false)
  const [BodySideViewdetail, setBodySideViewdetail] = useState(false)
  const [OpinionVIdetail, setOpinionVIdetail] = useState(false)
  const [HandedOverpoliceVIdetail, setHandedOverpoliceVIdetail] = useState(false)
  const [AdditionalInjurydetail, setAdditionalInjurydetail] = useState(false)
  const [caseDetail, setCaseDetail] = useState(true)

  // const handleF3_frstBackClick = () => {
  //   setBodyInquestPaperRDetail(false)
  //   setIdentificatioHospitaldetail(true)
  // }

  const trn = localStorage.getItem('trn')
  const enterby = localStorage.getItem('username')
  const token = localStorage.getItem('token')

  const [formData, setFormData] = useState({
    // Initialize your form data here
    transactionid: trn,
    date_reciept_inquest_papers: '',
    date_commencement_autopsy: '',
    whence_brought: '',
    time_reciept_inquest_papers: '',
    time_commencement_autopsy: '',
    createuser: enterby,

  });


  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apicd = `${apiPrefix}/user/form6/add_inquest_paper_receipt`
  const apigetcd = `${apiPrefix}/user/form6/get_inquest_paper_receipt/${trn}`

  useEffect(() => {
    callApi(apigetcd)
      .then((response) => {
        setFormData(response)
      })
      .catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])


  const handleF3_frstClick = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const postData = {
        transactionid: trn,
        createuser: enterby,
        ...formData,
      };
      const response = await axios.post(apicd, postData, config);

      if (response.status === 200) {
        toast.success('Success.', {
          position: toast.POSITION.TOP_RIGHT,
        });
        setBodyInquestPaperRDetail(false);
        setIdentificatioHospitaldetail(true);
      } else {
        // Handle non-200 responses here
        console.error('API Error:', response.status);
        const errorMessage = response.data || 'Backend Error.';
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      toast.error('An error occurred.', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };


  // const apireceipt = `${apiPrefix}/user/form6/add_inquest_paper_receipt`
  const [nextpage, setnextpage] = useState('U')
  const [nextcomponent, setnextcomponent] = useState('')
  useEffect(() => {
    if (nextpage == 'U') {
      setnextcomponent('/IdentificatioHospital')
    } else if (nextpage == 'M') {
      setnextcomponent('/IdentificationMarksTb')
    } else if (nextpage == 'F') {
      setnextcomponent('/IdentificationMarksTb')
    }
  }, [])
  const handleChange = (e) => {
    const { name, value } = e.target
    setHandleData({ ...formData, [name]: value })
  }
  const handleFormDataChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const gender = localStorage.getItem('gender')

  let imgid;
  if (gender === '1') {
    imgid = 6;
  } else if (gender === '2') {
    imgid = 7;
  } else {
    imgid = 11;
  }
  return (
    <div className="Container">
      <Formdetail title="Form VI: Post Mortem Examination Report" trnid={trn} />
      {BodyInquestPaperRDetail && (
        <div className="card mt-2 mb-2">
          <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
            <h4>Inquest Paper Receipt Detail</h4>
          </div>
          <div className="card-body">
            <CaseDetail6A
              title="Date & Time of reciept of Inquest papers"
              title1="Date & Time of commencement of Autopsy"
              title2="Whence brought/referral (Max. 250 Characters)"
              handleChange={handleChange}
              input1Name="date_reciept_inquest_papers"
              input2Name="date_commencement_autopsy"
              input3Name="whence_brought"
              selectName1="time_reciept_inquest_papers"
              selectName2="time_commencement_autopsy"
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
      {IdentificatioHospitaldetail && (
        <IdentificatioHospital
          IdentificatioHospitaldetail={setIdentificatioHospitaldetail}
          BodyInquestPaperRDetail={setBodyInquestPaperRDetail}
          SymptomsObservedUnknowdetail={setSymptomsObservedUnknowdetail}
          trn={trn}
        />
      )}
      {SymptomsObservedUnknowdetail && (
        <SymptomsObservedUnknow
          SymptomsObservedUnknowdetail={setSymptomsObservedUnknowdetail}
          IdentificatioHospitaldetail={setIdentificatioHospitaldetail}
          GeneralDescriptionVIFormdetail={setGeneralDescriptionVIFormdetail}
          trn={trn}
        />
      )}
      {GeneralDescriptionVIFormdetail && (
        <GeneralDescriptionVIForm
          GeneralDescriptionVIFormdetail={setGeneralDescriptionVIFormdetail}
          SymptomsObservedUnknowdetail={setSymptomsObservedUnknowdetail}
          ExternalGeneralApperanceVIdetail={setExternalGeneralApperanceVIdetail}
          trn={trn}
        />
      )}
      {ExternalGeneralApperanceVIdetail && (
        <ExternalGeneralApperanceVI
          ExternalGeneralApperanceVIdetail={setExternalGeneralApperanceVIdetail}
          ExamExternalInjuriesTbdetail={setExamExternalInjuriesTbdetail}
          GeneralDescriptionVIFormdetail={setGeneralDescriptionVIFormdetail}
          trn={trn}
        />
      )}
      {ExamExternalInjuriesTbdetail && (
        <ExamExternalInjuriesTb
          ExamExternalInjuriesTbdetail={setExamExternalInjuriesTbdetail}
          InternalExamDetailVIdetail={setInternalExamDetailVIdetail}
          ExternalGeneralApperanceVIdetail={setExternalGeneralApperanceVIdetail}
          trn={trn}
        />
      )}
      {InternalExamDetailVIdetail && (
        <InternalExamDetailVI
          InternalExamDetailVIdetail={setInternalExamDetailVIdetail}
          InternalExaminatioDetailctddetail={setInternalExaminatioDetailctddetail}
          ExamExternalInjuriesTbdetail={setExamExternalInjuriesTbdetail}
          trn={trn}
        />
      )}
      {InternalExaminatioDetailctddetail && (
        <InternalExaminatioDetailctd
          InternalExaminatioDetailctddetail={setInternalExaminatioDetailctddetail}
          InternalInjuryDetaildetail={setInternalInjuryDetaildetail}
          InternalExamDetailVIdetail={setInternalExamDetailVIdetail}
          trn={trn}
        />
      )}
      {InternalInjuryDetaildetail && (
        <InternalInjuryDetail
          InternalInjuryDetaildetail={setInternalInjuryDetaildetail}
          InternalExaminatioDetailctddetail={setInternalExaminatioDetailctddetail}
          UnknownFigureForm6detail={setUnknownFigureForm6detail}
          trn={trn}
        />
      )}
      {UnknownFigureForm6detail && (
        <UnknownFigureForm6
          UnknownFigureForm6detail={setUnknownFigureForm6detail}
          InternalInjuryDetaildetail={setInternalInjuryDetaildetail}
          HeadSurfacedetail={setHeadSurfacedetail}
          trn={trn}
          imgid={imgid}
          gender={gender}
        />
      )}
      {HeadSurfacedetail && (
        <HeadSurface
          HeadSurfacedetail={setHeadSurfacedetail}
          UnknownFigureForm6detail={setUnknownFigureForm6detail}
          InnerViewSkulldetail={setInnerViewSkulldetail}
          trn={trn}
          imgid={8}
        />
      )}
      {InnerViewSkulldetail && (
        <InnerViewSkull
          InnerViewSkulldetail={setInnerViewSkulldetail}
          HeadSurfacedetail={setHeadSurfacedetail}
          BodySideViewdetail={setBodySideViewdetail}
          trn={trn}
          imgid={9}
        />
      )}
      {BodySideViewdetail && (
        <BodySideView
          BodySideViewdetail={setBodySideViewdetail}
          InnerViewSkulldetail={setInnerViewSkulldetail}
          OpinionVIdetail={setOpinionVIdetail}
          trn={trn}
          imgid={3}
        />
      )}
      {OpinionVIdetail && (
        <OpinionVI
          OpinionVIdetail={setOpinionVIdetail}
          BodySideViewdetail={setBodySideViewdetail}
          HandedOverpoliceVIdetail={setHandedOverpoliceVIdetail}
          trn={trn}
        />
      )}
      {HandedOverpoliceVIdetail && (
        <HandedOverpoliceVI
          HandedOverpoliceVIdetail={setHandedOverpoliceVIdetail}
          OpinionVIdetail={setOpinionVIdetail}
          AdditionalInjurydetail={setAdditionalInjurydetail}
          trn={trn}
        />
      )}
      {AdditionalInjurydetail && (
        <AdditionalInjury
          AdditionalInjurydetail={setAdditionalInjurydetail}
          HandedOverpoliceVIdetail={setHandedOverpoliceVIdetail}
          trn={trn}
          imgid={imgid}
          imgid8={8}
          imgid9={9}
          imgid3={3}
        />
      )}
    </div>
  )
}

export default Form6
