import React from 'react';
import Styles from '../BurgerIngredients/BurgerIngredients.module.css'
import { DragIcon } from "../Icons/drag-icon"
import BurgerConstructorStyles from '../BurgerConstructor/BurgerConstructor.module.css'
import { MoneyIcon } from "../Icons/money-icon"
import { MoneyIconBig } from "../Icons/money-icon-big"
import { DeleteIcon } from "../Icons/delete-icon"
import { LockIcon } from "../Icons/lock-icon"
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
            <div className={ Styles.deleteIcon }>
              <DeleteIcon />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

class FirstBun extends React.Component {
  render(){
    return(
      <div className={ Styles.main }>
        <div className={ Styles.cardBun }>
          <img className={ Styles.ingredientImage } src={this.props.image} />
          <h4 className={ Styles.ingredientName }>{this.props.name}</h4>
          <section className={Styles.ingridient_price}>
            <p className={Styles.ingridient_price_sum}>{this.props.price}</p>
            <MoneyIcon />
            <div className={ Styles.deleteIcon }>
              <LockIcon />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

class SecondBun extends FirstBun{
  render(){
    return(
      <div className={ Styles.main }>
        <div className={ Styles.cardBun_last }>
          <img className={ Styles.ingredientImage } src={this.props.image} />
          <h4 className={ Styles.ingredientName }>{this.props.name}</h4>
          <section className={Styles.ingridient_price}>
            <p className={Styles.ingridient_price_sum}>{this.props.price}</p>
            <MoneyIcon />
            <div className={ Styles.deleteIcon }>
              <LockIcon />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default class BurgerIngredients extends React.Component {
  constructor(props){
    super(props);
    this.state = {initialData};
    this.Buns = [];
    this.Ingridietns = [];
  }

  isBuns(){
    this.Buns = [];  
    this.state.initialData.forEach(item => {
      if(item.type === "bun") {
        this.Buns.push(item);
      } else {
        this.Ingridietns.push(item);
      }
    })
  }

  render(){
    this.isBuns(this.state.initialData);
    return (

      <section className={ Styles.burgerIngredients }>

        <FirstBun {...this.Buns[0]} />

        <section className={ Styles.owerflowBlock}>
          {this.Ingridietns.map((ingridient, index) => (
            <Ingridient {...ingridient} key={ingridient._id} />
          ))}
        </section>

        <SecondBun {...this.Buns[1]} />

        <section className={Styles.totalCost}>
            <p className={Styles.totalCost_sum}>610</p>
            <div className={Styles.totalCostMoneyIcon}>
              <MoneyIconBig />
            </div>              
            <button className={Styles.buttonMakeOrder}>Оформить заказ</button>
        </section>
        
      </section>

    )
  }
}
