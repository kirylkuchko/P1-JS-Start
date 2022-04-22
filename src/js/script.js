"use strict";

/* const result = confirm("Are you here?");
console.log(result);
let text = document.getElementById('text');
console.log(text);
text.textContent = result;
console.log(typeof(null));

const category = 'toys';

console.log(`https://url.com${category}/1`);

const userName = 'Kiryl';

alert(`Hello ${userName}`);
 */

let numberOfFilms = +prompt("How many films you already watch?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const movieName = prompt("Which was the last film?", "");
const movieRating = prompt("How you how would you rate this film?", "");

personalMovieDB.movies[movieName] = movieRating;
console.log(personalMovieDB);
