import { useShoppingCard } from "./useShoppingCard";

export const useBtnAddProduct = () => {
  const { shoppingCard, setShoppingCard, pieceChangeInBtnAddProduct } =
    useShoppingCard();

  const addProduct = (product: any, piece: any) => {
    const foundProduct = shoppingCard.find(
      (productShop: any) => productShop.idProduct === product.idProduct
    );
    const index = shoppingCard.findIndex(
      (oneProduct: any) => oneProduct.idProduct === product.idProduct
    );

    if (foundProduct) {
      pieceChangeInBtnAddProduct(shoppingCard[index].piece + piece, product);
    } else {
      product.piece = piece;
      setShoppingCard([...shoppingCard, product]);
    }
  };

  return addProduct;
};
