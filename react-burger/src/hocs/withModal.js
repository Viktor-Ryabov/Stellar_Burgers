import React, { useState, useEffect } from "react";
import Styles from "./withModal.module.css"
import { ModalOwerlay } from "../components/ModalOwerlay/ModalOwerlay";

export const withModal = (WrappedComponent) => (props) => {
    return (
        <section
            className={`${props.active ? Styles.modal_active : ""} ${
                Styles.modal
            } p-10`}
            onClick={() => props.setActive(false)}
        >
            <ModalOwerlay />
            <WrappedComponent {...props}/>
        </section>
        
    )
};
