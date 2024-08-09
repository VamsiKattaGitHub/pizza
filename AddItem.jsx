// src/components/AddItem.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddItem = () => {
  const initialValues = {
    name: '',
    price: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
  });

  const onSubmit = (values) => {
    axios.post('http://localhost:3000/items', values)
      .then(response => console.log(response))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      <h2>Add New Item</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <Field type="number" id="price" name="price" className="form-control" />
            <ErrorMessage name="price" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Add Item</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddItem;