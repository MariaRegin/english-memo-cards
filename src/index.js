import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Provider } from "mobx-react";
// import WordsStore from "./stores/WordsStore";

// const stores = {
//   wordsStore: new WordsStore(),
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Provider {...stores}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
