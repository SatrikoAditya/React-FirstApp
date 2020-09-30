import React from 'react'

function FavoriteList(props) {
    const {image, name } = props.favorite
    return (
        <div className="card border-0 shadow mb-3 col-2 ml-2">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col text-center">
                        <img
                            height="80px"
                            src={image}
                            alt="logo-team"
                        />
                        <h6 className="font-weight-bold my-3">{name}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default FavoriteList