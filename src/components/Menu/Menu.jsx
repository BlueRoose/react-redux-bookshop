function Menu({ totalPrice, totalBooks }) {
  return (
    <div className="ui menu" style={{ marginTop: "20px" }}>
      <span className="item">Магазин книг</span>
      <div className="right menu">
        <span className="item">Итого: {totalPrice} руб.</span>
        <span className="item">Корзина: {totalBooks}</span>
      </div>
    </div>
  );
}

export default Menu;
