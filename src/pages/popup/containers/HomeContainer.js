import { connect } from "react-redux";
import { setName } from "../../background/actions/helloWorldActions";
import Home from "../components/Home";

function mapStateToProps(state) {
  return {
    ...state.helloWorld
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit(name) {
      dispatch(setName(name));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
