import React, { useEffect, useState } from "react";
import Styles from "./App.module.css";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import "@ya.praktikum/react-developer-burger-ui-components";
import { getApiResponse } from "../API/Api.js";
import { createModuleResolutionCache } from "typescript";

const App = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [list, setList] = useState([]);

    useEffect(() => {
        getApiResponse()
        .then(
            (response) => {
                setList(response.data);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    if (error) {
        return <div>Ошибка: {error}</div>;
    } else if (!isLoaded) {
        return <section className={Styles.app}>Loading...</section>;
    } else {
        // console.log(list)
        return (
            <section className={Styles.app}>
                <Header />
                <MainSection list={list} />
            </section>
        );
    }
};

export default App;
