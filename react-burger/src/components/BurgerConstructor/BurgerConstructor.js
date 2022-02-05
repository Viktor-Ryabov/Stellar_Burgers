import React from 'react';
import Styles from '../BurgerConstructor/BurgerConstructor.module.css'
import Ingridient from "../Ingridient/Ingridient"

import { initialData } from "../../utils/data"




export default class BurgerConstructor extends React.Component {
  constructor(props){
    super(props);
    this.state = {initialData};
    this.Buns = [];
    this.Sauces = [];
    this.Fillings = [];
  }

  isIngridient(){
    this.Buns = [];
    this.Sauces = [];
    this.Fillings = [];

    this.state.initialData.forEach(item => {
      if(item.type === "bun") {
        this.Buns.push(item);
      } else if(item.type === "main"){
        this.Fillings.push(item);
      } else if (item.type === "sauce") {
        this.Sauces.push(item);
      }
    })
  }

  render() {
    this.isIngridient(this.state.initialData);
    // console.log(this.Buns, this.Sauces, this.Fillings)

    return (
    <div className={ Styles.main }>

      <h2 className={ Styles.title }>Соберите бургер</h2>

      <ul className={ Styles.list }>
        <li className={ Styles.list_item }>Булки</li>
        <li className={ Styles.list_item }>Соусы</li>
        <li className={ Styles.list_item }>Начинки</li>
      </ul>

      <section className={Styles.owerflowBlock}>

        <h3 className={ Styles.subtitle }>Булки</h3>

        <section className={ Styles.ingridient_section }>
          {this.Buns.map((ingridient, index) => (
                <Ingridient {...ingridient} key={ingridient._id} />
              ))}
        </section>
          
        <h3 className={ Styles.subtitle }>Соусы</h3>
          
        <section className={ Styles.ingridient_section }>
          {this.Sauces.map((ingridient, index) => (
              <Ingridient {...ingridient} key={ingridient._id} />
            ))}
        </section>
          
        <h3 className={ Styles.subtitle }>Начинки</h3>
          
        <section className={ Styles.ingridient_section }>
          {this.Fillings.map((ingridient, index) => (
            <Ingridient {...ingridient} key={ingridient._id} />
          ))}
        </section>

      </section>

    </div>
    )
  }
}