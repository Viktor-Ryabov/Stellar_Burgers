import React from "react";
import Styles from "../ModalOwerlay/ModalOwerlay.module.css";

export const ModalOwerlay = (props) => {
    console.log(props);
    return (
        <div
            className={Styles.modalOwerlay}
            onClick={() => {
                props.setActive(false);
                console.log(123);
            }}
        ></div>
    );
};
