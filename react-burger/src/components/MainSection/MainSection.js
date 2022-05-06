import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Styles from "../MainSection/MainSection.module.css";

const MainSection = () => {

    return (
            <main className={Styles.main}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
    );
};

export default MainSection;
