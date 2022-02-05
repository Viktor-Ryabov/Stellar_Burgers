import React from 'react';
import Styles from '../BurgerIngredients/BurgerIngredients.module.css'
import { DragIcon } from "../Icons/drag-icon"
import BurgerConstructorStyles from '../BurgerConstructor/BurgerConstructor.module.css'
import { MoneyIcon } from "../Icons/money-icon"
import { DeleteIcon } from "../Icons/delete-icon"
import { initialData } from "../../utils/data"

class Ingridient extends React.Component {
  render(){
    return(
      <div className={ Styles.main }>

        <DragIcon className={ Styles.moveElementButton } />

        <div className={ Styles.card }>
          <img className={ Styles.ingredientImage } src={this.props.image} />

          <h4 className={ Styles.ingredientName }>{this.props.name}</h4>

          <section className={Styles.ingridient_price}>
            <p className={Styles.ingridient_price_sum}>{this.props.price}</p>
            <MoneyIcon />
          </section>

          <DeleteIcon className={ Styles.deleteIcon } />
        </div>

      </div>
    )
  }
}


export default class BurgerIngredients extends React.Component {
  constructor(props){
    super(props);
    this.state = {initialData};
  }

  render(){
    return (

      <section className={ Styles.burgerIngredients }>
        {this.state.initialData.map((ingridient, index) => (
          <Ingridient {...ingridient} key={ingridient._id} />
        ))}
      </section>

    )
  }
}
