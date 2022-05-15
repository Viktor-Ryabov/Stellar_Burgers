import React from "react";
import PropTypes from "prop-types";
import Styles from "../Ingridient/Ingridient.module.css";
import {
    CurrencyIcon,
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingridientTypicalType } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { ItemTypes } from "../../utils/constants/constants";
import { useDrag } from "react-dnd";
import { setIngridietnModalAcitveAction } from "../../services/actions/action__ingridietnModal";

const Ingridient = ({ ...ingridient }) => {
    let counterBuns;
    let counterNotBuns;

    const countsBuns = useSelector((state) => state.orderIngridients.buns);
    const countsNotBuns = useSelector(
        (state) => state.orderIngridients.notBuns
    );

    const calculateCounterNotBuns = () => {
        if (countsNotBuns.length !== 0) {
            counterNotBuns = countsNotBuns.filter(
                (item) => item._id === ingridient._id
            ).length;
        }
    };
    const calculateCounterBuns = () => {
        if (countsBuns.length !== 0) {
            return (counterBuns = countsBuns.filter(
                (item) => item._id === ingridient._id
            ).length);
        }
    };
    calculateCounterNotBuns();
    calculateCounterBuns();

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.INGRIDIENT,
        item: ingridient,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const dispatch = useDispatch();

    return (
        <article
            ref={drag}
            draggable={true}
            className={
                isDragging
                    ? `${Styles.ingridient_dragging} mb-8`
                    : `${Styles.ingridient} mb-8`
            }
            onClick={() => {
                dispatch(setIngridietnModalAcitveAction(ingridient));
            }}
        >
            <img
                draggable={false}
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

            <div className={Styles.ingridient_quantity}>
                <Counter
                    count={
                        (counterBuns || counterNotBuns) &&
                        ingridient.type === "bun"
                            ? counterBuns
                            : counterNotBuns
                    }
                />
            </div>
        </article>
    );
};

// Ingridient.propTypes = {
//     setIngridientData: PropTypes.func,
//     setActive: PropTypes.func,
//     props: PropTypes.arrayOf(ingridientTypicalType),
// };

export default Ingridient;
