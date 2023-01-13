import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../actions/cart";
import Menu from "./Menu.jsx";

const mapStateToProps = ({ cartReducer }) => ({
  totalPrice: cartReducer.cartItems.reduce(
    (res, item) => (res += item.price),
    0
  ),
  totalBooks: cartReducer.cartItems.length,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
