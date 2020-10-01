import React from 'react'
import { useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { setSearch } from '../store/actions/'

function Navbar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const search = useSelector(state => state.search)

    function handleHome(event) {
        event.preventDefault()
        history.push('/')
    }
    function handleFavorites(event) {
        event.preventDefault()
        history.push(`/favorites`)
    }

    function handleonChange(event) {
        dispatch(setSearch(event.target.value))
    }

    return (
        <nav className="navbar navbar-light bg-light mb-4 sticky-top">
            <a onClick={handleHome} className="navbar-brand" type="button">Premier League Teams </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a onClick={handleFavorites} className="nav-link" type="button">Favorites</a>
                </li>
            </ul>
            <form className="form-inline">
                <input 
                    className="form-control mr-sm-2" 
                    type="text" 
                    placeholder="Search..." 
                    aria-label="search" 
                    value={search}
                    onChange={handleonChange}></input>
            </form>
        </nav> 
    )
}

export default Navbar
