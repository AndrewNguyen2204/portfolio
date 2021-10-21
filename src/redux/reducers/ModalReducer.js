import {CLOSE_MODAL, OPEN_MODAL} from '../types/ModalType';

const initialState = {
    view: false,
    content: ''
}



const ModalReducer = (state = initialState, action) => {

    switch (action.type) {
        case OPEN_MODAL: {
            return { ...state, view: true, content: action.content};
        }
        case CLOSE_MODAL: {
            return { ...state, view: false };
        }

        default: return { ...state };
    }

}


export default ModalReducer;