import React, { useEffect } from "react";
import { useGetAllProductsQuery } from "../redux/api/products";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  useEffect(() => {}, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products: {error.message}</div>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              {/* <p>{product.img && <img src={product.img} alt={product.name} />}</p> */}
               <Link to={`/product/${product.id}`}>
              <button>View Product</button>
            </Link> 
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
