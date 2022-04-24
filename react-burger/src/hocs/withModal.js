import React from "react";
import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import Styles from "./withModal.module.css";
import { ModalOwerlay } from "../components/ModalOwerlay/ModalOwerlay";
import { useDispatch, useSelector } from "react-redux";
import { INGRIDIENTS_MODAL_DISABLED, ORDER_MODAL_DISABLED } from "../utils/constants/constants__modal";

export const withModal = (WrappedComponent) => (props) => {
    const dispatch = useDispatch();
    const { ingridientsCondition, orderCondition } = useSelector((state) => state.modalState);
    console.log(`ingridientsCondition: ${ingridientsCondition}, orderCondition: ${orderCondition}`);

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            if(ingridientsCondition) {
                dispatch({
                    type: INGRIDIENTS_MODAL_DISABLED
                })
            } else if (orderCondition) {
                dispatch({
                    type: ORDER_MODAL_DISABLED
                })
            }
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    return ReactDOM.createPortal(
        (
            <section
                className={`${props.active ? Styles.modal_active : ""} ${
                    Styles.modal
                } p-10`}
                onClick={escFunction}
            >
                <ModalOwerlay {...props} />
                <WrappedComponent {...props} />
            </section>
        ), document.querySelector('#react-modals')
    );
};

PropTypes.exact({
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
});