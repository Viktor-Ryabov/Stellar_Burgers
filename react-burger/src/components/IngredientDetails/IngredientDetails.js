import PropTypes from "prop-types";
import Styles from "./IngredientDetails.module.css";

export const IngredientDetails = (props) => {

    return (
        <>
            <div className={Styles.modalHeader}>
                <p className={"text text_type_main-large"}>
                    Детали ингридиента
                </p>
            </div>

            <div className={`${Styles.ingridient} mr-25 ml-25 `}>
                <img
                    className={`${Styles.modalImage} mb-4`}
                    src={props.image}
                    alt={props.name}
                />
                <p className="text text_type_main-medium mb-8">{props.name}</p>

                <ul className={`${Styles.valueList} `}>
                    <div className={`${Styles.valueElement} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Калории,калл
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {props.calories}
                        </p>
                    </div>
                    <div className={`${Styles.valueElement} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Протеины,калл
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {props.proteins}
                        </p>
                    </div>
                    <div className={`${Styles.valueElement} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Жиры,калл
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {props.fat}
                        </p>
                    </div>
                    <div className={`${Styles.valueElement}`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Углеводы,калл
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {props.carbohydrates}
                        </p>
                    </div>
                </ul>
            </div>
        </>
    );
};

IngredientDetails.propTypes = PropTypes.shape({
    active: PropTypes.bool.isRequired,
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
    _id: PropTypes.string,
}).isRequired;
