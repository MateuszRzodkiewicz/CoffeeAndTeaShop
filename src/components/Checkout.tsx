import { NavLink } from "react-router-dom";
import logo from "../pictures/twojaKawa.jpg";
import ShippingInformation from "./ShippingInformation";
import "../css/Checkout.css";
import { useShoppingCard } from "../context/useShoppingCard";
import { useEffect, useState } from "react";

function Checkout() {
  const { shoppingCard } = useShoppingCard();
  const [totalAmount, setTotalAmount] = useState<any>();

  const totalAmountFunction = () => {
    const arrayAmount = shoppingCard.map(
      (oneProductAmount: any) => oneProductAmount.price * oneProductAmount.piece
    );

    const totalAmountt = arrayAmount.reduce(
      (prev: any, next: any) => prev + next,
      0
    );
    setTotalAmount(totalAmountt);
  };
  useEffect(() => {
    totalAmountFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCard]);

  return (
    <div>
      <div style={{ width: "150px" }}>
        <NavLink to="/">
          <img className="logoCheckoutPage" src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="flexBoxCheckout">
        <ShippingInformation />
        <div className="myProduct">
          <h2>Twoje produkty w koszyku:</h2>
          {shoppingCard.map((product) => (
            <div key={product.idProduct} className="containerForProduct">
              <img src={process.env.PUBLIC_URL + product.img} alt="procduct" />
              <div className="infoAboutProductContainer">
                <p style={{ marginTop: "10px" }}>{product.nameProduct}</p>
                <p style={{ marginTop: "3px", color: "gray" }}>
                  ilość: {product.piece}
                  <span>za: {product.price}zł sztuka</span>
                </p>
                <p style={{ marginTop: "3px", color: "gray" }}>
                  razem: {product.piece * product.price}zł
                </p>
              </div>
            </div>
          ))}
          <div style={{ margin: "25px" }}>
            Razem do zapłaty: {totalAmount} zł
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
