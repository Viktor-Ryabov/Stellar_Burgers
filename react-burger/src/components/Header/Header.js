import React from "react";
import Styles from "../Header/Header.module.css";
import {
    Logo,
    ProfileIcon,
    ListIcon,
    BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const Header = () => {
    return (
        <header className={Styles.header}>
            <nav>
                <section className={`${Styles.contentWidth} pb-4 pt-4`}>
                    <ul className={`${Styles.buttonList}`}>
                        <li
                            className={`${Styles.navigationButton} pl-5 mr-2 pr-5`}
                        >
                            <BurgerIcon />
                            <p
                                className={`${Styles.navigationText} ml-2 text text_type_main-default`}
                            >
                                Конструктор
                            </p>
                        </li>
                        <li className={`${Styles.navigationButton} pl-5 pr-5`}>
                            <ListIcon className={`${Styles.navigationIcon}`} />
                            <p
                                className={`${Styles.navigationText} ml-2 text text_type_main-default`}
                            >
                                Лента заказов
                            </p>
                        </li>
                    </ul>
                    <div className={Styles.logo}>
                        <Logo />
                    </div>
                    <button
                        className={`${Styles.navigationButton} pl-5 pr-5 ${Styles.profile} text text_type_main-default`}
                    >
                        <ProfileIcon
                            className={`${Styles.navigationIcon} mr-2`}
                        />
                        <p
                            className={`${Styles.navigationText} ml-2 text text_type_main-default`}
                        >
                            Личный кабинет
                        </p>
                    </button>
                </section>
            </nav>
        </header>
    );
};

export default Header;
