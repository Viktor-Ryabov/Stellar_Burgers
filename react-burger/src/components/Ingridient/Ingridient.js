import React from 'react';
import Styles from '../Ingridient/Ingridient.module.css'
import { MoneyIcon } from "../Icons/money-icon"

export default class Ingridient extends React.Component{
  render() {
    return(
      <div className={Styles.ingridient}>
        <img className={Styles.ingridient_image} />

        <section className={Styles.ingridient_price}>
          <p className={Styles.ingridient_price_sum}>...</p>
          <MoneyIcon />
        </section>

        <h5 className={Styles.ingridient_description}>...</h5>

        <div className={Styles.ingridient_quantity}>
          <p className={Styles.ingridient_quantity_number}>..</p>
        </div>

      </div>
    )
  }
}