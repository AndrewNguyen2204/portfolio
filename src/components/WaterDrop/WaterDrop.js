import React from 'react';
import './WaterDrop.css';

export default function WaterDrop(props) {


    const {

        size
    } = props;



    const checkSize = size ? `drop drop-${size}` : 'drop drop-medium';




    return (
        <div className='drops'>

            <div className={checkSize}></div>
            <div className={checkSize}></div>
            <div className={checkSize}></div>
            <div className={checkSize}></div>

        </div>
    )
}
