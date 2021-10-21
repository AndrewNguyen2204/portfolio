import React from 'react'
import WaterDrop from '../../../../components/WaterDrop/WaterDrop';
import './Overlay.css';

export default function Overlay() {
    return (
        <div className="overlay-wrapper">
            <div className="overlay-object">
                <WaterDrop size="large" />
            </div>
            <div className="overlay-object">
                <WaterDrop />
            </div>
        </div>
    )
}
