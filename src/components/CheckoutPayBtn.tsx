import { NavLink } from "react-router-dom";
import { useShoppingCard } from "../context/useShoppingCard";
import "../css/CheckoutPayBtn.css";

function CheckoutPay() {
  const { shoppingCard } = useShoppingCard();
  return (
    <div className="btnPay">
      {shoppingCard.length === 0 ? (
        <button className="checkoutBtn">Przejdź do kasy</button>
      ) : (
        <NavLink to={`/Checkout`}>
          <button className="checkoutBtn">Przejdź do kasy</button>
        </NavLink>
      )}
    </div>
  );
}

export default CheckoutPay;
