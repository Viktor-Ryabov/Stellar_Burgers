import React from 'react';
import Styles from '../BurgerConstructor/BurgerConstructor.module.css'
import Ingridient from "../Ingridient/Ingridient"



export default class BurgerConstructor extends React.Component {
  render() {
    return (
    <div className={ Styles.main }>

        <h2 className={ Styles.title }>Соберите бургер</h2>

        <ul className={ Styles.list }>
          <li className={ Styles.list_item }>Булки</li>
          <li className={ Styles.list_item }>Соусы</li>
          <li className={ Styles.list_item }>Начинки</li>
        </ul>
                
        <h3 className={ Styles.subtitle }>Булки</h3>
        <section className={ Styles.ingridient_section }>
          <Ingridient />
          <Ingridient />
        </section>

        <h3 className={ Styles.subtitle }>Соусы</h3>
        <section className={ Styles.ingridient_section }>
          <Ingridient />
          <Ingridient />
        </section>
        
        <h3 className={ Styles.subtitle }>Начинки</h3>
        <section className={ Styles.ingridient_section }>
          <Ingridient />
          <Ingridient />
        </section>

    </div>
    )
  }
}