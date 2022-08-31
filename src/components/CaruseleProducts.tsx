import { Product } from "../models/interface";
import "../css/CaruseleProducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import BtnAddProductInCarusele from "./BtnAddProductInCarusele";
import { useAddToFavorite } from "../context/useAddToFavorite";
function CaruseleProducts({
  product,
  setProducts,
}: {
  product: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}) {
  const [numberVisible, setNumberVisible] = useState<number>(3);
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  const addToFavorite = useAddToFavorite();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
    if (innerWidth < 640) {
      setNumberVisible(1);
    } else if (innerWidth < 1080) {
      setNumberVisible(2);
    } else if (innerWidth > 1080) {
      setNumberVisible(3);
    }
  }, [innerWidth]);

  return (
    <>
      {
        <Swiper
          slidesPerView={numberVisible}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {product.map((product: Product): JSX.Element => {
            return (
              <SwiperSlide key={product.idProduct}>
                <div key={product.idProduct} className="productSliderContainer">
                  <NavLink to={`/productPage/${product.idProduct}`}>
                    <div className="hidden">
                      <img
                        className="scaleImg"
                        src={product.img}
                        alt={product.nameProduct}
                      />
                    </div>
                  </NavLink>
                  <span>{product.nameProduct}</span>
                  <p>
                    <span>{`${product.price} zł /`}</span>
                    <span>{`${product.weight} g.`}</span>
                    <BtnAddProductInCarusele product={product} piece={1} />
                    <i
                      style={{
                        marginLeft: "10px",
                        cursor: "pointer",
                        fontSize: "24px",
                        color: product.favorite ? "gold" : undefined,
                      }}
                      onClick={() => addToFavorite(product, setProducts)}
                      className="far fa-star"
                    />
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      }
    </>
  );
}

export default CaruseleProducts;
