import {ADD_FAVORITE,
        SET_LOADING, 
        SET_ERROR, 
        SET_TEAM, 
        SET_DETAIL, 
        SET_SEARCH, 
        SET_FILTERED_TEAMS} from '../action-type'

export function addFavorite(image, name) {
    return {
        type: ADD_FAVORITE,
        payload: {
            image, name
        }
    }
}

export function setTeam(payload) {
    return {
        type: SET_TEAM,
        payload
    }
}

export function getTeam() {
    return (dispatch) => {
        fetch('http://api.football-data.org/v2/competitions/2021/teams', {
            headers: {
                'X-Auth-Token': process.env.REACT_APP_API_TOKEN 
            }
        })
        .then((respone) => respone.json())
        .then((data) => {
            dispatch(setTeam(data.teams))
        })
        .catch(err => {
            dispatch(setError())
        })
        .finally(() => {
            dispatch(setLoading())
        })
    }
}

export function setDetail(payload) {
    return {
        type: SET_DETAIL,
        payload
    }
}

export function getDetail(id) {
    return (dispatch) => {
        fetch(`http://api.football-data.org/v2/teams/${id}`, {
            headers: {
                'X-Auth-Token': process.env.REACT_APP_API_TOKEN 
            }
        })
        .then((respone) => respone.json())
        .then((data) => {
            dispatch(setDetail(data))
        })
        .catch(err => {
            console.log(err)
            dispatch(setError())
        })
        .finally(() => {
            dispatch(setLoading())
        })
    }
}

export function setLoading() {
    return {
        type: SET_LOADING
    }
}

export function setError() {
    return {
        type: SET_ERROR
    }
}

export function setSearch(payload) {
    return {
        type: SET_SEARCH,
        payload
    }
}

export function setFilteredTeam(payload) {
    console.log(payload, "ini payload dari action")
    return {
        type: SET_FILTERED_TEAMS,
        payload
    }
}