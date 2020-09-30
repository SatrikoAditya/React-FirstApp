import React from 'react'
// import { useHistory} from 'react-router-dom'

function Navbar(props) {
    const { setSearch } = props
    // const history = useHistory()

    // function handleClick() {

    // }
    return (
        <nav className="navbar navbar-light bg-light mb-4 sticky-top">
            <a className="navbar-brand">Premier League Teams</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="text" placeholder="Search..." aria-label="search" onChange={e => setSearch(e.target.value)}></input>
            </form>
        </nav>
    )
}

export default Navbar