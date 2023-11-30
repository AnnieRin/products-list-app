import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Products List Application
        </Typography>
        <Button
          onClick={() => navigate("/")}
          color={location.pathname === "/" ? "primary" : "inherit"}
        >
          Add Product
        </Button>
        <Button
          onClick={() => navigate("/products")}
          color={location.pathname === "/products" ? "primary" : "inherit"}
        >
          Product List
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNavigation;
