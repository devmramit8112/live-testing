import React from 'react'
import $ from 'jquery'
import { MdCancel, MdVisibility } from 'react-icons/md'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import { AppFooter, AppHeader } from 'src/components'
import RegistrationHeader from '../AdminReg/userRegistrationForms/commonComponentForRegistration/RegistrationHeader'
import { HomeButton } from '../DoctorForms/common/Operationradionbutton'
const DoctortTransferCancelRequest = () => {
  setTimeout(() => {
    $('#approveinsstitute').DataTable()
  }, 1000)
  return (
    <div className="Container">
      <RegistrationHeader />
      <AppHeader />
      <div className='container mt-2 mb-2'>

        <div className='container-fluid '>
          <HomeButton />
          <div className="card mb-2">
            <div className="card-header text-center">
              <h4>MedLEaPR Doctor Transfer Request Cancel</h4>
            </div>
            <div className="card-body">
              <table id="approveinsstitute" className="table  text-center table-bordered mt-4 pt-2">
                <thead className="table-secondary  text-center">
                  <tr>
                    <th scope="col">Sr No.</th>
                    <th scope="col"> User ID</th>
                    <th scope="col">Transfer RegNo</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Mobile Number </th>
                    <th scope="col">Email</th>
                    <th scope="col">Applied Date </th>
                    <th scope="col"> Transfer Request Date</th>
                    <th scope="col"> Retirement Date</th>
                    <th scope="col"> Cancel Request</th>
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
                    <td></td> <td></td>
                    <td></td>
                    <td>
                      <span>
                        <button className="btn btn-sm bg-primary text-white m-2">
                          <MdCancel />
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      //
    </div>
  )
}

export default DoctortTransferCancelRequest
