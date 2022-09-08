import { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../context/AppContext";
import "../css/SearchInput.css";
import { Product } from "../models/interface";
function SearchInput({ innerWidth }: { innerWidth: number }): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [flagDiv, setFlagDiv] = useState(false);
  const divRef = useRef(null);

  const products = useContext<Product[] | []>(Appcontext);

  const navigate = useNavigate();

  const changeValue = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const showSearchItem = () => {
    setFlagDiv(true);
  };
  const changeFlag = () => {
    setFlagDiv(false);
  };
  const dontShowSearchItem = () => {
    setInputValue("");
  };

  function useChageDivFlag(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: { target: any }) {
        if (ref.current && !ref.current.contains(event.target)) {
          setFlagDiv(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useChageDivFlag(divRef);

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
        style={{ width: "100%", borderBottom: "solid black 1px " }}
        type={"text"}
        value={inputValue}
        onChange={changeValue}
        placeholder="Wyszukaj swój produkt"
        onFocus={showSearchItem}
      />
      {inputValue && flagDiv && (
        <div ref={divRef} onBlur={changeFlag} className="searchResponse">
          <ul> {actualySerchItem}</ul>
        </div>
      )}
    </div>
  );
}
export default SearchInput;
