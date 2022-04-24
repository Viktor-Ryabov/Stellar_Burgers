import { initialState } from "../../utils/initialState.js";
import { SET_BUNS, SET_SAUCES, SET_FILLINGS, SET_INITIAL_DATA_TO_INGRIDIENTS } from "../../utils/constants/constants.js";

export const burgerMenuReducer = (state = initialState.burgerMenu, action) => {
    switch (action.type) {
        case SET_INITIAL_DATA_TO_INGRIDIENTS:
            return {
                ...state,
                bunsMenu: false,
                saucesMenu: false,
                fillingsMenu: false,
                ingridientsMenu: action.data,
                sectionName: "",
        }
        case SET_BUNS:
            return {
                ...state,
                bunsMenu: true,
                saucesMenu: false,
                fillingsMenu: false,
                ingridientsMenu: action.data,
                sectionName: "Булки",
            };
        case SET_SAUCES:
            return {
                ...state,
                bunsMenu: false,
                saucesMenu: true,
                fillingsMenu: false,
                ingridientsMenu: action.data,
                sectionName: "Соусы",
            };
        case SET_FILLINGS:
            return {
                ...state,
                bunsMenu: false,
                saucesMenu: false,
                fillingsMenu: true,
                ingridientsMenu: action.data,
                sectionName: "Начинки",
            };
        default:
            return state;
    }
};
