"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("How many films did you watch?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many films did you watch?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let index = 0; index < 2; index++) {
        const a = prompt("What film did you watch last?", ""),
              b = prompt("How it was?", "");
    
        if(a != null && b != null && a != "" && b != "" && a.length < 50){
            personalMovieDB.movies[a] = b;
        } else{
            index--;
        }
    }
}

// rememberMyFilms();


function showMyDB(obj){
    if(!obj.privat){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB);

function writeYourGenres(obj){
    for(let i = 1; i <= 3; i++){
        const genre = prompt("Enter a genre: ");
        obj.genres[i - 1] = genre;
    }
}

console.log(writeYourGenres(personalMovieDB));