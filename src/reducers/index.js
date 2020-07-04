import {combineReducers} from 'redux';
import { addItem, deleteItemById, findItemById, findItems} from './items';
import { addHome, deleteHomeById, findHomeById, findHomes} from './homes';
export default combineReducers({
    findItemById, findItems, deleteItemById, addItem, 
    addHome, deleteHomeById, findHomeById, findHomes
});