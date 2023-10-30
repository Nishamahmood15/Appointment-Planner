import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MainApp from "./main";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MainApp />);
