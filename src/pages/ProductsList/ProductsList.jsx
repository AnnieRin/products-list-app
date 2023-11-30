import React from "react";
import { Container, Typography } from "@mui/material";
import ProductsListTable from "../../components/ProductsListTable/ProductsListTable";

const ProductsList = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Products List</Typography>
      <Typography variant="body1" gutterBottom>
        Click on the product name to see the details
      </Typography>
      <ProductsListTable />
    </Container>
  );
};

export default ProductsList;
