import { Dispatch, SetStateAction } from "react";
import { Product } from "../models/interface";
import "../css/AddProductInput.css";

function AddProductInput({
  product,
  amount,
  setAmount,
  piece,
  setPiece,
  setWeight,
}: {
  product: Product | null;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
  piece: number;
  setPiece: Dispatch<SetStateAction<number>>;
  setWeight: Dispatch<SetStateAction<number>>;
}) {
  const counterPlus = () => {
    if (typeof amount === "number") {
      product && setAmount(product?.price * (piece + 1));
      product && setWeight(product?.weight * (piece + 1));
      setPiece(piece + 1);
    }
  };
  const counterMinus = () => {
    if (typeof amount === "number" && product && amount > product.price) {
      setAmount(product?.price * (piece - 1));
      setWeight(product?.weight * (piece - 1));
      setPiece(piece - 1);
    }
  };

  const changeProductWeightandPrice = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    let value = Number(e.currentTarget.value);
    setPiece(value);
  };
  const changeProductWeightandPriceOnBlur = () => {
    if (product) {
      setAmount(product?.price * piece);
      setWeight(product?.weight * piece);
    }
  };

  const inputKeyDown = (e: any) => {
    const invalidChars = ["-", "+", "e", ",", "."];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <div className="counterContainer">
      {product && (
        <button
          className="btnProduct"
          onClick={counterMinus}
          style={{
            color: piece === 1 ? "gray" : "black",
            borderColor: piece === 1 ? "gray" : "black",
          }}
        >
          --
        </button>
      )}
      <input
        onKeyDown={inputKeyDown}
        className="inputAddProduct"
        type="number"
        value={piece}
        onChange={changeProductWeightandPrice}
        onBlur={changeProductWeightandPriceOnBlur}
        min={1}
        step={1}
      ></input>
      {product && (
        <button className="btnProduct" onClick={counterPlus}>
          +
        </button>
      )}
    </div>
  );
}

export default AddProductInput;
