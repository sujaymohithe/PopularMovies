import React from "react";
import { Table } from "react-bootstrap";

const MovieList = (props) => {
  const { data, onclickTitle } = props;

  const handleTitleClick = (movieId) => {
    onclickTitle(movieId);
  };

  return (
    <div className="movie-list">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Average Voting</th>
            <th>Vote Count</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((movie, index) => {
              return (
                <tr key={index}>
                  <td>
                    <span
                      className="title-link"
                      onClick={() => handleTitleClick(movie.id)}
                    >
                      {movie.title}
                    </span>
                  </td>
                  <td>{movie.release_date}</td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.vote_count}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default MovieList;
