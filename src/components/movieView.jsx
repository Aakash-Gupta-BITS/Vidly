import React from "react";

import Like from "./common/like";

const MovieView = (props) => {
  const { movies, onLikeClick, onDeleteClick } = props;

  return (
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
        {movies.map((m) => (
          <tr key={m._id}>
            <td>{m.title}</td>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <Like liked={m.liked} onClick={() => onLikeClick(m._id)} />
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDeleteClick(m._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieView;
