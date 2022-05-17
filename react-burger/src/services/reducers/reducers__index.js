import { combineReducers } from "redux";
import initialDataReducer from "./reducers/reducers__initialDataReducer.js";
import postOrderReducer from "./reducers/reducers__postOrderReducer.js";
import { burgerMenuReducer } from "./reducers/reducers__burgerMenuReducer.js";
import modalReducer from "./reducers/reducers__modalReducer.js";
import orderNumberReducer from "./reducers/reducers__orderNumberReducer.js";
import { constructorReducer } from "./reducers/reducers__constructorReducer.js";

export const rootReducer = combineReducers({
    initialData: initialDataReducer,
    orderIngridients: postOrderReducer,
    burgerMenu: burgerMenuReducer,
    modalState: modalReducer,
    orderNumber: orderNumberReducer,
    orderIngridients: constructorReducer,

});
