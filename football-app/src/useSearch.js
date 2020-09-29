import {useState, useEffect} from 'react'
import useFetcher from './useFetcher'

function useSearch() {
    const { data } = useFetcher('/competitions/2021/teams')
    const [search, setSearch] = useState('')
    const [filteredTeams, setFilteredTeams] = useState([])

    useEffect(() => {
        setFilteredTeams(
          data.filter(team => {
            return team.name.toLowerCase().includes(search.toLowerCase())
          })
        )
    }, [search, data])

    return { filteredTeams, setSearch }
}

export default useSearch