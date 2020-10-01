import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useParams} from 'react-router-dom'
import DetailTeam from '../components/DetailTeam'
import {useSelector, useDispatch} from 'react-redux'
import { getDetail } from '../store/actions/'

function Details() {
    const { teamId } = useParams()
    const dispatch = useDispatch()
    const {detail, loading, error} = useSelector(state => state.detailReducer)

    useEffect(() => {
        dispatch(getDetail(teamId))
    }, [teamId, dispatch])

    if(loading) return <p>Loading...</p>
  
    if(error) return <p>error fetch</p>

    return (
        <>
            <Navbar />
            {
                detail && <DetailTeam detail={detail} />
            }
        </>
    )
}

export default Details


// import useFetcher from '../customHooks/useFetcher'
// const { data } = useFetcher(`/teams/${teamId}`)
// const loading = useSelector(state => state.loading)
// const error = useSelector(state => state.error)