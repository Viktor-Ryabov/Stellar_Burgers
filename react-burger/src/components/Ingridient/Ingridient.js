import React from "react";
import PropTypes from "prop-types";
import Styles from "../Ingridient/Ingridient.module.css";
import {
    CurrencyIcon,
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingridientTypicalType } from "../../utils/types";
import { useDispatch } from "react-redux";
import { INGRIDIENTS_MODAL_ACTIVE } from "../../utils/constants/constants__modal.js";

const Ingridient = ({ ...ingridient }) => {
    console.log(ingridient)
    const dispatch = useDispatch();
    return (
        <article
            className={`${Styles.ingridient} mb-8`}
            onClick={() => {
                dispatch({
                    type: INGRIDIENTS_MODAL_ACTIVE,
                    data: { ...ingridient },
                });
            }}
        >
            <img
                className={`${Styles.ingridient_image} ml-4 mr-4 mb-1`}
                src={ingridient.image}
                alt={ingridient.name}
            />

            <section className={`${Styles.ingridient_price} mb-1 `}>
                <p className={Styles.ingridient_price_sum}>
                    {ingridient.price.toLocaleString()}
                </p>
                <CurrencyIcon />
            </section>

            <h5
                className={`${Styles.ingridient_description} text text_type_main-default`}
            >
                {ingridient.name}
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
    props: PropTypes.arrayOf(ingridientTypicalType),
};

export default Ingridient;
