import React from 'react'
import $ from 'jquery'
import { MdCancel, MdVisibility } from 'react-icons/md'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
const viewRecord_user = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4></h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">UserID</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
              <input className="form-control" disabled></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">UserName</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
              <input className="form-control" disabled></input>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
              Account_Activated
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
              <input className="form-control" disabled></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">Created By</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
              <input className="form-control" disabled></input>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">Created Date</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
              <input className="form-control" disabled></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">Changed By</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
              <input className="form-control" disabled></input>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">Changed Date</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
              <input className="form-control" disabled></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">EmailID</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
              <input className="form-control" disabled></input>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">Mobile</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
              <input className="form-control" disabled></input>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">MCI_No</div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  mt-2">
              <input className="form-control" disabled></input>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-2">
        <div className="card-header text-center">
          <h4>Case Statistics</h4>
        </div>
        <div className="card-body">
          <table id="approveinsstitute" className="table  text-center table-bordered mt-4 pt-2">
            <thead className="table-secondary  text-center">
              <tr>
                <th scope="col"> Unfreeze</th>
                <th scope="col">Freeze</th>
                <th scope="col">Cancel</th>
                <th scope="col"> Total </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default viewRecord_user
