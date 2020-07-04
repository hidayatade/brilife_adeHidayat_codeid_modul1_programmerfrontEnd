import {
    ADD_HOME_REQUEST, ADD_HOME_SUCCESS, ADD_HOME_FAILURE,
    DELETE_HOME_REQUEST, DELETE_HOME_SUCCESS, DELETE_HOME_FAILURE,
    FIND_HOME_REQUEST, FIND_HOME_SUCCESS, FIND_HOME_FAILURE,
    FIND_HOMES_REQUEST, FIND_HOMES_SUCCESS, FIND_HOMES_FAILURE
} from '../actions/constants'

const defaultState = {data: null, loading: false, error: null}


export function addHome(state = defaultState, action){
    switch (action.type) {
        case ADD_HOME_REQUEST:
            return{
                ...state,
                loading: true,
                error:null
            };
            case ADD_HOME_SUCCESS:
            return{
                data: action.data,
                loading: false,
                error:null
            };
            case ADD_HOME_FAILURE:
            return{
                ...state,
                loading: false,
                error:action.error
            };
            default:
                return state;
        }
    }

export function deleteHomeById(state = defaultState, action){
    switch (action.type) {
        case DELETE_HOME_REQUEST:
            return{
                ...state,
                loading: true,
                error:null
            };
            case DELETE_HOME_SUCCESS:
            return{
                data: action.data,
                loading: false,
                error:null
            };
            case DELETE_HOME_FAILURE:
            return{
                ...state,
                loading: false,
                error:action.error
            };
            default:
                return state;
        }
    }

export function findHomeById(state = defaultState, action){
switch (action.type) {
    case FIND_HOME_REQUEST:
        return{
            ...state,
            loading: true,
            error:null
        };
        case FIND_HOME_SUCCESS:
        return{
            data: action.data,
            loading: false,
            error: null
        };
        case FIND_HOME_FAILURE:
        return{
            ...state,
            loading: false,
            error:action.error
        };
        default:
            return state;
    }
}

export function findHomes(state = defaultState, action){
    switch (action.type) {
        case FIND_HOMES_REQUEST:
            return{
                ...state,
                loading: true,
                error:null
            };
            case FIND_HOMES_SUCCESS:
            return{
                data: action.data,
                loading: false,
                error:null
            };
            case FIND_HOMES_FAILURE:
            return{
                ...state,
                loading: false,
                error:action.error
            };
            default:
                return state;
        }
    }