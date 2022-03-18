import React from "react";
import PropTypes from 'prop-types';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Styles from "../MainSection/MainSection.module.css";

const MainSection = ({...list}) => {
    // console.log(list);
    return (
        <main className={Styles.main}>
            <BurgerIngredients initialData={list} />
            <BurgerConstructor initialData={list} />
        </main>
    );
};


MainSection.propTypes = {
    objectWithSape: PropTypes.arrayOf(
        PropTypes.shape({
            calories: PropTypes.number.isRequired,
            carbohydrates: PropTypes.number.isRequired,
            fat: PropTypes.number.isRequired,
            image: PropTypes.link,
            image_large: PropTypes.link,
            image_mobile: PropTypes.link,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            proteins: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            __v: PropTypes.number.isRequired,
            _id: PropTypes.string.isRequired,
        }).isRequired
    ),
};

export default MainSection;
