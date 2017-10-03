/*
DONE--The movie file will contain a Module.
DONE--This module should export a function named get(movieTitle).
DONE--get(movieTitle) should make a request to the Google Custom Search API with the movieTitle as an argument.
DONE--Hint: what do you need to do to use the request library?
DONE--You should parse the response that you receive and console.log() something from it. 
	(Maybe each search item's snippet field or just the first one? 
	The goal is to console.log() something received from the API for each movie.)
DONE--You should test this file by running it with node to verify that it works!
*/

'use strict'

function getFirstResult(film,imdb) {
	const request = require('request');

	//Require apiKey
	const setKey = require('./env');
	let apiKey = setKey();

	//Require seID
	const setID = require('./env2');
	let seID = setID();  
	
	// adds extra search term for imdb if true, no search term if false
	if (imdb === true) { imdb = 'imdb'; } else { imdb = ''; };
	let apiURL = 'https://www.googleapis.com/customsearch/v1?key=' + apiKey + '&cx=' + seID + '&q=' + film + ' ' + imdb;

	request(apiURL, function (error, response, body) {
		//console.log('error: ', error);
		//console.log('statusCode: ', response && response.statusCode);
		//console.log(apiURL);

		let top3ResultsArray = [];

		// grabs the top 3 results from the items array
		for (let i = 0; i < 3; i++) {
			let parsedResults = JSON.parse(body).items[i];
			let parsedTitle = parsedResults.title;
			let parsedLink = parsedResults.link;
			let parsedSnippet = parsedResults.snippet;
			top3ResultsArray.push(parsedTitle + ' ' + parsedLink + ' ' + parsedSnippet);
		};
		
		// grabs the first result from the items array
		//let firstParsedResult = JSON.parse(body).items[0];
		// grab the title, link and snippet
		//let movie = firstParsedResult.title + ' ' + firstParsedResult.link + ' ' + firstParsedResult.snippet;
		console.log(top3ResultsArray);
	});

	return;
};

module.exports = getFirstResult;
