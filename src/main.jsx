import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import './interceptors/interceptor.js';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster position="top-center" reverseOrder={false} />
    </Provider>
  </StrictMode>
);
