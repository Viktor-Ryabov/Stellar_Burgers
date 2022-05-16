import { DELETE_FROM_CONSTRUCTOR } from "../../utils/constants/constants";

const deleteIngridientFromConstructor = (item) => ({
    type: DELETE_FROM_CONSTRUCTOR,
    data: {...item},
});

export default deleteIngridientFromConstructor;