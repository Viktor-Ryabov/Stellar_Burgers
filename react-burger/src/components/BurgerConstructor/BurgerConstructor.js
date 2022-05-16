import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Styles from "./BurgerConstructor.module.css";
import {
    Button,
    ConstructorElement,
    CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { withModal } from "../../hocs/withModal/withModal";
import { ingridientTypicalType } from "../../utils/types";
import { getOrderRequest } from "../../services/api/api-order.js";
import IngridientsSection from "./BurgerConstructor-IngridientsSection.js";
import EmptyElement from "./EmptyElement/EmptyElement.js";
import { ItemTypes } from "../../services/constants/constants";
import addToConstructor from "../../services/actions/action-addToConstructor";
import { useDrop } from "react-dnd";
import { setOrderModalAcitve } from "../../services/actions/action-orderModal";

const WithModalOrder = withModal(OrderDetails);

const BurgerConstructor = () => {
    const [{ isOver, canDrop, dragItem }, drop] = useDrop(() => ({
        accept: ItemTypes.INGRIDIENT,
        drop: (item) => dispatch(addToConstructor(item)),
        collect: (monitor) => ({
            canDrop: monitor.canDrop(),
            dragItem: monitor.getItem(),
            isOver: monitor.isOver(),
        }),
    }));

    const dispatch = useDispatch();
    const {buns, notBuns, ingridientsSum, bunsSum} = useSelector((state) => state.orderIngridients);
    let orderIngridients = {
        ingredients: [],
    };
    const orderSum = ingridientsSum + bunsSum;

    const { orderCondition } = useSelector((state) => state.modalState);

    const formatOrderData = () => {
        if (buns.length !== 0) {
            buns.forEach((item) => {
                orderIngridients.ingredients.push(item._id);
            });
        }
        if (notBuns.length !== 0) {
            notBuns.forEach((item) => {
                orderIngridients.ingredients.push(item._id);
            });
        }
    };

    if (buns.length !== 0) {
        return (
            <section
                ref={drop}
                className={`${Styles.burgerIngredients} ml-5 pt-25 pl-4`}
            >
                <WithModalOrder active = {orderCondition} />

                <div className={`${Styles.elementTopBottom} mb-4 ml-3`}>
                    <ConstructorElement
                        type="top"
                        key={buns[0]._id}
                        text={`${buns[0].name} (верх)`}
                        price={buns[0].price.toLocaleString()}
                        thumbnail={buns[0].image}
                        isLocked={true}
                    />
                </div>

                <IngridientsSection ingridients={notBuns} />

                <div className={`${Styles.elementTopBottom} ml-3`}>
                    <ConstructorElement
                        type="bottom"
                        key={buns[0].id}
                        text={`${buns[0].name} (низ)`}
                        price={buns[0].price.toLocaleString()}
                        thumbnail={buns[0].image}
                        isLocked={true}
                    />
                </div>
                <section className={` ${Styles.totalCost} pr-9`}>
                    <p className={`${Styles.totalCost_sum}`}>{orderSum}</p>
                    <div className={`${Styles.totalCostMoneyIcon} mt-2 mr-10`}>
                        <CurrencyIcon />
                    </div>
                    <Button
                        type="primary"
                        size="large"
                        onClick={(e) => {
                            e.stopPropagation();
                            formatOrderData();
                            dispatch(
                                getOrderRequest(dispatch, orderIngridients)
                            );
                        }}
                    >
                        Оформить заказ
                    </Button>
                </section>
            </section>
        );
    } else {
        return (
            <section
                ref={drop}
                className={`${Styles.burgerIngredients} ml-5 pt-25 pl-4`}
            >
                <div className={`${Styles.elementTopBottom} mb-4 ml-3`}>
                    <EmptyElement type="top" />
                </div>

                <IngridientsSection ingridients={notBuns} />

                <div className={`${Styles.elementTopBottom} ml-3`}>
                    <EmptyElement />
                </div>

                <section className={` ${Styles.totalCost} pr-9`}>
                    <p className={`${Styles.totalCost_sum}`}>
                        {orderSum}
                    </p>
                    <div className={`${Styles.totalCostMoneyIcon} mt-2 mr-10`}>
                        <CurrencyIcon />
                    </div>
                    <Button disabled={true} type="primary" size="large">
                        Оформить заказ
                    </Button>
                </section>
            </section>
        );
    }
};

IngridientsSection.propTypes = {
    objectWithSape: PropTypes.arrayOf(ingridientTypicalType),
};

BurgerConstructor.propTypes = {
    objectWithSape: PropTypes.arrayOf(ingridientTypicalType),
};

export default BurgerConstructor;
