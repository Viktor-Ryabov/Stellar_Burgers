import React, { useEffect, useState } from "react";
import Styles from "./App.module.css";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import "@ya.praktikum/react-developer-burger-ui-components";
import { getApiResponse } from "../API/Api.js";
import IngridientsContext from "../../ingridientsContext/ingridientsContext";

const App = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [list, setList] = useState([]);

    useEffect(() => {
        getApiResponse().then(
            (response) => {
                setList(response.data);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []);

    if (error) {
        return <div>Ошибка: {error}</div>;
    } else if (!isLoaded) {
        return <section className={Styles.app}>Loading...</section>;
    } else {
        // console.log(list)
        return (
            <IngridientsContext.Provider value={list}>

                <section className={Styles.app}>
                    <Header />
                    {/* <MainSection list={list} />  */}
                    <MainSection /> 
                </section>

            </IngridientsContext.Provider>
            
        );
    }
};

export default App;
