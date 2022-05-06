import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Styles from "./BurgerConstructor.module.css";
import {
    ConstructorElement,
    DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingridientTypicalType } from "../../utils/types";


const IngridientsSection = () => {
    const list = useSelector(state => state.orderIngridients.ingridients);
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
                                price={ingridient.price.toLocaleString()}
                                thumbnail={ingridient.image}
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
