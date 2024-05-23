import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/stylesheet.css";
import {createStore} from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
import App from "./components/App";


const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

//ReactDOM.render(<Main/>,document.getElementById('root'));

