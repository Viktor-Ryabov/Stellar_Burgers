import React from "react";
import Styles from "./BurgerConstructor.module.css";
import {
    Button,
    ConstructorElement,
    CurrencyIcon,
    DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../Modal/Modal";

const IngridientsSection = ({ingridietns}) => {
    console.log(ingridietns)
    return (
        <section className={Styles.owerflowBlock}>
            <div>
                {ingridietns.map((ingridient) => (
                    <div
                        className={`${Styles.burgerConstructorItem} mb-4`}
                        key={ingridient._id}
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

const BurgerConstructor = ({ initialData, ...props }) => {
    console.log(initialData.list);
    const initialList = initialData.list;
    let Buns = [];
    let Ingridietns = [];
    function isBuns(list) {
        list.forEach((item) => {
            if (item.type === "bun") {
                Buns.push(item);
            } else {
                Ingridietns.push(item);
            }
        });
    }
    isBuns(initialList);
    console.log(Buns);
    console.log(Ingridietns);

    return (
        <section className={`${Styles.burgerIngredients} ml-5 pt-25 pl-4`}>
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
                <Button type="primary" size="large">
                    Оформить заказ
                </Button>
            </section>
        </section>
    );
};

export default BurgerConstructor;
