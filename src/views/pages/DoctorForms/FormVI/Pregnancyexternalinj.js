import React from 'react'
import { Redstar } from '../common/Operationradionbutton';
const Pregnancyexternalinj = ({ formData, onChange }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({ ...formData, [name]: value });
    };

    return (
        <div>
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-lg-3 col-xl-3">
                        Examination Uterus casetype
                        <Redstar />
                    </div>
                    <div className="col-lg-3 col-xl-3">
                        <select className="form-select"
                            value={formData.examination_uterus_casetype}
                            name='examination_uterus_casetype'
                            onChange={handleChange}
                        >
                            <option selected="selected" value="Select">Select</option>
                            <option value="1">Advance pregnancy</option>
                            <option value="2">Illegal aboration</option>
                            <option value="3">Utterine repture</option>
                            <option value="4">Other</option>
                        </select>
                    </div>
                    {formData.examination_uterus_casetype === '4' && ( // Show input field conditionally
                        <>
                            <div className="col-lg-3 col-xl-3">
                                Examination Uterus casetype other  <Redstar />
                            </div>
                            <div className='col-lg-3 col-xl-3'>
                                <textarea
                                    name="examination_uterus_casetype_other" // Add a new field for remarks
                                    value={formData.examination_uterus_casetype_other}
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        Gastation Pregnancy<Redstar />
                    </div>
                    <div className="col-3">
                        <textarea name="gastation_pregnancy" value={formData.gastation_pregnancy} onChange={handleChange} type="text" className="form-control" />
                    </div>
                    <div className="col-3">
                        Uterus status
                        <Redstar />
                    </div>
                    <div className="col-3">
                        <textarea name="uterus_status" value={formData.uterus_status} onChange={handleChange} type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-3 col-xl-3">
                        Is Scar
                        <Redstar />
                    </div>
                    <div className="col-lg-3 col-xl-3">
                        <select className="form-select"
                            value={formData.is_ccar}
                            onChange={handleChange}
                            name='is_ccar'
                        >
                            <option selected="selected" value="Select">
                                Select
                            </option>
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-3 col-xl-3">
                        Is ruptured <Redstar />
                    </div>
                    <div className="col-lg-3 col-xl-3">
                        <select className="form-select"
                            value={formData.is_ruptured}
                            onChange={handleChange}
                            name='is_ruptured'
                        >              <option selected="selected" value="Select">
                                Select
                            </option>
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                        </select>
                    </div>
                    {formData.is_ruptured === 'Y' && ( // Show input field conditionally
                        <>
                            <div className="col-lg-3 col-xl-3">
                                Ruptured site  <Redstar />
                            </div>
                            <div className='col-lg-3 col-xl-3'>
                                <input
                                    name="ruptured_site" // Add a new field for remarks
                                    value={formData.ruptured_site}
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </>
                    )}

                </div>

                <div className="row mb-3">
                    <div className="col-lg-3 col-xl-3">
                        Fetus status <Redstar />
                    </div>
                    <div className="col-lg-3 col-xl-3">
                        <select className="form-select"
                            value={formData.fetus_status}
                            onChange={handleChange}
                            name='fetus_status'
                        >              <option selected="selected" value="Select">
                                Select
                            </option>
                            <option value="1">Inside the Uterus</option>
                            <option value="2">Outside the Uterus</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                        Placenta status <Redstar />
                    </div>
                    <div className="col-lg-3 col-xl-3">
                        <select className="form-select"
                            value={formData.placenta_status}
                            onChange={handleChange}
                            name='placenta_status'
                        >              <option selected="selected" value="Select">
                                Select
                            </option>
                            <option value="1">Inside the Uterus</option>
                            <option value="2">Outside the Uterus</option>
                        </select>
                    </div>



                </div>
                <div className="row mb-3">
                    <div className="col-lg-3 col-xl-3">
                        IsFetus maceration <Redstar />
                    </div>
                    <div className="col-lg-3 col-xl-3">
                        <select
                            className="form-select"
                            value={formData.isfetus_maceration}
                            onChange={handleChange}
                            name='isfetus_maceration'
                        >
                            <option selected="selected" value="Select">
                                Select
                            </option>
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                        </select>
                    </div>
                    {formData.isfetus_maceration === 'Y' && ( // Show input field conditionally
                        <>
                            <div className="col-lg-3 col-xl-3">
                                Weight Fetus maceration <Redstar />
                            </div>
                            <div className='col-lg-3 col-xl-3'>
                                <input
                                    name="weight_fetus_maceration" // Add a new field for remarks
                                    value={formData.weight_fetus_maceration}
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Remarks for IsFetus maceration"
                                />
                                <p>In Kg and gram eg 1.200 kg
                                </p>
                            </div>
                        </>
                    )}
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        Retroplacental clot <Redstar />
                    </div>
                    <div className="col-3">
                        <textarea name="retroplacental_clot" value={formData.retroplacental_clot} onChange={handleChange} type="text" className="form-control" />
                    </div>
                    <div className="col-3">
                        Presence hemoperitoneum
                        <Redstar />
                    </div>
                    <div className="col-3">
                        <textarea name="presence_hemoperitoneum" value={formData.presence_hemoperitoneum} onChange={handleChange} type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-3 col-xl-3">
                        Is foreignbody uterus <Redstar />
                    </div>
                    <div className="col-lg-3 col-xl-3">
                        <select className="form-select"
                            value={formData.is_foreignbody_uterus}
                            onChange={handleChange}
                            name='is_foreignbody_uterus'
                        >              <option selected="selected" value="Select">
                                Select
                            </option>
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                        Is foreignbody cervis <Redstar />
                    </div>
                    <div className="col-lg-3 col-xl-3">
                        <select className="form-select"
                            value={formData.is_foreignbody_cervis}
                            name='is_foreignbody_cervis'
                            onChange={handleChange}
                        >              <option selected="selected" value="Select">
                                Select
                            </option>
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-lg-3 col-xl-3">
                        Is foreignbody vagina <Redstar />
                    </div>
                    <div className="col-lg-3 col-xl-3">
                        <select className="form-select"
                            value={formData.is_foreignbody_vagina}
                            name='is_foreignbody_vagina'
                            onChange={handleChange}
                        >              <option selected="selected" value="Select">
                                Select
                            </option>
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                        Addlitional remarks <Redstar />
                    </div>
                    <div className="col-3">
                        <textarea name="addlitional_remarks" value={formData.addlitional_remarks} onChange={handleChange} type="text" className="form-control" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pregnancyexternalinj
