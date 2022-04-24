import React from "react";
import PropTypes from "prop-types";
import Styles from "./OrderDetails.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Done from "../../img/done.svg"
import { useSelector, useDispatch } from "react-redux";
import { ORDER_MODAL_DISABLED } from "../../utils/constants/constants__modal";

export const OrderDetails = () => {
    // console.log(props)
    // console.log(props.setActive)
    const dispatch = useDispatch();
    const orderNumber = useSelector(
        (state) => state.orderIngridients.orderNumber
    );

    return (
        <div className={`${Styles.popup}`}>
            <div className={`${Styles.closeIcon} mt-15 mr-10`}>
                <CloseIcon onClick={() => {
                    dispatch({
                        type: ORDER_MODAL_DISABLED
                    })
                }} />
            </div>
            <p className="text text_type_digits-large mt-30">{orderNumber}</p>
            <p className="text text_type_main-medium mt-8 mb-15">
                идентификатор заказа
            </p>

            <img src={Done} />

            <div className={`${Styles.markIcon} mb-15`}></div>
            <p className="text text_type_main-default mb-2">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default text_color_inactive mb-30">
                дождитесь готовности на арбитальной станции
            </p>
        </div>
    );
};

PropTypes.exact({
    active: PropTypes.bool.isRequired,
    orderNumber: PropTypes.number.isRequired,
    setActive: PropTypes.func.isRequired,
});
