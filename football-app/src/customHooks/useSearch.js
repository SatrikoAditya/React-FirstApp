// import {useState, useEffect} from 'react'
// import { useSelector } from 'react-redux'

// function useSearch() {
//     const [search, setSearch] = useState('')
//     const [filteredTeams, setFilteredTeams] = useState([])
    
//     const data = useSelector(state => state.data)

//     useEffect(() => {
//       console.log(data)
//       if(data) {
//         setFilteredTeams( 
//           data.filter(team => {
//             return team.name.toLowerCase().includes(search.toLowerCase())
//           })
//         )
//       }
//     }, [search, data])

//     return { filteredTeams, setSearch }
// }

// export default useSearch