import React from "react";
import Styles from "./OrderDetails.module.css";
import {
  CloseIcon,
  CheckMarkIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const OrderDetails = (props) => {
  return (
    <div className={`${Styles.popup}`} >

      <div className={`${Styles.closeIcon} mt-15 mr-10`}>
        <CloseIcon />
      </div>
      <p className="text text_type_digits-large mt-30">034536</p>
      <p className="text text_type_main-medium mt-8 mb-15">
        идентификатор заказ
      </p>
      <div className={`${Styles.markIcon} mb-15`}>
        {/* <CheckMarkIcon type="primary" />  */}
        {/* нет в компанентах такой картинки как в макете */}
      </div>
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        дождитесь готовности на арбитальной станции
      </p>
    </div>
  );
};
