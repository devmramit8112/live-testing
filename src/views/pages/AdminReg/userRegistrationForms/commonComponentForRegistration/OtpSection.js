import React from 'react';

const OtpSection = ({ formData, errors, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  const handleKeyPress = (e) => {
    const allowedCharacters = /^[0-9]*$/; // Only allow numeric characters
    if (!allowedCharacters.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          OTP Email ID
          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="text"
            name="emailotp"
            value={formData.emailotp}
            onChange={handleChange}
            onKeyPress={handleKeyPress} // Add this event handler
            className={`form-control ${errors.emailotp ? 'is-invalid' : ''}`}
            maxLength={6}
          />
          {errors.emailotp && <div className="invalid-feedback">{errors.emailotp}</div>}
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          OTP Mobile No
          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="text"
            name="mobileotp"
            value={formData.mobileotp}
            onChange={handleChange}
            onKeyPress={handleKeyPress} // Add this event handler
            className={`form-control ${errors.mobileotp ? 'is-invalid' : ''}`}
            maxLength={6}
          />
          {errors.mobileotp && <div className="invalid-feedback">{errors.mobileotp}</div>}
        </div>
      </div>
    </>
  );
};

export default OtpSection;
