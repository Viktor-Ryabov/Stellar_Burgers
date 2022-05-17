import { INGRIDIENTS_MODAL_ACTIVE, INGRIDIENTS_MODAL_DISABLED } from "../constants/constants-modal";

export const setIngridietnModalAcitveAction = (ingridient) => ({
    type: INGRIDIENTS_MODAL_ACTIVE,
    data: { ...ingridient },
});

export const setIngridietnModalDisabledAction = () => ({
    type: INGRIDIENTS_MODAL_DISABLED,
});
