import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import GroupList from "./common/groupList";
import MovieView from "./movieView";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGroup: null,
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

    const { length: count } = allMovies;
    let currentMovies = groupMovies.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    if (count === 0) return <p>There are no movies in the databse</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <GroupList
              groupList={allGenres}
              group={currentGroup}
              onGroupClick={this.handleGroupClick}
            />
          </div>
          <div className="col-sm">
            <MovieView
              movies={currentMovies}
              onLikeClick={this.likeClickHandler}
              onDeleteClick={this.deleteMovie}
            />
            <Pagination
              pageSize={pageSize}
              itemsCount={groupMovies.length}
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
