import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Row, Col } from 'react-bootstrap';

const CredentialsDetail = ({ formData, errors, onChange }) => {
  const [securityques, setSecurityQues] = useState([]);

  useEffect(() => {
    async function getAllSecurityQuestions() {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_PREFIX}/alluser/all/getrecoveryquestionmasteractiveddllist`
        );
        setSecurityQues(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getAllSecurityQuestions();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };



  return (
    <>
      <div className="text-center mt-4 mb-2">
        <h5>Credentials Detail</h5>
      </div>
      <Row className="mb-2">
        <Col xs={12} lg={3}>
          Userid <span className="text-danger">*</span>
        </Col>
        <Col xs={12} lg={3}>
          <Form.Control
            name="userID"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.userID ? 'is-invalid' : ''}`}
          />
          {errors.userID && <div className="invalid-feedback">{errors.userID}</div>}

        </Col>
      </Row>
      <div className="text-center mt-4 mb-2">
        <h5 className="text-danger" style={{ fontSize: 15 }}>
          Pwd should be b/w 6 to 50 characters including #,@,$
        </h5>
      </div>
      <Row className="mb-2">
        <Col xs={12} lg={3}>
          Password <span className="text-danger">*</span>
        </Col>
        <Col xs={12} lg={3}>
          <Form.Control
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            name="password"
            type="password"
            maxLength={50}
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}

        </Col>
        <Col xs={12} lg={3}>
          Confirm Password <span className="text-danger">*</span>
        </Col>
        <Col xs={12} lg={3}>
          <Form.Control
            name="confirmPassword"
            type="password"
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            value={formData.confirmPassword}
            onChange={handleChange} />
          {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}

        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={12} lg={3}>
          Select Recovery Question 1<span className="text-danger">*</span>
        </Col>
        <Col xs={12} lg={3}>
          <Form.Select
            aria-label="Default select example"
            className={`form-control ${errors.Ques1 ? 'is-invalid' : ''}`}
            name="Ques1"
            value={formData.Ques1}
            onChange={handleChange}
          >
            <option>Select Security Question</option>
            {securityques.map((designation) => (
              <option key={designation[0]} value={designation[0]}>
                {designation[1]}
              </option>
            ))}
          </Form.Select>
          {errors.Ques1 && <div className="invalid-feedback">{errors.Ques1}</div>}

        </Col>
        <Col xs={12} lg={3}>
          Answer 1 <span className="text-danger">*</span>
        </Col>
        <Col xs={12} lg={3}>
          <Form.Control
            name="Ans1"
            type="text"
            maxLength={50}
            value={formData.Ans1}
            onChange={handleChange}
            className={`form-control ${errors.Ans1 ? 'is-invalid' : ''}`}
          />
          {errors.Ans1 && <div className="invalid-feedback">{errors.Ans1}</div>}

        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={12} lg={3}>
          Select Recovery Question 2<span className="text-danger">*</span>
        </Col>
        <Col xs={12} lg={3}>
          <Form.Select
            aria-label="Default select example"
            value={formData.Ques2}
            onChange={handleChange}
            name="Ques2"
            className={`form-control ${errors.Ques2 ? 'is-invalid' : ''}`}
          >
            <option>Select Security Question</option>
            {securityques.map((designation) => (
              <option key={designation[0]} value={designation[0]}>
                {designation[1]}
              </option>
            ))}

          </Form.Select>
          {errors.Ques2 && <div className="invalid-feedback">{errors.Ques2}</div>}

        </Col>
        <Col xs={12} lg={3}>
          Answer 2 <span className="text-danger">*</span>
        </Col>
        <Col xs={12} lg={3}>
          <Form.Control
            name="Ans2"
            value={formData.Ans2}
            onChange={handleChange}
            type="text"
            maxLength={50}
            className={`form-control ${errors.Ans2 ? 'is-invalid' : ''}`}
          />
          {errors.Ans2 && <div className="invalid-feedback">{errors.Ans2}</div>}

        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={12} lg={3}>
          Select Recovery Question 3<span className="text-danger">*</span>
        </Col>
        <Col xs={12} lg={3}>
          <Form.Select
            aria-label="Default select example"
            name="Ques3"
            value={formData.Ques3}
            onChange={handleChange}
            className={`form-control ${errors.Ans2 ? 'is-invalid' : ''}`}

          >
            <option>Select Security Question</option>
            {securityques.map((designation) => (
              <option key={designation[0]} value={designation[0]}>
                {designation[1]}
              </option>
            ))}
          </Form.Select>
          {errors.Ques3 && <div className="invalid-feedback">{errors.Ques3}</div>}

        </Col>
        <Col xs={12} lg={3}>
          Answer 3 <span className="text-danger">*</span>
        </Col>
        <Col xs={12} lg={3}>
          <Form.Control
            name="Ans3"
            value={formData.Ans3}
            onChange={handleChange}
            type="text"
            maxLength={50}
            className={`form-select ${errors.Ans3 ? 'is-invalid' : ''}`}
          />
          {errors.Ans3 && <div className="invalid-feedback">{errors.Ans3}</div>}
        </Col>
      </Row>
    </>
  );
};

export default CredentialsDetail;
