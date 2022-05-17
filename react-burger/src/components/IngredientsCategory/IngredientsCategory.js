import Ingridient from "../Ingridient/Ingridient";
import Styles from "./IngredientsCategory.module.css";
import { forwardRef } from "react";

const IngredientsCategory = forwardRef((props, ref) => {
    const ingridietnArray = props.ingridients;
    return (
        <div className={Styles.ingredientsCategory} ref={ref}>
            <h3 className={`${Styles.subtitle} mt-10 mb-6`}>
                {props.sectionName}
            </h3>
            <div className={Styles.ingridientsBlock}>
                {ingridietnArray.map((ingridient, index) => (
                    <Ingridient {...ingridient} key={ingridient._id} />
                ))}
            </div>
        </div>
    );
});

export default IngredientsCategory;
