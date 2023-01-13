import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as filterActions from "../../actions/filter";
import Filter from "./Filter.jsx";

const mapStateToProps = ({ filterReducer }) => ({
  filterBy: filterReducer.filterBy,
  searchQuery: filterReducer.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
