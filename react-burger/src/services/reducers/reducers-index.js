import { combineReducers } from "redux";
import initialDataReducer from "./reducers/reducers-initialDataReducer.js";
import postOrderReducer from "./reducers/reducers-postOrderReducer.js";
import { burgerMenuReducer } from "./reducers/reducers-burgerMenuReducer.js";
import modalReducer from "./reducers/reducers-modalReducer.js";
import orderNumberReducer from "./reducers/reducers-orderNumberReducer.js";
import { constructorReducer } from "./reducers/reducers-constructorReducer.js";

export const rootReducer = combineReducers({
    initialData: initialDataReducer,
    orderIngridients: postOrderReducer,
    burgerMenu: burgerMenuReducer,
    modalState: modalReducer,
    orderNumber: orderNumberReducer,
    orderIngridients: constructorReducer,

});
