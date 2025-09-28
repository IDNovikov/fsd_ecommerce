import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartCount,
  selectCartTotalPrice,
} from "./cartSliceSelectors";
import { removeFromCart, updateQuantity, clearCart } from "./cartSliceStore";
import CartItem from "./components/cartItem";

export default function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const totalPrice = useSelector(selectCartTotalPrice);

  const [isOpen, setIsOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleUpdate = (id, qty) =>
    dispatch(updateQuantity({ id, quantity: qty }));

  const handleCheckout = () => {
    setShowCheckout(true);
    setTimeout(() => {
      alert("Заказ оформлен!");
      dispatch(clearCart());
      setShowCheckout(false);
      setIsOpen(false);
    }, 1000);
  };

  return (
    <div className="cart">
      <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        Корзина ({cartCount})
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>Корзина</h3>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="cart-items">
            {cart.length === 0 ? (
              <p>Корзина пуста</p>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdate={handleUpdate}
                  onRemove={handleRemove}
                />
              ))
            )}
          </div>

          <div className="cart-footer">
            <div className="total">Итого: ${totalPrice}</div>
            <button
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={cart.length === 0 || showCheckout}
            >
              {showCheckout ? "Оформляем..." : "Оформить заказ"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
