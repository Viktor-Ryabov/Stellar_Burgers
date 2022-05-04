import {
    INGRIDIENTS_MODAL_ACTIVE,
    INGRIDIENTS_MODAL_DISABLED,
    ORDER_MODAL_ACTIVE,
    ORDER_MODAL_DISABLED,
} from "../../utils/constants/constants__modal.js";
import { initialState } from "../../utils/initialState.js";

export default function modalReducer(state = initialState.modalState, action) {
    switch (action.type) {
        case INGRIDIENTS_MODAL_ACTIVE:
            return {
                ...state,
                ingridientsCondition: true,
                orderCondition: false,
                modalData: action.data,
            };
        case INGRIDIENTS_MODAL_DISABLED:
            return {
                ingridientsCondition: false,
                orderCondition: false,
                modalData: [],
            };
        case ORDER_MODAL_ACTIVE:
            return {
                ...state,
                ingridientsCondition: false,
                orderCondition: true,
                modalData: action.data,
            };
        case ORDER_MODAL_DISABLED:
            return {
                ...state,
                ingridientsCondition: false,
                orderCondition: false,
                modalData: [],
            };
        default:
            return state;
    }
}