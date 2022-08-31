import { useShoppingCard } from "../context/useShoppingCard";
import "../css/NumberProductOnBasket.css";
function NumberProductOfBasket() {
  const { shoppingCard } = useShoppingCard();
  return (
    <>
      {shoppingCard.length === 0 || (
        <div className="basket">{shoppingCard.length}</div>
      )}
    </>
  );
}

export default NumberProductOfBasket;
