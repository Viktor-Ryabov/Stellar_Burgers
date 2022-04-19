import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore} from 'redux';
import { rootReducer } from "./services/reducers/index.js";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
        <div id="react-modals"></div>
    </Provider>, document.getElementById("root")
);