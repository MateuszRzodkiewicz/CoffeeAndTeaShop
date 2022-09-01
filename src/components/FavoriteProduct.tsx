import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Appcontext } from "../context/AppContext";
import { useAddToFavorite } from "../context/useAddToFavorite";
import { Product } from "../models/interface";
import HeaderMenu from "./HeaderMenu";
import "../css/FavoriteProduct.css";
function FavoriteProduct({
  setProducts,
}: {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}) {
  const products = useContext<Product[] | []>(Appcontext);
  const addToFavorite = useAddToFavorite();
  const favoriteProduct = products.filter((product) => product.favorite);

  return (
    <div className="favoriteProductContainer">
      <HeaderMenu />
      <h1>Twoje ulubione produkty</h1>
      <div id="favoriteProductContainer">
        {favoriteProduct.map((product) => (
          <div className="oneFavoritProduct" key={product.idProduct}>
            <NavLink to={`/productPage/${product.idProduct}`}>
              <img
                className="favoriteImg"
                src={process.env.PUBLIC_URL + product.img}
                alt={product.nameProduct}
              />
            </NavLink>

            <p className="favoriteP">
              {product.nameProduct}{" "}
              <i
                style={{
                  marginLeft: "5%",
                  cursor: "pointer",
                  fontSize: "24px",
                  color: product.favorite ? "gold" : undefined,
                }}
                onClick={() => addToFavorite(product, setProducts)}
                className="far fa-star"
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteProduct;
