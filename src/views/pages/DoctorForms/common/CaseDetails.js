import React from 'react'
import { Redstar, TimeComp } from './Operationradionbutton'

const CaseDetails = ({ title, title1, title2, title3, handleChange, handleData, errors }) => {


    return (
        <div className="Container">
            <div className="">
                <div className=" text-center p-3 mb-3 ">
                    <h4>{title3}</h4>
                </div>
                <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="row mb-3">
                            <div className="col-lg-3 col-xl-3">
                                {title} <Redstar />
                            </div>
                            <div className="col-lg-3 col-xl-3">
                                <input name="cdArrivalDate" type="date" className={`form-control ${errors.cdArrivalDate ? 'is-invalid' : ''}`} onChange={handleChange} value={handleData.cdArrivalDate} />
                                {errors.cdArrivalDate && <div className="invalid-feedback">{errors.cdArrivalDate}</div>}
                            </div>
                            <div className="col-lg-3 col-xl-3">
                                <input name="cdArrivalTime" type="time" className={`form-control ${errors.cdArrivalTime ? 'is-invalid' : ''}`} onChange={handleChange} value={handleData.cdArrivalTime} />
                                {errors.cdArrivalTime && <div className="invalid-feedback">{errors.cdArrivalTime}</div>}
                            </div>
                            {/* <TimeComp handleChange={handleChange} errors={errors} handleData={handleData} name1='cdArrivalHour' name2='cdArrivalMint'/> */}
                        </div>
                        <div className="row mb-3">
                            <div className="col-lg-3 col-xl-3">
                                {title1} <Redstar />
                            </div>
                            <div className="col-lg-3 col-xl-3">
                                <input name="cdExaminationStartDate" type="date" className={`form-control ${errors.cdExaminationStartDate ? 'is-invalid' : ''}`} onChange={handleChange} value={handleData.cdExaminationStartDate} />
                                {errors.cdExaminationStartDate && <div className="invalid-feedback">{errors.cdExaminationStartDate}</div>}
                            </div>
                            <div className="col-lg-3 col-xl-3">
                                <input name="cdExaminationStartTime" type="time" className={`form-control ${errors.cdExaminationStartTime ? 'is-invalid' : ''}`} onChange={handleChange} value={handleData.cdExaminationStartTime} />
                                {errors.cdExaminationStartTime && <div className="invalid-feedback">{errors.cdExaminationStartTime}</div>}
                            </div>
                            {/* <TimeComp handleChange={handleChange} errors={errors} handleData={handleData} name1='cdExaminationStartHour' name2='cdExaminationStartMint'/> */}
                        </div>
                        <div className="row mb-3">
                            <div className="col-lg-3 col-xl-3">
                                {title2}
                                <Redstar />
                            </div>
                            <div className="col-lg-3 col-xl-3">
                                <input name="cdExaminationPlaceID" type="text" className={`form-control ${errors.cdExaminationPlaceID ? 'is-invalid' : ''}`} value={handleData.cdExaminationPlaceID} onChange={handleChange} />
                                {errors.cdExaminationPlaceID && <div className="invalid-feedback">{errors.cdExaminationPlaceID}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const ExaminationComplete = ({ handleChange, handleData, errors }) => {
    return (
        <div className="Container">
            <div className="card-body">
                <div className="row justify-content-center">
                    <div className="row mb-3">
                        <div className="col-lg-3 col-xl-3">
                            Examination Complete Date
                        </div>
                        <div className="col-lg-3 col-xl-3">
                            <input name="cdExaminationCompleteDate" type="date" className={`form-control ${errors.cdExaminationCompleteDate ? 'is-invalid' : ''}`} value={handleData.cdExaminationCompleteDate} onChange={handleChange} />
                            {errors.cdExaminationCompleteDate && <div className="invalid-feedback">{errors.cdExaminationCompleteDate}</div>}
                        </div>
                        <div className="col-lg-3 col-xl-3">
                            <input name="cdExaminationCompleteTime" type="time" className={`form-control ${errors.cdExaminationCompleteTime ? 'is-invalid' : ''}`} value={handleData.cdExaminationCompleteTime} onChange={handleChange} />
                            {errors.cdExaminationCompleteTime && <div className="invalid-feedback">{errors.cdExaminationCompleteTime}</div>}
                            {/* <TimeComp handleChange={handleChange} name1='cdExaminationCompleteHour' name2='cdExaminationCompleteMint'/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseDetails
export { ExaminationComplete }
