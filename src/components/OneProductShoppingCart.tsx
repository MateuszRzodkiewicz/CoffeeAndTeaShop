import { useEffect, useState } from "react";
import AddProductInput from "./AddProductInput";
import "../css/OneProductShoppingCart.css";

import { NavLink } from "react-router-dom";
import { useShoppingCard } from "../context/useShoppingCard";
import { Product } from "../models/interface";
import { useAddToFavorite } from "../context/useAddToFavorite";

function OneProductShoppingcart({
  shopCart,
  setProducts,
}: {
  shopCart: any;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}) {
  const [amount, setAmount] = useState<number>(shopCart.price);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [weight, setWeight] = useState<number>(shopCart.weight);
  const [piece, setPiece] = useState<number>(shopCart.piece);

  const { subctratProduct, shoppingCardPieceChance } = useShoppingCard();
  const addToFavorite = useAddToFavorite();

  useEffect(() => {
    shoppingCardPieceChance(shopCart, piece);
    setAmount(shopCart.price * piece);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [piece]);

  return (
    <div className="flexContainerForProduct">
      <NavLink to={`/productPage/${shopCart.idProduct}`}>
        <img src={shopCart.img} alt={shopCart.nameProduct} />
      </NavLink>
      <div className="productDescriptionCart">
        <p>
          {shopCart.nameProduct}
          <span style={{ marginLeft: "10px" }}>
            {shopCart.price * piece} zł
          </span>
        </p>
        <AddProductInput
          product={shopCart}
          amount={amount}
          setAmount={setAmount}
          piece={piece}
          setPiece={setPiece}
          setWeight={setWeight}
        />
        <div className="containerForIcon">
          <i
            onClick={() => subctratProduct(shopCart)}
            className="far fa-trash-alt"
          />
          <i
            style={{ color: shopCart.favorite && "gold" }}
            onClick={() => addToFavorite(shopCart, setProducts)}
            className="far fa-star"
          />
        </div>
      </div>
    </div>
  );
}

export default OneProductShoppingcart;
