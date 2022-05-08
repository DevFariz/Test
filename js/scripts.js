"use strict";

const numberOfFilms = +prompt("How many films did you watch?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let index = 0; index < 2; index++) {
    const a = prompt("What film did you watch last?", ""),
          b = prompt("How it was?", "");

    if(a != null && b != null && a != "" && b != "" && a.length < 50){
        personalMovieDB.movies[a] = b;
    } else{
        i--;
    }
    
}

console.log(personalMovieDB);

