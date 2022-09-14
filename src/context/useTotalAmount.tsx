import { useState } from "react";
import { useShoppingCard } from "./useShoppingCard";

export const useTotalAmount = () => {
  const { shoppingCard } = useShoppingCard();
  const [totalAmount, setTotalAmount] = useState<number>();

  const totalAmountFunction = () => {
    const arrayAmount = shoppingCard.map(
      (oneProductAmount) => oneProductAmount.price * oneProductAmount.piece
    );

    const totalAmountt = arrayAmount.reduce((prev, next) => prev + next, 0);
    setTotalAmount(totalAmountt);
  };

  const totalAmountStateAndFunction = {
    totalAmount,
    totalAmountFunction,
  };

  return totalAmountStateAndFunction;
};
