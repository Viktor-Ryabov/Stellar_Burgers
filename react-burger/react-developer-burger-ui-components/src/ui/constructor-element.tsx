import React from 'react';
import clsx from 'clsx';
import { CurrencyIcon, DeleteIcon, LockIcon } from './icons';
import './constructor-element.css';

export const ConstructorElement: React.FC<{
    type?: 'top' | 'bottom';
    isLocked?: boolean;
    handleClose?: () => void;
    text: string;
    thumbnail: string;
    price: number;
}> = ({ type, text, thumbnail, price, isLocked, handleClose }) => {
    const className = clsx('constructor-element', {
        [`constructor-element_pos_${type}`]: type,
    });

    const action = isLocked ? (
        <LockIcon type="secondary" />
    ) : (
        <DeleteIcon type="primary" onClick={handleClose} />
    );

    return (
        <div className={className}>
            <span className="constructor-element__row">
                <img className="constructor-element__image" src={thumbnail} alt={text} />
                <span className="constructor-element__text">{text}</span>
                <span className="constructor-element__price">
                    {price}
                    <CurrencyIcon type="primary" />
                </span>
                <span className="constructor-element__action pr-2">{action}</span>
            </span>
        </div>
    );
};
