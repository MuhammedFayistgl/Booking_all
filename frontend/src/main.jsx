import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./Reducs/store/Store";
import { CookiesProvider } from "react-cookie";
import { CustomProvider } from 'rsuite';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <React.StrictMode>
    <CookiesProvider>
      <Provider store={Store}>
        <CustomProvider   theme="dark">
          <App  />
        </CustomProvider>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);
