import React, { useEffect, useState } from 'react'
import {
  BodyEvidence,
  ButtonBackandSave,
  Dropdownforms,
  Redstar,
} from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'

const SamplecollectionCentral = ({
  ProvisionalMedicaldetail,
  SamplecollectionCentraldetail,
  SystemicExaminationdetail,
}) => {
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const token = localStorage.getItem('token')
  const enterby = localStorage.getItem('username')
  const trn = localStorage.getItem('trn')

  const [formData, setFormData] = useState({
    debris_collection: '',
    choth_evidence: '',
    list_detail: '',
    swabs_from_stain: 'N',
    swabs_from_stain_NotCollected: '',
    scalp_hair: 'N',
    scalp_hair_NotCollected: '',
    head_hair: 'N',
    head_hair_NotCollected: '',
    nail_scraping: 'N',
    nail_scraping_NotCollected: '',
    nail_clipping: 'N',
    nail_clipping_NotCollected: '',
    oral_swab: 'N',
    oral_swab_NotCollected: '',
    blood_for_grouping: 'N',
    blood_for_grouping_NotCollected: '',
    blood_for_alchohol: 'N',
    blood_for_alchohol_NotCollected: '',
    blood_for_DNA: 'N',
    blood_for_DNA_NotCollected: '',
    urine: 'N',
    urine_NotCollected: '',
    anyother: 'N',
    anyother_NotCollected: '',
    matted_public_hair: 'N',
    matted_public_hair_NotCollected: '',
    public_hair_combing: 'N',
    public_hair_combing_NotCollected: '',
    cutting_public_hair: 'N',
    cutting_public_hair_NotCollected: '',
    two_vulval: 'N',
    two_vulval_NotCollected: '',
    two_vaginal: 'N',
    two_vaginal_NotCollected: '',
    two_anal: 'N',
    two_anal_NotCollected: '',
    vaginal_smear: 'N',
    vaginal_smear_NotCollected: '',
    vaginal_Washing: 'N',
    vaginal_Washing_NotCollected: '',
    urethral: 'N',
    urethral_NotCollected: '',
    swab: 'N',
    swab_NotCollected: '',
    // changedate: '',
    // changeuser: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleF3_frstClick = async () => {
    ProvisionalMedicaldetail(true)
    SamplecollectionCentraldetail(false)
    try {
      const payload = {
        transactionid: trn,
        createuser: enterby,
        changeuser: enterby,
        ...formData,
      }
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
      const apipost1 = `${apiPrefix}/user/form3A/save_systemic_examination2`
      const response1 = await axios.post(apipost1, payload, {
        headers: headers,
      })

      if (response1.status === 200) {
      } else {
        console.error('At least one API request failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleF3_frstBackClick = () => {
    SamplecollectionCentraldetail(false)
    SystemicExaminationdetail(true)
  }

  // API endpoint to get data
  const apigetData = `${apiPrefix}/user/form3A/get_systemic_examination2/${trn}`
  useEffect(() => {
    callApi(apigetData)
      .then((response) => {
        // Update formData state with data from the API
        setFormData(response);
      })
      .catch((error) => {
        console.error('API request failed:', error);
      });
  }, [trn]);

  return (
    <div className="container">
      <div className="card">
        <div className="text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Sample collection for Central/State Forensic Science Laboratory</h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">Debris collection paper</div>
              <div className="col-lg-3 col-xl-3">
                <textarea
                  name="debris_collection"
                  type="text"
                  value={formData.debris_collection}
                  onChange={handleChange}
                  class="form-control"
                ></textarea>
              </div>
              <div className="col-lg-3 col-xl-3">
                Clothing evidence where availabe- (to be packed in separate paper bags after air
                drying)
              </div>
              <div className="col-lg-3 col-xl-3">
                <textarea
                  name="choth_evidence"
                  type="text"
                  value={formData.choth_evidence}
                  onChange={handleChange}
                  class="form-control"
                ></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3 col-xl-3">
                List and details of clothing worn by the survivor at time of sexual violence
              </div>
              <div className="col-lg-3 col-xl-3">
                <textarea
                  name="list_detail"
                  value={formData.list_detail}
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="text-center p-3 mb-3 ">
            <h4>Body Evidence samples as appropriate (duly labeled and packed separately) </h4>
          </div>
          <div className="row mb-3">
            <div className="col-4">
              Swabs from stains on the body (blood, semen, foreign material, others)
            </div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="swabs_from_stain"
                value={formData.swabs_from_stain}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.swabs_from_stain === 'N' && (
              <div className="col-4">
                <input
                  name="swabs_from_stain_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.swabs_from_stain_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Scalp hair (10-15 strands)</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="scalp_hair"
                value={formData.scalp_hair}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.scalp_hair === 'N' && (
              <div className="col-4">
                <input
                  name="scalp_hair_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.scalp_hair_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Head hair combing</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="head_hair"
                value={formData.head_hair}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.head_hair === 'N' && (
              <div className="col-4">
                <input
                  name="head_hair_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.head_hair_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Nail scrapings (both hands separately)</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="nail_scraping"
                value={formData.nail_scraping}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.nail_scraping === 'N' && (
              <div className="col-4">
                <input
                  name="nail_scraping_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.nail_scraping_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Nail clippings (both hands separately)</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="nail_clipping"
                value={formData.nail_clipping}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.nail_clipping === 'N' && (
              <div className="col-4">
                <input
                  name="nail_clipping_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.nail_clipping_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Oral swab</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="oral_swab"
                value={formData.oral_swab}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.oral_swab === 'N' && (
              <div className="col-4">
                <input
                  name="oral_swab_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.oral_swab_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">
              Blood for grouping, testing drug/alcohol intoxication (plain vial)
            </div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="blood_for_grouping"
                value={formData.blood_for_grouping}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.blood_for_grouping === 'N' && (
              <div className="col-4">
                <input
                  name="blood_for_grouping_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.blood_for_grouping_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Blood for alcohol levels (Sodium fluoride vial)</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="blood_for_alchohol"
                value={formData.blood_for_alchohol}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.blood_for_alchohol === 'N' && (
              <div className="col-4">
                <input
                  name="blood_for_alchohol_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.blood_for_alchohol_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Blood for DNA analysis (EDTA vial)</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="blood_for_DNA"
                value={formData.blood_for_DNA}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.blood_for_DNA === 'N' && (
              <div className="col-4">
                <input
                  name="blood_for_DNA_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.blood_for_DNA_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Urine (drug testing)</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="urine"
                value={formData.urine}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.urine === 'N' && (
              <div className="col-4">
                <input
                  name="urine_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.urine_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Any other (tampon/sanitary napkin/condom/object)</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="anyother"
                value={formData.anyother}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.anyother === 'N' && (
              <div className="col-4">
                <input
                  name="anyother_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.anyother_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="card-header mb-3">
            <h4>
              Genital and Anal evidence (Each sample to be packed, sealed, and labeled separately-to
              be placed in a bag)
            </h4>
          </div>
          <p>
            ** Swab sticks for collecting samples should be moistened with distilled water provided.
          </p>
          <div className="row mb-3 mt-3">
            <div className="col-4">Matted pubic hair</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="matted_public_hair"
                value={formData.matted_public_hair}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.matted_public_hair === 'N' && (
              <div className="col-4">
                <input
                  name="matted_public_hair_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.matted_public_hair_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Pubic hair combing (mention if shaved)</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="public_hair_combing"
                value={formData.public_hair_combing}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.public_hair_combing === 'N' && (
              <div className="col-4">
                <input
                  name="public_hair_combing_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.public_hair_combing_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Cutting of pubic hair (mention if shaved)</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="cutting_public_hair"
                value={formData.cutting_public_hair}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.cutting_public_hair === 'N' && (
              <div className="col-4">
                <input
                  name="cutting_public_hair_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.cutting_public_hair_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Two vulval swabs (for semen examination and DNA testing)</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="two_vulval"
                value={formData.two_vulval}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.two_vulval === 'N' && (
              <div className="col-4">
                <input
                  name="two_vulval_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.two_vulval_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Two anal swabs (for semen examination and DNA testing)</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="two_anal"
                value={formData.two_anal}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.two_anal === 'N' && (
              <div className="col-4">
                <input
                  name="two_anal_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.two_anal_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Vaginal smear (air-dried) for semen examination</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="vaginal_smear"
                value={formData.vaginal_smear}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.vaginal_smear === 'N' && (
              <div className="col-4">
                <input
                  name="vaginal_smear_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.vaginal_smear_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Vaginal washing</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="vaginal_Washing"
                value={formData.vaginal_Washing}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.vaginal_Washing === 'N' && (
              <div className="col-4">
                <input
                  name="vaginal_Washing_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.vaginal_Washing_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Urethral swab</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="urethral"
                value={formData.urethral}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.urethral === 'N' && (
              <div className="col-4">
                <input
                  name="urethral_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.urethral_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-4">Swab from glans of penis/clitoropenis</div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="swab"
                value={formData.swab}
                onChange={handleChange}
              >
                <option value="C">collected</option>
                <option value="N" selected>
                  Not collected
                </option>
              </select>
            </div>
            {formData.swab === 'N' && (
              <div className="col-4">
                <input
                  name="swab_NotCollected"
                  type="text"
                  className="form-control"
                  value={formData.swab_NotCollected}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        </div>
        <ButtonBackandSave backButton={handleF3_frstBackClick} savebutton={handleF3_frstClick} />
      </div>
    </div>
  )
}

export default SamplecollectionCentral
