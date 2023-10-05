import React, { useState } from 'react'
import PoliceStationDropdownSelection from './../../AdminReg/userRegistrationForms/commonComponentForRegistration/PoliceStationDropdownSelection'
import { useNavigate } from 'react-router-dom'
const OPDDetail = () => {
  const [Admitted, setAdmitted] = useState(false)
  const handleClick = () => {
    setAdmitted(!Admitted)
  }
  const [DyingDeclaration, setDyingDeclaration] = useState(false)
  const handleClickyes = () => {
    setDyingDeclaration(true)
  }
  const handleClickno = () => {
    setDyingDeclaration(false)
  }
  const [Magistrate, setMagistrate] = useState(false)
  const handleClickyes1 = () => {
    setMagistrate(true)
    setWitness(false)
  }
  const [Witness, setWitness] = useState(false)
  const handleClickno1 = () => {
    setMagistrate(false)
    setWitness(true)
  }
  const [DyingDeclarationPolice, setDyingDeclarationPolice] = useState(false)
  const handleClickyes3 = () => {
    setDyingDeclarationPolice(true)
  }
  const handleClickno3 = () => {
    setDyingDeclarationPolice(false)
  }
  const Navigate = useNavigate()
  return (
    <div className="Container">
      <div className="card">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>OPD Detail , IPD Detail(if Any) & Dying declaration(if Any)</h4>
        </div>
        <div className="card-body">
          <div className="">
            <div className="text-center p-3 mb-3 ">
              <h4>Other Details</h4>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="row mb-3">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    OPD No<span style={{ color: 'red', fontWeight: 'bold' }}> *</span> (Max. 20
                    Characters)
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <input name="patient_name" type="text" className="form-control" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    Reffered To (Max. 500 Characters)
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <input name="patient_name" type="text" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <input id=" " type="checkbox" name="chkVictimAdmitted" onClick={handleClick} />
                    Admitted
                  </div>
                </div>
              </div>
              {Admitted && (
                <div className="">
                  <div className=" text-center p-3 mb-3">
                    <h4>Admitted </h4>
                  </div>
                  <div className="card-body">
                    <div className="row justify-content-center">
                      <div className="row mb-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                          C.R. No /Emergency No (Max. 15 Characters)
                          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                          <input name="patient_name" type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">Date</div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                          <input name="patient_name" type="date" class="form-control" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                          Ward (Max. 15 Characters)
                          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                          <input name="patient_name" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                          Where Dying Declaration is necessary, indicate Steps
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                          <input
                            className="form-check-input m-2"
                            name="registrationOption"
                            type="radio"
                            onClick={handleClickyes}
                          />
                          <span className="ml-1">Yes </span>

                          <input
                            className="form-check-input m-2"
                            name="registrationOption"
                            type="radio"
                            onClick={handleClickno}
                          />
                          <span className="ml-1">No</span>
                        </div>
                      </div>

                      {DyingDeclaration && (
                        <div className="">
                          <div className=" text-center p-3  ">
                            <h4>If Dying Declaration Necessary </h4>
                          </div>
                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                Magistrate Informed?
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <input
                                  className="form-check-input m-2"
                                  name="registrationOption"
                                  type="radio"
                                  onClick={handleClickyes1}
                                />
                                <span className="ml-1">Yes </span>

                                <input
                                  className="form-check-input m-2"
                                  name="registrationOption"
                                  type="radio"
                                  onClick={handleClickno1}
                                />
                                <span className="ml-1">No</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {Magistrate && (
                        <div className="">
                          <div className=" text-center p-3  ">
                            <h4>Magistrate Informer Detail</h4>
                          </div>
                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                Name of Person carring information/ Any Other (Max. 50 Characters)
                                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="patient_name" type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Date & Time
                                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="patient_name" type="date" class="form-control" />
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <div class="input-group">
                                  <select name=" " id=" " class="form-select"></select>
                                  <div class="input-group-append">
                                    <span class="input-group-text">Hrs.</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <div class="input-group">
                                  <select name=" " id=" " class="form-select"></select>
                                  <div class="input-group-append">
                                    <span class="input-group-text">Mins..</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                Police Station/Police Post (Max. 255 Characters)
                                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="patient_name" type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {Witness && (
                        <div className="">
                          <div className=" text-center p-3  ">
                            <h4>Witness Details</h4>
                          </div>
                          <div className="card-body">
                            <p className=" text-center  ">
                              If Magistrate Not Available then Enter Details of Witnesses in whose
                              presence the Dying declaration was recorded:
                            </p>

                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Name<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>{' '}
                                (Max. 75 Characters)
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="patient_name" type="text" className="form-control" />
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Relation
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="patient_name" type="text" class="form-select" />
                              </div>
                            </div>
                            <PoliceStationDropdownSelection />
                            <div className="row mb-3 mt-2">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Phone/Mob
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="patient_name" type="text" className="form-control" />
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Address(Max. 255 Characters)
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <textarea
                                  name="patient_name"
                                  type="text"
                                  class="form-control"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="row mb-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                          Where Dying Declaration is necessary, indicate Steps
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                          <input
                            className="form-check-input m-2"
                            name="registrationOption"
                            type="radio"
                            onClick={handleClickyes3}
                          />
                          <span className="ml-1">Yes </span>
                          <input
                            className="form-check-input m-2"
                            name="registrationOption"
                            type="radio"
                            onClick={handleClickno3}
                          />
                          <span className="ml-1">No</span>
                        </div>
                      </div>
                      {DyingDeclarationPolice && (
                        <div className="">
                          <div className=" text-center p-3  ">
                            <h4>Recorded at the time of examination:</h4>
                          </div>
                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Name (Max. 75 Characters)
                                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="patient_name" type="text" className="form-control" />
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Designation
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="patient_name" type="text" class="form-select" />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                Belt No. (Max. 3 Characters){' '}
                                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <input name="patient_name" type="text" className="form-control" />
                              </div>
                            </div>
                            <PoliceStationDropdownSelection />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <div className="row mb-3 ">
                <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-3 "></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={() => Navigate('/form2')}
                  >
                    Back
                  </button>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => Navigate('/GistofIncident')}
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
  )
}

export default OPDDetail
