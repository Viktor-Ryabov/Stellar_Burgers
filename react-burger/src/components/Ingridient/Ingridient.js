import React from "react";
import PropTypes from "prop-types";
import Styles from "../Ingridient/Ingridient.module.css";
import {
    CurrencyIcon,
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

const Ingridient = ({ setIngridientData, setActive, ...props }) => {
    // console.log(props)
    return (
        <article
            className={`${Styles.ingridient} mb-8`}
            onClick={() => {
                // console.log(`ingridient id: ${props._id}`);
                setIngridientData(props);
                setActive(true);
            }}
        >
            <img
                className={`${Styles.ingridient_image} ml-4 mr-4 mb-1`}
                src={props.image}
                alt={props.name}
            />

            <section className={`${Styles.ingridient_price} mb-1 `}>
                <p className={Styles.ingridient_price_sum}>{props.price}</p>
                <CurrencyIcon />
            </section>

            <h5
                className={`${Styles.ingridient_description} text text_type_main-default`}
            >
                {props.name}
            </h5>
            <Counter />
            <div className={Styles.ingridient_quantity}>
                <Counter />
                {/* <p className={Styles.ingridient_quantity_number}></p> */}
            </div>
        </article>
    );
};

Ingridient.propTypes = {
    setIngridientData: PropTypes.func,
    setActive: PropTypes.func,
    props: PropTypes.arrayOf(
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

export default Ingridient;
