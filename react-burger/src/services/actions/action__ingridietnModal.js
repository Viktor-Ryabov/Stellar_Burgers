import { INGRIDIENTS_MODAL_ACTIVE, INGRIDIENTS_MODAL_DISABLED } from "../../utils/constants/constants__modal";

export const setIngridietnModalAcitveAction = (ingridient) => ({
    type: INGRIDIENTS_MODAL_ACTIVE,
    data: { ...ingridient },
});

export const setIngridietnModalDisabledAction = (ingridient) => ({
    type: INGRIDIENTS_MODAL_DISABLED,
    data: { ...ingridient },
});
