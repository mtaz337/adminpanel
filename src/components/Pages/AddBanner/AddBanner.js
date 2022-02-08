import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const AddBanner = () => {
  return (
    <>
  <FloatingLabel controlId="floatingSelectGrid" label="Upload an Image or Video as Banner"
  className="mb-3">
      <Form.Select aria-label="Floating label select example">
        <option value="1">Image</option>
        <option value="2">Video</option>
      </Form.Select>
    </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Title"
  className="mb-3">
    
    <Form.Control placeholder="Title" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea" label="Summary"
  className="mb-3">
    <Form.Control
      as="textarea"
      placeholder="Summary"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
</>
  );
};

export default AddBanner;