/*
queries Google for requested movie titles
returns all the IMDB entries - only title, link and snippet
console.logs what is returned
*/

'use strict'

function getIMDBResult(film) {
	const request = require('request');

	let apiKey = 'AIzaSyCDkHtvDqHEQXR6JOiuBMG1NNegzZbTcSw';
	let seID = '007071624353598172259:epm8obewid4';
	let apiURL = 'https://www.googleapis.com/customsearch/v1?key=' + apiKey + '&cx=' + seID + '&q=' + film + 'imdb';

	request(apiURL, function (error, response, body) {
		console.log('error: ', error);
		console.log('statusCode: ', response && response.statusCode);

		// grabs the results from the items array
		let parsedResult = JSON.parse(body).items;
		// grab the title, link and snippet
		//let movie = firstParsedResult.title + ' ' + firstParsedResult.link + ' ' + firstParsedResult.snippet;
		console.log(parsedResult);
	});

	return;
};

module.exports = getIMDBResult;