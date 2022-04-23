import {
    baseUrl,
    INITIAL_DATA_REQUEST,
    INITIAL_DATA_REQUEST_SUCCESS,
    INITIAL_DATA_REQUEST_FAILED,
    SET_INITIAL_DATA,
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
                    
                    dispatch({
                        type: SET_INITIAL_DATA,
                        data: response.data,
                    });

                } else {
                    console.log(`ошибка в 'экшене': ${response}`)
                    dispatch({
                        type: INITIAL_DATA_REQUEST_FAILED,
                    });
                }
            })
            .catch((err) => {
                console.log(`ошибка в кэтче: ${err}`);
                dispatch({
                    type: INITIAL_DATA_REQUEST_FAILED,
                });
            });
    };
};
