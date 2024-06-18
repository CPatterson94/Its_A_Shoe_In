import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/slices/dataSlice';

const SingleProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.data.products.find((product) => product.id === productId)
  );
  const productStatus = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProduct(productId));
    }
  }, [productId, productStatus, dispatch]);

  if (productStatus === 'loading') return <div>Loading...</div>;
  if (productStatus === 'failed') return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* <img src={product.img} alt={product.name} /> */}
    </div>
  );
};

export default SingleProduct;
