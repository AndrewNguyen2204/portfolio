import { CLOSE_MENU, OPEN_MENU, TOGGLE_MENU } from "../types/MenuType";


export const openMenuAction = () => ({
    type: OPEN_MENU
});


export const closeMenuAction = () => ({
    type: CLOSE_MENU
});

export const toggleMenuAction = () => ({
    type: TOGGLE_MENU
});