import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "react-chrome-redux";
import Routes from "./Routes";

const store = new Store({
  portName: "EXT"
});

store.ready().then(() => {
  const mountNode = document.createElement("div");
  document.body.appendChild(mountNode);

  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    mountNode
  );
});
