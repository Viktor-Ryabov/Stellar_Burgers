import { initialState } from "../../../utils/initialState";
import {
    POST_ORDER_REQUEST,
    POST_ORDER_REQUEST_SUCCESS,
    POST_ORDER_REQUEST_FAILED,
} from "../../constants/constants.js";

export default function postOrderReducer(
    state = initialState.orderIngridients,
    action
) {
    switch (action.type) {
        case POST_ORDER_REQUEST:
            return {
                ...state,
                ingridientsID: action.ingridientsID,
                requestStatusOk: false,
                requestError: false,
                orderNumber: 0,
            };
        case POST_ORDER_REQUEST_SUCCESS:
            return {
                ...state,
                requestStatusOk: true,
                requestError: false,
                orderNumber: action.orderNumber,
            };
        case POST_ORDER_REQUEST_FAILED:
            return {
                ...state,
                ingridients: [],
                requestStatusOk: false,
                requestError: true,
            };
        default:
            return state;
    }
}
