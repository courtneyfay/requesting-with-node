/*  
DELIVERABLES
DONE 		app.js should require your movie module
DONE		app.js should contain an array of movie titles
DONE 		for each movie title, app.js should call the get() function provided by the movie module
DONE 		the get() function should send a request to the Google Search API using the passed-in data (each movie title)
DONE 		the get() function's request should receive the response and console.log() at least one property from 
				at least one search result in the items array.

EXTRAS
DONE 		console.log() only information from search results that are from an imdb.com URL.
Brainstorm ways that automated Google Searches could provide useful data for an app, or maybe with your first project.
		**https://developers.google.com/custom-search/docs/snippets
Read the Google Custom Search Documentation link provided above to learn more about the API's capabilities.
		**https://developers.google.com/custom-search/json-api/v1/overview
Modify your get() function to send multiple requests to gather data from consecutive pages of results
*/

/* 
--The app should require your movie module.		YAS
--You should define your threeFavoriteMovies as an array.		YAS
--You should then use the Array.forEach() function to loop through them.		YAS
--As you loop through them, you should call on your movie module's get(movieTitle)		YAS
*/
'use strict'

const getMovie = require('./movie');
let threeFavoriteMovies = ['Bridesmaids','10 Things I Hate About You','The Grand Budapest Hotel'];
let useIMDB = false;

threeFavoriteMovies.forEach(function(film){
	getMovie(film,useIMDB);
});				