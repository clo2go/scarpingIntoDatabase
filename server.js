//dependencies
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var mongojs = require('mongojs');
var PORT = process.env.PORT || 3000;

// db variables
var databaseURL = 'scraper';
var collections = ['scrapedData'];

//intialize express
var app = express();

//connect mongo to db variable
var db =mongojs(databaseURL, collections);
db.on('error', function(err) {
	console.log('Database Error: ', err);
});

app.get("/all", function(error, found) {

})





app.listen(PORT, function() {
	console.log('app creepin on the 3000');
});