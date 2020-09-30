import React from 'react'
import Navbar from '../components/Navbar'
import { useParams} from 'react-router-dom'
import useFetcher from '../customHooks/useFetcher'
import DetailTeam from '../components/DetailTeam'

function Details() {
    const { teamId } = useParams()
    const { data, loading, error } = useFetcher(`/teams/${teamId}`)

    if(loading) return <p>Loading...</p>
  
    if(error) return <p>error fetch</p>

    return (
        <>
            <Navbar />
            <DetailTeam detail={data} />
        </>
    )
}

export default Details