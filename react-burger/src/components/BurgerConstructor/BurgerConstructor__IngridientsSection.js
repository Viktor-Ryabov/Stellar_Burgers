import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Styles from "./BurgerConstructor.module.css";
import { ingridientTypicalType } from "../../utils/types";
import renderConstructorIngridients from "../../services/actions/actions__renderConstructorIngridients";
import { ItemTypes } from "../../utils/constants/constants";
import { useDrag, useDrop } from "react-dnd";
import { ConstructorIngridient } from "../ConstructorIngridient/ConstructorIngridient";

const IngridientsSection = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.orderIngridients.notBuns);

    if (list.length !== 0) {
        return (
            <section className={Styles.owerflowBlock}>
                <div>
                    {list.map((ingridient, index) => (
                        <ConstructorIngridient {...ingridient} key={index} />
                    ))}
                </div>
            </section>
        );
    } else {
        return <section className={Styles.owerflowBlock}></section>;
    }
};

IngridientsSection.propTypes = {
    objectWithSape: PropTypes.arrayOf(ingridientTypicalType),
};

export default IngridientsSection;
