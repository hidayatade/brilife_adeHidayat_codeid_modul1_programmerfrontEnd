import {
    ADD_HOME_REQUEST, ADD_HOME_SUCCESS, ADD_HOME_FAILURE,
    DELETE_HOME_REQUEST, DELETE_HOME_SUCCESS, DELETE_HOME_FAILURE,
    FIND_HOME_REQUEST, FIND_HOME_SUCCESS, FIND_HOME_FAILURE,
    FIND_HOMES_REQUEST, FIND_HOMES_SUCCESS, FIND_HOMES_FAILURE
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
            type:({ ADD_HOME_REQUEST })
        });

        const request = id ?
        commonAxios.put(`items/${id}`,{id, name}) :
        commonAxios.post(`items`, {name});
        request
            .then(data => sleep(2000, data))
            .then(data => {
                dispatch({
                    type: ADD_HOME_SUCCESS,
                    data: data
                    
                });
            })
            .catch(error => {
                dispatch({
                    type: ADD_HOME_FAILURE,
                    error: error
                });
            });
    };

export const deleteById = (id) =>
    (dispatch) => {
        dispatch({
            type: DELETE_HOME_REQUEST
        });

        commonAxios.delete(`items/${id}`)
            .then(data => sleep(3000, data))
            .then(data => {
                dispatch({
                    type: DELETE_HOME_SUCCESS,
                    data: data
                });
            })
            .catch(error => {
                dispatch({
                    type: DELETE_HOME_FAILURE,
                    error: error
                });
            });
    };


export const findById = (id) =>
    (dispatch) => {
        dispatch({
            type: FIND_HOME_REQUEST
        });

        commonAxios.get(`items/${id}`)
            .then(data => sleep(3000, data))
            .then(data => {
                dispatch({
                    type: FIND_HOME_SUCCESS,
                    data: data
                });
            })
            .catch(error => {
                dispatch({
                    type: FIND_HOME_FAILURE,
                    error: error
                });
            });
    };

export const findAll = ({ search, sort = 'asc', page = 0, size = 10 } = {}) =>
(dispatch) => {
        dispatch({
            type: FIND_HOMES_REQUEST
        });
        commonAxios.get('items', {
            params: {
                ...search,sort,page,size
            }
        })
        .then(data => sleep(3000, data))
            .then(data => {
                dispatch({
                    type: FIND_HOMES_SUCCESS,
                    data: data
                });
            })
            .catch(error => {
                dispatch({
                    type: FIND_HOMES_FAILURE,
                    error: error
                });
            });
    };