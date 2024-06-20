import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../redux/api/products";
import { addToCart } from "../redux/slices/dataSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products: {error.message}</div>;

  return (
    <div>
      <h1>Shoes</h1>
      <ul>
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              {product.img && <img src={product.img} alt={product.name} />}
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              <Link to={`/product/${product.id}`}>
                <button>View Shoe</button>
              </Link>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
