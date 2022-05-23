import { Link, NavLink } from "react-router-dom";
import notFoundStyles from "./not-found.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";

const NotFound404 = () => {
    console.log("NotFound404");
    return (
        <section className={notFoundStyles.section}>
            <p
                className={`${notFoundStyles.title} text text_type_main-medium mb-4`}
            >
                Ой-ой! / ERR404
            </p>
            <h2
                className={`${notFoundStyles.title} text text_type_main-large mb-4`}
            >
                ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ...
            </h2>

            <NavLink
                to="/"
                className={`${notFoundStyles.link} text text_type_main-default text_color_inactive`}
            >
                Перейти на главную страницу
            </NavLink>
        </section>
    );
};

export default NotFound404;
