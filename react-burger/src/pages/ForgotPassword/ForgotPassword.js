import {
    PasswordInput,
    Button,
    EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import forgotPasswordStyles from "./forgotPassword.module.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <section className={forgotPasswordStyles.section}>
            <h2 className={`${forgotPasswordStyles.title} mb-6`}>Восстановление пароля</h2>
            <div className={`${forgotPasswordStyles.input} mb-6`}>
                <EmailInput placeholder={"E-mail"} />
            </div>

            <Button>Войти</Button>

            <article className={`${forgotPasswordStyles.question} mt-20 mb-4`}>
                <p className={forgotPasswordStyles.text}>
                    Вспомнили пароль?
                    <Link to="/loging" className={`${forgotPasswordStyles.link} ml-2 text_color_inactive`}>
                        Войти
                    </Link>
                </p>
            </article>
        </section>
    );
};

export default ForgotPassword;
