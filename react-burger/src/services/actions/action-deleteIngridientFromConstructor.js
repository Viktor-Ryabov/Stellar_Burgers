import { DELETE_FROM_CONSTRUCTOR } from "../constants/constants";

const deleteIngridientFromConstructor = (item) => ({
    type: DELETE_FROM_CONSTRUCTOR,
    data: {...item},
});

export default deleteIngridientFromConstructor;