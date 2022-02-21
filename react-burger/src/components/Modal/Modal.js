import React, { useState, useEffect } from "react";
import Styles from "./Modal.module.css";
import { ModalOwerlay } from "../ModalOwerlay/ModalOwerlay";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";

export const Modal = ({ ingridient, active, setActive, children, modalActiveConstructor, setModalaActiveConstructor }) => {
  return (
    <section
      className={`${active ? Styles.modal_active : ""} ${Styles.modal} p-10`}
      onClick={() => setActive(false)}
    >
      <ModalOwerlay />
      <IngredientDetails setActive={setActive}  active={active} {...ingridient}/>
      
      {/* <OrderDetails /> */}
    </section>
  );
};
