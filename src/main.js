import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";

export default function MainApp() {
  return (
    <Provider store={store}>
      <App />
      <Toaster position="top-center" />
    </Provider>
  );
}
