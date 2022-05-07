import { ADD_TO_CONSTRUCTOR, DELETE_FROM_CONSTRUCTOR, RENDER_INGRIDIENTS } from "../../utils/constants/constants";
import { initialState } from "../../utils/initialState.js";

export const constructorReducer = (state = initialState.orderIngridients, action) => {
    switch (action.type) {
        case ADD_TO_CONSTRUCTOR:
            if (action.payload.type !== "bun") {
                return {
                    ...state,
                    notBuns: [...state.notBuns, action.payload],
                    orderSum: state.orderSum + action.payload.price,
                };        
            } else {
                return {
                    ...state,
                    buns: [ action.payload ],
                    orderSum: state.orderSum + action.payload.price * 2,
                };
            }
        case DELETE_FROM_CONSTRUCTOR:
            return {
                ...state,
                orderSum: state.orderSum - action.data.price,
                notBuns: [...state.notBuns].filter((item) => item.id !== action.data.id),
            };
        case RENDER_INGRIDIENTS:
            return {
                ...state,
            };
        default: return state;
    }
};
