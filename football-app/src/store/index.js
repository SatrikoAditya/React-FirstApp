import { createStore, applyMiddleware, combineReducers } from 'redux'
import { dataReducer, detailReducer, favoriteReducer } from './reducers/'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    dataReducer, detailReducer, favoriteReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store