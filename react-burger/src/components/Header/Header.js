import React from 'react';
import Styles from '../Header/Header.module.css'
import { Logo } from "../Logo/logo"
import { BurgerIcon } from "../Icons/burger-icon"
import { ListIcon } from "../Icons/list-icon"
import { ProfileIcon } from "../Icons/profile-icon"



export default class Header extends React.Component {
  render() {
    return (
      <header className={ Styles.header }>

        <nav>
          <section className={Styles.contentWidth}>
            <ul className={ Styles.buttonList }>
              
              <li className={ Styles.navigationButton } >
                <BurgerIcon />
                <p className={ Styles.navigationText }>Конструктор</p>
              </li>

              <li className={ Styles.navigationButton } >
                <ListIcon />
                <p className={ Styles.navigationText }>Лента заказов</p>
              </li>

              <div className={ Styles.logo }>
                <Logo />
              </div> 
            </ul>

            <button className={ Styles.navigationButton } >
                <ProfileIcon />
                <p className={ Styles.navigationText }>Личный кабинет</p>
              </button>
          </section>  
        </nav>

      </header>
    )
  }
};