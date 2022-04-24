import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Styles from "./BurgerConstructor.module.css";
import {
    Button,
    ConstructorElement,
    CurrencyIcon,
    DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { withModal } from "../../hocs/withModal";
import { ingridientTypicalType } from "../../utils/types";
import { getOrderRequest } from "../../services/api/api__order.js";
import { ORDER_MODAL_ACTIVE } from "../../utils/constants/constants__modal";

const WithModalOrder = withModal(OrderDetails);

const IngridientsSection = () => {
    const list = useSelector((state) => state.initialData.ingridients);
    return (
        <section className={Styles.owerflowBlock}>
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
};

const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const initialData = useSelector((state) => state.initialData.ingridients);
    const orderNumber = useSelector(
        (state) => state.orderIngridients.orderNumber
    );
    const orderCondition = useSelector(
        (state) => state.modalState.orderCondition
    );

    const Buns = [];
    const Ingridietns = [];
    let sum = 0;
    let ingredients = [];

    function isBuns(list) {
        list.forEach((item) => {
            if (item.type === "bun") {
                Buns.push(item);
            }
        });
        return Buns;
    }

    function isNotBuns(list) {
        list.forEach((item) => {
            if (item.type === "main") {
                Ingridietns.push(item);
            }
        });
        return Ingridietns;
    }

    isBuns(initialData);
    isNotBuns(initialData);

    const getTotalSum = (bun, ingridientArr) => {
        sum = Number(bun[0].price) * 2;
        ingridientArr.forEach((item) => {
            sum += Number(item.price);
        });
        return sum;
    };
    getTotalSum(Buns, Ingridietns);

    const compileOrderData = (orderDataArray) => {
        orderDataArray.forEach((item) => {
            ingredients.push(item._id);
        });
    };
    compileOrderData(Ingridietns);
    const orderData = { ingredients };

    const postOrder = () => {
        dispatch(getOrderRequest(dispatch, orderData));

    };

    return (
        <section className={`${Styles.burgerIngredients} ml-5 pt-25 pl-4`}>
            <WithModalOrder
            active={orderCondition}
            />
            <div className={`${Styles.elementTopBottom} mb-4 ml-3`}>
                <ConstructorElement
                    type="top"
                    key="Buns[0]._id"
                    text={`${Buns[0].name} (верх)`}
                    price={Buns[0].price.toLocaleString()}
                    thumbnail={Buns[0].image}
                    isLocked={true}
                />
            </div>

            <IngridientsSection ingridients={Ingridietns} />

            <div className={`${Styles.elementTopBottom} ml-3`}>
                <ConstructorElement
                    type="bottom"
                    key="this.Buns[0]._id"
                    text={`${Buns[0].name} (низ)`}
                    price={Buns[0].price.toLocaleString()}
                    thumbnail={Buns[0].image}
                    isLocked={true}
                />
            </div>
            <section className={` ${Styles.totalCost} pr-9`}>
                <p className={`${Styles.totalCost_sum}`}>
                    {sum.toLocaleString()}
                </p>
                <div className={`${Styles.totalCostMoneyIcon} mt-2 mr-10`}>
                    <CurrencyIcon />
                </div>
                <Button
                    type="primary"
                    size="large"
                    onClick={() => {
                        dispatch({
                            type: ORDER_MODAL_ACTIVE,
                            data: orderNumber,
                        });
                        postOrder()
                    }}
                >
                    Оформить заказ
                </Button>
            </section>
        </section>
    );
};

IngridientsSection.propTypes = {
    objectWithSape: PropTypes.arrayOf(ingridientTypicalType),
};

BurgerConstructor.propTypes = {
    objectWithSape: PropTypes.arrayOf(ingridientTypicalType),
};

export default BurgerConstructor;
