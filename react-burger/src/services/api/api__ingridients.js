import {
    baseUrl,
    INITIAL_DATA_REQUEST,
    INITIAL_DATA_REQUEST_SUCCESS,
    INITIAL_DATA_REQUEST_FAILED,
} from "../../utils/constants.js";
import { checkResponse } from "./api__checkResponse.js";


export const getApiResponse = () => {
    return fetch(`${baseUrl}/ingredients`).then(checkResponse);
};

export const getIngridientsRequest = () => {
    return function (dispatch) {
        dispatch({
            type: INITIAL_DATA_REQUEST,
        });
        getApiResponse()
            .then((response) => {
                if (response && response.success) {
                    dispatch({
                        type: INITIAL_DATA_REQUEST_SUCCESS,
                        data: response.data,
                    });
                } else {
                    dispatch({
                        type: INITIAL_DATA_REQUEST_FAILED,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: INITIAL_DATA_REQUEST_FAILED,
                });
            });
    };
};
