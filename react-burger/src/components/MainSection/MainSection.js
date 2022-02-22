import React from "react";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Styles from "../MainSection/MainSection.module.css";

const MainSection = (list) => {
    // console.log(list)
    return (
        <main className={Styles.main}>
            <BurgerIngredients initialData={list} />
            <BurgerConstructor initialData={list} />
        </main>
    );
};

export default MainSection;
