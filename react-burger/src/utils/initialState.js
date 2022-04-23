export const initialState = {
    initialIngridients: {
        ingridients: [],
        requestStatusOk: false,
        requestError: false,
    },
    orderIngridients: {
        ingridientsID: [],
        requestStatusOk: false,
        requestError: false,
        orderNumber: 0,
    },
    burgerMenu: {
        bunsMenu: false,
        saucesMenu: false,
        fillingsMenu: false,
        ingridientsMenu: [],
        sectionName: "",
    },
    currentIngridient: {},
    currentOrder: [],

}