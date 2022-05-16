import {
    ADD_TO_CONSTRUCTOR,
    DELETE_FROM_CONSTRUCTOR,
    RENDER_INGRIDIENTS,
} from "../../../utils/constants/constants";
import { initialState } from "../../../utils/initialState.js";
import { REPLACE } from "../../actions/action-replaceIngridient.js";

export const constructorReducer = (
    state = initialState.orderIngridients,
    action
) => {
    switch (action.type) {
        case ADD_TO_CONSTRUCTOR:
            if (action.payload.type !== "bun") {
                return {
                    ...state,
                    notBuns: [...state.notBuns, action.payload],
                    ingridientsSum: state.ingridientsSum + action.payload.price,
                };
            } else {
                return {
                    ...state,
                    buns: [action.payload],
                    bunsSum: action.payload.price * 2,
                };
            }

        case DELETE_FROM_CONSTRUCTOR:
            return {
                ...state,
                ingridientsSum: state.ingridientsSum - action.data.price,
                notBuns: [...state.notBuns].filter(
                    (item) => item.id !== action.data.id
                ),
            };

        case RENDER_INGRIDIENTS:
            return {
                ...state,
            };
        case REPLACE:
            const array = [...state.notBuns];
            array.splice(action.hoverIndex, 0, ...array.splice(action.dragIndex, 1))
            return {
                ...state,
                notBuns: array
            };
        default:
            return state;
    }
};