import React from "react";
import Styles from "./App.module.css";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import "@ya.praktikum/react-developer-burger-ui-components";
import { getApiResponse } from "../API/Api.js";
import { createModuleResolutionCache } from "typescript";

export default class App extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        getApiResponse().then((response) => {
            this.setState({
                data: response.data,
            });
        });
    }

    render() {
        return (
            <section className={Styles.app}>
                <Header />
                <MainSection initialData={this.state} />
            </section>
        );
    }
}
