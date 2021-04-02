
var Airtable = require("airtable"); 
console.log(Airtable);

var base = new Airtable({ apiKey: "keyNTXrO3UGtDrQ1y" }).base(
  "appgntgDREfEa8WBc"
);

// Get your table from the base, select ALL the records, and specify the callback functions that will receive each page of data
base("movies").select({}).eachPage(gotPageOfMovies, gotAllMovies);

// an empty array to hold our people data
const movies = [];

// callback function that receives each page of data (considered here as records) and adds them to our list of people
function gotPageOfMovies(records, fetchNextPage) {
  console.log("gotPageOfMovies()");
  // This takes the list of records and add them to the people array
  movies.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when ALL pages are loaded
// You don't need to edit this function.
function gotAllMovies(err) {
  console.log("gotAllMovies()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading people");
    console.error(err);
    return;
  }

  consoleLogMovies();
  showMovies();
}

function consoleLogMovies() {
  console.log("consoleLogMovies()");
  movies.forEach((movie) => {
    console.log("Movies:", movie);
  });
}

function showMovies() {
  console.log("showMovies()");
  movies.forEach((movie)=> {

    //var movieName = document.createElement("h1");
    //movieName.innerText = movie.fields.Name;
    //document.body.append(movieName);

    var movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");
    document.querySelector(".coverwrap").append(movieContainer);

      var movieImage = document.createElement("img");
      movieImage.src = movie.fields.images[0].url;
      document.querySelector(".coverwrap").append(movieImage);

      
  });
}
