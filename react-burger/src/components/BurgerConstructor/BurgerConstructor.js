import React from 'react';
import Styles from './BurgerConstructor.module.css';
import { Button, ConstructorElement, CurrencyIcon, DragIcon, } from "@ya.praktikum/react-developer-burger-ui-components";
import { initialData } from "../../utils/data";
import "@ya.praktikum/react-developer-burger-ui-components";

const IngridientsSection = (props) => {  
    return(
      <section className={ Styles.owerflowBlock }>
        <div>
          {props.elements.map(ingridient => (
            <div className={`${Styles.burgerConstructorItem} mb-4` } key={ingridient._id}>
              <DragIcon />
              <ConstructorElement
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

export default class BurgerIngredients extends React.Component {
  constructor(props){
    super(props);
    this.state = {initialData};
    this.Buns = [];
    this.Ingridietns = [];
  }

  isBuns(){
    this.Buns = [];  
    this.Ingridietns = [];
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
      <section className={ `${Styles.burgerIngredients} ml-5 pt-25 pl-4`}>

        <div className={`${Styles.elementTopBottom} mb-4 ml-3`}>
          <ConstructorElement type="top" 
            key="this.Buns[0]._id" 
            text={ `${this.Buns[0].name} (верх)`} 
            price={ this.Buns[0].price }
            thumbnail={ this.Buns[0].image }
            isLocked= {true}
          />
        </div>

        <IngridientsSection elements={ this.Ingridietns }/>

        <div className={`${Styles.elementTopBottom} ml-3`}>
          <ConstructorElement type="bottom"
            key="this.Buns[0]._id" 
            text={ `${this.Buns[0].name} (низ)`} 
            price={ this.Buns[0].price }
            thumbnail={ this.Buns[0].image }
            isLocked= {true}
          />
        </div>
        

        <section className={` ${Styles.totalCost} pr-9`}>
            <p className={`${Styles.totalCost_sum}`} >610</p>
            <div className={`${Styles.totalCostMoneyIcon} mt-2 mr-10`}>
              <CurrencyIcon />
            </div>              
            <Button type="primary" size="large">Оформить заказ</Button>
        </section>
      </section>

    )
  }
}