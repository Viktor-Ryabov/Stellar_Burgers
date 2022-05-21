import Styles from "./BurgerIngredients.module.css";
import { useState, useEffect } from "react";
import { Tab } from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { withModal } from "../../hocs/withModal/withModal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import { setIngridietnModalDisabledAction } from "../../services/actions/action-ingridietnModal";
import { InView, useInView } from "react-intersection-observer";
import IngredientsCategory from "../IngredientsCategory/IngredientsCategory";

const WithModalIngridient = withModal(IngredientDetails);

const BurgerIngredients = () => {
    const dispatch = useDispatch();
    const { ingridientsCondition, modalData } = useSelector(
        (state) => state.modalState
    );

    const list = useSelector((state) => state.initialData.ingridients);

    const { bunsMenu, saucesMenu, fillingsMenu, ingridientsMenu, sectionName } =
        useSelector((state) => state.burgerMenu);

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

    const setDisabledModal = () => {
        dispatch(setIngridietnModalDisabledAction());
    };

    const [currentTab, setCurrentTab] = useState("buns");

    const [bunsRef, inViewBuns] = useInView({ threshold: 0.5 });
    const [mainsRef, inViewMains] = useInView({ threshold: 0.5 });
    const [saucesRef, inViewSauces] = useInView({ threshold: 0.5 });

    const onTabClick = (tab) => {
        setCurrentTab(tab);
        const category = document.getElementById(tab);
        if (category) {
            category.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (inViewBuns) {
            setCurrentTab("buns");
        } else if (inViewMains) {
            setCurrentTab("mains");
        } else if (inViewSauces) {
            setCurrentTab("sauces");
        }
    }, [inViewBuns, inViewMains, inViewSauces]);

    return (
        <section className={`${Styles.mainLeft} mr-5`}>
            <WithModalIngridient
                active={ingridientsCondition}
                setDisabledModal={setDisabledModal}
                ingridient={modalData}
            />
            <h2 className={`${Styles.title} mt-10 mb-5`}>Соберите бургер</h2>

            <ul className={Styles.list}>
                <li>
                    <Tab
                        value="buns"
                        active={currentTab === "buns"}
                        onClick={() => onTabClick("buns")}
                    >
                        Булки
                    </Tab>
                </li>
                <li>
                    <Tab
                        value="mains"
                        active={currentTab === "mains"}
                        onClick={onTabClick}
                    >
                        Начинки
                    </Tab>
                </li>
                <li>
                    <Tab
                        value="sauces"
                        active={currentTab === "sauces"}
                        onClick={onTabClick}
                    >
                        Соусы
                    </Tab>
                </li>
            </ul>

            <InView>
                <section className={`${Styles.owerflowBlock} pr-2`}>
                    <ul className={`${Styles.ingridient_section}`}>
                        <li id="buns">
                            <IngredientsCategory
                                sectionName="Булки"
                                titleId="buns"
                                ref={bunsRef}
                                ingridients={Buns}
                            />
                        </li>
                        <li id="mains">
                            <IngredientsCategory
                                sectionName="Начинки"
                                titleId="mains"
                                ref={mainsRef}
                                ingridients={Fillings}
                            />
                        </li>
                        <li id="sauces">
                            <IngredientsCategory
                                sectionName="Соусы"
                                titleId="sauces"
                                ref={saucesRef}
                                ingridients={Sauces}
                            />
                        </li>
                    </ul>
                </section>
            </InView>
        </section>
    );
};

export default BurgerIngredients;
