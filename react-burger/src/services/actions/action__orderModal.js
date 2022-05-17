import {
    ORDER_MODAL_ACTIVE,
    ORDER_MODAL_DISABLED,
} from "../../utils/constants/constants__modal.js";

export const setOrderModalAcitve = (number) => ({
    type: ORDER_MODAL_ACTIVE,
    data: number,
});
export const setOrderModalDisabled = () => ({
    type: ORDER_MODAL_DISABLED,
});