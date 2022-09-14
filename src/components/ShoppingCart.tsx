import { useEffect } from "react";
import HeaderMenu from "./HeaderMenu";
import "../css/ShoppingCard.css";
import OneProductShoppingcart from "./OneProductShoppingCart";
import { useShoppingCard } from "../context/useShoppingCard";
import CheckoutPayBtn from "./CheckoutPayBtn";
import { Product } from "../models/interface";
import { useTotalAmount } from "../context/useTotalAmount";
function ShoppingCard({
  setProducts,
}: {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}) {
  const { shoppingCard } = useShoppingCard();
  const { totalAmount, totalAmountFunction } = useTotalAmount();

  useEffect(() => {
    totalAmountFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCard]);

  return (
    <div>
      <HeaderMenu />
      <div className="shoppingCartFlexContainer">
        <section className="shoppingCardProduct">
          <div>
            <h1>Koszyk</h1>
            {shoppingCard?.length !== 0 ? (
              <p>Twoje produkty :</p>
            ) : (
              <p>Brak produktów w koszyku</p>
            )}
          </div>
          {shoppingCard?.map(
            (shopCart: any): JSX.Element => (
              <OneProductShoppingcart
                setProducts={setProducts}
                key={shopCart.idProduct}
                shopCart={shopCart}
              />
            )
          )}
        </section>
        <section className="shoppingCardSummary">
          <h1>Podsumowanie</h1>
          <p>Suma</p>
          <p>Do zapłaty: {totalAmount} zł</p>
          <CheckoutPayBtn />
        </section>
      </div>
    </div>
  );
}

export default ShoppingCard;
