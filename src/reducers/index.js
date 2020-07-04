import {combineReducers} from 'redux';
import { addHome, deleteHomeById, findHomeById, findHomes} from './homes';
export default combineReducers({
    addHome, deleteHomeById, findHomeById, findHomes
});