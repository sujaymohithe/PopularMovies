import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import APIService from "../../services/MoviesAPIService";

const MovieDetails = (props) => {
  const { handleCloseModal, selectedMovie } = props;
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(undefined);

  useEffect(() => {
    APIService.loadMovieDetails(selectedMovie).then((response) => {
      if (response) {
        setSelectedMovieDetails(response);
      }
    });
  });

  return (
    <Modal show onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedMovieDetails && selectedMovieDetails.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedMovieDetails && (
          <>
            <div className="content">
              <span>Title:</span>
              <span>{selectedMovieDetails.title}</span>
            </div>
            <div className="content">
              <span>Status:</span>
              <span>{selectedMovieDetails.status}</span>
            </div>
            <div className="content">
              <span>Tag Line:</span>
              <span>{selectedMovieDetails.tagline}</span>
            </div>
            <div className="content">
              <span>Release Date:</span>
              <span>{selectedMovieDetails.release_date}</span>
            </div>
            <div className="content">
              <span>Average Voting:</span>
              <span>{selectedMovieDetails.vote_average}</span>
            </div>
            <div className="content">
              <span>Overview:</span>
              <span>{selectedMovieDetails.overview}</span>
            </div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default MovieDetails;
