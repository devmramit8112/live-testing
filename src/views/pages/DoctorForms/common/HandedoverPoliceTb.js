import React, { useState } from 'react'

const HandedoverPoliceTb = () => {
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
              <th scope="col">Name</th>
              <th scope="col">Rank</th>
              <th scope="col">Belt No.</th>
              <th scope="col">State</th>
              <th scope="col">District</th>
              <th scope="col">Police Station</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HandedoverPoliceTb
