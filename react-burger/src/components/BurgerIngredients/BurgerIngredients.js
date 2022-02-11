import React from 'react';
import { initialData } from "../../utils/data"
import Styles from './BurgerIngredients.module.css'
import Ingridient from "../Ingridient/Ingridient"
import {Tab} from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab"

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

    return (
    <section className={ `${Styles.mainLeft} mr-5` }>

      <h2 className={ `${Styles.title} mt-10 mb-5` }>Соберите бургер</h2>

      <ul className={ Styles.list }>
        <li>
          <Tab active={false}>Булки</Tab>
        </li>
        <li>
          <Tab active={true} >Соусы</Tab>
        </li>
        <li>
        <Tab active={false} >Начинки</Tab>
        </li>
      </ul>

      <section className={`${Styles.owerflowBlock} pr-2`}>

        <h3 className={ `${Styles.subtitle} mt-10 mb-6` }>Булки</h3>

        <section className={ `${Styles.ingridient_section}` }>
          {this.Buns.map((ingridient, index) => (
                <Ingridient {...ingridient} key={ingridient._id} />
              ))}
        </section>
          
        <h3 className={ `${Styles.subtitle} mt-10 mb-6` }>Соусы</h3>
          
        <section className={ `${Styles.ingridient_section} ` }>
          {this.Sauces.map((ingridient, index) => (
              <Ingridient {...ingridient} key={ingridient._id} />
            ))}
        </section>
          
        <h3 className={ `${Styles.subtitle} mt-10 mb-6` }>Начинки</h3>
          
        <section className={ Styles.ingridient_section }>
          {this.Fillings.map((ingridient, index) => (
            <Ingridient {...ingridient} key={ingridient._id} />
          ))}
        </section>

      </section>

    </section>
    )
  }
}