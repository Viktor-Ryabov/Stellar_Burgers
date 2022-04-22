import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducer } from "./services/reducers/reducers__index.js";
import thunk from "redux-thunk";
import { compose } from "redux";

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const actionLoger = store => next => action => {
    console.log(`Action: ${action.type}`);
    return next(action);
};

const enhancer = composeEnhancers(applyMiddleware(thunk, actionLoger));
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <App />
        <div id="react-modals"></div>
    </Provider>,
    document.getElementById("root")
);
