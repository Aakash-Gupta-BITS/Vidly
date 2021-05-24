import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import GroupList from "./common/groupList";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGroupId: undefined,
  };

  componentDidMount(props) {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  deleteMovie = (id) => {
    this.setState({ movies: this.state.movies.filter((m) => m._id !== id) });
  };

  likeClickHandler = (id) => {
    const movie = this.state.movies.find((m) => m._id === id);
    console.log(movie);
    movie.liked = !movie.liked;
    this.setState({ movies: this.state.movies.map((m) => m) });
  };

  handlePageClick = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleGroupClick = (id) => {};

  render() {
    const { length: count } = this.state.movies;
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      genres: allGenres,
      currentGroupId,
    } = this.state;

    let currentMovies = allMovies.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    if (count === 0) return <p>There are no movies in the databse</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Showing {allMovies.length} in the database.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <GroupList
              groupList={allGenres}
              groupID={currentGroupId}
              onGroupClick={this.handleGroupClick}
            />
          </div>
          <div className="col-sm">
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
                {currentMovies.map((m) => (
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
            <Pagination
              pageSize={pageSize}
              itemsCount={count}
              currentPage={currentPage}
              onPageClick={this.handlePageClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
