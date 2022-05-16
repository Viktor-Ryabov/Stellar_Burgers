import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./services/store/store.js"

ReactDOM.render(
    <Provider store={store}>
        <App />
        <div id="react-modals"></div>
    </Provider>,
    document.getElementById("root")
);
