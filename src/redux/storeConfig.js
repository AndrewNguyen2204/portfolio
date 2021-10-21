import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import MenuReducer from './reducers/MenuReducer';
import ModalReducer from './reducers/ModalReducer';


const rootReducer = combineReducers({
    MenuReducer,
    ModalReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));