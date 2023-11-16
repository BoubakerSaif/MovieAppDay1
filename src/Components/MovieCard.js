import React from "react";
import { Card } from "react-bootstrap";
import Rating from "@mui/material/Rating";
const MovieCard = ({ movieInfo }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movieInfo.posterURL} />
        <Card.Body>
          <Card.Title> {movieInfo.title} </Card.Title>
          <Card.Text>{movieInfo.description}</Card.Text>
        </Card.Body>
        <Rating name="read-only" readOnly max={10} value={movieInfo.rating} />
      </Card>
      <br />
    </div>
  );
};

export default MovieCard;
