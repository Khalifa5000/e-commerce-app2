import { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

import {
  getProducts
} from "../services/productService";

function Products() {

  const [products, setProducts] =
  useState([]);

  const [loading, setLoading] =
  useState(false);

  const [error, setError] =
  useState(null);

  const [search, setSearch] =
  useState("");

  useEffect(() => {

    async function loadProducts() {

      try {

        setLoading(true);

        const response =
        await getProducts();

        setProducts(response.data);

      } catch (error) {

        setError(
          "فشل تحميل المنتجات"
        );

      } finally {

        setLoading(false);

      }

    }

    loadProducts();

  }, []);

  const filteredProducts =
  products.filter(product =>
    product.title
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )
  );

  if (loading)
    return <h2>Loading...</h2>;

  if (error)
    return <h2>{error}</h2>;

  return (
    <div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}

export default Products;