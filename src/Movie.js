import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <div className="movie">
        <h2>The Lord of The Rings: {this.props.movie.title}</h2>
        <p>
          {this.props.movie.hours}h {this.props.movie.minutes}min
        </p>
      </div>
    );
  }
}

export default Movie;
