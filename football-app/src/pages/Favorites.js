import React from 'react'
import Navbar from '../components/Navbar'
import FavoriteList from '../components/FavoriteList'
import { useSelector } from 'react-redux'

function Favorites() {
    const favorites = useSelector(state => state.favorites)
    return (
        <>
            <Navbar />
            <h3 className="mb-3">Favorite Team</h3>
            <div className="d-flex flex-row justify-content-center flex-wrap">
                {
                    favorites.map((favorite, idx) => {
                        return (
                            <FavoriteList favorite={favorite} key={idx} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Favorites