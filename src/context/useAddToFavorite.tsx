import { useContext } from "react";
import { Product } from "../models/interface";
import { Appcontext } from "./AppContext";
import { useShoppingCard } from "./useShoppingCard";

export const useAddToFavorite = () => {
  const { shoppingCard, setShoppingCard } = useShoppingCard();
  const products = useContext<Product[] | []>(Appcontext);

  const addToFavorite = (
    productId: any,
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  ) => {
    const index = products.findIndex(
      (product) => product.idProduct === productId.idProduct
    );

    const index2 = shoppingCard.findIndex(
      (product) => product.idProduct === productId.idProduct
    );
    const favorite = true;
    products[index] = { ...productId, favorite };
    shoppingCard[index2] = { ...productId, favorite };
    if (productId.favorite && products[index].favorite) {
      const favorite = false;
      products[index] = { ...productId, favorite };
      shoppingCard[index2] = { ...productId, favorite };
    }

    setProducts([...products]);
    setShoppingCard([...shoppingCard]);
  };
  return addToFavorite;
};
