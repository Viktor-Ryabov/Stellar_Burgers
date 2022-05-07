import { ADD_TO_CONSTRUCTOR } from "../../utils/constants/constants";
import { v4 as uuid } from "uuid";

const addToConstructor = (ingridient) => ({
    type: ADD_TO_CONSTRUCTOR,
    payload: {
        ...ingridient,
        id: uuid(),
    }
})

export default addToConstructor;