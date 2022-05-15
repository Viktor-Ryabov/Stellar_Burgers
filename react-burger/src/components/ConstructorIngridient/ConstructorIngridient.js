import Styles from "./ConstructorIngridient.module.css";
import {
    ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import deleteIngridientFromConstructor from "../../services/actions/action__deleteIngridientFromConstructor";
import { useSelector, useDispatch } from "react-redux";

export const ConstructorIngridient = (ingridient) => {

    const dispatch = useDispatch();

    return(
        <div className={`${Styles.burgerConstructorItem} mb-4`}>
            <DragIcon />
            <ConstructorElement
                text={ingridient.name}
                price={ingridient.price}
                thumbnail={ingridient.image}
                handleClose={(onClick) => {
                    dispatch(deleteIngridientFromConstructor(ingridient));
                }}
            />
        </div>
    );
};
