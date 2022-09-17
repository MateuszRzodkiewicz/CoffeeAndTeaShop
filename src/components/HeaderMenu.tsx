import "../css/HeaderMenu.css";
import { NavLink } from "react-router-dom";
import twojaKawa from "../pictures/twojaKawa.jpg";
import SearchInput from "./SearchInput";
import NumberProductOfBasket from "./NumberProductOnBasket";
import { useEffect, useState } from "react";

function HeaderMenu() {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  const [search, setSearch] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  const showSearch = () => {
    setSearch(!search);
  };

  return (
    <div className="containerForContainer">
      <div className="containerForHeaderMenu">
        <NavLink to="/">
          <img src={twojaKawa} alt="twojaKawa" />
        </NavLink>
        {innerWidth > 750 && <SearchInput />}

        <div className="iconContainer">
          <div>
            {innerWidth < 749 && (
              <i className="fas fa-search icon" onClick={showSearch} />
            )}
          </div>
          <div style={{ position: "relative" }}>
            <NavLink to="/shoppingCard">
              {<NumberProductOfBasket />}
              <i className="fas fa-shopping-bag icon " />
            </NavLink>
          </div>
          <div>
            <NavLink to="/favoriteProduct">
              <i className="fas fa-star icon " />
            </NavLink>
          </div>
        </div>
      </div>

      {innerWidth < 750 && search ? <SearchInput /> : null}
    </div>
  );
}

export default HeaderMenu;
