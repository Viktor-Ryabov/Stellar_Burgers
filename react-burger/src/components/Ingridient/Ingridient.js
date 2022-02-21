import React from 'react';
import Styles from '../Ingridient/Ingridient.module.css'
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components"

export default class Ingridient extends React.Component {
  render() {
    return(
      <article className={`${Styles.ingridient} mb-8`} onClick={() => console.log(`ingridient id: ${this.props._id}`)}>
        <img className={`${Styles.ingridient_image} ml-4 mr-4 mb-1`} src={this.props.image}/>

        <section className={`${Styles.ingridient_price} mb-1 `}>
          <p className={Styles.ingridient_price_sum}>{this.props.price}</p>
          <CurrencyIcon />
        </section>

        <h5 className={`${Styles.ingridient_description} text text_type_main-default`}>{this.props.name}</h5>
        <Counter />
        <div className={Styles.ingridient_quantity}>
          <Counter />
          {/* <p className={Styles.ingridient_quantity_number}></p> */}
        </div>

      </article>
    )
  }
}