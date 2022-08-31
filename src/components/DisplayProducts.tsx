import "../css/DisplayProducts.css";
import { Product } from "../models/interface";
import React, { useContext } from "react";
import { Appcontext } from "../context/AppContext";
import CaruseleProducts from "./CaruseleProducts";
import { ProductType } from "../constants/enum";
function DisplayProducts({
  setProducts,
}: {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}) {
  const products = useContext<Product[] | []>(Appcontext);

  const coffee = products.filter(
    (product: Product) => product.typeProduct === ProductType.Coffee
  );
  const tea = products.filter(
    (product) => product.typeProduct === ProductType.Tea
  );
  const yerba = products.filter(
    (product) => product.typeProduct === ProductType.Yerba
  );

  return (
    <div>
      <section className="sectionProducts">
        <div className="ConteinerForDisplayProducts">
          <CaruseleProducts product={coffee} setProducts={setProducts} />
        </div>
        <div className="ConteinerForDisplayProducts">
          <CaruseleProducts product={tea} setProducts={setProducts} />
        </div>
        <div className="ConteinerForDisplayProducts">
          <CaruseleProducts product={yerba} setProducts={setProducts} />
        </div>
      </section>
    </div>
  );
}

export default DisplayProducts;
