import React from 'react';
import Styles from '../Header/Header.module.css'
import { Logo, ProfileIcon, ListIcon, BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default class Header extends React.Component {
  render() {
    return (
      <header className={ Styles.header } >

        <nav>
          <section className={ `${Styles.contentWidth} pb-4 pt-4` }>
            <ul className={ `${Styles.buttonList}` }>
              
              <li className={ `${Styles.navigationButton} pl-5 mr-2 pr-5` } >
                <BurgerIcon />
                <p className={`${Styles.navigationText} ml-2`}>Конструктор</p>
              </li>

              <li className={ `${Styles.navigationButton} pl-5 pr-5` } >
                <ListIcon className={ `${Styles.navigationIcon}` }/>
                <p className={ `${Styles.navigationText} ml-2` }>Лента заказов</p>
              </li>
              <div className={ Styles.logo} >
                <Logo />
              </div>
              
            </ul>

            <button className={ `${Styles.navigationButton} pl-5 pr-5` }>
                <ProfileIcon className={ `${Styles.navigationIcon}` }/>
                <p className={ `${Styles.navigationText}` }>Личный кабинет</p>
              </button>
          </section>  
        </nav>

      </header>
    )
  }
};