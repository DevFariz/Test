"use strict";

const numberOfFilms = +prompt("How many films did you watch?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("What film did you watch last?", ""),
      b = prompt("How it was?", ""),
      c = prompt("What film did you watch last?", ""),
      d = prompt("How it was?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);