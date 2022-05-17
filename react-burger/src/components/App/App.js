import { useEffect } from "react";
import Styles from "./App.module.css";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import "@ya.praktikum/react-developer-burger-ui-components";
import { getIngridientsRequest } from "../../services/api/api-ingridients.js";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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
                <DndProvider backend={HTML5Backend}>
                    <Header />
                    <MainSection />
                </DndProvider>
            </section>
        );
    }
};

export default App;
