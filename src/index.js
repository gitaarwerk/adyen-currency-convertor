import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import store from "./store";

import "./style.scss";
import { AppShell } from "./components/AppShell";

render(
  <Provider store={store}>
    <AppShell />
  </Provider>,
  document.getElementById("root")
);
