import React from 'react';
import {initialData} from "../../utils/data";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import MainSectionStyles from '../MainSection/MainSection.module.css'


export default class MainSection extends React.Component {
  render(){
    console.log(initialData);
    return(
      <div className={ MainSectionStyles.main }>
        <BurgerConstructor />
        <BurgerIngredients />
      </div>
    )
  }
}