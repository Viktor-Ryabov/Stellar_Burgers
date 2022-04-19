import { initialState } from "../initialState";
import { combineReducers } from "redux";


const reducer = (state = initialState, action) => {
    switch (action.type){
        case "GET_INITIAL_DATA":
            return { ...state, initialIngridients: action.data};
            
        default: return state;
    }
}

export const rootReducer = reducer;
// export const rootReducer = combineReducers({  });