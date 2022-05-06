import { ADD_TO_CONSTRUCTOR } from "../../utils/constants/constants";
import { initialState } from "../../utils/initialState.js";

export const addIngridientReducer = (state = initialState.orderIngridients, action) => {
    switch (action.type) {
        case ADD_TO_CONSTRUCTOR:
            return {
                ...state,
                ingridients: action.ingridientDataAdded,
        };        
        default: return state;
    }
};
