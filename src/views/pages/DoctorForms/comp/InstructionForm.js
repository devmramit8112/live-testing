import React from 'react'

const InstructionForm = () => {
  return (
    <div className="row mb-3">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        Msg : Ensure final printout is taken before freezing the record
      </div>

      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          [Instruction : Please Make Sure (browser) Pop-up Should be open for this Portal ]
        </span>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          [Instruction : Ensure final printout is taken before freezing the record]
        </span>
      </div>
    </div>
  )
}

export default InstructionForm
