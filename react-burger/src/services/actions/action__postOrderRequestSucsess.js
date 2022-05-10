import { POST_ORDER_REQUEST_SUCCESS } from "../../utils/constants/constants"

const postOrderRequestSucsess = (data) => ({
    type: POST_ORDER_REQUEST_SUCCESS,
    orderNumber: data,
});

export default postOrderRequestSucsess;