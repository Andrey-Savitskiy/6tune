import React from 'react';
import './order_button.css'

const OrderButton = (props) => {
    return (
        <button
            className={`order-button ${props.className}`}
        >
            Заказать выступление
        </button>
    );
};

export default OrderButton;