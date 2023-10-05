import React, { useState } from 'react'
import Form3detailspart2 from './Form3part2comp/Form3detailspart2'
import MarksIdentificationTable from './comp/MarksIdentificationTable'
import HistorySexualViolence from './Form3part2comp/HistorySexualViolence'
import TypePhysicalViolence from './Form3part2comp/TypePhysicalViolence'
import DetailsregardingSexual from './Form3part2comp/DetailsregardingSexual'
import GeneralPhysExamination from './Form3part2comp/GeneralPhysExamination'
import Examinatiobody from './Form3part2comp/Examinatiobody'
import Generalmale from './Form3part2comp/Generalmale'
import GeneralPhysicalExaminationf3part2 from './Form3part2comp/GeneralPhysicalExaminationf3part2'
import Localexaminatiogenital from './Form3part2comp/Localexaminatiogenital'
import PhysicalInjuriesorganishm from './Form3part2comp/PhysicalInjuriesorganishm'
import PhysicaOrganishmale from './Form3part2comp/PhysicaOrganishmale'
import PhysicaOrganishmale2 from './Form3part2comp/PhysicaOrganishmale2'
import SystemicExamination from './Form3part2comp/SystemicExamination'
import ProvisionalMedical from './Form3part2comp/ProvisionalMedical'
import TreatmentPrescribed from './Form3part2comp/TreatmentPrescribed'
import SamplecollectionCentral from './Form3part2comp/SamplecollectionCentral'
import Formdetail from './common/Formdetails'

