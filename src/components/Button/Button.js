import React from 'react';
import './Button.css';


const STYLES = ['btn--glass', 'btn--neu'];

const SIZES = ['medium', 'large'];


export default function Button(props) {



    const {
        children,
        type,
        onClick,
        style,
        size,
        circle,
        className
    } = props;

    const checkType = STYLES.includes(style) ? style : STYLES[0];

    const checkSize = SIZES.includes(size) ? size : SIZES[0];

    const checkCircle = circle ? 'btn--circle' : '';

    return (
        <button className={`btn ${checkSize} ${checkType} ${checkCircle} ${className}`} type={type} onClick={onClick}>
            {children}
        </button>
    )
}
