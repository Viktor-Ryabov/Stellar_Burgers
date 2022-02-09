import React from 'react';
import Styles from '../Header/Header.module.css'
import { Logo } from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";
import { ProfileIcon } from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/profile-icon";
import { ListIcon } from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/list-icon";
import { BurgerIcon } from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/burger-icon";

import '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';


export default class Header extends React.Component {
  render() {
    return (
      <header className={ Styles.header }>

        <nav>
          <section className={Styles.contentWidth}>
            <ul className="m-20">
              
              <li className={ Styles.navigationButton} >
                <BurgerIcon type="primary"/>
                <p className={ Styles.navigationText}>Конструктор</p>
              </li>

              <li className="p-15" >
                <ListIcon type="primary"/>
                <p className={ Styles.navigationText }>Лента заказов</p>
              </li>

              <Logo type="primary"/>
            </ul>

            <button className={ Styles.navigationButton } >
                <ProfileIcon type="primary"/>
                <p className={ Styles.navigationText }>Личный кабинет</p>
              </button>
          </section>  
        </nav>

      </header>
    )
  }
};