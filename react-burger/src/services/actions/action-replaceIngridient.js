export const REPLACE = "REPLACE";

const replaceIngridient = (dragIndex, hoverIndex) => ({
    type: REPLACE,
    dragIndex: dragIndex,
    hoverIndex: hoverIndex,
});

export default replaceIngridient;
