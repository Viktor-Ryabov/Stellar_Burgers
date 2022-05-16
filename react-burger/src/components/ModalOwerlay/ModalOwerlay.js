import React from "react";
import PropTypes from "prop-types";
import Styles from "../ModalOwerlay/ModalOwerlay.module.css";
import { useDispatch, useSelector} from "react-redux";
import { INGRIDIENTS_MODAL_DISABLED, ORDER_MODAL_DISABLED } from "../../utils/constants/constants-modal.js";

export const ModalOwerlay = () => {
    const dispatch = useDispatch();
    const { ingridientsCondition, orderCondition } = useSelector((state) => state.modalState);
    // console.log(props);
    return (
        <div
            className={Styles.modalOwerlay}
            onClick={() => {
                if(ingridientsCondition) {
                    dispatch({
                        type: INGRIDIENTS_MODAL_DISABLED
                    })
                } else if (orderCondition) {
                    dispatch({
                        type: ORDER_MODAL_DISABLED
                    })
                }
                
            }}
        ></div>
    );
};

PropTypes.exact({
    active: PropTypes.bool,
    setActive: PropTypes.func.isRequired,
});
