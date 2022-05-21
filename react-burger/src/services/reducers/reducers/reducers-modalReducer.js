import {
    INGRIDIENTS_MODAL_ACTIVE,
    INGRIDIENTS_MODAL_DISABLED,
    ORDER_MODAL_ACTIVE,
    ORDER_MODAL_DISABLED,
} from "../../constants/constants-modal.js";
import { initialState } from "../../../utils/initialState.js";

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
                ...state,
                ingridientsCondition: false,
                orderCondition: false,
            };
        case ORDER_MODAL_ACTIVE:
            return {
                ...state,
                ingridientsCondition: false,
                orderCondition: true,
                modalData: [],
            };
        case ORDER_MODAL_DISABLED:
            return {
                ...state,
                ingridientsCondition: false,
                orderCondition: false,
            };
        default:
            return state;
    }
}
