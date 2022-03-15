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
            calories: PropTypes.number,
            carbohydrates: PropTypes.number,
            fat: PropTypes.number,
            image: PropTypes.link,
            image_large: PropTypes.link,
            image_mobile: PropTypes.link,
            name: PropTypes.string,
            price: PropTypes.number,
            proteins: PropTypes.number,
            type: PropTypes.string,
            __v: PropTypes.number,
            _id: PropTypes.string,
            
        })
    ),
};

export default MainSection;
