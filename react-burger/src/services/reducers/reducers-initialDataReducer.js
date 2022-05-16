import { initialState } from "../../utils/initialState.js";
import {
    INITIAL_DATA_REQUEST,
    INITIAL_DATA_REQUEST_SUCCESS,
    INITIAL_DATA_REQUEST_FAILED,
} from "../../utils/constants/constants.js";

export default function initialDataReducer(
    state = initialState.initialIngridients,
    action
) {
    switch (action.type) {
        case INITIAL_DATA_REQUEST:
            return {
                ...state,
                ingridients: [],
                requestStatusOk: false,
                requestError: false,
            };

        case INITIAL_DATA_REQUEST_SUCCESS:
            return {
                ...state,
                ingridients: action.data,
                requestStatusOk: true,
                requestError: false,
            };
        case INITIAL_DATA_REQUEST_FAILED:
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
