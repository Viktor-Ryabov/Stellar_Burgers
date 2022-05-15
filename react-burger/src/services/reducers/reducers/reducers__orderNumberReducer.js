import { initialState } from "../../../utils/initialState";
import { SET_ORDER_DATA } from "../../../utils/constants/constants__orderRequest";

export default function orderNumberReducer(
    state = initialState.orderNumber,
    action
) {
    switch (action.type) {
        case SET_ORDER_DATA:
            return {
                number: action.data,
            }
        default:
            return state;
    }
}
