import { SET_ORDER_DATA } from "../../utils/constants/constants-orderRequest"

const setOrderData = (orderNumber) => ({
    type: SET_ORDER_DATA,
    data: orderNumber,
});

export default setOrderData;