import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useProducts } from "../../context/productsContext";

const AddProduct = () => {
  const { addProduct } = useProducts();

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Add Product</Typography>
      <Typography variant="body1" gutterBottom>
        Add a new product to the list
      </Typography>
      <Formik
        initialValues={{ name: "", description: "", price: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addProduct({
            id: Date.now(),
            ...values,
          });
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting, handleChange, values }) => (
          <Form>
            <Field
              as={TextField}
              name="name"
              label="Product Name"
              onChange={handleChange}
              value={values.name}
              fullWidth
              margin="normal"
            />

            <Field
              as={TextField}
              name="description"
              label="Description"
              onChange={handleChange}
              value={values.description}
              fullWidth
              margin="normal"
            />

            <Field
              as={TextField}
              name="price"
              label="Price"
              type="number"
              onChange={handleChange}
              value={values.price}
              fullWidth
              margin="normal"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
            >
              Add Product
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddProduct;
