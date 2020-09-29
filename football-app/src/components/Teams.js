import React from 'react'

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
    const {crestUrl, name } = props.team
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
                        <button className="btn btn-primary">Detail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teams