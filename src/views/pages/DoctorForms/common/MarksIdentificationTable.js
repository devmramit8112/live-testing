import React, { useState } from 'react'

const MarksIdentificationTable = () => {
  const [isInputVisible, setInputVisible] = useState(false) // State to manage input visibility
  const [inputPurpose, setInputPurpose] = useState('add') // State to track input purpose (add or edit)

  const toggleInputVisibility = (purpose) => {
    setInputVisible(!isInputVisible)
    setInputPurpose(purpose)
  }

  return (
    <div>
      <div className="card-body">
        <table id="approveinsstitute" className="table  text-center table-bordered mt-4 pt-2">
          <thead className="table-secondary  text-center">
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">
                Marks of Identification<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                {isInputVisible && (inputPurpose === 'add' || inputPurpose === 'edit') ? (
                  <input type="text" className="form-control" placeholder="Enter marks" />
                ) : null}
              </td>
              <td>
                <span>
                  <button
                    className="btn btn-sm bg-primary text-white m-2"
                    onClick={() => toggleInputVisibility('add')}
                  >
                    Add
                  </button>
                  <button
                    className="btn btn-sm bg-primary text-white m-2"
                    onClick={() => toggleInputVisibility('edit')}
                  >
                    Edit
                  </button>
                  <button className="btn btn-sm bg-primary text-white m-2">Delete</button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MarksIdentificationTable
