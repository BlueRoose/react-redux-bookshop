function Card({ book, addItem, addedCount }) {
  const { title, author, price, image } = book;
  return (
    <div className="ui card">
      <div className="image">
        <img src={image} alt="card" />
      </div>
      <div className="content">
        <span className="header">{title}</span>
        <div className="meta">
          <span className="date">{author}</span>
        </div>
      </div>
      <div className="extra content">
        <span>{price} ₽</span>
      </div>
      <button className="ui button" onClick={() => addItem(book)}>
        Добавить в корзину ({addedCount})
      </button>
    </div>
  );
}

export default Card;
