import React from "react";
import PropTypes from 'prop-types';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Styles from "../MainSection/MainSection.module.css";



const MainSection = ({...list}) => {
    console.log(list)
    return (
        <main className={Styles.main}>
            <BurgerIngredients initialData={list} />
            <BurgerConstructor initialData={list} />
        </main>
    );
};

MainSection.propTypes = {
    optionalObject: PropTypes.object,
}

export default MainSection;
