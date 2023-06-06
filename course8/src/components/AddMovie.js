import React, { useRef, useState } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    if (
      title.trim().length === 0 ||
      openingText.trim().length === 0 ||
      releaseDate.trim().length === 0
    ) {
      alert("Validation Error");
    }

    const movie = {
      title,
      openingText,
      releaseDate,
    };

    props.onAddMovie(movie);
    setTitle("");
    setOpeningText("");
    setReleaseDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          rows="5"
          id="opening-text"
          value={openingText}
          onChange={(e) => setOpeningText(e.target.value)}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input
          type="text"
          id="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
