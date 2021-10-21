import { CLOSE_MODAL, OPEN_MODAL, } from "../types/ModalType";


export const openModalAction = (content) => ({
    type: OPEN_MODAL,
    content
});


export const closeModalAction = () => ({
    type: CLOSE_MODAL
});