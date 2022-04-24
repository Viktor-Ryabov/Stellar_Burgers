import { useEffect } from "react";
import Styles from "./App.module.css";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import "@ya.praktikum/react-developer-burger-ui-components";
import { getIngridientsRequest } from "../../services/api/api__ingridients.js";
import { useDispatch, useSelector } from "react-redux";

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
                ...ГРУЗИМ
            </section>
        );
    } else {
        return (
            <section className={Styles.app}>
                <Header />
                <MainSection />
            </section>
        );
    }
};

export default App;
