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

const WithModalOrder = withModal(OrderDetails);

const IngridientsSection = () => {
    // console.log(ingridietns);
    const ingridietns = useContext(IngridientsContext);
    return (
        <section className={Styles.owerflowBlock}>
            <div>
                {ingridietns.map((ingridient, index) => (
                    <div
                        className={`${Styles.burgerConstructorItem} mb-4`}
                        key={index}
                    >
                        <DragIcon />
                        <ConstructorElement
                            text={ingridient.name}
                            price={ingridient.price}
                            thumbnail={ingridient.image}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

const BurgerConstructor = () => {
    // console.log(initialData);
    const initialData = useContext(IngridientsContext);
    const [popupActive, setActive] = React.useState(false);
    let Buns = [];
    let Ingridietns = [];
    let sum = 0;
    function isBuns(list) {
        list.forEach((item) => {
            
            if (item.type === "bun") {
                Buns.push(item);
                sum += Buns[0].price * 2;
                
            } else {
                Ingridietns.push(item);
                sum += Number(item.price);
            }

            
        });
        console.log(sum)
    }
    isBuns(initialData);

    return (
        <section className={`${Styles.burgerIngredients} ml-5 pt-25 pl-4`}>
            <WithModalOrder active={popupActive} setActive={setActive} sum={sum}/>

            <div className={`${Styles.elementTopBottom} mb-4 ml-3`}>
                <ConstructorElement
                    type="top"
                    key="Buns[0]._id"
                    text={`${Buns[0].name} (верх)`}
                    price={Buns[0].price}
                    thumbnail={Buns[0].image}
                    isLocked={true}
                />
            </div>

            <IngridientsSection ingridietns={Ingridietns} />

            <div className={`${Styles.elementTopBottom} ml-3`}>
                <ConstructorElement
                    type="bottom"
                    key="this.Buns[0]._id"
                    text={`${Buns[0].name} (низ)`}
                    price={Buns[0].price}
                    thumbnail={Buns[0].image}
                    isLocked={true}
                />
            </div>
            <section className={` ${Styles.totalCost} pr-9`}>
                <p className={`${Styles.totalCost_sum}`}>610</p>
                <div className={`${Styles.totalCostMoneyIcon} mt-2 mr-10`}>
                    <CurrencyIcon />
                </div>
                <Button
                    type="primary"
                    size="large"
                    onClick={() => {
                        setActive(true);
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
