import React from 'react'
import { useHistory} from 'react-router-dom'
// import { useSelector } from 'react-redux'

function Navbar(props) {
    const { setSearch } = props
    const history = useHistory()
    // const name = useSelector(state => state.name)

    function handleHome(event) {
        event.preventDefault()
        history.push('/')
    }
    function handleFavorites(event) {
        event.preventDefault()
        history.push(`/favorites`)
    }

    return (
        <nav className="navbar navbar-light bg-light mb-4 sticky-top">
            <a onClick={handleHome} href="#" className="navbar-brand">Premier League Teams </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a onClick={handleFavorites} class="nav-link" type="button">Favorites</a>
                </li>
            </ul>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="text" placeholder="Search..." aria-label="search" onChange={e => setSearch(e.target.value)}></input>
            </form>
        </nav> 
    )
}

export default Navbar
