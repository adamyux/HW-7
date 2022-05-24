var FoodInfo = function(fName, fcalories) {
    this.food = fName;
    this.calories = fcalories;
};

FoodInfoArray = [];

let newFoodInfo1 = new FoodInfo("Egg", 78);
FoodInfoArray.push(newFoodInfo1);
let newFoodInfo2 = new FoodInfo("Milk", 103);
FoodInfoArray.push(newFoodInfo2);

function formSubmitEvent() {
    var subName = document.getElementById("foodname").value;
    const subCal = Number(document.getElementById("noCal").value);
    FoodInfoArray.push(new FoodInfo(subName, subCal))
    console.log(FoodInfoArray);
    let sum = 0;
    for (i = 0; i < FoodInfoArray.length; i++) {
      sum += FoodInfoArray[i].calories;
    }
    document.getElementById("totalcal").value = sum; 
  
    document.getElementById("foodname").value = "";
    document.getElementById("noCal").value = "";
}

let movies = [];

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("add_movie").addEventListener("click", newMovie);
});

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("show_movie").addEventListener("click", displayMovies);
});

let newMovie = function() {
  let movie = new Movie(
    document.getElementById("moviename").value,
    document.getElementById("ratings").value
  );
  if (!movie.isValid()) {
    alert("Invalid input. Please input again. ");
  } else {
    movies.push(movie);

    document.getElementById("moviename").value = "";
    document.getElementById("ratings").value = "";
  }
};

let displayMovies = function() {
  let displayString = "";

  for (let i in movies) {
    displayString += movies[i].toString() + "\n";
  }  
  document.getElementById("movie_list").value = displayString;
};

let Movie = function(aMoviename, aRating) {
  this.moviename = aMoviename;
  this.ratings = aRating;
};

Movie.prototype.isValid = function() {
  if (this.moviename == "" || isNaN(this.ratings)) {
    return false;
  } else if (this.ratings < 1 || this.ratings > 5) {
    return false;
  } else {
    return true;
  }
};

Movie.prototype.toString = function() {
  return "- " + this.moviename + " with a rating of " + this.ratings + ". ";
};
