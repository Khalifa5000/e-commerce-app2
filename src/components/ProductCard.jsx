import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">

      <img
        src={product.image}
        width="120"
      />

      <h3>{product.title}</h3>

      <p>{product.price}$</p>

      <Link to={`/products/${product.id}`}>
        التفاصيل
      </Link>

    </div>
  );
}

export default ProductCard;