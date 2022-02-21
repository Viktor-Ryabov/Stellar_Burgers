import React from "react";
import Styles from "./IngredientDetails.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientDetails = (props) => {
  return (
    <div
      className={`${Styles.popup} p-10`}
      // onClick={(e) => e.stopPropagation()}
    >
      <div className={Styles.modalHeader}>
        <p className={"text text_type_main-large"}>Детали ингридиента</p>
        <div className={Styles.closeIcon}>
          <CloseIcon onClick={() => props.setActive(false)} />
        </div>
      </div>

      <div className={`${Styles.ingridient} mr-25 ml-25 `}>
        <img className={`${Styles.modalImage} mb-4`} src={props.image} />
        <p className="text text_type_main-medium mb-8">{props.name}</p>

        <ul className={`${Styles.valueList} `}>
          <div className={`${Styles.valueElement} mr-5`}>
            <p className="text text_type_main-default text_color_inactive mb-2">
              Калории,калл
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {props.calories}
            </p>
          </div>
          <div className={`${Styles.valueElement} mr-5`}>
            <p className="text text_type_main-default text_color_inactive mb-2">
              Протеины,калл
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {props.proteins}
            </p>
          </div>
          <div className={`${Styles.valueElement} mr-5`}>
            <p className="text text_type_main-default text_color_inactive mb-2">
              Жиры,калл
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {props.fat}
            </p>
          </div>
          <div className={`${Styles.valueElement}`}>
            <p className="text text_type_main-default text_color_inactive mb-2">
              Углеводы,калл
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {props.carbohydrates}
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};
