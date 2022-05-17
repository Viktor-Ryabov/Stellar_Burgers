import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Styles from "./BurgerConstructor.module.css";
import { ingridientTypicalType } from "../../utils/types";
import { ConstructorIngridient } from "../ConstructorIngridient/ConstructorIngridient";
import replaceIngridient from "../../services/actions/action-replaceIngridient";

const IngridientsSection = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.orderIngridients.notBuns);

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        dispatch(replaceIngridient(dragIndex, hoverIndex));
    });

    const renderCard = useCallback((card, index) => {
        return (
            <ConstructorIngridient
                ingridient={card}
                key={card.id}
                index={index}
                id={card.id}
                moveCard={moveCard}
            />
        );
    }, []);

    if (list.length !== 0) {
        return (
            <section className={Styles.owerflowBlock}>
                <div>
                    {list.map((ingridient, index) =>
                        renderCard(ingridient, index)
                    )}
                </div>
            </section>
        );
    } else {
        return <section className={Styles.owerflowBlock}></section>;
    }
};

IngridientsSection.propTypes = {
    objectWithSape: PropTypes.arrayOf(ingridientTypicalType),
};

export default IngridientsSection;
