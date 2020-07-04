import {
    ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE,
    DELETE_ITEM_REQUEST, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE,
    FIND_ITEM_REQUEST, FIND_ITEM_SUCCESS, FIND_ITEM_FAILURE,
    FIND_ITEMS_REQUEST, FIND_ITEMS_SUCCESS, FIND_ITEMS_FAILURE
} from './constants';
import { commonAxios } from '../utils/apiUtil'

function sleep(delay, value) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay, value);
    });
}

export const add = ({id, name} = {})  =>

    (dispatch) => {
        dispatch({
            type:({ ADD_ITEM_REQUEST })
        });

        const request = id ?
        commonAxios.put(`items/${id}`,{id, name}) :
        commonAxios.post(`items`, {name});
        request
            .then(data => sleep(1000, data))
            .then(data => {
                dispatch({
                    type: ADD_ITEM_SUCCESS,
                    data: data
                    
                });
            })
            .catch(error => {
                dispatch({
                    type: ADD_ITEM_FAILURE,
                    error: error
                });
            });
    };

export const deleteById = (id) =>
    (dispatch) => {
        dispatch({
            type: DELETE_ITEM_REQUEST
        });

        commonAxios.delete(`items/${id}`)
            .then(data => sleep(1000, data))
            .then(data => {
                dispatch({
                    type: DELETE_ITEM_SUCCESS,
                    data: data
                });
            })
            .catch(error => {
                dispatch({
                    type: DELETE_ITEM_FAILURE,
                    error: error
                });
            });
    };


export const findById = (id) =>
    (dispatch) => {
        dispatch({
            type: FIND_ITEM_REQUEST
        });

        commonAxios.get(`items/${id}`)
            .then(data => sleep(1000, data))
            .then(data => {
                dispatch({
                    type: FIND_ITEM_SUCCESS,
                    data: data
                });
            })
            .catch(error => {
                dispatch({
                    type: FIND_ITEM_FAILURE,
                    error: error
                });
            });
    };

export const findAll = ({ search, sort = 'asc', page = 0, size = 10 } = {}) =>
(dispatch) => {
        dispatch({
            type: FIND_ITEMS_REQUEST
        });
        commonAxios.get('items', {
            params: {
                ...search,sort,page,size
            }
        })
        .then(data => sleep(1000, data))
            .then(data => {
                dispatch({
                    type: FIND_ITEMS_SUCCESS,
                    data: data
                });
            })
            .catch(error => {
                dispatch({
                    type: FIND_ITEMS_FAILURE,
                    error: error
                });
            });
    };