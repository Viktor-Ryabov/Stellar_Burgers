import React from "react";
import Styles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import Ingridient from "../Ingridient/Ingridient";
import { Tab } from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { withModal } from "../../hocs/withModal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { ingridientTypicalType } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { SET_BUNS, SET_SAUCES, SET_FILLINGS } from "../../utils/constants/constants.js";

const WithModalIngridient = withModal(IngredientDetails);

const BurgerIngredients = ({ ...props }) => {
    const dispatch = useDispatch();
    const { ingridientsCondition, modalData } = useSelector((state) => state.modalState)

    const list = useSelector((state) => state.initialData.ingridients);
    const { bunsMenu, saucesMenu, fillingsMenu, ingridientsMenu, sectionName } = useSelector(
        (state) => state.burgerMenu
    );
    console.log(ingridientsMenu)

    const Buns = [];
    const Sauces = [];
    const Fillings = [];

    list.forEach((item) => {
        if (item.type === "bun") {
            Buns.push(item);
        } else if (item.type === "main") {
            Fillings.push(item);
        } else if (item.type === "sauce") {
            Sauces.push(item);
        }
    });

    return (
        <section className={`${Styles.mainLeft} mr-5`}>
            <WithModalIngridient
                active = {ingridientsCondition}
                {...modalData}
            />
            <h2 className={`${Styles.title} mt-10 mb-5`}>Соберите бургер</h2>
            <section className={`${Styles.owerflowBlock} pr-2`}>

                <ul className={Styles.list}>
                    <li>
                        <Tab
                            active={bunsMenu}
                            onClick={() => {
                                dispatch({
                                    type: SET_BUNS,
                                    data: Buns,
                                });
                            }}
                        >
                            Булки
                        </Tab>
                    </li>
                    <li>
                        <Tab
                            active={saucesMenu}
                            onClick={() => {
                                dispatch({
                                    type: SET_SAUCES,
                                    data: Sauces,
                                });
                            }}
                        >
                            Соусы
                        </Tab>
                    </li>
                    <li>
                        <Tab
                            active={fillingsMenu}
                            onClick={() => {
                                dispatch({
                                    type: SET_FILLINGS,
                                    data: Fillings,
                                });
                            }}
                        >
                            Начинки
                        </Tab>
                    </li>
                </ul>

                <h3 className={`${Styles.subtitle} mt-10 mb-6`}>{sectionName}</h3>
                <section className={`${Styles.ingridient_section}`}>
                    {ingridientsMenu.map((ingridient, index) => (
                        <Ingridient
                            {...ingridient}
                            key={ingridient._id}
                        />
                    ))}
                </section>

            </section>
        </section>
    );
};

BurgerIngredients.propTypes = {
    optionalObject: PropTypes.object,
    objectWithSape: PropTypes.arrayOf(ingridientTypicalType),
};

export default BurgerIngredients;
