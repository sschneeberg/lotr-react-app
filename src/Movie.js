import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div className="movie">
                <h2>The Lord of The Rings: {this.props.title}</h2>
                <p>
                    {this.props.hours}h {this.props.minutes}min
                </p>
            </div>
        );
    }
}

export default Movie;
