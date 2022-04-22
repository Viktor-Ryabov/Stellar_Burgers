import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { getOrderResponse } from "../../services/api/api__order.js";
import { checkResponse } from "../../services/api/api__checkResponse.js";
import { ingridientTypicalType } from "../../utils/types";
import { getOrderRequest } from "../../services/api/api__order.js";

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
    const initialData = useSelector((state) => state.initialData.ingridients);
    // console.log(initialData);
    const dispatch = useDispatch();

    const [popupActive, setActive] = React.useState(false);
    const [orderNumber, setOrderNumber] = React.useState(0);

    const Buns = [];
    const Ingridietns = [];
    let sum = 0;
    const orderData = [];

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
            orderData.push(item._id);
        });
    };
    compileOrderData(Ingridietns);

    const postOrder = () => {
        console.log(orderData); 
        dispatch(getOrderRequest(dispatch, orderData));
    };

    return (
        <section className={`${Styles.burgerIngredients} ml-5 pt-25 pl-4`}>
            <WithModalOrder
                active={popupActive}
                setActive={setActive}
                orderNumber={orderNumber}
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
                        setActive(true);
                        postOrder();
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
