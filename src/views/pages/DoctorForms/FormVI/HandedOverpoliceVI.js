import React, { useEffect, useState } from 'react'


import AnyDetails from './innercomp/AnyDetails'

import { ButtonBackandSave } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const HandedOverpoliceVI = ({
    OpinionVIdetail,
    HandedOverpoliceVIdetail,
    AdditionalInjurydetail,
    trn
}) => {

    // const handleF3_frstClick = () => {
    //     AdditionalInjurydetail(true)
    //     HandedOverpoliceVIdetail(false)
    // }
    const handleF3_frstBackClick = () => {
        HandedOverpoliceVIdetail(false)
        OpinionVIdetail(true)
    }
    const apiPrefix = process.env.REACT_APP_API_PREFIX



    const [formData, setFormData] = useState({

        // ho_isdeadbody_afterexam: false,
        ho_deadbody_afterexamdetail: false,
        ho_isbelonging: false,
        ho_isbelongingdetail: false,
        ho_ispmereport: false,
        ho_ispoliceinquestpapers: false,
        ho_issealed_envelop: false,
        ho_sealedenvelop_iscopypmereport: false,
        ho_sealedenvelop_isforwardingletter: false,
        ho_sealedenvelop_isinquestpapers: false,
        ho_sealedenvelop_issamplesheel4chemana: false,
        ho_Issealedenvelop_extra: false,
        ho_sealedenvelop_iscopypmereport_extra: false,
        ho_sealedenvelop_isforwardingletter_extra: false,
        ho_sealedenvelop_isinquestpapers_extra: false,
        ho_sealedenvelop_issamplesheel4chemana_extra: false,
        ho_issealedviscera: false,
        ho_issealedenvelop4histopathology: false,
        ho_istissuekept4he: false,
        ho_issampleblood: false,
        ho_isligraturematerial: false,
        ho_isskinofpuls: false,
        ho_isswab: false,
        ho_isscalpHair: false,
        ho_ispiececloths: false,
        ho_isxrayplate: false,
        ho_isvediocassette: false,
        ho_vediocassette_detail: false,
        ho_isphotograph: false,
        ho_ischbphotographstakenio: false,
        ho_isanyother: false,

        // missing checkbox

        ho_sealedviscera_intestinewithconent: false,
        ho_istissueshe_pgi: false,
        // ho_sealedviscera_multipleentry: false,


        //missing input field

        ho_sealedviscera_multipleentry: "",
        ho_sealedenveloph_forwardingLetter: "",
        ho_typeofcontainerhe_pgi: "",
        ho_noofcontainerhe_pgi: "",
        ho_noofsealhe_pgi: "",
        ho_xrayplatedetail2: '',

        ho_belongingsdetails: "",
        ho_policeinquestpapersno: "",
        ho_sealedenvelop_noofSeals: "",
        ho_sealedenvelop_isforwardingletter_detail: "",
        ho_sealedenvelop_inquestpapersnos: "",
        ho_issealedenvelop_extra_for: "",
        ho_sealedenvelop_noofseals_extra: "",
        ho_sealedenvelop_isforwardingletter_detail_extra: "",
        ho_sealedenvelop_inquestpapersnos_extra: "",
        ho_sealedviscera_sealsno: "",
        ho_sealedenveloph_noofSeals: "",
        input13: "",
        ho_istissuekept4hedetail: "",
        ho_issampleblood_detail: "",
        ho_isligraturematerial_detail: "",
        ho_swabdetail: "",
        ho_isscalphair_detail: "",
        ho_piececloths_datail: "",
        ho_isvediocassette_detail: "",
        ho_photograph_hastakendetail: "",
        ho_photograph_no: "",
        ho_anyother: "",
        ho_policename: "",
        ho_policebno: "",
        ho_policestation: "",
        ho_xrayplatedetail1: "",
        ho_istissueshe_pgi_detail: "",

        input29: "",
        input30: "",

    });


    // Function to handle changes in checkboxes
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFormData({
            ...formData,
            [name]: checked,
        });
    };

    // Function to handle changes in input fields
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const enterby = localStorage.getItem('username')
    const token = localStorage.getItem('token')

    // Function to handle form submission
    const handleF3_frstClick = async (event) => {
        event.preventDefault();
        AdditionalInjurydetail(true)
        HandedOverpoliceVIdetail(false)

        // Prepare the data for the POST request
        const postData = {
            ho_isdeadbody_afterexam: formData.ho_isdeadbody_afterexam ? "Y" : "N",
            ho_deadbody_afterexamdetail: formData.ho_deadbody_afterexamdetail ? "Y" : "N",
            ho_isbelonging: formData.ho_isbelonging ? "Y" : "N",
            ho_isbelongingdetail: formData.ho_isbelongingdetail ? "Y" : "N",
            ho_ispmereport: formData.ho_ispmereport ? "Y" : "N",
            ho_ispoliceinquestpapers: formData.ho_ispoliceinquestpapers ? "Y" : "N",
            ho_issealed_envelop: formData.ho_issealed_envelop ? "Y" : "N",
            ho_sealedenvelop_iscopypmereport: formData.ho_sealedenvelop_iscopypmereport ? "Y" : "N",
            ho_sealedenvelop_isforwardingletter: formData.ho_sealedenvelop_isforwardingletter ? "Y" : "N",
            ho_sealedenvelop_isinquestpapers: formData.ho_sealedenvelop_isinquestpapers ? "Y" : "N",
            ho_sealedenvelop_issamplesheel4chemana: formData.ho_sealedenvelop_issamplesheel4chemana ? "Y" : "N",
            ho_Issealedenvelop_extra: formData.ho_Issealedenvelop_extra ? "Y" : "N",
            ho_sealedenvelop_iscopypmereport_extra: formData.ho_sealedenvelop_iscopypmereport_extra ? "Y" : "N",
            ho_sealedenvelop_isforwardingletter_extra: formData.ho_sealedenvelop_isforwardingletter_extra ? "Y" : "N",
            ho_sealedenvelop_isinquestpapers_extra: formData.ho_sealedenvelop_isinquestpapers_extra ? "Y" : "N",
            ho_sealedenvelop_issamplesheel4chemana_extra: formData.ho_sealedenvelop_issamplesheel4chemana_extra ? "Y" : "N",
            ho_issealedviscera: formData.ho_issealedviscera ? "Y" : "N",
            ho_issealedenvelop4histopathology: formData.ho_issealedenvelop4histopathology ? "Y" : "N",

            // msissng checkbox 
            ho_sealedviscera_intestinewithconent: formData.ho_sealedviscera_intestinewithconent ? "Y" : "N",
            ho_istissuekept4he: formData.ho_istissuekept4he ? "Y" : "N",
            ho_istissueshe_pgi: formData.ho_istissueshe_pgi ? "Y" : "N",
            ho_isligraturematerial: formData.ho_isligraturematerial ? "Y" : "N",
            ho_isskinofpuls: formData.ho_isskinofpuls ? "Y" : "N",
            ho_isswab: formData.ho_isswab ? "Y" : "N",
            ho_isscalpHair: formData.ho_isscalpHair ? "Y" : "N",
            ho_ispiececloths: formData.ho_ispiececloths ? "Y" : "N",
            ho_isxrayplate: formData.ho_isxrayplate ? "Y" : "N",
            ho_isvediocassette: formData.ho_isvediocassette ? "Y" : "N",
            ho_vediocassette_detail: formData.ho_vediocassette_detail ? "Y" : "N",
            ho_isphotograph: formData.ho_isphotograph ? "Y" : "N",
            ho_ischbphotographstakenio: formData.ho_ischbphotographstakenio ? "Y" : "N",
            ho_isanyother: formData.ho_isanyother ? "Y" : "N",
            ho_issampleblood: formData.ho_issampleblood ? "Y" : "N",
            //inpjut misssing checkbox
            ho_sealedviscera_multipleentry: formData.ho_sealedviscera_multipleentry,
            ho_sealedenveloph_forwardingLetter: formData.ho_sealedenveloph_forwardingLetter,
            ho_istissueshe_pgi_detail: formData.ho_istissueshe_pgi_detail,
            ho_typeofcontainerhe_pgi: formData.ho_typeofcontainerhe_pgi,
            ho_noofcontainerhe_pgi: formData.ho_noofcontainerhe_pgi,
            ho_noofsealhe_pgi: formData.ho_noofsealhe_pgi,
            ho_xrayplatedetail2: formData.ho_xrayplatedetail2,
            ho_belongingsdetails: formData.ho_belongingsdetails,
            ho_policeinquestpapersno: formData.ho_policeinquestpapersno,
            ho_sealedenvelop_noofSeals: formData.ho_sealedenvelop_noofSeals,
            ho_sealedenvelop_isforwardingletter_detail: formData.ho_sealedenvelop_isforwardingletter_detail,
            ho_sealedenvelop_inquestpapersnos: formData.ho_sealedenvelop_inquestpapersnos,
            ho_issealedenvelop_extra_for: formData.ho_issealedenvelop_extra_for,
            ho_sealedenvelop_noofseals_extra: formData.ho_sealedenvelop_noofseals_extra,
            ho_sealedenvelop_isforwardingletter_detail_extra: formData.ho_sealedenvelop_isforwardingletter_detail_extra,
            ho_sealedenvelop_inquestpapersnos_extra: formData.ho_sealedenvelop_inquestpapersnos_extra,
            // new line 
            ho_sealedviscera_sealsno: formData.ho_sealedviscera_sealsno,
            ho_sealedenveloph_noofSeals: formData.ho_sealedenveloph_noofSeals,
            ho_istissuekept4hedetail: formData.ho_istissuekept4hedetail,
            ho_issampleblood_detail: formData.ho_issampleblood_detail,
            ho_isligraturematerial_detail: formData.ho_isligraturematerial_detail,
            ho_swabdetail: formData.ho_swabdetail,
            ho_isscalphair_detail: formData.ho_isscalphair_detail,
            ho_piececloths_datail: formData.ho_piececloths_datail,
            ho_isvediocassette_detail: formData.ho_isvediocassette_detail,
            ho_photograph_hastakendetail: formData.ho_photograph_hastakendetail,
            ho_photograph_no: formData.ho_photograph_no,
            ho_anyother: formData.ho_anyother,
            ho_policename: formData.ho_policename,
            ho_policestation: formData.ho_policestation,
            ho_xrayplatedetail1: formData.ho_xrayplatedetail1,
            ho_policebno: formData.ho_policebno,
            createuser: enterby,
            ho_transactionid: trn,

        };
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }
        try {
            const response = await axios.post('http://localhost:9091/user/form6/add_handed_over_police', postData, config);
            if (response.status === 200) {
                console.log('API Response:', response.data);
            } else {
                console.error('API Error:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // get all data  

    const apiGet = `${apiPrefix}/user/form6/get_handed_over_police/${trn}`

    useEffect(() => {
        callApi(apiGet)
            .then((response) => {
                setFormData(response)
            })
            .catch((error) => {
                console.error('API request failed:', error)
            })
    }, [])
    return (
        <div className='container'>
            <div className="card">
                <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
                    <h4>Handed Over to police</h4>
                </div>
                <div className="card-body mb-2">
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_isdeadbody_afterexam'
                                    checked={formData.ho_isdeadbody_afterexam}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>Dead Body After Post Mortem Examination</label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_deadbody_afterexamdetail'
                                    checked={formData.ho_deadbody_afterexamdetail}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>With its Belongings</label>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_isbelonging'
                                    checked={formData.ho_isbelonging}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>Belongings of the deceased : Sealed/Unsealed</label>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_isbelongingdetail'
                                    checked={formData.ho_isbelongingdetail}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>Sealed</label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_belongingsdetails'
                                value={formData.ho_belongingsdetails}
                                onChange={handleInputChange}
                                disabled={!formData.ho_isbelonging}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_ispmereport'
                                    checked={formData.ho_ispmereport}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>Post Mortem Examination Report</label>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_ispoliceinquestpapers'
                                    checked={formData.ho_ispoliceinquestpapers}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>Police Inquest Paper(s) Numbering 1 to</label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_policeinquestpapersno'
                                value={formData.ho_policeinquestpapersno}
                                onChange={handleInputChange}
                                disabled={!formData.ho_ispoliceinquestpapers}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_issealed_envelop'
                                    checked={formData.ho_issealed_envelop}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>A Sealed Envelope for chemical analysis With</label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_sealedenvelop_noofSeals'
                                value={formData.ho_sealedenvelop_noofSeals}
                                onChange={handleInputChange}
                                disabled={!formData.ho_issealed_envelop}
                            />
                        </div>
                        {/* Conditional rendering for the additional input field */}
                        {formData.ho_issealed_envelop && (
                            <div className='card mt-3'>
                                <div className='row mb-3'>
                                    <div className='col-6'>
                                        <div className='form-check'>
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                name='ho_sealedenvelop_iscopypmereport'
                                                checked={formData.ho_sealedenvelop_iscopypmereport}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className='form-check-label'>A Copy of the Post Mortem Report</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row m-3'>
                                    <div className='col-6'>
                                        <div className='form-check'>
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                name='ho_sealedenvelop_isforwardingletter'
                                                checked={formData.ho_sealedenvelop_isforwardingletter}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className='form-check-label'>Forwarding Letter</label>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='ho_sealedenvelop_isforwardingletter_detail'
                                            value={formData.ho_sealedenvelop_isforwardingletter_detail}
                                            onChange={handleInputChange}
                                            disabled={!formData.ho_sealedenvelop_isforwardingletter}
                                        />
                                    </div>
                                </div>
                                <div className='row m-3'>
                                    <div className='col-6'>
                                        <div className='form-check'>
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                name='ho_sealedenvelop_isinquestpapers'
                                                checked={formData.ho_sealedenvelop_isinquestpapers}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className='form-check-label'>Inquest Paper(s) Numbering 1 to</label>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='ho_sealedenvelop_inquestpapersnos'
                                            value={formData.ho_sealedenvelop_inquestpapersnos}
                                            onChange={handleInputChange}
                                            disabled={!formData.ho_sealedenvelop_isinquestpapers}
                                        />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-6'>
                                        <div className='form-check'>
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                name='ho_sealedenvelop_issamplesheel4chemana'
                                                checked={formData.ho_sealedenvelop_issamplesheel4chemana}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className='form-check-label'>A sample of Seal</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_Issealedenvelop_extra'
                                    checked={formData.ho_Issealedenvelop_extra}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>A Sealed Envelope for</label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_issealedenvelop_extra_for'
                                value={formData.ho_issealedenvelop_extra_for}
                                onChange={handleInputChange}
                                disabled={!formData.ho_Issealedenvelop_extra}
                            />
                            <p>With</p>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'></div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_sealedenvelop_noofseals_extra'
                                value={formData.ho_sealedenvelop_noofseals_extra}
                                onChange={handleInputChange}
                                disabled={!formData.ho_Issealedenvelop_extra}
                            />
                            <p>seal(s) containing
                            </p>
                        </div>
                    </div>
                    {/* Conditional rendering for the additional input field */}
                    {formData.ho_Issealedenvelop_extra && (
                        <div className='container card mt-3'>
                            <div className='row mb-3'>
                                <div className='col-6'>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            name='ho_sealedenvelop_iscopypmereport_extra'
                                            checked={formData.ho_sealedenvelop_iscopypmereport_extra}
                                            onChange={handleCheckboxChange}
                                        />
                                        <label className='form-check-label'>A Copy of the Post Mortem Report</label>
                                    </div>
                                </div>
                            </div>
                            <div className='row m-3'>
                                <div className='col-6'>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            name='ho_sealedenvelop_isforwardingletter_extra'
                                            checked={formData.ho_sealedenvelop_isforwardingletter_extra}
                                            onChange={handleCheckboxChange}
                                        />
                                        <label className='form-check-label'>Forwarding Letter</label>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='ho_sealedenvelop_isforwardingletter_detail_extra'
                                        value={formData.ho_sealedenvelop_isforwardingletter_detail_extra}
                                        onChange={handleInputChange}
                                        disabled={!formData.ho_sealedenvelop_isforwardingletter_extra}
                                    />
                                </div>
                            </div>
                            <div className='row m-3'>
                                <div className='col-6'>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            name='ho_sealedenvelop_isinquestpapers_extra'
                                            checked={formData.ho_sealedenvelop_isinquestpapers_extra}
                                            onChange={handleCheckboxChange}
                                        />
                                        <label className='form-check-label'>Inquest Paper(s) Numbering 1 to</label>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='ho_sealedenvelop_inquestpapersnos_extra'
                                        value={formData.ho_sealedenvelop_inquestpapersnos_extra}
                                        onChange={handleInputChange}
                                        disabled={!formData.ho_sealedenvelop_isinquestpapers_extra}
                                    />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-6'>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            name='ho_sealedenvelop_issamplesheel4chemana_extra'
                                            checked={formData.ho_sealedenvelop_issamplesheel4chemana_extra}
                                            onChange={handleCheckboxChange}
                                        />
                                        <label className='form-check-label'>A sample of Seal</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_issealedviscera'
                                    checked={formData.ho_issealedviscera}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>A sealed box with</label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_sealedviscera_sealsno'
                                value={formData.ho_sealedviscera_sealsno}
                                onChange={handleInputChange}
                                disabled={!formData.ho_issealedviscera}
                            />
                            <p>seal(s) containing following viscera for chemical analysis </p>
                        </div>
                        {formData.ho_issealedviscera && (
                            <div className='container card mt-3'>
                                <div className='row mt-2'>
                                    <p>(1) Stomach With Contents</p>
                                </div>
                                <div className='row m-2'>
                                    <div className='form-check'>
                                        <p>(2) Part of Small and
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                name='ho_sealedviscera_intestinewithconent'
                                                checked={formData.ho_sealedviscera_intestinewithconent}
                                                onChange={handleCheckboxChange}
                                            />
                                            Large Intestine with contents
                                        </p>
                                    </div>
                                </div>
                                <div className='row m-3'>
                                    <div className='col-6'>
                                        <p>(3) Half of each kidney ,pieces of spleen and of liver with gall bladder
                                        </p>
                                    </div>
                                    <div className='col-6'>
                                        <textarea
                                            type='text'
                                            className='form-control'
                                            name='ho_sealedviscera_multipleentry'
                                            value={formData.ho_sealedviscera_multipleentry}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='row m-3'>
                                    <div className='col-6'>
                                        (4) Sample of preservative
                                        (5) Blood
                                    </div>
                                    <div className='col-6'>
                                        <textarea
                                            type='text'
                                            className='form-control'
                                            name='nammme'
                                            value={formData.namme}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                {/* <div className='row mb-3'>
                                    <div className='col-6'>
                                        <div className='form-check'>
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                name='ho_sealedenvelop_issamplesheel4chemana_extra'
                                                checked={formData.ho_sealedenvelop_issamplesheel4chemana_extra}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className='form-check-label'>A sample of Seal</label>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        )}
                    </div>
                    <div className='row m-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_issealedenvelop4histopathology'
                                    checked={formData.ho_issealedenvelop4histopathology}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>A Sealed Envelope bearing</label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_sealedenveloph_noofSeals'
                                value={formData.ho_sealedenveloph_noofSeals}
                                onChange={handleInputChange}
                                disabled={!formData.ho_issealedenvelop4histopathology}
                            />
                            <p>Seal(s) Containing
                            </p>
                        </div>
                        {formData.ho_issealedenvelop4histopathology && (
                            <div className='conatiner card'>
                                <div className='row m-3'>
                                    <div className='col-6'>
                                        <p>A Copy of the Post Mortem Report
                                            Forwarding Letter for Histopathlogy Examination
                                        </p>
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='ho_sealedenveloph_forwardingLetter'
                                            value={formData.ho_sealedenveloph_forwardingLetter}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_istissuekept4he'
                                    checked={formData.ho_istissuekept4he}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>Following Tissues kept for histopathological examination by</label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_istissuekept4hedetail'
                                value={formData.ho_istissuekept4hedetail}
                                onChange={handleInputChange}
                                disabled={!formData.ho_istissuekept4he}
                            />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_istissueshe_pgi'
                                    checked={formData.ho_istissueshe_pgi}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>Following Tissues for histopathological examination</label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_istissueshe_pgi_detail'
                                value={formData.ho_istissueshe_pgi_detail}
                                onChange={handleInputChange}
                                disabled={!formData.ho_istissueshe_pgi}
                            />
                        </div>
                        {formData.ho_istissueshe_pgi && (
                            <div className='conatiner card'>
                                <div className='row m-3'>
                                    <div className='col-6'>
                                        <p>Type of Container
                                        </p>
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='ho_typeofcontainerhe_pgi'
                                            value={formData.ho_typeofcontainerhe_pgi}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='row m-3'>
                                    <div className='col-6'>
                                        <p>No of container(s)</p>
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='ho_noofcontainerhe_pgi'
                                            value={formData.ho_noofcontainerhe_pgi}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='row m-3'>
                                    <div className='col-6'>
                                        <p>No of seal(s)
                                        </p>
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='ho_noofsealhe_pgi'
                                            value={formData.ho_noofsealhe_pgi}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='row m-3'>
                                    <div className='col-6'>
                                        <p>Tissues for histopathological examination
                                        </p>
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='test'
                                            value={formData.test}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* // follow comp  */}
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_issampleblood'
                                    checked={formData.ho_issampleblood}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>Sample of blood on gauze piece in a sealed packet</label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_issampleblood_detail'
                                value={formData.ho_issampleblood_detail}
                                onChange={handleInputChange}
                                disabled={!formData.ho_issampleblood}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_isligraturematerial'
                                    checked={formData.ho_isligraturematerial}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>Ligrature Material in a sealed packet
                                </label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_isligraturematerial_detail'
                                value={formData.ho_isligraturematerial_detail}
                                onChange={handleInputChange}
                                disabled={!formData.ho_isligraturematerial}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_isskinofpuls'
                                    checked={formData.ho_isskinofpuls}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>Skin of pulps of all 10 fingers, individually labelled in separate vials in a sealed packet
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* // swabs  */}
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_isswab'
                                    checked={formData.ho_isswab}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>
                                    Swabs in a sealed packet
                                </label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_swabdetail'
                                value={formData.ho_swabdetail}
                                onChange={handleInputChange}
                                disabled={!formData.ho_isswab}
                            />
                        </div>
                    </div>

                    {/* hair scalpt  */}
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_isscalpHair'
                                    checked={formData.ho_isscalpHair}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>
                                    Scalp Hair in a sealed packet
                                </label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_isscalphair_detail'
                                value={formData.ho_isscalphair_detail}
                                onChange={handleInputChange}
                                disabled={!formData.ho_isscalpHair}
                            />
                        </div>
                    </div>


                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_ispiececloths'
                                    checked={formData.ho_ispiececloths}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>
                                    piece(s) of cloth bearing sample of seals with signature of doctor
                                </label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_piececloths_datail'
                                value={formData.ho_piececloths_datail}
                                onChange={handleInputChange}
                                disabled={!formData.ho_ispiececloths}
                            />
                        </div>
                    </div>
                    {/* x ray plates  */}
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_isxrayplate'
                                    checked={formData.ho_isxrayplate}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>
                                    X ray plates bearing number
                                </label>
                            </div>
                        </div>
                        {/* // newcomp   */}
                        {formData.ho_isxrayplate && (
                            <div className='container card'>
                                <div className='row mb-3'>
                                    <div className='col-6'>
                                        <div className='form-check'>
                                            <label className='form-check-label'>
                                                Identity Number's of plates
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='ho_xrayplatedetail1'
                                            value={formData.ho_xrayplatedetail1}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-6'>
                                        <div className='form-check'>
                                            <label className='form-check-label'>
                                                Quantity of plates
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='ho_xrayplatedetail2'
                                            value={formData.ho_xrayplatedetail2}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_isvediocassette'
                                    checked={formData.ho_isvediocassette}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>
                                    Video Cassette
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_vediocassette_detail'
                                    checked={formData.ho_vediocassette_detail}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>
                                    Sealed
                                </label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_isvediocassette_detail'
                                value={formData.ho_isvediocassette_detail}
                                onChange={handleInputChange}
                                disabled={!formData.ho_isvediocassette}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_isphotograph'
                                    checked={formData.ho_isphotograph}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>
                                    Numbers of Photographs duly initialled
                                </label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_photograph_hastakendetail'
                                value={formData.ho_photograph_hastakendetail}
                                onChange={handleInputChange}
                                disabled={!formData.ho_isphotograph}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_ischbphotographstakenio'
                                    checked={formData.ho_ischbphotographstakenio}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>
                                    Photographs has been taken IO to Collect , When Intimated
                                </label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <input
                                type='text'
                                className='form-control'
                                name='ho_photograph_no'
                                value={formData.ho_photograph_no}
                                onChange={handleInputChange}
                                disabled={!formData.ho_ischbphotographstakenio}
                            />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='ho_isanyother'
                                    checked={formData.ho_isanyother}
                                    onChange={handleCheckboxChange}
                                />
                                <label className='form-check-label'>
                                    Any other Detail
                                </label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <textarea
                                type='text'
                                className='form-control'
                                name='ho_anyother'
                                value={formData.ho_anyother}
                                onChange={handleInputChange}
                                disabled={!formData.ho_isanyother}
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <h5>Handed to Officer Detail</h5>
                        <div className="col-lg-3 col-xl-3">Officer Name* (Max. 50 Characters)</div>
                        <div className="col-lg-3 col-xl-3">
                            <input
                                type='text'
                                className='form-control'
                                name='ho_policename'
                                value={formData.ho_policename}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-lg-3 col-xl-3">Belt Number (Max. 50 Characters)</div>
                        <div className="col-lg-3 col-xl-3">
                            <input
                                type='text'
                                className='form-control'
                                name='ho_policebno'
                                value={formData.ho_policebno}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-lg-3 col-xl-3">Police Station (Max. 100 Characters)</div>
                        <div className="col-lg-3 col-xl-3">
                            <input
                                type='text'
                                className='form-control'
                                name='ho_policestation'
                                value={formData.ho_policestation}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>

    )
}

export default HandedOverpoliceVI
