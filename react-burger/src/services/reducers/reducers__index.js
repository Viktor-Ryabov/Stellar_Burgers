import { combineReducers } from "redux";
import initialDataReducer from "./reducers__initialData.js";
import postOrderReducer from "./reducers__orderData.js";
import { burgerMenuReducer } from "./reducers__burgerMenu.js";
import modalReducer from "./reducers__modal.js";
import { constructorReducer } from "./reducers__constructor.js";
import orderNumberReducer from "./reducers__orderData.js"

export const rootReducer = combineReducers({
    initialData: initialDataReducer,
    orderIngridients: postOrderReducer,
    burgerMenu: burgerMenuReducer,
    modalState: modalReducer,
    orderNumber: orderNumberReducer,
    orderIngridients: constructorReducer,

});
