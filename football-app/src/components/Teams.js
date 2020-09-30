import React from 'react'
import { useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../store/actions/'

// INI PAKAI CLASS COMPONENT
// class Teams extends React.Component {
//     render() {
//         const {crestUrl, name } = this.props.team
//         return (
//             <div className="card border-0 shadow mb-3 col-2 ml-2">
//                 <div className="card-body">
//                     <div className="row align-items-center">
//                         <div className="col text-center">
//                             <img
//                                 height="80px"
//                                 src={crestUrl}
//                                 alt="logo-team"
//                             />
//                             <h6 className="font-weight-bold my-3">{name}</h6>
//                             <button className="btn btn-primary">Detail</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }



// INI PAKAI HOOKS

function Teams(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const {crestUrl, name, id } = props.team

    function handleCLickButton(teamId) {
        history.push(`/details/${teamId}`)
    }

    function handleAddFavorites(image, name) {
        dispatch(addFavorite(image, name))
    }

    return (
        <div className="card border-0 shadow mb-3 col-2 ml-2">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col text-center">
                        <img
                            height="80px"
                            src={crestUrl}
                            alt="logo-team"
                        />
                        <h6 className="font-weight-bold my-3">{name}</h6>
                        <button onClick={() => handleCLickButton(id)} className="btn btn-primary mb-2 mt-2">See Detail</button>
                        <button onClick={() => handleAddFavorites(crestUrl, name)} className="btn btn-warning">Add To Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teams