import React, { useState } from 'react';
import axios from 'axios';
import { ButtonBackandSave } from '../common/Operationradionbutton';
import DetailsPenetrationMale, { DefaultDisable, OptionDropDown, SelectTable } from './DetailsPenetrationMale';

const DetailsRegardingPenetrationmale = ({
    penetDetail,
    phyExaminBodyDetail,
    maleLocalExaminationDetail,
    trnid,
}) => {
    const enterby = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const [penetration, setpenetration] = useState(false);
    const [formData, setFormData] = useState({
        waspenetration: 'Y',
        penAttempt_anus_penis: 'Y',
        penAttempt_anus_finger: 'Y',
        penAttempt_anus_object: 'Y',
        penAttempt_mouth_penis: 'Y',
        penAttempt_mouth_finger: 'Y',
        penAttempt_mouth_object: 'Y',
        pencomplete_anus_penis: 'Y',
        pencomplete_anus_finger: 'Y',
        pencomplete_anus_object: 'Y',
        pencomplete_mouth_penis: 'Y',
        pencomplete_mouth_finger: 'Y',
        pencomplete_mouth_object: 'Y',
        penemission_vagina: 'Y',
        penemission_anus: 'Y',
        penemission_mouth: 'Y',
        createUser: enterby,
        pentransactionID: trnid,

        // name: '',
    });

    const [formData1, setFormData1] = useState({
        cfeWasOralSex: 'Y',
        cfeMasturbationByAssailent: 'Y',
        cfeMasturbationByVictim: ' Y',
        cfeEjaculation: 'Y',
        cfeLocationKiss: 'Y',
        cfeLocationEjaculation: 'Y',
        cfeKissingEtc: 'N',
        cfeLocationKiss: '',
        createUser: enterby,
        cfeTransactionID: trnid,
    });

    const apiPrefix = process.env.REACT_APP_API_PREFIX;

    const handleF3_frstClick = async () => {
        penetDetail(false)
        maleLocalExaminationDetail(true)
        try {
            // First API post request
            const response1 = await axios.post(
                `${apiPrefix}/user/form3/savedetailspenetration`,
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response1) {
                console.log('First API request successful');
            } else {
                console.error('First API request failed with status code:', response1);
            }

            // Second API post request using formData1
            const response2 = await axios.post(
                `${apiPrefix}/user/form3/savedetailspenetrationfemalevicitm`,
                formData1,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response2.status === 200) {
                console.log('Second API request successful');
            } else {
                console.error('Second API request failed with status code:', response2.status);
            }

            console.log(formData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData1({ ...formData1, [name]: value });
    };

    const handleF3_frstBackClick = () => {
        penetDetail(false);
        phyExaminBodyDetail(true);
    };

    return (
        <div className="Container">
            <div className="card mt-2">
                <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
                    <h4>Details Regarding Penetration (as narrated by male vicitm / accused /guardian)</h4>
                </div>
                <div className="card-body mb-2 mt-2">

                    <div className="row mt-3">
                        <div className="col-9 mb-3">a) Was penetration attempted by penis, fingers or other object?</div>
                        <div className="col-3">
                            <select
                                className="form-select"
                                name="waspenetration"
                                value={formData.waspenetration}
                                onChange={handleChange}
                            >
                                <option value="Y">Yes</option>
                                <option value="N">No</option>
                                <option value="D">Don't Know </option>
                                <option value="R">Don't Remember</option>
                                <option value="U">Don't Understand</option>
                            </select>
                        </div>
                        {formData.waspenetration === 'Y' && (
                            <div className="row mt-3"> {/* Add a class name to style the container */}
                                <table
                                    id="tblView14DetailsRegardingPenetration"
                                    className="table table-bordered"
                                    border={2}
                                >
                                    <tbody>
                                        <tr>
                                            <td style={{ width: 100 }} />
                                            <td colSpan={3}>
                                                Attemption penetration
                                            </td>
                                            <td colSpan={3}>
                                                Completed penetration
                                            </td>
                                            <td>
                                                Emission of semen
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: 100 }}>Orifice</td>
                                            <td>
                                                <span style={{ fontSize: "9pt", fontFamily: "Calibri" }}>By Penis</span>
                                            </td>
                                            <td>
                                                By Finger
                                            </td>
                                            <td style={{ width: 100 }}>
                                                By Object
                                            </td>
                                            <td style={{ width: 100 }}>
                                                <span style={{ fontSize: "9pt" }}>By Penis</span>
                                            </td>
                                            <td style={{ width: 100 }}>
                                                By Finger
                                            </td>
                                            <td style={{ width: 100 }}>
                                                By Object
                                            </td>
                                            <td />
                                        </tr>
                                        <tr>
                                            <td style={{ width: 100 }}>Anus</td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="penAttempt_anus_penis"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="penAttempt_anus_finger"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="penAttempt_anus_object"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="pencomplete_anus_penis"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="pencomplete_anus_finger"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="pencomplete_anus_object"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="penemission_anus"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                        </tr>
                                        {/* new line  */}
                                        <tr>
                                            <td style={{ width: 100 }}>Mouth</td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="penAttempt_mouth_penis"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="penAttempt_mouth_finger"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="penAttempt_mouth_object"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="pencomplete_mouth_penis"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="pencomplete_mouth_finger"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="pencomplete_mouth_object"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                            <td>
                                                <OptionDropDown
                                                    selectName="penemission_mouth"
                                                    formData={formData}
                                                    setFormData={setFormData}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                    <DetailsPenetrationMale
                        title1="b) Was oral sex performed by assailant on the victim?"
                        selectName="cfeWasOralSex"
                        formData1={formData1}
                        setFormData1={setFormData1}
                    />
                    <DetailsPenetrationMale
                        title1="(c)  of the victim by assailant?     	"
                        selectName="cfeMasturbationByAssailent"
                        formData1={formData1}
                        setFormData1={setFormData1}

                    />
                    <DetailsPenetrationMale
                        title1="d)Masturbation of assailant by the victim?	"
                        selectName="cfeMasturbationByVictim"
                        formData1={formData1}
                        setFormData1={setFormData1}
                    />
                    <DetailsPenetrationMale
                        title1="e) Did ejaculation occur outside body orifice?	"
                        selectName="cfeEjaculation"
                        formData1={formData1}
                        setFormData1={setFormData1}

                    />
                    <DefaultDisable
                        inputName="exampleInput"
                        formData1={formData1}
                        setFormData1={setFormData1}
                        title="Example Title"
                    />
                    <div className='row mt-3'>
                        <div className='col-9' >
                            (g) Kissing, Lickng or sucking of breast or other parts of patient’s body?
                        </div>
                        <div className='col-3'>

                            <select
                                className='form-control'
                                name='cfeKissingEtc'
                                value={formData1.cfeKissingEtc}
                                onChange={handleInputChange}
                            >
                                <option value="Y">Yes</option>
                                <option value="N">No</option>
                                <option value="D">Don't Know</option>
                                <option value="R">Don't Remember</option>
                                <option value="U">Don't Understand</option>
                            </select>
                            <input
                                type='text'
                                className='form-control mt-3'
                                name='cfeLocationKiss'
                                value={formData1.cfeLocationKiss}
                                onChange={handleInputChange}
                                disabled={formData1.cfeKissingEtc === 'N'}
                            />
                        </div>
                    </div>
                    <DefaultDisable
                        inputName="exampleInput"
                        formData1={formData1}
                        setFormData1={setFormData1}
                        title="Example Title"
                    />
                    <DetailsPenetrationMale
                        title1="g) Is penetration was attempted by object:   	"
                        selectName="cfeLocationKiss"
                        formData1={formData1}
                        setFormData1={setFormData1}

                    />
                    <DefaultDisable
                        inputName="exampleInput"
                        formData1={formData1}
                        setFormData1={setFormData1}
                        title="Example Title"
                    />
                    <DetailsPenetrationMale title1="h)Between the assault and the time of the examination did the patient:"
                        selectName="cfeLocationEjaculation"
                        formData1={formData1}
                        setFormData1={setFormData1}
                    />
                    <SelectTable
                        selectName="cfeBath"
                        select1Name="cfeWash"
                        select2Name="cfeUrinate"
                        select3Name="cfeDefecate"
                        select4Name="cfeUseSpermide"
                        formData1={formData1}
                        setFormData1={setFormData1}
                    />
                    <DetailsPenetrationMale title1="i) Since the assault, has there been any anal discharge/bleeding"
                        selectName="penemission_mouth"
                        formData1={formData1}
                        setFormData1={setFormData1}
                    />

                    {/* <DefaultDisable title=" j) IQ Assessment of the patient (By Psychiatrist ,if required)"
                        selectName="penemission_mouth"
                        formData1={formData1}
                        setFormData1={setFormData1}
                    /> */}
                    <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
                </div >
            </div >
        </div >

    );
};

export default DetailsRegardingPenetrationmale;
