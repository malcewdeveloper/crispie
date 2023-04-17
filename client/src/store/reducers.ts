import { combineReducers } from 'redux';
import authReducer from '../modules/AppBar/store/reducers/authReducer';

const rootReducer = combineReducers({
    auth: authReducer
})

export default rootReducer;