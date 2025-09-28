export default function CartItem({ item, onUpdate, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <div className="quantity-controls">
          <button onClick={() => onUpdate(item.id, item.quantity - 1)}>
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdate(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
      </div>
      <button className="remove-btn" onClick={() => onRemove(item.id)}>
        Удалить
      </button>
    </div>
  );
}
