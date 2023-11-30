import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderNavigation from "./components/Header/Header";
import AddProduct from "./pages/AddProduct/AddProduct";
import ProductsList from "./pages/ProductsList/ProductsList";
import { ProductsContextProvider } from "./context/productsContext";
import Product from "./pages/Product/Product";

function App() {
  return (
    <ProductsContextProvider>
      <HeaderNavigation />
      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;
