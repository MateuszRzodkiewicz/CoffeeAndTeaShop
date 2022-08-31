import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../context/AppContext";
import "../css/SearchInput.css";
import { Product } from "../models/interface";
function SearchInput({ innerWidth }: { innerWidth: number }): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");

  const products = useContext<Product[] | []>(Appcontext);

  const navigate = useNavigate();

  const changeValue = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const showSearchItem = () => {};
  const dontShowSearchItem = () => {
    setInputValue("");
  };

  const searchProductList = products.filter((product: Product) =>
    product.nameProduct.toLowerCase().includes(inputValue.toLocaleLowerCase())
  );

  const actualySerchItem = searchProductList.map(
    (product: Product): JSX.Element => (
      <li
        onClick={(e) => {
          dontShowSearchItem();
          navigate(`/productPage/${product.idProduct}`);
        }}
        key={product.idProduct}
      >
        <p>{product.nameProduct.toUpperCase()}</p>
        <span>{product.typeProduct}</span>
      </li>
    )
  );

  return (
    <div className="inputContainer">
      <input
        style={{ width: "100%" }}
        type={"text"}
        value={inputValue}
        onChange={changeValue}
        placeholder="Wyszukaj swój produkt"
        onFocus={showSearchItem}
      />
      <div className="searchResponse">
        <ul> {inputValue && actualySerchItem}</ul>
      </div>
    </div>
  );
}

export default SearchInput;
