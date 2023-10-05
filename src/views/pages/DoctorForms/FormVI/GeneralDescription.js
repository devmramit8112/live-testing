import React from 'react'
import Form4Header from '../form4comp/Form4Header'
import DetailsView from '../form4comp/DetailsView'
import { useNavigate } from 'react-router-dom'
import Formdetail from '../common/Formdetails'
import { ButtonBackandSave, Redstar } from '../common/Operationradionbutton'

const GeneralDescription = () => {
  const Navigate = useNavigate()

  return (
    <div className="Container">
      <Formdetail title="Form VI: Post Mortem Examination Report " />
      <div className="card">
        <div className="text-center p-3 mb-3 bg-secondary-subtle">
          <h4>General Description / Examination</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              General Description: Clothes And Other Wrapping
              <Redstar />
              (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Weight of foetus (Max. 15 Characters){' '}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Crown heals Length of the foetus
              <Redstar />
              (Max. 10 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <input name="patient_name" type="text" className="form-control" />
              <p>(in cms)</p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Foot Lengthfoetus
              <Redstar />
              (Max. 10 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <input name="patient_name" type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Head Circumference
              <Redstar />
              (Max. 10 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <input name="patient_name" type="text" className="form-control" />
              <p>(in cms)</p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Chest CircumferenceCircumference
              <Redstar />
              (Max. 10 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <input name="patient_name" type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Umbilical Cord
              <Redstar />
              (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Length of the Umbilical Cord
              <Redstar />
              (Max. 15 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <input name="patient_name" type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Ends of the Umbilical Cord <Redstar />
              (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Description of the placenta(if attached) (Max. 4000 Characters){' '}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Weight of the placenta (Max. 15 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <input name="patient_name" type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Condition of the placenta
              <Redstar />
              (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Congenital malformations, if any (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Signs of maceration / mummification
              <Redstar /> (Max. 4000 Characters){' '}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Signs Of Assisted Delivery
              <Redstar /> (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Vernix caseosa
              <Redstar />
              (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Description of the Skin* (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Nails
              <Redstar /> (Max. 4000 Characters){' '}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Hairs
              <Redstar />
              (Max. 4000 Characters)
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              Natural orifices
              <Redstar /> (Max. 4000 Characters){' '}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <textarea name="patient_name" type="text" className="form-control" />
            </div>
          </div>
          <ButtonBackandSave
            backButton={() => Navigate('/symptoms-observed')}
            savebutton={() => Navigate('/post-mortem-changes')}
          />
        </div>
      </div>
    </div>
  )
}

export default GeneralDescription
