import React, { useState, useEffect } from 'react';
import { ButtonBackandSave, Redstar } from '../common/Operationradionbutton';
import axios from 'axios';
import { callApi } from 'src/views/CommonModels/CallApi';

const OpinionVI = ({ BodySideViewdetail, OpinionVIdetail, HandedOverpoliceVIdetail, trn }) => {
    const [formData, setFormData] = useState({
        pmopi_remarksmedical_officerboard_death: '',
        antemortem: '',
        natureof_weaponforce: '',
        howtheinjurywouldcause: '',
        mbaj_dislocation: '',
        pmopitime_since_deathbetween_injuryanddeath: '',
        pmopideathbetween_deathand_postmortem_examination: '',
        anyother: '',

    });

    // for handle user input data 
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // for submit api 
    const enterby = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const apiURL = `${apiPrefix}/user/form6/add_opinion`;

    const handleF3_frstClick = async () => {
        HandedOverpoliceVIdetail(true);
        OpinionVIdetail(false);
        console.log("Data is ", formData);
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
            const postData = {
                pmopitransactionid: trn,
                createuser: enterby,
                ...formData
            }
            const response = await axios.post(apiURL, postData, config);
            if (response.status === 200) {
                console.log('API Response:', response.data);
            } else {
                console.error('API Error:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleF3_frstBackClick = () => {
        OpinionVIdetail(false);
        BodySideViewdetail(true);
    }


    // get all data value 
    const apigetData = `${apiPrefix}/user/form6/get_opinionbyid/${trn}`

    // get all data
    useEffect(() => {
        callApi(apigetData)
            .then((response) => {
                setFormData(response)
            })
            .catch((error) => {
                console.error('API request failed:', error)
            })
    }, [])

    return (
        <div className="Container">
            <div className="card">
                <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
                    <h4>Opinion</h4>
                </div>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-lg-3 col-xl-3">
                            Cause of Death
                            <Redstar />
                            (Max. 8000 Characters)
                        </div>
                        <div className="col-lg-3 col-xl-3">
                            <textarea
                                name="pmopi_remarksmedical_officerboard_death"
                                type="text"
                                value={formData.pmopi_remarksmedical_officerboard_death}
                                onChange={handleInputChange}
                                className="form-control"
                            />             </div>
                        <div className="col-lg-3 col-xl-3">
                            Antemortem / Postmortem (Max. 4000 Characters)
                        </div>
                        <div className="col-lg-3 col-xl-3">
                            <textarea
                                name="antemortem"
                                type="text"
                                value={formData.antemortem}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-3 col-xl-3">
                            Nature Of Weapon/Force (Max. 4000 Characters)
                        </div>
                        <div className="col-lg-3 col-xl-3">
                            <textarea
                                name="natureof_weaponforce"
                                type="text"
                                value={formData.natureof_weaponforce}
                                onChange={handleInputChange}
                                className="form-control"
                            />             </div>
                        <div className="col-lg-3 col-xl-3">
                            How the Injury would Caused (Max. 4000 Characters)
                        </div>
                        <div className="col-lg-3 col-xl-3">
                            <textarea
                                name="howtheinjurywouldcause"
                                type="text"
                                value={formData.howtheinjurywouldcause}
                                onChange={handleInputChange}
                                className="form-control"
                            />             </div>
                    </div>
                    <h6>Probable time</h6>
                    <div className="row mb-3">
                        <div className="col-lg-3 col-xl-3">
                            a.Between injury and death
                            <Redstar />
                            (Max. 255 Characters)
                        </div>
                        <div className="col-lg-3 col-xl-3">
                            <textarea
                                name="pmopitime_since_deathbetween_injuryanddeath"
                                type="text"
                                value={formData.pmopitime_since_deathbetween_injuryanddeath}
                                onChange={handleInputChange}
                                className="form-control"
                            />             </div>
                        <div className="col-lg-3 col-xl-3">
                            b.Between death and postmortem examination* (Max. 255 Characters)
                        </div>
                        <div className="col-lg-3 col-xl-3">
                            <textarea
                                name="pmopideathbetween_deathand_postmortem_examination"
                                type="text"
                                value={formData.pmopideathbetween_deathand_postmortem_examination}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-3 col-xl-3">
                            Any Other (Max. 4000 Characters)
                        </div>
                        <div className="col-lg-3 col-xl-3">
                            <textarea
                                name="anyother"
                                type="text"
                                value={formData.anyother}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
                </div>
            </div>
        </div>
    )
}

export default OpinionVI;
