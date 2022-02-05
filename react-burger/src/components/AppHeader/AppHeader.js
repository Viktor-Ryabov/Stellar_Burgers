import React from 'react';
import Styles from '../AppHeader/AppHeader.module.css'
import { Logo } from "../Logo/logo"
import { BurgerIcon } from "../Icons/burger-icon"
import { ListIcon } from "../Icons/list-icon"
import { ProfileIcon } from "../Icons/profile-icon"



export default class AppHeader extends React.Component {
  render() {
    return (
      <div className={ Styles.header }>

        <ul className={ Styles.buttonList }>
          <li className={ Styles.navigationButton } >
            <BurgerIcon />
            <p className={ Styles.navigationText }>Конструктор</p>
          </li>

          <li className={ Styles.navigationButton } >
            <ListIcon />
            <p className={ Styles.navigationText }>Лента заказов</p>
          </li>
        </ul>
        
        <Logo className={ Styles.logo }/>

        <button className={ Styles.navigationButton } >
            <ProfileIcon />
            <p className={ Styles.navigationText }>Личный кабинет</p>
          </button>

      </div>
    )
  }
};