import "../css/ProductPage.css";
import { useParams, useLocation } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import { Appcontext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { Product } from "../models/interface";
import ProductDescription from "./ProductDescription";
import CaruseleProducts from "./CaruseleProducts";
import AddProductInput from "./AddProductInput";
import BtnAddProductInProductPage from "./BtnAddProductInProductPage";

function ProductPage({
  setProducts,
}: {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}) {
  const products = useContext<Product[] | []>(Appcontext);
  const [product, setProduct] = useState<Product | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [piece, setPiece] = useState<number>(1);
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const found = products.find((product) => product.idProduct === id);
    if (found) {
      setProduct(found);
    }
    setPiece(1);
  }, [id, products]);

  useEffect(() => {
    if (product !== null) {
      setAmount(product.price);
      setWeight(product.weight);
    }
  }, [product]);

  const recomended = products.filter((product: Product) => product.recomended);

  return (
    <>
      <div id="productPage">
        <HeaderMenu />
        <div className="productPage">
          <div className="directionRowLine">
            <div className="line"></div>
            <p>{product?.nameProduct}</p>
            <div className="line"></div>
          </div>

          <section className="infoAboutProdut">
            <div>
              <img
                src={process.env.PUBLIC_URL + product?.img}
                alt={product?.nameProduct}
              />
            </div>
            <div className="info">
              <p>
                {amount}/zł <span>{weight}/g</span>
              </p>

              <AddProductInput
                product={product}
                amount={amount}
                setAmount={setAmount}
                piece={piece}
                setPiece={setPiece}
                setWeight={setWeight}
              />
              <BtnAddProductInProductPage product={product} piece={piece} />
              {product && (
                <ProductDescription
                  description={product.description}
                  countryOrigin={product.countryOrigin}
                  preparing={product.preparing}
                />
              )}
            </div>
          </section>
        </div>
        <div className="recomendedProduct">
          <div className="directionRowLine">
            <div className="line"></div>
            <p>Polecane Produkty</p>
            <div className="line"></div>
          </div>
          <CaruseleProducts product={recomended} setProducts={setProducts} />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
