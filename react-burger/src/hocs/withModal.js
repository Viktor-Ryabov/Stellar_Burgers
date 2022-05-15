import React from "react";
import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import Styles from "./withModal.module.css";
import { ModalOwerlay } from "../components/ModalOwerlay/ModalOwerlay";
import { useDispatch, useSelector } from "react-redux";
import { setIngridietnModalDisabledAction } from "../services/actions/action__ingridietnModal";
import { setOrderModalDisabled } from "../services/actions/action__orderModal";

export const withModal = (WrappedComponent) => (props) => {
    console.log(props)
    const dispatch = useDispatch();
    const { ingridientsCondition, orderCondition } = useSelector((state) => state.modalState);

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            if(ingridientsCondition) {
                dispatch(setIngridietnModalDisabledAction())
            } else if (orderCondition) {
                dispatch(setOrderModalDisabled())
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