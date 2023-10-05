import React, { useState, useEffect } from 'react'
import SymptomsObserved from './SymptomsObserved'
import Formdetail from '../common/Formdetails'
import { useNavigate } from 'react-router-dom'
import { ButtonBackandSave } from '../common/Operationradionbutton'
import SymptomsObservedVI from './SymptomsObservedVI'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'
const SymptomsObservedUnknow = ({
    SymptomsObservedUnknowdetail,
    IdentificatioHospitaldetail,
    GeneralDescriptionVIFormdetail,
    trn,
}) => {
    const [formData, setFormData] = useState({
        smptbeforedeath: '',
        smptbeforedeath_asperHsopitalrecord: '',
        icasefmaritalunmsince: '',
        icasefmsdivorce: '',
        icasefmsdivorce: '',
        icasefnoOfchildren: '',
        icasefyoungestchild: '',
        icasefeldestchild: '',
        vtGenderID: trn,
    })
    const createuser = localStorage.getItem('username')
    const genderid = localStorage.getItem('gender')
    const token = localStorage.getItem('token')
    const apiPrefix = process.env.REACT_APP_API_PREFIX
    const apipostsym = `${apiPrefix}/user/form6/add_symptoms_observed`


    const handleF3_frstClick = async () => {
        GeneralDescriptionVIFormdetail(true)
        SymptomsObservedUnknowdetail(false)
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
            const postData = {
                smpttransactionid: trn,
                genderid: genderid,
                createuser: createuser,
                ...formData, // Spread the formData object here
            }
            const response = await axios.post(apipostsym, postData, config)
            if (response.status === 200) {

                console.log(' API Response:', response.data)
                // Redirect or navigate to the next page if needed
            } else {
                // Handle non-200 responses here
                console.error(' API Error:', response.status)
            }
        } catch (error) {
            // Handle errors
            console.error('Error:', error)
        }
    }
    const apiget = `${apiPrefix}/user/form6/get_symptoms_observed/${trn}`
    useEffect(() => {
        callApi(apiget)
            .then((response) => {
                setFormData(response)
            })
            .catch((error) => {
                console.error('API request failed:', error)
            })
    }, [])

    const handleF3_frstBackClick = () => {
        SymptomsObservedUnknowdetail(false)
        IdentificatioHospitaldetail(true)
    }
    return (
        <div className="Container">
            <div className="card">
                <div className="text-center p-3 mb-3 bg-secondary-subtle">
                    <h4>Symptoms Observed </h4>
                </div>
                <div className="card-body">
                    <SymptomsObservedVI formData={formData} onChange={setFormData} />
                    <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
                </div>
            </div>
        </div>
    )
}

export default SymptomsObservedUnknow
