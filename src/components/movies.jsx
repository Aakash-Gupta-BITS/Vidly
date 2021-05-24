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
    currentGroup: undefined,
  };

  componentDidMount(props) {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    const currentGroup = genres[0];
    this.setState({ movies: getMovies(), genres, currentGroup });
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

  handleGroupClick = (group) => {
    this.setState({ currentGroup: group, currentPage: 1 });
  };

  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      genres: allGenres,
      currentGroup,
    } = this.state;

    //   console.log(currentGroupId);
    const groupMovies = allMovies.filter((m) =>
      !currentGroup || !currentGroup._id ? m : m.genre._id === currentGroup._id
    );

    const { length: count } = groupMovies;
    let currentMovies = groupMovies.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    if (count === 0) return <p>There are no movies in the databse</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Showing {groupMovies.length} in the database.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <GroupList
              groupList={allGenres}
              group={currentGroup}
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
