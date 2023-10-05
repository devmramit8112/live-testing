import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ButtonBackandSave, Dropdownform4, Redstar } from '../common/Operationradionbutton';
import { callApi } from 'src/views/CommonModels/CallApi';

const GeneralDescriptionVIForm = ({
  SymptomsObservedUnknowdetail,
  GeneralDescriptionVIFormdetail,
  ExternalGeneralApperanceVIdetail,
  trn,
}) => {
  const [formData, setFormData] = useState({
    gpmheight: '',
    gpmheight_In_cm_inches: 'cm', // Default value
    gpmweight: '',
    gpmphysique: '',
    gpmdescriptionclothesjewelleryworn: '',
    gpmrigormortispresentremark: '',
    gpmpostmortemstaining: '',
    gpmanyother: '',
    gpmrigormortispresent: 'N'
  });

  const handleUnitChange = (event) => {
    const selectedUnit = event.target.value;
    setFormData({
      ...formData,
      gpmheight_In_cm_inches: selectedUnit,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const enterby = localStorage.getItem('username');
  const token = localStorage.getItem('token');
  const gender = localStorage.getItem('gender');
  const apiPrefix = process.env.REACT_APP_API_PREFIX;
  const apigeneralpost = `${apiPrefix}/user/form6/add_general_description`;

  const handleF3_frstClick = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const postData = {
        gpmtransactionid: trn,
        genderid: gender,
        createuser: enterby,
        ...formData,
      };

      const response = await axios.post(apigeneralpost, postData, config);
      if (response.status === 200) {
        ExternalGeneralApperanceVIdetail(true);
        GeneralDescriptionVIFormdetail(false);
        console.log('API Response:', response.data);
      } else {
        console.error('API Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleF3_frstBackClick = () => {
    SymptomsObservedUnknowdetail(true);
    GeneralDescriptionVIFormdetail(false);
  };


  const apiget = `${apiPrefix}/user/form6/get_general_description/${trn}`
  useEffect(() => {
    callApi(apiget)
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
        <div className="text-center p-3 mb-3 bg-secondary-subtle">
          <h4>General Description / Examination</h4>
        </div>
        <div className="card-body">
          <form>
            {/* Description */}
            <div className="row mb-3">
              <div className="col-lg-6 col-xl-6">
                Description of clothes/jewelry and other items worn on the body
                <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                (Important areas be encircled on the clothing wherever possible and handed over to
                the police) (Max. 4000 Characters)
              </div>
              <div className="col-lg-6 col-xl-6">
                <textarea
                  name="gpmdescriptionclothesjewelleryworn"
                  value={formData.gpmdescriptionclothesjewelleryworn}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            {/* Height and Weight */}
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                Length <Redstar />
                (Max. 5 Characters)
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="gpmheight"
                  value={formData.gpmheight}
                  onChange={handleInputChange}
                  type="number"
                  className="form-control"
                  placeholder="Enter Height"
                />
                {/* Measurement Units */}
                <label className="mx-4">
                  <input
                    type="radio"
                    name="gpmheight_In_cm_inches"
                    value="in"
                    checked={formData.gpmheight_In_cm_inches === 'in'}
                    onChange={handleUnitChange}
                  />
                  In Inches
                </label>
                <label>
                  <input
                    type="radio"
                    name="gpmheight_In_cm_inches"
                    value="cm"
                    checked={formData.gpmheight_In_cm_inches === 'cm'}
                    onChange={handleUnitChange}
                  />
                  In Centimeters
                </label>
              </div>
              <div className="col-lg-3 col-xl-3">Weight(in Kgs):(Max. 5 Characters)</div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="gpmweight"
                  value={formData.gpmweight}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            {/* Physique and Rigor Mortis */}
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                Physique <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleInputChange}
                  value={formData.gpmphysique}
                  name="gpmphysique"
                >
                  <option value="">select</option>
                  <option value="W">Well Built</option>
                  <option value="A">Average Built</option>
                  <option value="P">Poor Built</option>
                  <option value="E">Emaciated</option>
                </select>
              </div>
              <div className="col-lg-3 col-xl-3 mt-3">
                Rigor Mortis  <Redstar />
              </div>
              <div className="col-lg-3 col-xl-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleInputChange}
                  value={formData.gpmrigormortispresent}
                  name="gpmrigormortispresent"
                >
                  <option value="Y">Yes</option>
                  <option value="N">No</option>

                </select>
              </div>

              <div className="col-lg-3 col-xl-3 mt-2">
                Rigor Mortis <Redstar />
                (Max. 4000 Characters)
              </div>
              <div className="col-lg-3 col-xl-3 mt-2">
                <input
                  name="gpmrigormortispresentremark"
                  value={formData.gpmrigormortispresentremark}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter Rigor"
                />
              </div>
            </div>
            {/* Post mortem staining and Any Other */}
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                Post mortem staining <Redstar />
                (Max. 4000 Characters)
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="gpmpostmortemstaining"
                  value={formData.gpmpostmortemstaining}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="col-lg-3 col-xl-3">
                Any Other <Redstar />
                (Max. 4000 Characters)
              </div>
              <div className="col-lg-3 col-xl-3">
                <input
                  name="gpmanyother"
                  value={formData.gpmanyother}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>

            <ButtonBackandSave
              backButton={handleF3_frstBackClick}
              savebutton={handleF3_frstClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralDescriptionVIForm;
