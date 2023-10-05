import React, { useState } from 'react';
import axios from 'axios';
import { ButtonBackandSave } from '../common/Operationradionbutton';
import DetailsPenetrationMale, { DefaultDisable, OptionDropDown, SelectTable } from './DetailsPenetrationMale';

const DetailsRegardingPenetrationFemale = ({
  examinDetail,
  regFeDetail,
  femaleLocalExaminationDetail,
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
    // cfeWasOralSex: 'Y',
    // cfeMasturbationByAssailent: 'Y',
    // cfeMasturbationByVictim: ' Y',
    // cfeEjaculation: 'Y',
    // cfeKissingEtc: 'Y',
    // cfeLocationKiss: 'Y',
    // cfeLocationEjaculation: 'Y',
    cfeWasOralSex: '',
    cfeMasturbationByAssailent: '',
    cfeMasturbationByVictim: '',
    cfeIsCondomUsed: 'N',
    cfeLocationCondomUsedIfYes6: '',
    cfeEjaculation: 'N',
    cfeLocationEjaculation: '',
    cfeKissingEtc: 'N',
    cfeLocationKiss: '',
    cfeIsObjectDetail: 'N',
    cfeObjectDetail: '',
    cfeIsPreintercourse: 'N',
    cfePreintercourseDetail: '',
    cfeVictimMentuating: '',
    cfeSinceVaginalBleed: '',
    cfePriorVaginalBleed: '',
    cfeBath: 'N',
    cfeWash: 'N',
    cfeUrinate: 'N',
    cfeDefecate: 'N',
    cfeUseSpermide: 'N',
    createUser: enterby,

    cfeTransactionID: trnid,
    google: 'N', // Default value is 'N' (No)
    ho_policeinquestpapersno: '',
  });

  const apiPrefix = process.env.REACT_APP_API_PREFIX;

  const handleF3_frstClick = async () => {
    regFeDetail(false)
    femaleLocalExaminationDetail(true)
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
    setFormData1({
      ...formData1,
      [name]: value,
    });
  };

  const handleF3_frstBackClick = () => {
    regFeDetail(false);
    examinDetail(true);
  };

  return (
    <div className="Container">
      <div className="card mt-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Details Regarding Penetration (as narrated by female vicitm / accused /guardian) </h4>
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
                    {/* // Vagina */}
                    <tr>
                      <td style={{ width: 100 }}>Vagina	</td>
                      <td>
                        <OptionDropDown
                          selectName="penAttempt_vagina_penis"
                          formData={formData}
                          setFormData={setFormData}
                        />
                      </td>
                      <td>
                        <OptionDropDown
                          selectName="penAttempt_vagina_finger"
                          formData={formData}
                          setFormData={setFormData}
                        />
                      </td>
                      <td>
                        <OptionDropDown
                          selectName="penAttempt_vagina_object"
                          formData={formData}
                          setFormData={setFormData}
                        />
                      </td>
                      <td>
                        <OptionDropDown
                          selectName="pencomplete_vagina_penis"
                          formData={formData}
                          setFormData={setFormData}
                        />
                      </td>
                      <td>
                        <OptionDropDown
                          selectName="pencomplete_vagina_finger"
                          formData={formData}
                          setFormData={setFormData}
                        />
                      </td>
                      <td>
                        <OptionDropDown
                          selectName="pencomplete_vagina_object"
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
            title1="(c) Masturbation of the victim by assailant?"
            selectName="cfeMasturbationByAssailent"
            formData1={formData1}
            setFormData1={setFormData1}

          />
          <DetailsPenetrationMale
            title1="d) Masturbation of assailant by the victim?"
            selectName="cfeMasturbationByVictim"
            formData1={formData1}
            setFormData1={setFormData1}

          />
          <div className='row mt-3'>
            <div className='col-9' >
              e) Whether condom was used by the assailant / alleged accused ?
              Yes No Don't Know Don't Remember Don't Understand
              If yes, describe location:*
            </div >
            <div className='col-3'>

              <select
                className='form-control'
                name='cfeIsCondomUsed'
                value={formData1.cfeIsCondomUsed}
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
                name='cfeLocationCondomUsedIfYes6'
                value={formData1.cfeLocationCondomUsedIfYes6}
                onChange={handleInputChange}
                disabled={formData1.cfeIsCondomUsed === 'N'}
              />
            </div>


          </div>
          <div className='row mt-3'>
            <div className='col-9' >
              f) Did ejaculation occur outside body orifice?

            </div >
            <div className='col-3'>

              <select
                className='form-control'
                name='cfeEjaculation'
                value={formData1.cfeEjaculation}
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
                name='cfeLocationEjaculation'
                value={formData1.cfeLocationEjaculation}
                onChange={handleInputChange}
                disabled={formData1.cfeEjaculation === 'N'}
              />
            </div>


          </div>
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
          <div className='row mt-3'>
            <div className='col-9' >
              h) Is penetration was attempted by object:
              <br />
              If yes, describe Object:
            </div>
            <div className='col-3'>

              <select
                className='form-control'
                name='cfeIsObjectDetail'
                value={formData1.cfeIsObjectDetail}
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
                name='cfeObjectDetail'
                value={formData1.cfeObjectDetail}
                onChange={handleInputChange}
                disabled={formData1.cfeIsObjectDetail === 'N'}
              />
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-9' >

              i)Was there any H/O previous intercourse prior to the assault? (other than assault)
              <br />
              If yes, when
            </div>
            <div className='col-3'>

              <select
                className='form-control'
                name='cfeIsPreintercourse'
                value={formData1.cfeIsPreintercourse}
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
                name='cfePreintercourseDetail'
                value={formData1.cfePreintercourseDetail}
                onChange={handleInputChange}
                disabled={formData1.cfeIsPreintercourse === 'N'}
              />
            </div>
          </div>
          <DetailsPenetrationMale title1="j)  Was the victim menstruating at the time of the assault? "
            selectName="cfeVictimMentuating"
            formData1={formData1}
            setFormData1={setFormData1}
          />
          <DetailsPenetrationMale title1="k) Since the assault, has there been any vaginal discharge/bleeding?"
            selectName="cfeSinceVaginalBleed"
            formData1={formData1}
            setFormData1={setFormData1}
          />
          <DetailsPenetrationMale title1="l) Prior to the assault, has there been any vaginal discharge/bleeding?"
            selectName="cfePriorVaginalBleed"
            formData1={formData1}
            setFormData1={setFormData1}
          />
          <p>m) Between the assault and the time of the examination did the patient:
          </p>
          <SelectTable
            selectName="cfeBath"
            select1Name="cfeWash"
            select2Name="cfeUrinate"
            select3Name="cfeDefecate"
            select4Name="cfeUseSpermide"
            formData1={formData1}
            setFormData1={setFormData1}

          />


          {/* <DefaultDisable title=" j) IQ Assessment of the patient (By Psychiatrist ,if required)"
                        selectName="penemission_mouth"
                        formData1={formData1}
                        setFormData1={setFormData1}
                    /> */}
          <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
        </div>
      </div>
    </div>

  );
};

export default DetailsRegardingPenetrationFemale;
