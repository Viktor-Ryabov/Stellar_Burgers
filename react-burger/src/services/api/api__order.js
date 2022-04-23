import {
    baseUrl,
    POST_ORDER_REQUEST,
    POST_ORDER_REQUEST_SUCCESS,
    POST_ORDER_REQUEST_FAILED,
} from "../../utils/constants.js";
import { checkResponse } from "./api__checkResponse.js";

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

export const getOrderRequest = (dispatch, data) => {
    dispatch({
        type: POST_ORDER_REQUEST,
        ingridientsID: data,
    })
    getOrderResponse(data)
        .then(res => res.json())
        .then((response) => {
            if (response.success === true) {
                dispatch({
                    type: POST_ORDER_REQUEST_SUCCESS,
                    orderNumber: response.order.number,
                });
            } else if (!response.success) {
                console.log(`ошибка в 'экшене': ${response}`)
                dispatch({
                    type: POST_ORDER_REQUEST_FAILED,
                });
            }
        })
        .catch((err) => {
            console.log(`ошибка в кэтче: ${err}`)
            dispatch({
                type: POST_ORDER_REQUEST_FAILED,
            });
        });
};
