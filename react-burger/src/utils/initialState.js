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
        ingridientsSum: 0,
        bunsSum: 0,
        
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
    orderNumber: {
        number: 0,
    },
    currentIngridient: {},
    currentOrder: [],

}