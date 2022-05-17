import Styles from "./BurgerIngredients.module.css";
import Ingridient from "../Ingridient/Ingridient";
import { Tab } from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { withModal } from "../../hocs/withModal/withModal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import { SET_BUNS, SET_SAUCES, SET_FILLINGS } from "../../services/constants/constants.js";
import { setIngridietnModalDisabledAction } from "../../services/actions/action-ingridietnModal";

const WithModalIngridient = withModal(IngredientDetails);

const BurgerIngredients = () => {

    const dispatch = useDispatch();
    const { ingridientsCondition, modalData } = useSelector((state) => state.modalState)

    const list = useSelector((state) => state.initialData.ingridients);
    
    const { bunsMenu, saucesMenu, fillingsMenu, ingridientsMenu, sectionName } = useSelector(
        (state) => state.burgerMenu
    );

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
    }

    return (
        <section className={`${Styles.mainLeft} mr-5`}>
            <WithModalIngridient
                active = {ingridientsCondition}
                setDisabledModal = {setDisabledModal}
                {...modalData}
            />
            <h2 className={`${Styles.title} mt-10 mb-5`}>Соберите бургер</h2>
            
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

            <section className={`${Styles.owerflowBlock} pr-2`}>

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

export default BurgerIngredients;
