import {
    baseUrl,
    INITIAL_DATA_REQUEST,
    INITIAL_DATA_REQUEST_SUCCESS,
    INITIAL_DATA_REQUEST_FAILED,
    SET_INITIAL_DATA_TO_INGRIDIENTS,
} from "../../utils/constants/constants.js";
import { initialDataRequest,
    initialDataRequestSuccess,
    setInitialDataIngridients,
    initialDataRequestFailed } from "../actions/action-initialIngridientsAction.js";
import { checkResponse } from "./api-checkResponse.js";


export const getApiResponse = () => {
    return fetch(`${baseUrl}/ingredients`).then(checkResponse);
};

export const getIngridientsRequest = () => {
    return function (dispatch) {
        dispatch(initialDataRequest());
        getApiResponse()
            .then((response) => {
                if (response && response.success) {
                    dispatch(initialDataRequestSuccess(response.data));
                    dispatch(setInitialDataIngridients(response.data));

                } else {
                    console.log(`ошибка в 'экшене': ${response}`)
                    dispatch(initialDataRequestFailed());
                }
            })
            .catch((err) => {
                console.log(`ошибка в кэтче: ${err}`);
                dispatch(initialDataRequestFailed());
            });
    };
};
