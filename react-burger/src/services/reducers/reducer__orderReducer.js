import { ORDER_MODAL_ACTIVE, ORDER_MODAL_DISABLED } from "../../utils/constants/constants__modal";
import { initialState } from "../../utils/initialState";

export const orderReducer = (state = initialState.modalState, action) => {
    switch (action.type){
        case ORDER_MODAL_ACTIVE:
            return {
                ...state,
                orderCondition: true,
            }
        case ORDER_MODAL_DISABLED:
            return {
                ...state,
                orderCondition: false,
            }
        default:
            return state;
    }
}