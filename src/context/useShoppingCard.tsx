import { useContext } from "react";
import { ShoppingCardContext } from "./ShoppingCardContext";

export const useShoppingCard = () => {
  const context = useContext(ShoppingCardContext);

  if (!context) {
    throw new Error("ShoppingCardContext must be within ShoppingCardProvider");
  }

  return context;
};