const Form3part2 = () => {
  const [Identificationdetail, setIdentificationdetail] = useState(true)
  const [HistorySexualViolencedetail, setHistorySexualViolencedetail] = useState(false)
  const [TypePhysicalViolencedetail, setTypePhysicalViolencedetail] = useState(false)
  const [DetailsregardingSexualdetail, setDetailsregardingSexualdetail] = useState(false)
  const [GeneralPhysExaminationdetail, setGeneralPhysExaminationdetail] = useState(false)
  const [Examinatiobodydetail, setExaminatiobodydetail] = useState(false)
  const [GeneralPhysicalExaminationf3part2detail, setGeneralPhysicalExaminationf3part2detail] =
    useState(false)
  const [Generalmaledetail, setGeneralmaledetail] = useState(false)
  const [Localexaminatiogenitaldetail, setLocalexaminatiogenitaldetail] = useState(false)
  const [PhysicalInjuriesorganishmdetail, setPhysicalInjuriesorganishmdetail] = useState(false)
  const [PhysicaOrganishmaledetail, setPhysicaOrganishmaledetail] = useState(false)
  const [PhysicaOrganishmale2detail, setPhysicaOrganishmale2detail] = useState(false)

  const [SystemicExaminationdetail, setSystemicExaminationdetail] = useState(false)
  const [SamplecollectionCentraldetail, setSamplecollectionCentraldetail] = useState(false)
  const [ProvisionalMedicaldetail, setProvisionalMedicaldetail] = useState(false)
  const [TreatmentPrescribeddetail, setTreatmentPrescribeddetail] = useState(false)

  const trn = localStorage.getItem('trn')
  const handleF3_frstClick = () => {
    setIdentificationdetail(false)
    setHistorySexualViolencedetail(true)
  }
  return (
    <div className="Container">
      <Formdetail
        title="Medical-Legal Examination Report of Sexual Violence (Case Detail)"
        trnid={trn}
      />
      {Identificationdetail && (
        <div className="card">
          <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
            <h4>Marks of Identification</h4>
          </div>
          <MarksIdentificationTable />
          <div className="row mb-3 ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
              <button type="submit" className="btn btn-primary" onClick={handleF3_frstClick}>
                Save and Proceed
              </button>
            </div>
          </div>
        </div>
      )}
      {HistorySexualViolencedetail && (
        <HistorySexualViolence
          HistorySexualViolencedetail={setHistorySexualViolencedetail}
          Identificationdetail={setIdentificationdetail}
          TypePhysicalViolencedetail={setTypePhysicalViolencedetail}
        />
      )}
      {TypePhysicalViolencedetail && (
        <TypePhysicalViolence
          HistorySexualViolencedetail={setHistorySexualViolencedetail}
          DetailsregardingSexualdetail={setDetailsregardingSexualdetail}
          TypePhysicalViolencedetail={setTypePhysicalViolencedetail}
        />
      )}
      {DetailsregardingSexualdetail && (
        <DetailsregardingSexual
          DetailsregardingSexualdetail={setDetailsregardingSexualdetail}
          GeneralPhysExaminationdetail={setGeneralPhysExaminationdetail}
          TypePhysicalViolencedetail={setTypePhysicalViolencedetail}
          trn={trn}
        />
      )}
      {GeneralPhysExaminationdetail && (
        <GeneralPhysExamination
          DetailsregardingSexualdetail={setDetailsregardingSexualdetail}
          GeneralPhysExaminationdetail={setGeneralPhysExaminationdetail}
          Examinatiobodydetail={setExaminatiobodydetail}
          trn={trn}
        />
      )}
      {Examinatiobodydetail && (
        <Examinatiobody
          Examinatiobodydetail={setExaminatiobodydetail}
          GeneralPhysExaminationdetail={setGeneralPhysExaminationdetail}
          GeneralPhysicalExaminationf3part2detail={setGeneralPhysicalExaminationf3part2detail}
          trn={trn}
        />
      )}
      {GeneralPhysicalExaminationf3part2detail && (
        <GeneralPhysicalExaminationf3part2
          Examinatiobodydetail={setExaminatiobodydetail}
          Generalmaledetail={setGeneralmaledetail}
          GeneralPhysicalExaminationf3part2detail={setGeneralPhysicalExaminationf3part2detail}
          trn={trn}
          imgid={13}
        />
      )}
      {Generalmaledetail && (
        <Generalmale
          Localexaminatiogenitaldetail={setLocalexaminatiogenitaldetail}
          Generalmaledetail={setGeneralmaledetail}
          GeneralPhysicalExaminationf3part2detail={setGeneralPhysicalExaminationf3part2detail}
          trn={trn}
          imgid={14}
        />
      )}
      {Localexaminatiogenitaldetail && (
        <Localexaminatiogenital
          Localexaminatiogenitaldetail={setLocalexaminatiogenitaldetail}
          Generalmaledetail={setGeneralmaledetail}
          PhysicalInjuriesorganishmdetail={setPhysicalInjuriesorganishmdetail}
          trn={trn}
        />
      )}
      {PhysicalInjuriesorganishmdetail && (
        <PhysicalInjuriesorganishm
          Localexaminatiogenitaldetail={setLocalexaminatiogenitaldetail}
          PhysicaOrganishmaledetail={setPhysicaOrganishmaledetail}
          PhysicalInjuriesorganishmdetail={setPhysicalInjuriesorganishmdetail}
          trn={trn}
          imgid={15}
        />
      )}
      {PhysicaOrganishmaledetail && (
        <PhysicaOrganishmale
          PhysicaOrganishmaledetail={setPhysicaOrganishmaledetail}
          PhysicaOrganishmale2detail={setPhysicaOrganishmale2detail}
          PhysicalInjuriesorganishmdetail={setPhysicalInjuriesorganishmdetail}
          trn={trn}
          imgid={16}
        />
      )}
      {PhysicaOrganishmale2detail && (
        <PhysicaOrganishmale2
          PhysicaOrganishmaledetail={setPhysicaOrganishmaledetail}
          SystemicExaminationdetail={setSystemicExaminationdetail}
          PhysicaOrganishmale2detail={setPhysicaOrganishmale2detail}
          trn={trn}
          imgid={17}
        />
      )}
      {SystemicExaminationdetail && (
        <SystemicExamination
          SystemicExaminationdetail={setSystemicExaminationdetail}
          PhysicaOrganishmale2detail={setPhysicaOrganishmale2detail}
          SamplecollectionCentraldetail={setSamplecollectionCentraldetail}
          trn={trn}
        />
      )}
      {SamplecollectionCentraldetail && (
        <SamplecollectionCentral
          SystemicExaminationdetail={setSystemicExaminationdetail}
          SamplecollectionCentraldetail={setSamplecollectionCentraldetail}
          ProvisionalMedicaldetail={setProvisionalMedicaldetail}
          trn={trn}
        />
      )}
      {ProvisionalMedicaldetail && (
        <ProvisionalMedical
          ProvisionalMedicaldetail={setProvisionalMedicaldetail}
          SamplecollectionCentraldetail={setSamplecollectionCentraldetail}
          TreatmentPrescribeddetail={setTreatmentPrescribeddetail}
          
        />
      )}
      {TreatmentPrescribeddetail && (
        <TreatmentPrescribed
          TreatmentPrescribeddetail={setTreatmentPrescribeddetail}
          ProvisionalMedicaldetail={setProvisionalMedicaldetail}
          
        />
      )}
    </div>
  )
}

export default Form3part2
