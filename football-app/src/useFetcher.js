import {useState, useEffect} from 'react'

function useFetcher(path) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
    fetch('http://api.football-data.org/v2' + path, {
        headers: {
        'X-Auth-Token': process.env.REACT_APP_API_TOKEN 
        }
    })
    .then(res => res.json())
    .then(data => {
        setData(data.teams)
    })
    .catch(err => {
        setError(err)
    })
    .finally(() => {
        setLoading(false)
    })
    }, [path])

    return { data, loading, error }
}

export default useFetcher