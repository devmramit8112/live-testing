import React from 'react'
import $ from 'jquery'
import { MdCancel, MdVisibility } from 'react-icons/md'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
const CancelInstitute = () => {
  return (
    <div className="card mb-2">
      <div className="card-header text-center">
        <h4>MedLEaPR Doctor Transfer Request Cancel</h4>
      </div>
      <div className="card-body">
        <table id="approveinsstitute" className="table  text-center table-bordered mt-4 pt-2">
          <thead className="table-secondary  text-center">
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col"> Multiple Assigned Institutes</th>
              <th scope="col"> Cancel Institutes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
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
  )
}

export default CancelInstitute
