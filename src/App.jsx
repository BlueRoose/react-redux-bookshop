import axios from "axios";
import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import Card from "./components/Card/Card.js";
import Filter from "./components/Filter/Filter.js";
import Menu from "./components/Menu/Menu.js";

function App({ books, isLoading, setBooks }) {
  useEffect(() => {
    axios.get("/books.json").then(({ data }) => {
      setBooks(data);
    });
  }, [setBooks]);

  return (
    <Container>
      <Menu />
      <Filter />
      <div className="ui four cards">
        {books &&
          books.map((book, index) => {
            return <Card key={index} book={book} />;
          })}
      </div>
    </Container>
  );
}

export default App;
