import React from 'react';
import {initialData} from "../../utils/data";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Styles from '../MainSection/MainSection.module.css'


export default class MainSection extends React.Component {
  constructor(props){
    super(props)
  }
  render(props){
    return(
      <main className={ Styles.main }>
        <BurgerIngredients {...props} initialData={initialData}/>
        <BurgerConstructor {...props} initialData={initialData}/>

      </main>
    )
  }
}