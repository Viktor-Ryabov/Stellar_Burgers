import { Link, NavLink } from "react-router-dom";
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
                        <li>
                            <Link
                                className={`${Styles.navigationButton} pl-5 mr-2 pr-5`}
                                to="/"
                            >
                                <BurgerIcon />
                                <p
                                    className={`${Styles.navigationText} ml-2 text text_type_main-default`}
                                >
                                    Конструктор
                                </p>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/"
                                className={`${Styles.navigationButton} pl-5 pr-5`}
                            >
                                <ListIcon
                                    className={`${Styles.navigationIcon}`}
                                />
                                <p
                                    className={`${Styles.navigationText} ml-2 text text_type_main-default`}
                                >
                                    Лента заказов
                                </p>
                            </Link>
                        </li>
                    </ul>

                    <div className={Styles.logo}>
                        <Logo />
                    </div>

                    <li className={`${Styles.navigationButton} pl-5 pr-5 ${Styles.profile}`}>
                        <NavLink
                            to="/loging"
                            className={`${Styles.navigationButton} pl-5 pr-5 ${Styles.profile} text text_type_main-default`}
                            activeClassName={`${Styles.navigationButton} pl-5 pr-5 ${Styles.profile} text text_type_main-default ${Styles.navigationButtonActive}`}
                        >
                            <ProfileIcon
                                className={`${Styles.navigationIcon} mr-2`}
                            />
                            <p
                                className={`${Styles.navigationText} ml-2 text text_type_main-default`}
                            >
                                Личный кабинет
                            </p>
                        </NavLink>
                    </li>
                </section>
            </nav>
        </header>
    );
};

export default Header;
