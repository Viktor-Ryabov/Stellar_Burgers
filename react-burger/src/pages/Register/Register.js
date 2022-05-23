import registerStyles from "./register.module.css";
import {
    PasswordInput,
    Button,
    EmailInput,
    Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, Link } from "react-router-dom";

const Register = () => {
    return (
        <section className={registerStyles.section}>
            <h2 className={`${registerStyles.title} mb-6`}>Регистрация</h2>
            <ul className={`${registerStyles.inputDataFields}`}>
                <li className={`${registerStyles.input} mb-6`}>
                    <Input placeholder={"Имя"} />
                </li>
                <li className={`${registerStyles.input} mb-6`}>
                    <EmailInput placeholder={"E-mail"} />
                </li>
                <li className={`${registerStyles.input} mb-6`}>
                    <PasswordInput placeholder={"Пароль"} icon={"Icon"} />
                </li>
            </ul>

            <Button>Зарегистрироваться</Button>

            <article className={`${registerStyles.question} mt-20 mb-4`}>
                <p className={registerStyles.text}>
                    Уже зарегистрировались?
                    <Link
                        to="/loging"
                        className={`${registerStyles.link} ml-2 text_color_inactive`}
                    >
                        Войти
                    </Link>
                </p>
            </article>
        </section>
    );
};

export default Register;
