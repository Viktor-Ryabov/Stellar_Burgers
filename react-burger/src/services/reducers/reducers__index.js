import { combineReducers } from "redux";
import initialDataReducer from "./reducers__initialData.js";
import postOrderReducer from "./reducers__orderData.js";

// export const rootReducer = reducer;
export const rootReducer = combineReducers(
    {
        initialData: initialDataReducer,
        orderIngridients: postOrderReducer
}
);
