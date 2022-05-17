import Styles from "./OrderDetails.module.css";
import Done from "../../img/done.svg";
import { useSelector } from "react-redux";

export const OrderDetails = () => {
    const orderNumber = useSelector((state) => state.orderNumber.number);

    return (
        <div className={Styles.orderModalContainer}>
            <p className="text text_type_digits-large mt-30">{orderNumber}</p>
            <p className="text text_type_main-medium mt-8 mb-15">
                идентификатор заказа
            </p>

            <img src={Done} />

            <div className={`${Styles.markIcon} mb-15`}></div>
            <p className="text text_type_main-default mb-2">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default text_color_inactive mb-30">
                дождитесь готовности на арбитальной станции
            </p>
        </div>
    );
};
