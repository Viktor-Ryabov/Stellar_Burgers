import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Styles from "./BurgerConstructor.module.css";
import {
    ConstructorElement,
    DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingridientTypicalType } from "../../utils/types";
import deleteIngridientFromConstructor from "../../services/actions/action__deleteIngridientFromConstructor";
import renderConstructorIngridients from "../../services/actions/actions__renderConstructorIngridients";


const IngridientsSection = () => {
    const dispatch = useDispatch();
    // const list = useSelector(state => state.orderIngridients.notBuns);
    const list = useSelector(state => state.orderIngridients.notBuns);

    useEffect(() => {
        dispatch(renderConstructorIngridients())
    }, []);


    if (list.length !== 0) {
        return (
            <section className={Styles.owerflowBlock }>
                <div>
                    {list.map((ingridient, index) => (
                        <div
                            className={`${Styles.burgerConstructorItem} mb-4`}
                            key={index}
                        >
                            <DragIcon />
                            <ConstructorElement
                                text={ingridient.name}
                                price={ingridient.price}
                                thumbnail={ingridient.image}
                                handleClose={onClick => {
                                    dispatch(deleteIngridientFromConstructor(ingridient));
                                    console.log(ingridient.id)
                                    console.log(deleteIngridientFromConstructor(ingridient))
                                    }
                                }
                            />
                        </div>
                    ))}
                </div>
            </section>
        );
    } else {
        return (
            <section className={Styles.owerflowBlock}></section>
        );
    }
};

IngridientsSection.propTypes = {
    objectWithSape: PropTypes.arrayOf(ingridientTypicalType),
};

export default IngridientsSection;
