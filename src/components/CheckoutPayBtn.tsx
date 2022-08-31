import { NavLink } from "react-router-dom";
import "../css/CheckoutPayBtn.css";
function checkoutPay() {
  return (
    <div className="btnPay">
      <NavLink to={`/Checkout`}>
        <button className="checkoutBtn">Przejdź do kasy</button>
      </NavLink>
    </div>
  );
}

export default checkoutPay;
