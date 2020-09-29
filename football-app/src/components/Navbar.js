import React from 'react'

function Navbar(props) {
    const { setSearch } = props
    return (
        <nav className="navbar navbar-light bg-light mb-4 sticky-top">
            <p className="navbar-brand">Premier League Teams</p>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="text" placeholder="Search..." aria-label="search" onChange={e => setSearch(e.target.value)}></input>
            </form>
        </nav>
    )
}

export default Navbar