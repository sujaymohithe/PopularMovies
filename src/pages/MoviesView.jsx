import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import MovieList from "../components/MovieList/MovieList";
import APIService from "../services/MoviesAPIService";

const MoviesView = () => {
  const [popularMovies, setPopularMovies] = useState(undefined);
  const [totalPages, setTotalpages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");

  useEffect(() => {
    APIService.loadPopularMovies(currentPage, searchTerm).then((response) => {
      if (response) {
        setPopularMovies(response.results);
        setTotalpages(response.total_pages);
      }
    });
  },[]);

  const handleOnChangeSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    APIService.loadPopularMovies(1, searchTerm).then((response) => {
      if (response) {
        setPopularMovies(response.results);
        setTotalpages(response.total_pages);
      }
    });
  };

  const handleOnClickNextPage = () => {
    if (currentPage === totalPages) return;
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    APIService.loadPopularMovies(nextPage, searchTerm).then((response) => {
      if (response) {
        setPopularMovies(response.results);
        setTotalpages(response.total_pages);
      }
    });
  };

  const handleOnClickPreviousPage = () => {
    if (currentPage === 1) return;
    const previousPage = currentPage - 1;
    setCurrentPage(previousPage);
    APIService.loadPopularMovies(previousPage, searchTerm).then((response) => {
      if (response) {
        setPopularMovies(response.results);
        setTotalpages(response.total_pages);
      }
    });
  };

  const handleTitleClick = (movieId) => {
    setSelectedMovie(movieId);
  };

  const handleCloseModal = () => {
    setSelectedMovie("");
  };

  return (
    <div className="movies-container">
      <Container>
        <div className="search-container">
          <span>Search : </span>
          <input
            type="text"
            placeholder="Type to search"
            onChange={handleOnChangeSearch}
          />
        </div>
        <div className="page">
          <span className="page">Total pages : {totalPages}</span>
          <input
            type="button"
            value="Previous Page"
            onClick={handleOnClickPreviousPage}
          />
          <input
            type="button"
            value="Next Page"
            onClick={handleOnClickNextPage}
          />
        </div>
        <MovieList data={popularMovies} onclickTitle={handleTitleClick} />
        {selectedMovie && (
          <MovieDetails
            handleCloseModal={handleCloseModal}
            selectedMovie={selectedMovie}
          />
        )}
      </Container>
    </div>
  );
};

export default MoviesView;
