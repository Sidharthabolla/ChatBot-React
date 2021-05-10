import React, { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Responser from "./components/Responser";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Responser />
      </div>
    </Provider>
  );
};

export default App;