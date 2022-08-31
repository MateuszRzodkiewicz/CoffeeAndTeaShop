import "./App.css";
import { useEffect, useState } from "react";
import { Product } from "./models/interface";
import { Appcontext } from "./context/AppContext";
import Application from "./Application";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import ShoppingCard from "./components/ShoppingCart";
import { ShoppingCardProvider } from "./context/ShoppingCardContext";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import FavoriteProduct from "./components/FavoriteProduct";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.Products));
  }, []);

  return (
    <div className="App">
      <Appcontext.Provider value={products}>
        <ShoppingCardProvider>
          <Routes>
            <Route
              path="/"
              element={<Application setProducts={setProducts} />}
            />
            <Route
              path="productPage/:id"
              element={<ProductPage setProducts={setProducts} />}
            />
            <Route
              path="shoppingCard"
              element={<ShoppingCard setProducts={setProducts} />}
            />
            <Route path="Checkout" element={<Checkout />} />
            <Route
              path="favoriteProduct"
              element={<FavoriteProduct setProducts={setProducts} />}
            />
          </Routes>
        </ShoppingCardProvider>
      </Appcontext.Provider>
      <Footer />
    </div>
  );
}

export default App;
