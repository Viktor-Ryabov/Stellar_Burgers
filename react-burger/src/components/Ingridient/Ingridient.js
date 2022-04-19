import React from "react";
import PropTypes from "prop-types";
import Styles from "../Ingridient/Ingridient.module.css";
import {
    CurrencyIcon,
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingridientTypicalType } from "../../utils/types";


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
                <p className={Styles.ingridient_price_sum}>{props.price.toLocaleString()}</p>
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
        ingridientTypicalType,
    ),
};

export default Ingridient;
