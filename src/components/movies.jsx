import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";
import Pagination from "./pagination"

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
  };

  deleteMovie = (id) => {
    this.setState({ movies: this.state.movies.filter((m) => m._id !== id) });
  }

  likeClickHandler = (id) => {
    const movie = this.state.movies.find(m => m._id === id);
    console.log(movie);
    movie.liked = !movie.liked;
    this.setState({movies: this.state.movies.map(m => m)});
  }

  handlePageClick = pageNumber => {
    this.setState({currentPage: pageNumber});
  }

  render() {
    const { length: count } = this.state.movies;
    const {pageSize, currentPage} = this.state;

    if (count === 0) return <p>There are no movies in the databse</p>;
    return (
      <React.Fragment>
        <p>Showing {count} in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((m) => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={m.liked}
                    onClick={() => this.likeClickHandler(m._id)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.deleteMovie(m._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination pageSize={pageSize} itemsCount={count} currentPage={currentPage} onPageClick={this.handlePageClick}/>
      </React.Fragment>
    );
  }
}

export default Movies;
