import React, {useContext} from "react";
import IngridientsContext from "../../ingridientsContext/ingridientsContext";
import Styles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types"
import Ingridient from "../Ingridient/Ingridient";
import { Tab } from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { withModal } from "../../hocs/withModal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";

const WithModalIngridient = withModal(IngredientDetails);

const BurgerIngredients = ({ ...props }) => {
    // console.log(props);
    // console.log(initialData);
    const list = useContext(IngridientsContext);
    const [popupActive, setActive] = React.useState(false);
    const [ingridientData, setIngridientData] = React.useState({});

    // console.log(initialData)
    let Buns = [];
    let Sauces = [];
    let Fillings = [];

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
                active={popupActive}
                setActive={setActive}
                {...ingridientData}
            />

            <h2 className={`${Styles.title} mt-10 mb-5`}>Соберите бургер</h2>
            <ul className={Styles.list}>
                <li>
                    <Tab active={false}>Булки</Tab>
                </li>
                <li>
                    <Tab active={true}>Соусы</Tab>
                </li>
                <li>
                    <Tab active={false}>Начинки</Tab>
                </li>
            </ul>
            <section className={`${Styles.owerflowBlock} pr-2`}>
                <h3 className={`${Styles.subtitle} mt-10 mb-6`}>Булки</h3>
                <section className={`${Styles.ingridient_section}`}>
                    {Buns.map((ingridient, index) => (
                        <Ingridient
                            {...ingridient}
                            key={ingridient._id}
                            setIngridientData={setIngridientData}
                            setActive={setActive}
                            {...props}
                        />
                    ))}
                </section>
                <h3 className={`${Styles.subtitle} mt-10 mb-6`}>Соусы</h3>
                <section className={`${Styles.ingridient_section} `}>
                    {Sauces.map((ingridient, index) => (
                        <Ingridient
                            {...ingridient}
                            key={index}
                            setIngridientData={setIngridientData}
                            setActive={setActive}
                            {...props}
                        />
                    ))}
                </section>
                <h3 className={`${Styles.subtitle} mt-10 mb-6`}>Начинки</h3>
                <section className={Styles.ingridient_section}>
                    {Fillings.map((ingridient, index) => (
                        <Ingridient
                            {...ingridient}
                            key={ingridient._id}
                            setIngridientData={setIngridientData}
                            setActive={setActive}
                            {...props}
                        />
                    ))}
                </section>
            </section>
        </section>
    );
};

BurgerIngredients.propTypes = {
    optionalObject: PropTypes.object,
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

export default BurgerIngredients;
