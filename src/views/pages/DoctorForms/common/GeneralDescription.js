import React from 'react'
import { Redstar } from './Operationradionbutton'

const GeneralDescription = ({ formData, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          General Description: Clothes And Other Wrapping
          <Redstar />
          (Max. 4000 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <textarea
            name="gdclothesandotherwrapping"
            value={formData.gdclothesandotherwrapping}
            onChange={handleChange}
            type="text" className="form-control"
          />
        </div>
        <div className="col-lg-3 col-xl-3">
          Weight of foetus (Max. 15 Characters){' '}
        </div>
        <div className="col-lg-3 col-xl-3">
          <textarea
            name="gdweight"
            value={formData.gdweight}
            onChange={handleChange}
            type="text" className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          Crown heals Length of the foetus
          <Redstar />
          (Max. 10 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdcronheallength"
            value={formData.gdcronheallength}
            onChange={handleChange}
            type="text" className="form-control"
          />
          <p>(in cms)</p>
        </div>
        <div className="col-lg-3 col-xl-3">
          Foot Lengthfoetus <Redstar />
          (Max. 10 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdfootlength"
            value={formData.gdfootlength}
            onChange={handleChange}
            type="text" className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          Head Circumference <Redstar />
          (Max. 10 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdheadcirumference"
            value={formData.gdheadcirumference}
            onChange={handleChange}
            type="text" className="form-control"
          />
          <p>(in cms)</p>
        </div>
        <div className="col-lg-3 col-xl-3">
          Chest CircumferenceCircumference
          <Redstar />
          (Max. 10 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdchestcirumference"
            value={formData.gdchestcirumference}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          Umbilical Cord <Redstar />
          (Max. 4000 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <textarea
            name="gdumbilicalcord"
            value={formData.gdumbilicalcord}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
        <div className="col-lg-3 col-xl-3">
          Length of the Umbilical Cord <Redstar />
          (Max. 15 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdlengthumbilicalcord"
            value={formData.gdlengthumbilicalcord}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          Ends of the Umbilical Cord <Redstar />
          (Max. 4000 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdendsumbilicalcord"
            value={formData.gdendsumbilicalcord}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
        <div className="col-lg-3 col-xl-3">
          Description of the placenta(if attached) (Max. 4000 Characters){' '}
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gddescriptionplacenta"
            value={formData.gddescriptionplacenta}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          Weight of the placenta (Max. 15 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdweightplacenta"
            value={formData.gdweightplacenta}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
        <div className="col-lg-3 col-xl-3">
          Condition of the placenta <Redstar />
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdconditionplacenta"
            value={formData.gdconditionplacenta}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          Congenital malformations, if any (Max. 4000 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdcongenitalmalformations"
            value={formData.gdcongenitalmalformations}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
        <div className="col-lg-3 col-xl-3">
          Signs of maceration / mummification <Redstar />
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdsignmacerationmum"
            value={formData.gdsignmacerationmum}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          Signs Of Assisted Delivery <Redstar /> (Max. 4000 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdsignassisteddelivery"
            value={formData.gdsignassisteddelivery}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
        <div className="col-lg-3 col-xl-3">
          Vernix caseosa <Redstar /> (Max. 4000 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdvernixcaseosa"
            value={formData.gdvernixcaseosa}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          Description of the Skin <Redstar /> (Max. 4000 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gddescrioptionskin"
            value={formData.gddescrioptionskin}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
        <div className="col-lg-3 col-xl-3">
          Nails <Redstar /> (Max. 4000 Characters){' '}
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdnail"
            value={formData.gdnail}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-3 col-xl-3">
          Hairs <Redstar /> (Max. 4000 Characters)
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdhairs"
            value={formData.gdhairs}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
        <div className="col-lg-3 col-xl-3">
          Natural orifices <Redstar /> (Max. 4000 Characters){' '}
        </div>
        <div className="col-lg-3 col-xl-3">
          <input
            name="gdnaturalorifices"
            value={formData.gdnaturalorifices}
            onChange={handleChange}
            type="text" className="form-control"
          />         </div>
      </div>
    </>
  )
}

export default GeneralDescription
