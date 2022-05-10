import { initialState } from "../../utils/initialState";

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
