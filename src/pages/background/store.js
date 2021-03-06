import { applyMiddleware, createStore } from "redux";
import { wrapStore, alias } from "react-chrome-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";
import throttle from "lodash/throttle";
import { saveState, loadState } from "./localStorage";
const store = createStore(reducer, loadState());

// store.subscribe(throttle(() => {
//   saveState({
//     helloWorld: store.getState().helloWorld,
//   })
// }), 1000);

wrapStore(store, {
  portName: "EXT"
});

export default store;
