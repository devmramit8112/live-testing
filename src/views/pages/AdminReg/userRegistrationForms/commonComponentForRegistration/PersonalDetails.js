import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';

const PersonalDetails = forwardRef(({ formData, updateFormData, onFileSelect }, ref) => {
  const [designationcode, setDesignationcode] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState(''); // State to store file validation error

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [designations] = await Promise.all([
        axios.get(`${process.env.REACT_APP_API_PREFIX}/alluser/all/getactiveddldesgnationAll`),
      ]);
      setDesignationcode(designations.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (field, value) => {
    updateFormData(field, value);
    // Clear the error for the field when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: '',
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Check file size here
      if (file.size > 500 * 1024) {
        setFileError('File size should be 500 KB or less');
        onFileSelect(null); // Clear the selected file in the parent component
      } else {
        setFileError(''); // Clear the file error if size is valid
        onFileSelect(file); // Pass the selected file to the parent component
      }
    } else {
      // No file selected, clear any previous error
      setFileError('');
      onFileSelect(null); // Clear the selected file in the parent component
    }
  };

  const validateFields = () => {
    const newErrors = {};

    if (!formData.userName) {
      newErrors.userName = 'Username is required';
    }
    if (!formData.designation) {
      newErrors.designation = 'Select Designation is required';
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile no is required';
    }
    if (!formData.emailID) {
      newErrors.emailID = 'Email id is required';
    }

    // Check if the file is required and not provided
    if (!selectedFile) {
      setFileError('File is required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && selectedFile;
  };

  // Expose the validateFields function to the parent component
  useImperativeHandle(ref, () => ({
    validateFields,
  }));

  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Name<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            name="userName"
            type="text"
            className="form-control"
            value={formData.userName}
            onChange={(e) => handleInputChange('userName', e.target.value)}
            disabled
          />
          {errors.userName && (
            <p className="error" style={{ color: 'red' }}>
              {errors.userName}
            </p>
          )}
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Designation<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={formData.designation}
            onChange={(e) => handleInputChange('designation', e.target.value)}
            name="designation"
          >
            <option>Select Designation</option>
            {designationcode.map((designation) => (
              <option key={designation[0]} value={designation[0]}>
                {designation[1]}
              </option>
            ))}
          </select>
          {errors.designation && (
            <p className="error" style={{ color: 'red' }}>
              {errors.designation}
            </p>
          )}
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Mobile Number
          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            name="mobile"
            value={formData.mobile}
            onChange={(e) => handleInputChange('mobile', e.target.value)}
            type="text"
            className="form-control "
            disabled
          />
          {errors.mobile && (
            <p className="error" style={{ color: 'red' }}>
              {errors.mobile}
            </p>
          )}
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          Emailid<span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            name="emailID"
            type="text"
            value={formData.emailID}
            onChange={(e) => handleInputChange('emailID', e.target.value)}
            className="form-control "
            disabled
          />
          {errors.emailID && (
            <p className="error" style={{ color: 'red' }}>
              {errors.emailID}
            </p>
          )}
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
          Upload Identity Card (Size-500kb, Type-pdf)
          <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="file"
            name="photoid1"
            accept=".pdf,.PDF"
            onChange={handleFileChange}
            className={`form-control ${fileError ? 'is-invalid' : ''}`}
            required
          />
          {fileError && <div className="invalid-feedback">{fileError}</div>}
        </div>
      </div>
    </>
  );
});

export default PersonalDetails;
