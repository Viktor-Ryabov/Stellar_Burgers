import React from "react";
import PropTypes from "prop-types";
import Styles from "../ModalOwerlay/ModalOwerlay.module.css";

export const ModalOwerlay = (props) => {
    // console.log(props);
    return (
        <div
            className={Styles.modalOwerlay}
            onClick={() => {
                props.setActive(false);
            }}
        ></div>
    );
};

PropTypes.exact({
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
});
