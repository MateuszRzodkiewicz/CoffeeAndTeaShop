import HeaderMenu from "./components/HeaderMenu";
import DisplayProducts from "./components/DisplayProducts";
import { Product } from "./models/interface";
function Application({
  setProducts,
}: {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}) {
  return (
    <div className="Application">
      <HeaderMenu />
      <DisplayProducts setProducts={setProducts} />
    </div>
  );
}

export default Application;
