import { useBtnAddProduct } from "../context/useBtnAddProduct";
import "../css/BtnAddProductInCarusele.css";

function BtnAddProductInCarusele({
  product,
  piece,
}: {
  product: any;
  piece: number;
}) {
  const addProduct = useBtnAddProduct();

  return (
    <i
      onClick={() => addProduct(product, piece)}
      className="fas fa-cart-plus hoverAddProduct"
      style={{ fontSize: "24px", cursor: "pointer", marginLeft: "10px" }}
    />
  );
}

export default BtnAddProductInCarusele;
