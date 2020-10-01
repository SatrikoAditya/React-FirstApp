// import {useState, useEffect} from 'react'
// import {useDispatch} from 'react-redux'
// import {setLoading} from '../store/actions/'
// import {setError} from '../store/actions/'

// function useFetcher(path) {
//     const dispatch = useDispatch()

//     const [data, setData] = useState([])
//     // const [loading, setLoading] = useState(true)
//     // const [error, setError] = useState(null)
    
//     useEffect(() => {
//     fetch('http://api.football-data.org/v2' + path, {
//         headers: {
//         'X-Auth-Token': process.env.REACT_APP_API_TOKEN 
//         }
//     })
//     .then(res => res.json())
//     .then(data => {
//         setData(data)
//     })
//     .catch(err => {
//         dispatch(setError())
//         // setError(err)
//     })
//     .finally(() => {
//         dispatch(setLoading())
//         // setLoading(false)
//     })
//     }, [path])

//     return { data }
// }

// export default useFetcher