const initialState = {
  isLoading: true,
  books: null,
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        isLoading: false,
        books: action.payload,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
