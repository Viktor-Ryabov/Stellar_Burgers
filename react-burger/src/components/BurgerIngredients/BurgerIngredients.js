import React from 'react';
import Styles from '../BurgerIngredients/BurgerIngredients.module.css';
// import { CurrencyIcon, DeleteIcon, LockIcon, DragIcon, Button, ConstructorElement, Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button, Logo, ConstructorElement, Tab, Input, Counter, EmailInput, PasswordInput, BurgerIcon, CloseIcon, CheckMarkIcon, CurrencyIcon, DragIcon, EditIcon, HideIcon, InfoIcon, ListIcon, LockIcon, LogoutIcon, ProfileIcon, ShowIcon, DeleteIcon, ArrowUpIcon, ArrowDownIcon, MenuIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { initialData } from "../../utils/data";
import "@ya.praktikum/react-developer-burger-ui-components";



const IngridientsSection = (props) => {  
    console.log(props);
    return(
      <section className={ Styles.owerflowBlock }>
        <div>
          {props.elements.map(ingridient => (
            <div className={`${Styles.burgerConstructorItem} mb-4`} >
              <DragIcon />
              <ConstructorElement
                key={ ingridient._id } 
                text={ ingridient.name } 
                price={ ingridient.price }
                thumbnail={ ingridient.image }
              />
            </div>
          ))}
        </div>
      </section>
    ); 
}

// 

class FirstBun extends React.Component {
  render(){
    return(
      
      <div className={ `${Styles.main} m-20` }>
        <div className="m20"></div>
        <div className={ Styles.cardBun }>
          <img className={ Styles.ingredientImage } src={this.props.image} />
          <h4 className={ Styles.ingredientName }>{this.props.name} {this.props.position}</h4>
          <section className={Styles.ingridient_price}>
            <p className={Styles.ingridient_price_sum}>{this.props.price}</p>
            <CurrencyIcon />
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
          <h4 className={ Styles.ingredientName }>{this.props.name} {this.props.position}</h4>
          <section className={Styles.ingridient_price}>
            <p className={Styles.ingridient_price_sum}>{this.props.price}</p>
            <CurrencyIcon />
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
      <section className={ `${Styles.burgerIngredients} mr-5 pt-25 pl-4`}>

        <IngridientsSection elements={ this.state.initialData }/>

        <section className={` ${Styles.totalCost} mt-10`}>
            <p className={`${Styles.totalCost_sum} mb-5`}>610</p>
            <div className={Styles.totalCostMoneyIcon}>
              <CurrencyIcon />
            </div>              
            <Button className="m-10">Оформить заказ</Button>

        </section>
      </section>

    )
  }
}



{/* <FirstBun {...this.Buns[0]} position={"(верх)"}/>

<section className={Styles.owerflowBlock}>
  {this.Ingridietns.map((ingridient, index) => (
    <Ingridient {...ingridient} key={ingridient._id} />
  ))}
</section>

<SecondBun {...this.Buns[0]} position={"(низ)"} /> */}