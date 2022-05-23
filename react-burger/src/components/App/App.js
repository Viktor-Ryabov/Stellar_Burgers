import { useEffect } from "react";
import Styles from "./App.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import { getIngridientsRequest } from "../../services/api/api-ingridients.js";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";
import Header from "../Header/Header";
import Loging from "../../pages/Loging/Loging";
import Register from "../../pages/Register/Register";
import Main from "../../pages/Main.js";
import NotFound404 from "../../pages/NotFound404/NotFound404";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";

const App = () => {
    const { requestStatusOk, requestError } = useSelector(
        (state) => state.initialData
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngridientsRequest());
    }, []);



    if (requestError) {
        return <div>Ошибка: {requestError}</div>;
    } else if (!requestStatusOk) {
        return (
            <section className={`${Styles.appLoading} text_type_digits-large`}>
                ...Loading
            </section>
        );
    } else {
        return (
            <section className={Styles.app}>
                <Router>
                    <Header />

                    <Switch>

                        <Route path="/loging" exact={true}>
                            <Loging />
                        </Route>

                        <Route path="/loging/register" exact={true}>
                            <Register />
                        </Route>

                        <Route path="/forgot-password" exact={true}>
                            <ForgotPassword />
                        </Route>
                        <Route path="/forgot-password/reset-password" exact={true}>
                            <ResetPassword />
                        </Route>

                        <Route path="/" exact={true}>
                            <Main />
                        </Route>

                        <Route>
                            <NotFound404 />
                        </Route>
                    </Switch>
                </Router>
            </section>
        );
    }
};

export default App;
