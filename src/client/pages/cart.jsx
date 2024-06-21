import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeFromCart } from "../redux/slices/dataSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.data.cart);
  const cartStatus = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    if (cartStatus === "idle") {
      dispatch(fetchCart());
    }
  }, [cartStatus, dispatch]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  if (cartStatus === "loading") return <div>Loading...</div>;
  if (cartStatus === "failed") return <div>Error: {error}</div>;
  if (!cart.length)
    return <div className="cart-no-items">No items in cart</div>;

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((cartitem) => (
          <li key={cartitem.id}>
            <h2>{cartitem.name}</h2>
            <p>Quantity: {cartitem.quantity}</p>
            <p>Price: ${cartitem.price}</p>
            <img className="cart-img" src={cartitem.img} alt={cartitem.name} />
            <button onClick={() => handleRemoveFromCart(cartitem.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h2>Cart Total:</h2>
        <h2>
          $
          {cart.reduce(
            (acc, cartitem) => acc + cartitem.price * cartitem.quantity,
            0
          )}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
