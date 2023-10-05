import React from 'react'
import Form4Header from '../form4comp/Form4Header'
import DetailsView from '../form4comp/DetailsView'
import { useNavigate } from 'react-router-dom'

const InternalExaminationDetail = () => {
  const Navigate = useNavigate()

  return (
    <div className="card">
      <Form4Header title="Form VI: Post Mortem Examination Report (FOETUS)" />
      <DetailsView />
      <div className="text-center p-3 mb-3 bg-secondary-subtle">
        <h4>Internal Examination Detail</h4>
      </div>
      <div className="card-body">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Component</th>
              <th scope="col">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1. a</th>
              <td className="col-5">
                Examination of External Injuries
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Including Ligature
                Mark, if any.) (Max. 8000 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(b)</th>
              <td className="col-5">
                Scalp (caput) / Scap hair
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(c)</th>
              <td className="col-5">
                Meninges / Brain / convolutions
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(d)</th>
              <td className="col-5">
                Eyebrows / Eyelashes<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>{' '}
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(e)</th>
              <td className="col-5">
                Eyelids / pupillary membrane / Eyes
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(f)</th>
              <td className="col-5">
                Ears<span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max. 500
                Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(g)</th>
              <td className="col-5">
                Brain must be exposed in every case. Spinal cord need not to be examined except in
                case of injury to vertebral column / spinal Cord
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>

            <tr>
              <th scope="row">2.(a)</th>
              <td className="col-5">
                Mouth,Pharyx & Oesophagus
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(b)</th>
              <td className="col-5">
                Note any foreign body<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>{' '}
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">3.</th>
              <td className="col-5">
                Neck<span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max. 500
                Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(a)</th>
              <td className="col-5">
                Larynx & Trachea<span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max.
                500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(b)</th>
              <td className="col-5">
                Note any foreign body<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>{' '}
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">4. (a)</th>
              <td className="col-5">
                Chest Wall, Ribs / Sternum and Cartilage
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(b)</th>
              <td className="col-5">
                Pleura / pleural Cavity<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>{' '}
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(c)</th>
              <td className="col-5">
                Lungs (wt., colour,consistency ,edges, crepts,collapse,consolidation,motling)
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td className="col-5">
                Lungs (Rt)<span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max. 500
                Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td className="col-5">
                Hydrostatic Test<span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max.
                500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(d)</th>
              <td className="col-5">
                Heart,Pericardium , Large vessels (any malformation)
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(e)</th>
              <td className="col-5">
                Thymus<span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max. 500
                Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>

            <tr>
              <th scope="row">5.(a)</th>
              <td className="col-5">
                Abdominal Wall<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>

            <tr>
              <th scope="row">(b)</th>
              <td className="col-5">
                Peritoneum,Retroperitonem
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(c)</th>
              <td className="col-5">
                Stomach and its contents Stomach bowel test / Milk
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(d)</th>
              <td className="col-5">
                Small Intestine and its content / meconium
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(e)</th>
              <td className="col-5">
                Large Intestine and its content / meconium
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(f)</th>
              <td className="col-5">
                Liver and Gall Bladder<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(g)</th>
              <td className="col-5">
                Spleen<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(h)</th>
              <td className="col-5">
                Pancreas<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(i)</th>
              <td className="col-5">
                Kidney(Rt)<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td className="col-5">
                Kidney(Lt)<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(j)</th>
              <td className="col-5">
                Urinary Bladder<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">(k)</th>
              <td className="col-5">
                Organs of generation /Sex of Foetus
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Position of testicles in males) (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td className="col-5">
                Limbs ,Muscles ,Bones ,Joints (Inury , Diease, Deformity ,Fracture , Dislocation )
                -Ossification Centers lower end of femur, upper end of tibia , manubrium , body of
                sternum ,calcaneum ,talus and cubid
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Max. 500 Characters)
              </td>
              <td className="col-5">
                <textarea name="patient_name" type="text" className="form-control" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="row mb-3">
          <div className="w-100 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-danger mx-3"
              onClick={() => Navigate('/examination-external-injuries')}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => Navigate('/form-vi-opinio')}
            >
              Save and Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InternalExaminationDetail
