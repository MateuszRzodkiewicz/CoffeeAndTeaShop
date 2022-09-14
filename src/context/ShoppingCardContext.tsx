import React, { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";
import { ShoppingCardProduct } from "../models/interface";

export interface ContextProps {
  shoppingCard: ShoppingCardProduct[];
  setShoppingCard: Dispatch<SetStateAction<any>>;
  subctratProduct: (shopCart: any) => void;
  shoppingCardPieceChance: (shopCart: any, piece: number) => void;
  pieceChangeInBtnAddProduct: (
    piece: ShoppingCardProduct["piece"],
    product: any
  ) => void;
}

export const ShoppingCardContext = createContext<ContextProps | null>(null);
export const ShoppingCardProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [shoppingCard, setShoppingCard] = useState<any>([]);
  const subctratProduct = (product: any) => {
    setShoppingCard(
      shoppingCard.filter(
        (oneProduct: any) => oneProduct.idProduct !== product.idProduct
      )
    );
  };

  const shoppingCardPieceChance = (shopCart: any, piece: number) => {
    const index = shoppingCard.findIndex(
      (oneProductShopCard: any) =>
        oneProductShopCard.idProduct === shopCart.idProduct
    );
    shoppingCard[index] = { ...shopCart, piece };
    setShoppingCard([...shoppingCard]);
  };

  const pieceChangeInBtnAddProduct = (piece: any, product: any) => {
    const index = shoppingCard.findIndex(
      (oneProduct: any) => oneProduct.idProduct === product.idProduct
    );

    shoppingCard[index] = { ...product, piece };
    setShoppingCard([...shoppingCard]);
  };

  const shoppingCardContext = {
    shoppingCard,
    setShoppingCard,
    subctratProduct,
    shoppingCardPieceChance,
    pieceChangeInBtnAddProduct,
  };

  return (
    <ShoppingCardContext.Provider value={shoppingCardContext}>
      {children}
    </ShoppingCardContext.Provider>
  );
};
