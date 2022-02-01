import React from 'react';
import headerStyles from '../AppHeader/AppHeader.module.css'
import { Logo } from "../Logo/logo"
import { BurgerIcon } from "../Icons/burger-icon"
import { ListIcon } from "../Icons/list-icon"
import { ProfileIcon } from "../Icons/profile-icon"



export default class AppHeader extends React.Component {
  render() {
    return (
      <div className={headerStyles.header}>

        <ul className={headerStyles.buttonList}>
          <li className={headerStyles.navigationButton} >
            <BurgerIcon />
            <p className={headerStyles.navigationText}>Конструктор</p>
          </li>

          <li className={ headerStyles.navigationButton } >
            <ListIcon />
            <p className={ headerStyles.navigationText }>Лента заказов</p>
          </li>
        </ul>
        
        <Logo className={ headerStyles.logo }/>

        <button className={ headerStyles.navigationButton } >
            <ProfileIcon />
            <p className={ headerStyles.navigationText }>Личный кабинет</p>
          </button>

      </div>
    )
  }
};