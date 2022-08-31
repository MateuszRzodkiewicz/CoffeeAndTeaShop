import { useBtnAddProduct } from "../context/useBtnAddProduct";
import "../css/BtnAddProdutcInProdutcPage.css";

function BtnAddProductInProductPage({
  product,
  piece,
}: {
  product: any;
  piece: number;
}) {
  const addProduct = useBtnAddProduct();

  return (
    <button
      className="btnAddProductPage "
      onClick={() => addProduct(product, piece)}
    >
      Dodaj Produkt
    </button>
  );
}

export default BtnAddProductInProductPage;
