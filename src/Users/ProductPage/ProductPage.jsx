import { useParams } from "react-router-dom";
import ProductData from "./ProductData";

const ProductPage = () => {
  const productData = useParams();
  return <ProductData productId={productData?.id} />;
};

export default ProductPage;
