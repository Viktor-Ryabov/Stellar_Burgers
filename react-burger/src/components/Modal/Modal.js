import { ModalOwerlay } from "../../components/ModalOwerlay/ModalOwerlay";
import { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import Styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const Modal = ({ ...props }) => {
    // console.log(props);
    const dispatch = useDispatch();

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
            <div className={Styles.modalContainer}>
                <div className={Styles.closeIcon}>
                    <CloseIcon
                        onClick={() => {
                            props.setDisabledModal();
                        }}
                    />
                </div>
                <>{props.children}</>
            </div>

            <ModalOwerlay />
        </section>,
        document.querySelector("#react-modals")
    );
};

Modal.propTypes = {
    active: PropTypes.bool.isRequired,
    setDisabledModal: PropTypes.func,
};

export default Modal;
