import React from "react";
import PropTypes from "prop-types";
import Styles from "./IngredientDetails.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { INGRIDIENTS_MODAL_DISABLED } from "../../utils/constants/constants__modal.js";

export const IngredientDetails = (props) => {
    // console.log(props);
    const dispatch = useDispatch();

    return (
        <div
            className={`${Styles.popup} p-10`}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={Styles.modalHeader}>
                <p className={"text text_type_main-large"}>
                    Детали ингридиента
                </p>
                <div className={Styles.closeIcon}>
                    <CloseIcon onClick={() => {
                        dispatch({
                            type: INGRIDIENTS_MODAL_DISABLED
                        })
                    }} />
                </div>
            </div>

            <div className={`${Styles.ingridient} mr-25 ml-25 `}>
                <img
                    className={`${Styles.modalImage} mb-4`}
                    src={props.image}
                    alt={props.name}
                />
                <p className="text text_type_main-medium mb-8">{props.name}</p>

                <ul className={`${Styles.valueList} `}>
                    <div className={`${Styles.valueElement} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Калории,калл
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {props.calories}
                        </p>
                    </div>
                    <div className={`${Styles.valueElement} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Протеины,калл
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {props.proteins}
                        </p>
                    </div>
                    <div className={`${Styles.valueElement} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Жиры,калл
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {props.fat}
                        </p>
                    </div>
                    <div className={`${Styles.valueElement}`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Углеводы,калл
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {props.carbohydrates}
                        </p>
                    </div>
                </ul>
            </div>
        </div>
    );
};

PropTypes.exact({
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
});
