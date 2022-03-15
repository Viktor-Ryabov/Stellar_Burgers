import React from "react";
import PropTypes from "prop-types";
import Styles from "./withModal.module.css";
import { ModalOwerlay } from "../components/ModalOwerlay/ModalOwerlay";

export const withModal = (WrappedComponent) => (props) => {
    // console.log(props);
    return (
        <section
            className={`${props.active ? Styles.modal_active : ""} ${
                Styles.modal
            } p-10`}
            // onClick={() => props.setActive(false)}
        >
            <ModalOwerlay {...props} />
            <WrappedComponent {...props} />
        </section>
    );
};

PropTypes.exact({
    active: PropTypes.bool.quantity,
    setActive: PropTypes.func.quantity,
});
