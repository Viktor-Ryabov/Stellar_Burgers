import React, { useEffect } from "react";
import Styles from "./App.module.css";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import "@ya.praktikum/react-developer-burger-ui-components";
import { getIngridientsRequest } from "../../services/api/api__ingridients.js";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
    const { ingridients, requestStatusOk, requestError } = useSelector(
        (state) => state.initialData
    );
    console.log(ingridients);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngridientsRequest());
    }, []);

    if (requestError) {
        return <div>Ошибка: {requestError}</div>;
    } else if (!requestStatusOk) {
        return (
            <section className={`${Styles.appLoading} text_type_digits-large`}>
                Loading...ha-ha!
            </section>
        );
    } else {
        // console.log(initialIngridients.ingridients);
        return (
            <section className={Styles.app}>
                <Header />
                <MainSection />
            </section>
        );
    }
};

export default App;
