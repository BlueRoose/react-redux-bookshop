function Filter({ filterBy, setFilter, setQuery }) {
  return (
    <div className="ui secondary  menu">
      <span
        style={{ cursor: "pointer" }}
        className={filterBy === "All" ? "active item" : "item"}
        onClick={() => setFilter("All")}
      >
        Все
      </span>
      <span
        style={{ cursor: "pointer" }}
        className={filterBy === "Cheap" ? "active item" : "item"}
        onClick={() => setFilter("Cheap")}
      >
        Сначала дешевые
      </span>
      <span
        style={{ cursor: "pointer" }}
        className={filterBy === "Expensive" ? "active item" : "item"}
        onClick={() => setFilter("Expensive")}
      >
        Сначала дорогие
      </span>
      <span
        style={{ cursor: "pointer" }}
        className={filterBy === "Author" ? "active item" : "item"}
        onClick={() => setFilter("Author")}
      >
        Автор
      </span>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Search..."
              onChange={(event) => setQuery(event.target.value)}
            />
            <i className="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
