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
            className="modal z-10 p-5 sm:p-10 w-full max-h-max flex justify-center items-center"
            onClick={handleClick}
        >
            <div className="modal-content glass p-5 sm:p-10  rounded-[30px] duration-500 min-w-[300px] max-w-[900px]">

                {content}

                <div className="modal-button absolute top-[-25px] right-[-25px] rounded-full backdrop-blur">
                    <Button onClick={handleClick} circle>X</Button>
                </div>

            </div>


        </div>
    )
}
