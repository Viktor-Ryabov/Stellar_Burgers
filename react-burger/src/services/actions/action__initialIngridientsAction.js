import { 
    INITIAL_DATA_REQUEST,
    INITIAL_DATA_REQUEST_SUCCESS,
    SET_INITIAL_DATA_TO_INGRIDIENTS,
    INITIAL_DATA_REQUEST_FAILED,
 } from "../../utils/constants/constants";

const initialDataRequest = () => ({
    type: INITIAL_DATA_REQUEST,
});
const initialDataRequestSuccess = (responseData) => ({
    type: INITIAL_DATA_REQUEST_SUCCESS,
    data: responseData,
});
const setInitialDataIngridients = (responseData) => ({
    type: SET_INITIAL_DATA_TO_INGRIDIENTS,
    data: responseData,
});
const initialDataRequestFailed = () => ({
    type: INITIAL_DATA_REQUEST_FAILED,
});

export {
    initialDataRequest,
    initialDataRequestSuccess,
    setInitialDataIngridients,
    initialDataRequestFailed
}

