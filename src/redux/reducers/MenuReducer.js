import { CLOSE_MENU, OPEN_MENU, TOGGLE_MENU } from "../types/MenuType";

const initialState = {
    open: false,
}



const MenuReducer = (state = initialState, action) => {

    switch (action.type) {
        case OPEN_MENU: {
            return { ...state, open: true };
        }
        case CLOSE_MENU: {
            return { ...state, open: false };
        }

        case TOGGLE_MENU: {
            return { ...state, open: !state.open };
        }

        default: return { ...state };
    }

}


export default MenuReducer;