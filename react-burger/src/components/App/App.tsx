import React from 'react';
import Styles from './App.module.css';
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection"
import "@ya.praktikum/react-developer-burger-ui-components";


function App() {
  return (
    <section className={Styles.app}>
      <Header />
      <MainSection />
    </section>
  );
}

export default App;
