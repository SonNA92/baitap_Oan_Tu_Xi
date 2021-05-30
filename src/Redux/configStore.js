import {combineReducers, createStore} from 'redux';
import {BTOanTuXiReducer} from './BTOanTuXiReducer';



const rootReducer = combineReducers({
    BTOanTuXiReducer
});

export const store = createStore(rootReducer);