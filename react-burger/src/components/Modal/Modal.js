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
        PropTypes.shape({
            calories: PropTypes.number,
            carbohydrates: PropTypes.number,
            fat: PropTypes.number,
            image: PropTypes.link,
            image_large: PropTypes.link,
            image_mobile: PropTypes.link,
            name: PropTypes.string,
            price: PropTypes.number,
            proteins: PropTypes.number,
            type: PropTypes.string,
            __v: PropTypes.number,
            _id: PropTypes.string,
            
        })
    ),
};
