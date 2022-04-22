import { useDispatch, useSelector } from "react-redux";
import {
    baseUrl,
    POST_ORDER_REQUEST,
    POST_ORDER_REQUEST_SUCCESS,
    POST_ORDER_REQUEST_FAILED,
} from "../../utils/constants.js";
import { checkResponse } from "./api__checkResponse.js";



export const getOrderResponse = (data) => {
    console.log(data);
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
    console.log(data);
    getOrderResponse(data)
        .then((response) => {
            if (response) {
                dispatch({
                    type: POST_ORDER_REQUEST_SUCCESS,
                });
            } else {
                dispatch({
                    type: POST_ORDER_REQUEST_FAILED,
                });
            }
        })
        .catch((err) => {
            dispatch({
                type: POST_ORDER_REQUEST_FAILED,
            });
        });
};
