import React from 'react'
import $ from 'jquery'
import { MdCancel, MdVisibility } from 'react-icons/md'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import RegistrationHeader from '../AdminReg/userRegistrationForms/commonComponentForRegistration/RegistrationHeader'
import { AppHeader } from 'src/components'
import { HomeButton } from '../DoctorForms/common/Operationradionbutton'
const MultiLocationRequest = () => {
  return (
    <div className="Container">
    <RegistrationHeader/>
        <AppHeader/>
        <div className='container mt-2 mb-2'>
      
      <div className='container-fluid '>
        <HomeButton/>
      <div className="card">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Location Request Module</h4>
        </div>
        <div className="card-body">
          <from>
            <div className="row mb-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                Registration No.
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <input className="form-control"></input>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                Select District
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <input className="form-select"></input>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                Institute Type
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <input className="form-select"></input>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                Select Institute
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <input className="form-select"></input>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                Deputation Valid Up to
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-2">
                <input className="form-control"></input>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-2">
                <button type="button" className="btn btn-sm btn-primary">
                  Save Details
                </button>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-2">
                <button type="button" className="btn btn-sm btn-danger">
                  Cancel
                </button>
              </div>
            </div>
          </from>
        </div>
      </div>
      <table id="approveinsstitute" className="table  text-center table-bordered mt-4 pt-2">
        <thead className="table-secondary  text-center">
          <tr>
            <th scope="col"> User ID</th>
            <th scope="col">District</th>
            <th scope="col"> Transfer RegNo</th>
            <th scope="col">Requested Institute </th>
            <th scope="col">RequestSentDate</th>
            <th scope="col">Approved </th>
            <th scope="col"> ApprovalDate</th>
            <th scope="col"> Valid Uptodate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
    
  )
}

export default MultiLocationRequest
