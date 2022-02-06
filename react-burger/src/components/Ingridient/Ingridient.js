import React from 'react';
import Styles from '../Ingridient/Ingridient.module.css'
import { MoneyIcon } from "../Icons/money-icon"

export default class Ingridient extends React.Component {
  render() {
    return(
      <article className={Styles.ingridient}>
        <img className={Styles.ingridient_image} src={this.props.image}/>

        <section className={Styles.ingridient_price}>
          <p className={Styles.ingridient_price_sum}>{this.props.price}</p>
          <MoneyIcon />
        </section>

        <h5 className={Styles.ingridient_description}>{this.props.name}</h5>

        <div className={Styles.ingridient_quantity}>
          <p className={Styles.ingridient_quantity_number}></p>
        </div>

      </article>
    )
  }
}