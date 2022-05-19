import PropTypes from "prop-types";
import { ingridientTypicalType } from "../../utils/types";
import Styles from "./IngredientDetails.module.css";

export const IngredientDetails = ({active, setDisabledModal, ingridient}) => {
    console.log({active, setDisabledModal, ingridient});

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
                    src={ingridient.image}
                    alt={ingridient.name}
                />
                <p className="text text_type_main-medium mb-8">{ingridient.name}</p>

                <ul className={`${Styles.valueList} `}>
                    <div className={`${Styles.valueElement} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Калории,калл
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {ingridient.calories}
                        </p>
                    </div>
                    <div className={`${Styles.valueElement} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Протеины,калл
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {ingridient.proteins}
                        </p>
                    </div>
                    <div className={`${Styles.valueElement} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Жиры,калл
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {ingridient.fat}
                        </p>
                    </div>
                    <div className={`${Styles.valueElement}`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Углеводы,калл
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {ingridient.carbohydrates}
                        </p>
                    </div>
                </ul>
            </div>
        </>
    );
};

IngredientDetails.propTypes = PropTypes.shape({
    active: PropTypes.bool.isRequired,
    setDisabledModal: PropTypes.func.isRequired,
    ingridient: ingridientTypicalType,
}).isRequired;
