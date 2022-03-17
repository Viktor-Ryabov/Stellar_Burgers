import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        {/* Корневой элемент для всего приложения */}
        <App />

        {/* Корневой элемент для модальных окон */}
        <div id="react-modals"></div>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
