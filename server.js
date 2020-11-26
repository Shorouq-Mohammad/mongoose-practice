var bodyParser = require('body-parser')
var express = require('express')
var app = express()

var request = require('request')
var mongoose = require('mongoose')
var Book = require("./models/BookModel")
var Person = require("./models/PersonModel")

mongoose.connect("mongodb://localhost/mongoose-practice")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/*=====================================================
Start the server:
=======================================================*/

app.listen(3000, function() {
  console.log("Server up and running on port 3000")
})


/*=====================================================
Exercises - now that your databases are full
and your server is running do the following:
=======================================================*/

//Important note: Once you've run the above code once, COMMENT IT OUT
//If you keep re-running this whole file, you'll keep making a ton of requests to the Books API and eventually you will get blocked.
//DON'T GET BLOCKED

/*Books
----------------------*/
//1. Find books with fewer than 500 but more than 200 pages
// Book.find({pages: {$lt: 500, $gt: 200}}, function(err, books){
//   console.log(books)
// })

//2. Find books whose rating is less than 5, and sort by the author's name
// Book.find({rating: {$lt: 5}}).sort({author: -1}).exec(function(err, books){
  //   console.log(books);
  // })
  
//3. Find all the Fiction books, skip the first 2, and display only 3 of them
// Book.find({genres: {$in: ['Fiction']}}).skip(2).limit(3).exec(function(err, books){
//   console.log(books);
// })

/*People
----------------------*/
//1. Find all the people who are tall (>180) AND rich (>30000)
// Person.count({$and: [{height: {$gt: 180}},{salary: {$gt: 30000}}]}, function(err, people){
//   console.log(people);
// })

//2. Find all the people who are tall (>180) OR rich (>30000)
// Person.find({$or:[{height: {$gt: 180}},{salary: {$gt: 30000}}]}, function(err, people){
//   console.log(people);
// })

//3. Find all the people who have grey hair or eyes, and are skinny (<70)
// Person.find({$and:[{$or: [{eyes: "grey"},{hair: "grey"}]},{weight: {$lt: 70}}]}, function(err, people){
//   console.log(people);
// })

//4. Find people who have at least 1 kid with grey hair
// Person.find({$and: [{numKids: {$gte: 1}}, {"kids.hair":"grey"}]},function(err, people){
//   people.forEach(p => {
//     console.log(p);
//   })  
// })

//5. Find all the people who have at least one overweight kid, and are overweight themselves (>100)
Person.find({$and : [{weight: {$gt: 100}}, {"kids.weight":{$gt: 100}}] }, function(err, people){
  people.forEach(p => console.log(p))
})