import {ADD_FAVORITE, 
        SET_LOADING, 
        SET_ERROR, 
        SET_TEAM, 
        SET_DETAIL, 
        SET_SEARCH, 
        SET_FILTERED_TEAMS} from '../action-type'

const dataState = {
    data: [],
    loading: true,
    error: null,
    search: '',
    filteredTeams: []
}

const detailState = {
    detail: null,
    loading: true,
    error: null
}

const favoriteState = {
    favorites: [],
    loading: true,
    error: null
}

function dataReducer(state = dataState, action) {
    if(action.type === SET_LOADING) {
        const newState = {
            ...state,
            loading: false
        }
        return newState
    }
    if(action.type === SET_ERROR) {
        const newState = {
            ...state,
            error: 'error fetch'
        }
        return newState
    }
    if(action.type === SET_TEAM) {
        const newState = {
            ...state,
            data: action.payload
        }
        return newState
    }
    if(action.type === SET_SEARCH) {
        const newState = {
            ...state,
            search: action.payload
        }
        return newState
    }
    if(action.type === SET_FILTERED_TEAMS) {
        const newState = {
            ...state,
            filteredTeams: action.payload
        }
        return newState
    }
    return state
}

function detailReducer(state = detailState, action) {
    if(action.type === SET_DETAIL) {
        const newState = {
            ...state,
            detail: action.payload
        }
        return newState
    }
    if(action.type === SET_LOADING) {
        const newState = {
            ...state,
            loading: false
        }
        return newState
    }
    if(action.type === SET_ERROR) {
        const newState = {
            ...state,
            error: 'error fetch'
        }
        return newState
    }
    return state
}

function favoriteReducer(state = favoriteState, action) {
    if(action.type === ADD_FAVORITE) {
        const newState = {
            ...state,
            favorites: state.favorites.concat(action.payload)
        }
        return newState
    }
    if(action.type === SET_LOADING) {
        const newState = {
            ...state,
            loading: false
        }
        return newState
    }
    if(action.type === SET_ERROR) {
        const newState = {
            ...state,
            error: 'error fetch'
        }
        return newState
    }
    return state
}

export {dataReducer, detailReducer, favoriteReducer}

// [...state.favorites, action.payload]
