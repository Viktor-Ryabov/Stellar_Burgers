import {
    PasswordInput,
    Button,
    EmailInput,
    Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import resetPasswordStyles from "./resetPassword.module.css";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    return (
        <section className={resetPasswordStyles.section}>
            <h2 className={`${resetPasswordStyles.title} mb-6`}>Восстановление пароля</h2>
            <div className={`${resetPasswordStyles.input} mb-6`}>
                <PasswordInput placeholder={"Введите новый пароль"} />
            </div>
            <div className={`${resetPasswordStyles.input} mb-6`}>
                <Input placeholder={"Введите код из письма"} />
            </div>

            <Button>Войти</Button>

            <article className={`${resetPasswordStyles.question} mt-20 mb-4`}>
                <p className={resetPasswordStyles.text}>
                    Вспомнили пароль?
                    <Link to="/loging" className={`${resetPasswordStyles.link} ml-2 text_color_inactive`}>
                        Войти
                    </Link>
                </p>
            </article>
        </section>
    );
};

export default ResetPassword;
