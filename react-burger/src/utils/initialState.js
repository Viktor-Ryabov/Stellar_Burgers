export const initialState = {
    initialIngridients: {
        ingridients: [],
        requestStatusOk: false,
        requestError: false,
    },
    orderIngridients: {
        buns: [],
        notBuns: [],
        ingridientsID: [],
        requestStatusOk: false,
        requestError: false,
        orderSumm: 0,
        orderNumber: 0,
    },
    burgerMenu: {
        bunsMenu: false,
        saucesMenu: false,
        fillingsMenu: false,
        ingridientsMenu: [],
        sectionName: "",
    },
    modalState: {
        ingridientsCondition: false,
        orderCondition: false,
        modalData: [],
    },
    currentIngridient: {},
    currentOrder: [],

}