import React from 'react'

const DetailsPenetrationMale = (props) => {
  const { title1, selectName, formData1, setFormData1 } = props
  const handleInputChange = (event) => {
    const { name, value } = event.target

    // Update the parent's formData state with the new value
    setFormData1((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-9 mb-3">{props.title1}</div>
        <div className="col-3">
          <select
            class="form-select"
            name={selectName}
            value={formData1[selectName] || ''}
            onChange={handleInputChange}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
            <option value="D">Don't Know </option>
            <option value="R">Don't Remember</option>
            <option value="U">Don't Understand</option>
          </select>
        </div>
      </div>
    </div>
  )
}

const DefaultDisable = (props) => {
  const { inputName, formData1 = {}, setFormData1, title } = props;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the parent's formData state with the new value
    setFormData1((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-9 mb-3">{title}</div>
        <div className="col-3">
          <input
            type="text"
            className="form-control"
            name={inputName}
            value={formData1[inputName] || ''}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );

}

const OptionDropDown = (props) => {
  const { selectName, formData, setFormData } = props

  const handleInputChange = (event) => {
    const { name, value } = event.target

    // Update the parent's formData state with the new value
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <>
      <select
        class="form-select"
        name={selectName}
        value={formData[selectName] || ''}
        onChange={handleInputChange}
      >
        <option value="Y">Yes</option>
        <option selected="selected" value="N">
          No
        </option>
        <option value="DK">Don't Know</option>
        <option value="DR">Don't Remember</option>
        <option value="DU">Don't Understand</option>
      </select>

    </>

  )
}

const SelectTable = (props) => {
  const { selectName, select1Name, select2Name, select3Name, select4Name, formData1, setFormData1 } = props;

  const handleInputChange = (event) => {
      const { name, value } = event.target;

      // Update the parent's formData state with the new value
      setFormData1((prevFormData) => ({
          ...prevFormData,
          [name]: value,
      }));
  };

  return (
      <div className='mt-3'>
          <table className="table table-bordered" style={{ width: "100%" }}>
              <tbody>
                  <tr>
                      <td>Bathe</td>
                      <td>
                          <select
                              className="form-select"
                              name={selectName} // Use the selectName prop here
                              value={formData1[selectName] || ''}
                              onChange={handleInputChange}
                          >
                              <option value="Y">Yes</option>
                              <option value="N">No</option>
                              <option value="D">Don't Know</option>
                              <option value="R">Don't Remember</option>
                              <option value="U">Don't Understand</option>
                          </select>
                      </td>
                  </tr>
                  <tr>
                      <td>Wash</td>
                      <td>
                          <select
                              className="form-select"
                              name={select1Name} // Use the selectName prop here
                              value={formData1[select1Name] || ''}
                              onChange={handleInputChange}
                          >
                              <option value="Y">Yes</option>
                              <option value="N">No</option>
                              <option value="D">Don't Know</option>
                              <option value="R">Don't Remember</option>
                              <option value="U">Don't Understand</option>
                          </select>
                      </td>
                  </tr>
                  <tr>
                      <td>Urinate</td>
                      <td>
                          <select
                              className="form-select"
                              name={select2Name} // Use the selectName prop here
                              value={formData1[select2Name] || ''}
                              onChange={handleInputChange}
                          >
                              <option value="Y">Yes</option>
                              <option value="N">No</option>
                              <option value="D">Don't Know</option>
                              <option value="R">Don't Remember</option>
                              <option value="U">Don't Understand</option>
                          </select>
                      </td>
                  </tr>
                  <tr>
                      <td>Defecate</td>
                      <td>
                          <select
                              className="form-select"
                              name={select3Name} // Use the selectName prop here
                              value={formData1[select3Name] || ''}
                              onChange={handleInputChange}
                          >
                              <option value="Y">Yes</option>
                              <option value="N">No</option>
                              <option value="D">Don't Know</option>
                              <option value="R">Don't Remember</option>
                              <option value="U">Don't Understand</option>
                          </select>
                      </td>
                  </tr>
                  <tr>
                      <td>Use spermicide</td>
                      <td>
                          <select
                              className="form-select"
                              name={select4Name} // Use the selectName prop here
                              value={formData1[select4Name] || ''}
                              onChange={handleInputChange}
                          >
                              <option value="Y">Yes</option>
                              <option value="N">No</option>
                              <option value="D">Don't Know</option>
                              <option value="R">Don't Remember</option>
                              <option value="U">Don't Understand</option>
                          </select>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  );
};
export default DetailsPenetrationMale
export { DefaultDisable, SelectTable, OptionDropDown }
