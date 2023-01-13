import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../actions/cart";
import Card from "./Card.jsx";

const mapStateToProps = ({ cartReducer }, { book }) => ({
  addedCount: cartReducer.cartItems.reduce(
    (res, item) => res + (item.id === book.id ? 1 : 0),
    0
  ),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
