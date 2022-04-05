import React, { useContext } from "react";
import IngridientsContext from "../../ingridientsContext/ingridientsContext";
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
import { getOrderResponse } from "../API/Api";

const WithModalOrder = withModal(OrderDetails);

const IngridientsSection = (ingridients) => {
    const list = ingridients.ingridients;
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
    const initialData = useContext(IngridientsContext);
    const [popupActive, setActive] = React.useState(false);
    const [orderNumber, setOrderNumber] = React.useState(0);
    let Buns = [];
    let Ingridietns = [];
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
    }
    getTotalSum(Buns, Ingridietns);

    const compileOrderData = (orderDataArray) => {
        orderDataArray.forEach((item) => {
            orderData.push(item._id);
        });
    }
    compileOrderData(Ingridietns);
    const requestData = 
    {
        "ingredients": orderData
    }

    const postOrder = () => {
        getOrderResponse(requestData)
            .then(data => data.json())
            .then((data) => {
                setOrderNumber(data.order.number);                
            })
            .catch((error) => {
                console.log(`Откуда ни возьмись ошибка POST-запроса: ${error.message}`)
            })
    }

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
                <p className={`${Styles.totalCost_sum}`}>{sum.toLocaleString()}</p>
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
    objectWithSape: PropTypes.arrayOf(
        PropTypes.shape({
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
            _id: PropTypes.string.isRequired,
        }).isRequired
    ),
};

BurgerConstructor.propTypes = {
    objectWithSape: PropTypes.arrayOf(
        PropTypes.shape({
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
            _id: PropTypes.string.isRequired,
        }).isRequired
    ),
};

export default BurgerConstructor;
