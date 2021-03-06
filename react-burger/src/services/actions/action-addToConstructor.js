import { ADD_TO_CONSTRUCTOR } from "../constants/constants";
import { v4 as uuid } from "uuid";

const addToConstructor = (ingridient) => ({
    type: ADD_TO_CONSTRUCTOR,
    payload: {
        ...ingridient,
        id: uuid(),
        count: 1,
    }
})

export default addToConstructor;