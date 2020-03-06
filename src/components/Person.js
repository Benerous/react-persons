import React, { Component } from 'react';

export default class Person extends Component {
    render () {
        const { name, job, img } = this.props;
        const url = "https://randomuser.me/api/portraits/thumb/men/" + img + ".jpg";
        return (
            <div className="col-3 col-md-6 bg-light text-dark rounded-pill text-center p-4 my-4" >
                <img className="img-thumbnail rounded-circle" src={url} alt={name} />
                <h4>{name}</h4>
                <h5>{job}</h5>
            </div>
        )
    }
};