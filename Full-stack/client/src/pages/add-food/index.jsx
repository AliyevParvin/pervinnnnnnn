import React from "react";
import { FoodSchema } from "./schema";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import "./index.scss";
const AddFood = () => {
  const addFood = (values) => {
    axios.post("http://localhost:8000/foods/", values);
  };
  return (
    <divn id="add-page">
      <div className="container">
        <div className="form">
          <Formik
            initialValues={{
              name: "",
              price: "",
              imgUrl: "",
              description: "",
              icon:"fa-solid fa-heart"
            }}
            validationSchema={FoodSchema}
            onSubmit={(values) => {
              addFood(values);
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <h1>Add Food</h1>
                <div className="field">
                  <Field name="name" placeholder="Name" />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </div>
                <div className="field">
                  <Field name="price" type="number" placeholder="Price" />
                  {errors.price && touched.price ? (
                    <div>{errors.price}</div>
                  ) : null}
                </div>
                <div className="field">
                  <Field name="description" placeholder="Description" />
                  {errors.description && touched.description ? (
                    <div>{errors.description}</div>
                  ) : null}
                </div>
                <div className="field">
                  <Field name="imgUrl" type="url" placeholder="Image Url" />
                  {errors.imgUrl && touched.imgUrl ? (
                    <div>{errors.imgUrl}</div>
                  ) : null}
                </div>
                <div className="field">
                  <Field name="icon" placeholder="Icon" />
                  {errors.icon && touched.icon ? (
                    <div>{errors.icon}</div>
                  ) : null}
                </div>
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </divn>
  );
};

export default AddFood;
