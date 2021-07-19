import React from 'react';
import './Button.css';


const STYLES = ['btn--glass', 'btn--neumorphic'];

const SIZES = ['medium', 'large'];


export default function Button(props) {



    const {
        children,
        type,
        onClick,
        style,
        size

    } = props;

    const checkType = STYLES.includes(style) ? style : STYLES[0];

    const checkSize = SIZES.includes(size) && size;


    return (
        <button className={`btn ${checkSize} ${checkType}`} type={type} onClick={onClick}>
            {children}
        </button>
    )
}
