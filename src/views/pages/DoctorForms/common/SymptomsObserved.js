import React from 'react'
import { Redstar } from './Operationradionbutton'
import { useState } from 'react'

const SymptomsObserved = ({ formData, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    onChange({ ...formData, [name]: value })
  }

  // // const [formData, setFormData] = useState([])

  // const trn = localStorage.getItem('trn')
  // const apiPrefix = process.env.REACT_APP_API_PREFIX
  // const apigetcd = `${apiPrefix}/user/form2/get_symptoms_observed/${trn}`

  // useEffect(() => {
  //   callApi(apigetcd)
  //     .then((response) => {
  //       setFormData(response)
  //     })
  //     .catch((error) => {
  //       console.error('API request failed:', error)
  //     })
  // }, [])

  return (
    <div className="row mb-3">
      <p>Information Supplied by the Police and/or Hospital Record</p>
      <div className="col-lg-3 col-xl-3">
        As Information Provided by Police
        <Redstar />
        (Max. 4000 Characters)
      </div>
      <div className="col-lg-3 col-xl-3">
        <textarea
          name="smptbeforedeath"
          value={formData.smptbeforedeath}
          onChange={handleChange}
          type="text"
          className="form-control"
        />
      </div>

      <div className="col-lg-3 col-xl-3">As Per Hospital Record(Max. 4000 Characters)</div>
      <div className="col-lg-3 col-xl-3">
        <textarea
          name="smptbeforedeath_asperHsopitalrecord"
          value={formData.smptbeforedeath_asperHsopitalrecord}
          onChange={handleChange}
          type="text"
          className="form-control"
        />
      </div>
    </div>
  )
}

export default SymptomsObserved
