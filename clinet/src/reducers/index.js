import {combineReducers} from 'redux';
import createEventReducer from './createEventReducer';

export default combineReducers({
    eventFormData: createEventReducer
});
