import { Link, NavLink } from "react-router-dom";
import Styles from "./not-found.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";

const NotFound404 = () => {
    console.log("NotFound404");
    return (
        <>
            <section className={`${Styles.appLoading} text_type_digits-medium`}>
                ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ (ERR404)
            </section>

            <NavLink
                to="/"
                className={`${Styles.appLoading} text_type_digits-medium`}
            >
                Перейти на главную страницу
            </NavLink>
        </>
    );
};

export default NotFound404;
