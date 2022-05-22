import {
    PasswordInput,
    Button,
    Icon,
    EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import logingStyles from "./loging.module.css";
import { NavLink, Link } from "react-router-dom";

const Loging = () => {
    return (
        <section className={logingStyles.section}>
            <h2 className={`${logingStyles.title} mb-6`}>Вход</h2>
            <ul className={`${logingStyles.inputDataFields}`}>
                <li className={`${logingStyles.input} mb-6`}>
                    <EmailInput placeholder={"E-mail"} />
                </li>
                <li className={`${logingStyles.input} mb-6`}>
                    <PasswordInput placeholder={"Пароль"} icon={"Icon"} />
                </li>
            </ul>

            <Button>Войти</Button>

            <article className={`${logingStyles.question} mt-20 mb-4`}>
                <p className={logingStyles.text}>
                    Вы новый пользователь?
                    <Link className={`${logingStyles.link} ml-2`}>
                        Зарегистрироваться
                    </Link>
                </p>
            </article>
            <article className={`${logingStyles.question}`}>
                <p className={logingStyles.text}>
                    Забыли пароль?
                    <Link className={`${logingStyles.link} ml-2`}>
                        Восстановить пароль
                    </Link>
                </p>
            </article>
        </section>
    );
};

export default Loging;
