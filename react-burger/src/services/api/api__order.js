import {
    baseUrl,
    POST_ORDER_REQUEST_FAILED,
} from "../../utils/constants/constants.js";
import { checkResponse } from "./api__checkResponse.js";
import postOrderRequestSucsess from "../actions/action__postOrderRequestSucsess.js";
import postOrderRequestFailed from "../actions/actions__postOrderRequestFailed.js";
import setOrderNumber from "../actions/actions__setOrderData.js";
import setOrderData from "../actions/actions__setOrderData.js";
import { setOrderModalAcitve } from "../actions/action__orderModal.js";

export const getOrderResponse = (data) => {
    return fetch(`${baseUrl}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
    })
    .catch(checkResponse);
};

export const getOrderRequest = (dispatch, orderIngridients) => {

    getOrderResponse(orderIngridients)
        .then(res => res.json())
        .then((response) => {
            if (response.success === true) {
                console.log(response.order.number)
                dispatch( postOrderRequestSucsess(response.order.number) )
                dispatch( setOrderData(response.order.number) )
                dispatch( setOrderModalAcitve(response.order.number) )
            } else if (!response.success) {
                console.log(`ошибка в 'экшене': ${response}`)
                dispatch( postOrderRequestFailed() )
                }
            })
        .catch((err) => {
            console.log(`ошибка в кэтче: ${err}`)
            dispatch( postOrderRequestFailed() )
        });
};
