import { ADD_TO_CONSTRUCTOR } from "../../utils/constants/constants";
import { initialState } from "../../utils/initialState.js";

export const addIngridientReducer = (state = initialState.orderIngridients, action) => {
    switch (action.type) {
        case ADD_TO_CONSTRUCTOR:
            if (action.payload.type !== "bun") {
                return {
                    ...state,
                    notBuns: [...state.notBuns, action.payload],
                    // orderSumm: state.orderSumm + 1,
                    orderSumm: state.orderSumm + action.payload.price,
                };        
            } else {
                return {
                    ...state,
                    buns: [ action.payload ],
                    orderSumm: state.orderSumm + action.payload.price,
                };
            }      
        default: return state;
    }
};
