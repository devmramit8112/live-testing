import React, { useState } from 'react'

function GistofIncident() {
  return (
    <div className="Container">
      <div className="card mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Gist of Incident, Injuries Detail</h4>
        </div>
        <div className="card-body">
          <div className="">
            <div className="text-center p-3 mb-3 ">
              <h5>Gist of incident as stated by the injured/accompanying person </h5>
            </div>
            <div className="card-body">
              <div className="row mb-3 mt-2">
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                  Gist of Incident<span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max.
                  2000 Characters)
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                  <textarea name="patient_name" type="text" class="form-control"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center p-3 mb-3 ">
            <h5>General condition of the person, clothing etc.</h5>
          </div>
          <div className="card-body">
            <div className="row mb-3 mt-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                General Condition<span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max.
                2000 Characters)
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                <textarea name="patient_name" type="text" class="form-control"></textarea>
              </div>
            </div>
          </div>
          <div className=" text-center p-3 mb-3 ">
            <h5>Particulars of Injuries</h5>
          </div>
          <div className="card-body">
            <div className="row mb-3 mt-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                Injuries Detail(Max. 500 Characters)
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                <textarea name="patient_name" type="text" class="form-control"></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <button type="submit" className="btn btn-primary">
                  Add to List
                </button>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <button type="submit" className="btn btn-secondary">
                  Update
                </button>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <button type="submit" className="btn btn-danger">
                  Deleted
                </button>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <button type="submit" className="btn btn-dark">
                  Cancel
                </button>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Injury Number </th>
                      <th>Injury Detail </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>yes</td>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                <button type="submit" className="btn btn-primary">
                  Freeze Injury
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GistofIncident
