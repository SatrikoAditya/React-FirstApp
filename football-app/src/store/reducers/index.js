const initialState = {
    name: 'satriko',
    favorites: []
}

function reducer(state = initialState, action) {
    if(action.type === 'ADD_FAVORITES') {
        const newState = {
            ...state,
            favorites: state.favorites.concat(action.payload)
        }
        return newState
    }
    return state
}

export default reducer