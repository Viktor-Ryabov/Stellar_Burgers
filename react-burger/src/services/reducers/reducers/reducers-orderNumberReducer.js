import { initialState } from "../../../utils/initialState";
import { SET_ORDER_DATA } from "../../constants/constants-orderRequest";

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
