import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { orderBy } from "lodash";
import * as booksActions from "./actions/books";
import * as filterActions from "./actions/filter";
import App from "./App.jsx";

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case "All":
      return books;
    case "Expensive":
      return orderBy(books, "price", "desc");
    case "Cheap":
      return orderBy(books, "price", "asc");
    case "Author":
      return orderBy(books, "author", "asc");
    default:
      return books;
  }
};

const searchBy = (books, searchQuery) => {
  const newBooks = books?.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery)
  );
  return newBooks;
};

const mapStateToProps = ({ booksReducer, filterReducer }) => ({
  books: searchBy(
    sortBy(booksReducer.books, filterReducer.filterBy),
    filterReducer.searchQuery
  ),
  isLoading: booksReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(booksActions, dispatch),
  ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
