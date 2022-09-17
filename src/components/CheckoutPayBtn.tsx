import { useNavigate } from "react-router-dom";
import { useShoppingCard } from "../context/useShoppingCard";
import "../css/CheckoutPayBtn.css";

function CheckoutPay() {
  const { shoppingCard } = useShoppingCard();
  const navigate = useNavigate();
  return (
    <div className="btnPay">
      <button
        onClick={() => shoppingCard.length !== 0 && navigate("/checkout")}
        className="checkoutBtn"
      >
        Przejdź do kasy
      </button>
    </div>
  );
}

export default CheckoutPay;
