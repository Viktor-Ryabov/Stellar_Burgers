import Styles from "./ConstructorIngridient.module.css";
import { useRef } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import deleteIngridientFromConstructor from "../../services/actions/action__deleteIngridientFromConstructor";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/constants/constants";

export const ConstructorIngridient = ({ id, index, moveCard, ingridient }) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.CONSTRUCTOR_INGRIDIENT,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveCard(dragIndex, hoverIndex);

            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CONSTRUCTOR_INGRIDIENT,
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const dragDropRef = drag(drop(ref));

    return (
        <div
            className={`${Styles.burgerConstructorItem} mb-4`}
            ref={dragDropRef}
            data-handler-id={handlerId}
        >
            <DragIcon />
            <ConstructorElement
                text={ingridient.name}
                price={ingridient.price}
                thumbnail={ingridient.image}
                handleClose={(onClick) => {
                    dispatch(deleteIngridientFromConstructor(ingridient));
                }}
            />
        </div>
    );
};
