import {
  useParams
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

import {
  getProductById
} from "../services/productService";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] =
  useState(null);

  useEffect(() => {

    async function loadProduct() {

      const response =
      await getProductById(id);

      setProduct(
        response.data
      );

    }

    loadProduct();

  }, [id]);

  if (!product)
    return <h2>Loading...</h2>;

  return (
    <div>

      <img
        src={product.image}
        width="200"
      />

      <h1>{product.title}</h1>

      <p>
        {product.description}
      </p>

      <h2>
        {product.price}$
      </h2>

    </div>
  );
}

export default ProductDetails;