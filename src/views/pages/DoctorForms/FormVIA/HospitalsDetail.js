import React, { useState, useEffect } from 'react';
import { ButtonBackandSave } from '../common/Operationradionbutton';
import IdentificationMarks from '../comp/IdentificationMarks';
import CaseDetails from '../common/CaseDetails';
import axios from 'axios';
import { callApi } from 'src/views/CommonModels/CallApi';
import CaseDetail6A from '../CaseDetail6A';

const HospitalsDetail = ({
  HospitalsDetailss,
  SymptomsobservedVIAdetail,
  BodyInquestPaperRDetail,
  trn,
}) => {
  const enterby = localStorage.getItem('username');
  const token = localStorage.getItem('token');
  const apiPrefix = process.env.REACT_APP_API_PREFIX;
  const apicd = `${apiPrefix}/user/Form6_A/save_hospitals_detail`;

  const [selectedOption, setSelectedOption] = useState('N');

  const [formData, setFormData] = useState({
    hosdtransactionid: trn,
    hosdadmissiondate: '',
    hosdadmissiontime: '',
    hosddeathdate: '',
    hosddeathtime: '',
    hosdcr: '',
    ishospitaldeath: 'N',
    createuser: enterby,
  });

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setFormData((prevData) => ({
      ...prevData,
      ishospitaldeath: selectedValue,
    }));
  };

  // Fetch and set Radio button value from API response
  useEffect(() => {
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const apigetcd = `${apiPrefix}/user/Form6_A/get_hospital_death/${trn}`;

    callApi(apigetcd)
      .then((response) => {
        const ishospitaldeath = response.ishospitaldeath;
        setSelectedOption(ishospitaldeath);
        setFormData((prevData) => ({
          ...prevData,
          ishospitaldeath: ishospitaldeath,
          hosdadmissiondate: response.hosdadmissiondate,
          hosdadmissiontime: response.hosdadmissiontime,
          hosddeathdate: response.hosddeathdate,
          hosddeathtime: response.hosddeathtime,
          hosdcr: response.hosdcr,
        }));
      })
      .catch((error) => {
        console.error('API request failed:', error);
      });
  }, [trn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleF3_frstClick = async () => {

    const response = await axios.post(apicd, formData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      SymptomsobservedVIAdetail(true);
      HospitalsDetailss(false);
      console.log(response);
    }
  };

  const handleF3_frstBackClick = () => {
    HospitalsDetailss(false);
    BodyInquestPaperRDetail(true);
  };

  return (
    <div className="Container">
      <div className="card mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Identification Marks & Hospital Detail</h4>
        </div>
        <div className="card-body">
          <IdentificationMarks title="In Case of unidentified bodies" />

          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <p className="text-bold">In case of hospital death</p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <div className="d-flex align-items-center mt-3">
                <label className="mx-4">
                  <input
                    type="radio"
                    value="Y"
                    name="ishospitaldeath"
                    checked={selectedOption === 'Y'}
                    onChange={handleRadioChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    value="N"
                    name="ishospitaldeath"
                    checked={selectedOption === 'N'}
                    onChange={handleRadioChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            {selectedOption === 'Y' && (
              <CaseDetail6A
                title="Date & Time of Arrival in Hospital"
                title1="Date & Time of Death*"
                title2="Central Registration No. of Hospital(Max. 50 Characters)"
                handleChange={handleChange}
                input1Name="hosdadmissiondate"
                input2Name="hosddeathdate"
                input3Name="hosdcr"
                selectName1="hosdadmissiontime"
                selectName2="hosddeathtime"
                setFormData={setFormData}
                formData={formData}
              />
            )}
          </div>
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>
  );
};

export default HospitalsDetail;
