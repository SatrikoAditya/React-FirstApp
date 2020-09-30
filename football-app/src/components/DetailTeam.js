import React from 'react'
import detailStyle from '../style/detailStyle'

function DetailTeam(props) {
    const {containerDetail, containerInfo, teamName, containerPlayer} = detailStyle
    const {crestUrl, name, address, phone, website, email, clubColors, venue, squad} = props.detail
    return (
        <div className="container-detail" style={containerDetail}>
            <div className="container-info" style={containerInfo}>
                <center>
                    <img src={crestUrl} width="50%" alt="logo"></img>
                    <h3 className="team-name" style={teamName}> {name} </h3>
                    {/* <p>Venue :</p> */}
                    <p> {venue} </p>
                    {/* <p>Club Colors :</p> */}
                    <p> {clubColors} </p>
                    {/* <p>Address :</p> */}
                    <p> {address} </p>
                    {/* <p>Phone :</p> */}
                    <p> {phone} </p>
                    {/* <p>Website :</p> */}
                    <p> {website} </p>
                    {/* <p>Email :</p> */}
                    <p> {email} </p>
                </center>
            </div>
            <div className="container-player" style={containerPlayer}>
                <center>
                    <h3>Player List</h3><br></br>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Position</th>
                                <th scope="col">Nationally</th>
                                <th scope="col">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                squad.map(player => {
                                    return (
                                        <tr key={player.id}>
                                            <th scope="row"> {player.name} </th>
                                            <td> {player.position} </td>
                                            <td> {player.nationality} </td>
                                            <td> {player.role} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </center>
            </div>
        </div>
    )
}

export default DetailTeam