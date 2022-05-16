import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import Styles from "./withModal.module.css";
import { ModalOwerlay } from "../../components/ModalOwerlay/ModalOwerlay";

export const withModal = (WrappedComponent) => (props) => {
    console.log(props);

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            props.setDisabledModal();
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    return ReactDOM.createPortal(
        <section
            className={`${props.active ? Styles.modal_active : ""} ${
                Styles.modal
            } p-10`}
            onClick={escFunction}
        >
            <ModalOwerlay {...props} />
            <WrappedComponent {...props} />
        </section>,
        document.querySelector("#react-modals")
    );
};

withModal.propTypes = {
    active: PropTypes.bool.isRequired,
};
