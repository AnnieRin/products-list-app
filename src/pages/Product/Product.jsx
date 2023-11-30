import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useProducts } from "../../context/productsContext";
import { Container } from "@mui/material";

const Product = () => {
  const { productId } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Container component={Paper} sx={{ mt: 4 }}>
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="body1" gutterBottom>
        Description: {product.description}
      </Typography>
      <Typography variant="body1">Price: ${product.price}</Typography>
    </Container>
  );
};

export default Product;
