import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../components/Button/Button';
import { closeModalAction } from '../../../../redux/actions/ModalAction';
import './Modal.css';

export default function Modal() {

    const { content} = useSelector(state => state.ModalReducer);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(closeModalAction());
    }


    return (
        <div
            className="modal"
            onClick={handleClick}
        >
            <div className="modal-content glass fade-in">

                {content}

                <div className="modal-button">
                    <Button onClick={handleClick} circle><FontAwesomeIcon icon="times" /></Button>
                </div>

            </div>


        </div>
    )
}
