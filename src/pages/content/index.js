import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import { Store } from "react-chrome-redux";
import { Provider } from "react-redux";
import { connect } from "react-redux";

const store = new Store({
  portName: "EXT"
});

export default class InjectApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>Hello!</div>
        <div className="x-line" />
        <div className="y-line" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  helloWorld: state.helloWorld
});

const ConnectedInjectApp = connect(mapStateToProps)(InjectApp);

window.addEventListener("load", () => {
  const injectDOM = document.createElement("div");
  injectDOM.className = "inject-react";
  injectDOM.style.textAlign = "center";
  document.body.appendChild(injectDOM);
  render(
    <Provider store={store}>
      <ConnectedInjectApp />
    </Provider>,
    injectDOM
  );
});
