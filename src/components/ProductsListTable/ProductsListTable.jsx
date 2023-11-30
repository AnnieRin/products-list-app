import React from "react";
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/productsContext";

const ProductsListTable = () => {
  const navigate = useNavigate();
  const { products } = useProducts();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ whiteSpace: "nowrap" }}>Order Number</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell sx={{ width: "10%" }}>{index + 1}</TableCell>
              <TableCell sx={{ width: "20%" }}>{product.id}</TableCell>
              <TableCell>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {product.name}
                </Link>
              </TableCell>
              <TableCell sx={{ width: "20%" }}>${product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsListTable;
