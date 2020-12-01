function solve(input) {
    let numberMovies = Number(input[0]);
    let highestRating = Number.NEGATIVE_INFINITY;
    let highestRatingMovie = "";
    let avgRating = 0;
    let lowestRating = Number.POSITIVE_INFINITY;
    let lowestRatingMovie = "";

    for (let i = 1; i < input.length; i++) {
        let movieRating = 0;
        let movie = input[i];
        i++;
        movieRating = Number(input[i]);
        if (movieRating > highestRating) {
            highestRating = movieRating;
            highestRatingMovie = movie;
        } else if (movieRating < lowestRating) {
            lowestRating = movieRating;
            lowestRatingMovie = movie;
        }
        avgRating += movieRating;
    }

    console.log(`${highestRatingMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestRatingMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${(avgRating / numberMovies).toFixed(1)}`);
}

solve(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"])
