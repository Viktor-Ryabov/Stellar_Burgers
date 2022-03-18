import React from "react";
import PropTypes from "prop-types";
import Styles from "./Modal.module.css";
import { ModalOwerlay } from "../ModalOwerlay/ModalOwerlay";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";

export const Modal = ({ ...props }) => {
    // console.log(props);
    return (
        <section
            className={`${props.active ? Styles.modal_active : ""} ${
                Styles.modal
            } p-10`}
            // onClick={() => props.setActive(false)}
        >
            <ModalOwerlay onClick={() => props.setActive(false)}/>
            <IngredientDetails
                setActive={props.setActive}
                active={props.active}
                {...props.ingridient}
            />

        </section>
    );
};

Modal.propTypes = {
    arrayWithShape: PropTypes.arrayOf(
        PropTypes.shape.isRequired({
            calories: PropTypes.number.isRequired,
            carbohydrates: PropTypes.number.isRequired,
            fat: PropTypes.number.isRequired,
            image: PropTypes.link,
            image_large: PropTypes.link,
            image_mobile: PropTypes.link,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            proteins: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            __v: PropTypes.number.isRequired,
            _id: PropTypes.string.isRequired,
        }).isRequired
    ),
};
